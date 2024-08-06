import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Landing from "../pages/Landing/Landing";
import EditProfile from "../pages/EditProfile/EditProfile";
import PagePreview from "../pages/PagePreview/PagePreview";
import Thanks from "../pages/Thanks/Thanks";
import PrivatesRoutes from "../components/Private/PrivatesRoutes";
import PersistantLogin from "../components/Private/PersistantLogin";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PersistantLogin />}>
        <Route element={<PrivatesRoutes />}>
          <Route path="/marketing/*" element={<Landing />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
      </Route>
      <Route path="/forget" element={<ForgetPassword />} />
      <Route path="/campagne/:idCampagne/:media" element={<PagePreview />} />
      <Route path="/thank-you" element={<Thanks />} />
    </Routes>
  );
};

export default AppRouter;
