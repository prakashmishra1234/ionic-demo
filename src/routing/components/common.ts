export const isLoggedIn = (): boolean => {
  const localStorageData = JSON.parse(localStorage.getItem("IONIC_DEMO")!);

  if (localStorageData) {
    return true;
  }
  return false;
};
