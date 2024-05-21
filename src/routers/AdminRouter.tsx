import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Landing/Dashboard/Dashboard";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default AdminRouter;
