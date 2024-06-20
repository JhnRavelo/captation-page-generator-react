import MediaOptions from "../../../components/MediaOptions/MediaOptions";
import "./singleCampagne.scss";
import CampagneHeader from "../../../components/CampagneHeader/CampagneHeader";
import Options, { TypeOptions } from "../../../components/Options/Options";
import { useLocation } from "react-router-dom";
import CampagneRouter from "../../../routers/CampagneRouter";

const SingleCampagne = () => {
  const { pathname } = useLocation();

  const options: TypeOptions = [
    {
      title: "Modifier",
      url: pathname.split("23")[0] + "23" + "/edit",
    },
    {
      title: "Charte graphique",
      url: pathname.split("23")[0] + "23" + "/chart",
    },
    {
      title: "Mail",
      url: pathname.split("23")[0] + "23" + "/mail",
    },
  ];

  return (
    <>
      <MediaOptions />
      <div className="single-campagne-container">
        <CampagneHeader scanNbr={41} mailNbr={23} />
        <Options options={options} />
        <div className="single-campagne-page-container">
          <CampagneRouter />
        </div>
      </div>
    </>
  );
};

export default SingleCampagne;
