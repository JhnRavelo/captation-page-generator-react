import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import useMediaEntreprise from "./useMediaEntreprise";
import useForm from "./useForm";

const useFilterDatas = (datas?: Card[]) => {
  const [filterDatas, setFilterDatas] = useState<Card[]>([]);
  const entrepriseContext = useMediaEntreprise();
  const formContext = useForm();

  useEffect(() => {
    if (datas || entrepriseContext?.entreprise || formContext?.year) {
      console.log(
        "Filter",
        entrepriseContext?.entreprise,
        formContext?.year,
        datas
      );
      const filterCampagnes = datas?.filter(
        (campagne) =>
          campagne.entreprise == entrepriseContext?.entreprise &&
          campagne.dateDebut?.split("-")[0] == formContext?.year
      );
      if (filterCampagnes) {
        setFilterDatas(filterCampagnes);
      }
    }
  }, [entrepriseContext?.entreprise, datas, formContext?.year]);

  return filterDatas;
};

export default useFilterDatas;
