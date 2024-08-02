/* eslint-disable react-hooks/exhaustive-deps */
import MediaOptions from "../../../components/MediaOptions/MediaOptions";
import "./singleCampagne.scss";
import CampagneHeader from "../../../components/CampagneHeader/CampagneHeader";
import Options, { TypeOptions } from "../../../components/Options/Options";
import { useLocation, useParams } from "react-router-dom";
import CampagneRouter from "../../../routers/CampagneRouter";
import useFilterStatsNbr from "../../../hooks/useFilterStatsNbr";

const SingleCampagne = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const nbrStat = useFilterStatsNbr(id);

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

  return (
    <>
      <MediaOptions />
      <div className="single-campagne-container">
        <CampagneHeader
          scanNbr={
            nbrStat.nbrStatScanPerCampagnes[0]?.count
              ? nbrStat.nbrStatScanPerCampagnes[0].count
              : 0
          }
          mailNbr={
            nbrStat.nbrStatMailPerCampagnes[0]?.count
              ? nbrStat.nbrStatMailPerCampagnes[0].count
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
