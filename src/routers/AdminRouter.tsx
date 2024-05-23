import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Landing/Dashboard/Dashboard";
import Campagne from "../pages/Landing/Campagne/Campagne";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/campagne" element={<Campagne />} />
    </Routes>
  );
};

export default AdminRouter;
