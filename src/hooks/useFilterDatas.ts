import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import useMediaEntreprise from "./useMediaEntreprise";
import useForm from "./useForm";

const useFilterDatas = (datas?: Card[], id?: string) => {
  const [filterDatas, setFilterDatas] = useState<Card[]>([]);
  const entrepriseContext = useMediaEntreprise();
  const formContext = useForm();

  useEffect(() => {
    if (
      datas &&
      entrepriseContext?.entreprise &&
      formContext?.year &&
      datas.length > 0
    ) {
      let filterCampagnes;
      if (id && entrepriseContext?.media) {
        filterCampagnes = datas.filter(
          (campagne) =>
            campagne.id == id && campagne.media == entrepriseContext.media.media
        );
      } else if (datas[0]?.media && entrepriseContext?.media) {
        filterCampagnes = datas.filter(
          (campagne) =>
            campagne.entreprise == entrepriseContext?.entreprise?.company &&
            campagne.dateDebut?.split("-")[0] == formContext?.year &&
            campagne.media == entrepriseContext.media.media
        );
      } else {
        filterCampagnes = datas.filter(
          (campagne) =>
            campagne.entreprise == entrepriseContext.entreprise?.company &&
            campagne.dateDebut?.split("-")[0] == formContext.year
        );
      }
      if (filterCampagnes) {
        setFilterDatas(filterCampagnes);
      } else setFilterDatas([]);
    } else {
      setFilterDatas([]);
    }
  }, [
    entrepriseContext?.entreprise,
    datas,
    formContext?.year,
    entrepriseContext?.media,
    id,
  ]);

  return filterDatas;
};

export default useFilterDatas;
