import UserSVG from "../../../assets/svg/UserSVG";
import ClockSVG from "../../../assets/svg/ClockSVG";
import RightArrow from "../../../assets/svg/RightArrow";
import { Card } from "../../Card/Card";

type CampagneCardContentPropsType = {
  campagne: Card;
};

const CampagneCardContent = ({ campagne }: CampagneCardContentPropsType) => {
  return (
    <>
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
    </>
  );
};

export default CampagneCardContent;
