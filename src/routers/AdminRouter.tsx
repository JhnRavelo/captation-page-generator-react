import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Landing/Dashboard/Dashboard";
import Campagne from "../pages/Landing/Campagne/Campagne";
import SingleCampagne from "../pages/Landing/SingleCampagne/SingleCampagne";
import QRCode from "../pages/Landing/QRCode/QRCode";
import PageCampagne from "../pages/Landing/PageCampagne/PageCampagne";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/campagne" element={<Campagne />} />
      <Route path="/campagne/:id/*" element={<SingleCampagne />} />
      <Route path="/qr-code" element={<QRCode />} />
      <Route path="/page-campagne" element={<PageCampagne />} />
    </Routes>
  );
};

export default AdminRouter;
