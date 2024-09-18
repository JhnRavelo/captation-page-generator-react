import { AxiosInstance } from "axios";

const useGetImagePrivate = () => {
  return async (axios: AxiosInstance, id: string | number, url: string) => {
    try {
      const res = await axios.get(url + id, { responseType: "blob" });
      const urlImg = window.URL.createObjectURL(new Blob([res.data]));

      return urlImg;
    } catch (error) {
      return "";
    }
  };
};

export default useGetImagePrivate;
