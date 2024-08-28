import useAxiosPrivate from "./useAxiosPrivate";
import { toast } from "react-toastify";

const useDownload = () => {
  const axiosPrivate = useAxiosPrivate();

  return async (fileName: string, urlPost: string, img?: string) => {
    try {
      let res;
      if (img) {
        res = await axiosPrivate.post(
          urlPost,
          { img },
          {
            responseType: "blob",
          }
        );
      } else res = await axiosPrivate.get(urlPost, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      toast.error("Erreur serveur");
      console.log(error);
    }
  };
};

export default useDownload;
