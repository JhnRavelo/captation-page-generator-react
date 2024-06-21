import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Landing from "../pages/Landing/Landing";
import EditProfile from "../pages/EditProfile/EditProfile";
import PagePreview from "../pages/PagePreview/PagePreview";
import Thanks from "../pages/Thanks/Thanks";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/marketing/*" element={<Landing />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/campagne/:idCampagne/*" element={<PagePreview />} />
      <Route path="/thank-you" element={<Thanks />} />
    </Routes>
  );
};

export default AppRouter;
