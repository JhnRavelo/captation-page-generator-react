import React from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import { toast } from "react-toastify";
import { TypeSetAuth } from "../context/AuthProvider";
import { TypeSetBoolean } from "../context/CampagneProvider";
import { isSetBool } from "../utils/verificationType";

export type TypeSetAuthAndBool = TypeSetAuth | TypeSetBoolean;

const useSendFile = () => {
  const axiosPrivate = useAxiosPrivate();

  return async (
    e: React.ChangeEvent<HTMLInputElement>,
    url: string,
    setState: TypeSetAuthAndBool
  ) => {
    if (e.target.files && e.target.files?.length > 0) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      try {
        const res = await axiosPrivate.put(url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (res.data.success) {
          if (res?.data.user) {
            setState(res?.data.user);
          } else if (isSetBool(setState)) {
            setState((prev: boolean) => !prev);
          }
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        toast.error("Erreur serveur");
        console.log(error);
      }
    }
  };
};

export default useSendFile;
