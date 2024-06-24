import { axiosDefault } from "../api/axios";
import { useEffect } from "react";
import useRefresh from "./useRefresh";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
  const refresh = useRefresh();
  const authContext = useAuth();
  useEffect(() => {
    const requestIntercept = axiosDefault.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers[
            "Authorization"
          ] = `Bearer ${authContext?.auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosDefault.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();

          prevRequest.headers[
            "Authorization"
          ] = `Bearer ${newAccessToken?.accessToken}`;
          return axiosDefault(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosDefault.interceptors.request.eject(requestIntercept);
      axiosDefault.interceptors.response.eject(responseIntercept);
    };
  }, [authContext?.auth, refresh]);

  return axiosDefault;
};

export default useAxiosPrivate;
