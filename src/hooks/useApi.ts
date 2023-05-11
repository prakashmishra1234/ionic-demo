import axios from "axios";
import { useState, useEffect } from "react";

const useApi = (url: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data ?? []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return data;
};

export default useApi;
