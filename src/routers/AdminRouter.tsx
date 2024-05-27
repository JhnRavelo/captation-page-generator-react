import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Landing/Dashboard/Dashboard";
import Campagne from "../pages/Landing/Campagne/Campagne";
import SingleCampagne from "../pages/Landing/SingleCampagne/SingleCampagne";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/campagne" element={<Campagne />} />
      <Route path="/campagne/:id/*" element={<SingleCampagne />} />
    </Routes>
  );
};

export default AdminRouter;
