import DeleteSVG from "../../assets/svg/DeleteSVG";
import UserSVG from "../../assets/svg/UserSVG";
import ClockSVG from "../../assets/svg/ClockSVG";
import RightArrow from "../../assets/svg/RightArrow";
import "./campagneCard.scss";

type CampagnePropsType = {
  campagne: Campagne;
};

export type Campagne = {
  id: string;
  title: string;
  user: string;
  description: string;
  dateDebut: string;
  dateFin: string;
};

const CampagneCard = ({ campagne }: CampagnePropsType) => {
  return (
    <div className="campagne-content">
      <div className="title">
        <div className="title-left">
          <div className="circle"></div>
          <h3>{campagne.id}</h3>
        </div>
        <div className="title-right">
          <DeleteSVG width="30" height="30" />
        </div>
      </div>
      <div className="description">
        <h4>{campagne.title}</h4>
        <div className="campagne-description">
          <UserSVG width="15" height="15" />
          <span>{campagne.user}</span>
        </div>
        <div className="campagne-description">
          <div>{campagne.description}</div>
        </div>
        <div className="campagne-description">
          <ClockSVG width="15" height="15" />
          <div className="date">
            <p>{campagne.dateDebut}</p>
            <RightArrow width="15" height="15" className="arrow" />
            <p>{campagne.dateFin}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampagneCard;
