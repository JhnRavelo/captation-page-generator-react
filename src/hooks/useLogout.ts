import { toast } from "react-toastify";
import useAuth from "./useAuth";
import useAxiosPrivate from "./useAxiosPrivate";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const authContext = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  return async () => {
    try {
      await axiosPrivate.get("/auth/logout");
    } catch (error) {
      console.log(error);
    }
    document.cookie = `link_generator_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    toast.info("Déconnexion");
    authContext?.setAuth(null);
    navigate("/");
  };
};

export default useLogout;
