import { axiosDefault } from "../api/axios";
import useAuth from "./useAuth";

const useRefresh = () => {
  const authContext = useAuth();
  const refresh = async () => {
    try {
      const response = await axiosDefault.get("/refresh");
      authContext?.setAuth(response.data.user);
      return response.data.user;
    } catch (error) {
      console.log(error);
    }
  };
  return refresh;
};

export default useRefresh;
