import { Route, Routes } from "react-router-dom";
import CampagneEdit from "../pages/Landing/SingleCampagne/Edit/CampagneEdit";
import CampagneChart from "../pages/Landing/SingleCampagne/Chart/CampagneChart";
import CampagneMail from "../pages/Landing/SingleCampagne/Mail/CampagneMail";

const CampagneRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<CampagneEdit />} />
      <Route path="/chart" element={<CampagneChart />} />
      <Route path="/mail" element={<CampagneMail />} />
    </Routes>
  );
};

export default CampagneRouter;
