/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useCampagne from "./useCampagne";
import useFilterDatas from "./useFilterDatas";
import { Card } from "../components/Card/Card";
import useMediaEntreprise from "./useMediaEntreprise";

const useCurrentCampagne = () => {
  const campagneContext = useCampagne();
  const campagnes = useFilterDatas(campagneContext?.campagnes);
  const [currentCampagnes, setCurrentCampagnes] = useState<Card[]>([]);
  const [campagneCheckbox, setCampagneCheckbox] = useState<string[]>([]);
  const entrepriseContext = useMediaEntreprise();

  useEffect(() => {
    if (campagnes && campagnes.length > 0) {
      const listCampagnes = campagnes
        .map((campagne) => {
          const currentDate = new Date().getTime();
          const campagneDate = new Date(
            campagne.dateFin + " 23:59:59"
          ).getTime();

          if (
            currentDate < campagneDate &&
            campagne.entreprise === entrepriseContext?.entreprise.company
          ) {
            return campagne;
          } else return undefined;
        })
        .filter((campagne): campagne is Card => campagne !== undefined);
      
      if (listCampagnes.length > 0) {
        setCurrentCampagnes(listCampagnes);
        const checkbox = listCampagnes.map((campagne) => campagne.id);
        setCampagneCheckbox(checkbox);
      }
    }
  }, [campagnes]);

  return { currentCampagnes, campagneCheckbox };
};

export default useCurrentCampagne;