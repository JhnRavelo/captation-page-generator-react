import DeleteSVG from "../../assets/svg/DeleteSVG";
import UserSVG from "../../assets/svg/UserSVG";
import ClockSVG from "../../assets/svg/ClockSVG";
import RightArrow from "../../assets/svg/RightArrow";
import "./campagneCard.scss";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

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
  const navigate = useNavigate();
  const formContext = useForm();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const list = e.target;
    if (list instanceof Element && list.parentNode instanceof Element) {
      if (
        list.parentNode.classList.contains("delete-icon") ||
        list.classList.contains("delete-icon")
      )
        return;
    }
    navigate("/marketing/campagne/23/edit");
  };

  const handleDelete = () => {
    formContext?.setTitle("delete");
    formContext?.setOpenForm(true);
    formContext?.setIdDelete(campagne.id);
  };

  return (
    <div className="campagne-content" onClick={(e) => handleClick(e)}>
      <div className="title">
        <div className="title-left">
          <div className="circle circle-green"></div>
          <h3>{campagne.id}</h3>
        </div>
        <div className="title-right">
          <DeleteSVG
            width="30"
            height="30"
            className="delete-icon"
            onClick={() => handleDelete()}
          />
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
