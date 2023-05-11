import { useState, useEffect } from "react";
import { getPlatforms, isPlatform } from "@ionic/react";

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";
import { Capacitor } from "@capacitor/core";
import { AndroidPermissions } from "@awesome-cordova-plugins/android-permissions";

const PHOTO_STORAGE = "photos";
export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  useEffect(() => {
    const loadSaved = async () => {
      const { value } = await Preferences.get({ key: PHOTO_STORAGE });

      const photosInPreferences = (
        value ? JSON.parse(value) : []
      ) as UserPhoto[];

      if (!isPlatform("hybrid")) {
        for (let photo of photosInPreferences) {
          const file = await Filesystem.readFile({
            path: photo.filepath,
            directory: Directory.Documents,
          });

          photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
        }
      }
      setPhotos(photosInPreferences);
    };
    loadSaved();
  }, []);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = new Date().getTime() + ".jpeg";
    let permission = null;
    if (isPlatform("android")) {
      permission = await storagePermission();
      await savePicture(photo, fileName);
    } else {
      let savedFileImage = await savePicture(photo, fileName);
      const newPhotos = [savedFileImage!, ...photos];
      setPhotos(newPhotos);
      Preferences.set({
        key: PHOTO_STORAGE,
        value: JSON.stringify(newPhotos),
      });
    }
  };

  const storagePermission = async () => {
    let permission = {
      hasPermission: false,
    };
    if (isPlatform("android")) {
      const read = await AndroidPermissions.checkPermission(
        AndroidPermissions.PERMISSION.READ_EXTERNAL_STORAGE
      );
      const write = await AndroidPermissions.checkPermission(
        AndroidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
      );

      if (read && write) {
        permission.hasPermission = true;
      }

      if (!permission.hasPermission) {
        permission = await AndroidPermissions.requestPermissions([
          AndroidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
          AndroidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
        ]);
      }
      return permission;
    }
    return permission;
  };

  const savePicture = async (
    photo: Photo,
    fileName: string
  ): Promise<UserPhoto> => {
    let base64Data: string;
    if (isPlatform("hybrid")) {
      const file = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = file.data;
    } else {
      base64Data = await base64FromPath(photo.webPath!);
    }
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Documents,
      recursive: true,
    });

    if (isPlatform("hybrid")) {
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
  };

  const deletePhoto = async (photo: UserPhoto) => {
    const newPhotos = photos.filter((p) => p.filepath !== photo.filepath);
    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
    const filename = photo.filepath.substr(photo.filepath.lastIndexOf("/") + 1);
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Documents,
    });
    setPhotos(newPhotos);
  };

  return {
    photos,
    takePhoto,
    deletePhoto,
  };
}

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export async function base64FromPath(path: string): Promise<string> {
  const response = await fetch(path);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject("method did not return a string");
      }
    };
    reader.readAsDataURL(blob);
  });
}
