/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useFilterCampagne from "./useFilterCampagne";
import useCampagne from "./useCampagne";

type TypeColorCampagne = "red" | "green";

const useColorCampagne = (id?: string) => {
  const campagneContext = useCampagne();
  const filter = useFilterCampagne();
  const [color, setColor] = useState<TypeColorCampagne>("red");

  useEffect(() => {
    if (id && campagneContext?.campagnes) {
      const currentCampagne = filter(campagneContext.campagnes, id);

      if (currentCampagne && currentCampagne?.dateFin) {
        const currentDate = new Date().getTime();
        const campagneDate = new Date(
          currentCampagne.dateFin + " 23:59:59"
        ).getTime();

        if (currentDate > campagneDate) {
          setColor("red");
        } else {
          setColor("green");
        }
      }
    }
  }, [campagneContext?.campagnes, id]);

  return color;
};

export default useColorCampagne;
