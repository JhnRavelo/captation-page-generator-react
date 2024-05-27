import { Route, Routes } from "react-router-dom";
import CampagneEdit from "../pages/Landing/SingleCampagne/Edit/CampagneEdit";
import CampagneChart from "../pages/Landing/SingleCampagne/Chart/CampagneChart";

const CampagneRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<CampagneEdit />} />
      <Route path="/chart" element={<CampagneChart />} />
    </Routes>
  );
};

export default CampagneRouter;
