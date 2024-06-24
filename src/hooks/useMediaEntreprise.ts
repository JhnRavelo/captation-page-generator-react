import { useContext } from "react";
import MediaEntrepriseContext from "../context/MediaEntrepriseProvider";

const useMediaEntreprise = () => {
  return useContext(MediaEntrepriseContext);
};

export default useMediaEntreprise;
