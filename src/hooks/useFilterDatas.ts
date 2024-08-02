import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import useMediaEntreprise from "./useMediaEntreprise";
import useForm from "./useForm";

const useFilterDatas = (datas?: Card[], id?: string) => {
  const [filterDatas, setFilterDatas] = useState<Card[]>([]);
  const entrepriseContext = useMediaEntreprise();
  const formContext = useForm();

  useEffect(() => {
    if (datas && entrepriseContext?.entreprise && formContext?.year) {
      let filterCampagnes = datas?.filter(
        (campagne) =>
          campagne.entreprise == entrepriseContext?.entreprise.company &&
          campagne.dateDebut?.split("-")[0] == formContext?.year
      );

      if (datas[0]?.media && entrepriseContext?.media) {
        filterCampagnes = datas.filter(
          (campagne) =>
            campagne.entreprise == entrepriseContext?.entreprise.company &&
            campagne.dateDebut?.split("-")[0] == formContext?.year &&
            campagne.media == entrepriseContext.media.media
        );
      }

      if (id && entrepriseContext?.media) {
        filterCampagnes = datas.filter(
          (campagne) =>
            campagne.id == id && campagne.media == entrepriseContext.media.media
        );
      }

      if (filterCampagnes) {
        setFilterDatas(filterCampagnes);
      }
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
