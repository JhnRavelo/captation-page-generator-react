import { Route, Routes } from "react-router-dom";
import CampagneEdit from "../pages/Landing/SingleCampagne/Edit/CampagneEdit";
import CampagneChart from "../pages/Landing/SingleCampagne/Chart/CampagneChart";
import CampagneMail from "../pages/Landing/SingleCampagne/Mail/CampagneMail";
import CampagneUser from "../pages/Landing/SingleCampagne/User/CampagneUser";

const CampagneRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<CampagneEdit />} />
      <Route path="/chart" element={<CampagneChart />} />
      <Route path="/mail/:idMail" element={<CampagneMail />} />
      <Route path="/user" element={<CampagneUser />} />
    </Routes>
  );
};

export default CampagneRouter;
