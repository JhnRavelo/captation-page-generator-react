import { useNavigate } from "react-router-dom";
import { TypeSlug } from "../../context/AddFormProvider";
import CardTitle from "./CardTitle/CardTitle";
import CampagneCardContent from "./CardContentCampagne/CardContentCampagne";
import "./card.scss";
import CardContentQRCode from "./CardContentQRCode/CardContentQRCode";
import CardContentPage from "./CardContentPage/CardContentPage";

type CampagnePropsType = {
  card: Card;
  slug: TypeSlug;
  isClickable: boolean;
};

export type Card = {
  id: string;
  title: string;
  user?: string;
  description?: string;
  dateDebut?: string;
  dateFin?: string;
  url?: string;
  img?: string;
  scanNbr?: number;
};

const Card = ({ card, slug, isClickable }: CampagnePropsType) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isClickable) return;
    const list = e.target;
    if (list instanceof Element && list.parentNode instanceof Element) {
      if (
        list.parentNode.classList.contains("delete") ||
        list.classList.contains("delete")
      )
        return;
    }
    navigate("/marketing/campagne/23/edit");
  };

  return (
    <div
      className={"cards-content " + `${slug}`}
      onClick={(e) => handleClick(e)}
    >
      <CardTitle card={card} slug={slug} />
      <div className="description">
        {slug != "Page" && <h4>{card.title}</h4>}
        {slug == "Campagne" ? (
          <CampagneCardContent campagne={card} />
        ) : slug == "Page" ? (
          <CardContentPage page={card} />
        ) : (
          <CardContentQRCode qrcode={card} />
        )}
      </div>
    </div>
  );
};

export default Card;
