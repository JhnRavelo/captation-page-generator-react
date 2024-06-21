import useAuth from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivatesRoutes = () => {
  const authContext = useAuth();
  const location = useLocation();

  return authContext?.auth?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivatesRoutes;
