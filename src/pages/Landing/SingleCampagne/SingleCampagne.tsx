/* eslint-disable react-hooks/exhaustive-deps */
import MediaOptions from "../../../components/MediaOptions/MediaOptions";
import "./singleCampagne.scss";
import CampagneHeader from "../../../components/CampagneHeader/CampagneHeader";
import Options, { TypeOptions } from "../../../components/Options/Options";
import { useLocation, useParams } from "react-router-dom";
import CampagneRouter from "../../../routers/CampagneRouter";
import { useEffect } from "react";
import useCampagne from "../../../hooks/useCampagne";
import useFilterCampagne from "../../../hooks/useFilterCampagne";

const SingleCampagne = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const campagneContext = useCampagne();
  const filterCampagne = useFilterCampagne();

  const options: TypeOptions = [
    {
      title: "Modifier",
      url: pathname.split(id ? id : "")[0] + id + "/edit",
    },
    {
      title: "Charte graphique",
      url: pathname.split(id ? id : "")[0] + id + "/chart",
    },
    {
      title: "Mail",
      url: pathname.split(id ? id : "")[0] + id + "/mail",
    },
  ];

  useEffect(() => {
    const currentCampagne = filterCampagne(campagneContext?.campagnes, id);

    if (currentCampagne) {
      campagneContext?.setCampagne(currentCampagne);
    }
  }, [id, campagneContext?.campagnes]);

  return (
    <>
      <MediaOptions />
      <div className="single-campagne-container">
        <CampagneHeader
          scanNbr={41}
          mailNbr={23}
          idCampagne={
            campagneContext?.campagne ? campagneContext.campagne.id : ""
          }
        />
        <Options options={options} />
        <div className="single-campagne-page-container">
          <CampagneRouter />
        </div>
      </div>
    </>
  );
};

export default SingleCampagne;
