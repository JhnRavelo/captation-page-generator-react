import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Landing/Dashboard/Dashboard";
import Campagne from "../pages/Landing/Campagne/Campagne";
import SingleCampagne from "../pages/Landing/SingleCampagne/SingleCampagne";
import QRCode from "../pages/Landing/QRCode/QRCode";
import PageCampagne from "../pages/Landing/PageCampagne/PageCampagne";
import Log from "../pages/Landing/Log/Log";
import Notif from "../pages/Landing/Notif/Notif";
import User from "../pages/Landing/User/User";
import Entreprise from "../pages/Landing/Entreprise/Entreprise";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/campagne" element={<Campagne />} />
      <Route path="/campagne/:id/*" element={<SingleCampagne />} />
      <Route path="/qr-code" element={<QRCode />} />
      <Route path="/page-campagne" element={<PageCampagne />} />
      <Route path="/log" element={<Log />} />
      <Route path="/notif" element={<Notif />} />
      <Route path="/user" element={<User />} />
      <Route path="/company" element={<Entreprise />} />
    </Routes>
  );
};

export default AdminRouter;
