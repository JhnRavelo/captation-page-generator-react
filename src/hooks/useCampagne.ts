import { useContext } from "react";
import CampagneContext from "../context/CampagneProvider";

const useCampagne = () => {
  return useContext(CampagneContext);
};

export default useCampagne;
