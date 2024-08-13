/* eslint-disable react-hooks/exhaustive-deps */
import MediaOptions from "../../../components/MediaOptions/MediaOptions";
import "./singleCampagne.scss";
import CampagneHeader from "../../../components/CampagneHeader/CampagneHeader";
import Options, { TypeOptions } from "../../../components/Options/Options";
import { useParams } from "react-router-dom";
import CampagneRouter from "../../../routers/CampagneRouter";
import useFilterStatsNbr from "../../../hooks/useFilterStatsNbr";

const SingleCampagne = () => {
  const { id } = useParams();
  const nbrStat = useFilterStatsNbr(id);

  const options: TypeOptions = [
    {
      title: "Modifier",
      url: "/marketing/campagne/" + id + "/edit",
    },
    {
      title: "Charte graphique",
      url: "/marketing/campagne/" + id + "/chart",
    },
    {
      title: "Mail",
      url: "/marketing/campagne/" + id + "/mail",
    },
    {
      title: "Utilisateur",
      url: "/marketing/campagne/" + id + "/user",
    },
  ];

  return (
    <>
      <MediaOptions />
      <div className="single-campagne-container">
        <CampagneHeader
          scanNbr={
            nbrStat.nbrScanPerCampagnes[0]?.count
              ? nbrStat.nbrScanPerCampagnes[0].count
              : 0
          }
          mailNbr={
            nbrStat.nbrMailPerCampagnes[0]?.count
              ? nbrStat.nbrMailPerCampagnes[0].count
              : 0
          }
          openedNbr={
            nbrStat.nbrOpenedPerCampagnes[0]?.count
              ? nbrStat.nbrOpenedPerCampagnes[0].count
              : 0
          }
          idCampagne={id ? id : ""}
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
