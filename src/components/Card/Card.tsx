import { useNavigate } from "react-router-dom";
import { TypeSlug, TypeUrl } from "../../context/AddFormProvider";
import CardTitle from "./CardTitle/CardTitle";
import CampagneCardContent from "./CardContentCampagne/CardContentCampagne";
import "./card.scss";
import CardContentQRCode from "./CardContentQRCode/CardContentQRCode";
import CardContentPage from "./CardContentPage/CardContentPage";
import { TypeCompany } from "../../assets/ts/company";
import { TypeMedia } from "../../assets/ts/media";

type CampagnePropsType = {
  card: Card;
  slug: TypeSlug;
  isClickable: boolean;
  url: TypeUrl;
};

export type Card = {
  id: string;
  title?: string;
  user?: string;
  description?: string;
  dateDebut?: string;
  dateFin?: string;
  url?: string;
  img?: string;
  scanNbr?: number;
  entreprise?: TypeCompany;
  mailText?: string;
  object?: string;
  logo?: string | File;
  qrcode?: string | File;
  campagnes?: string[];
  media?: TypeMedia;
  idData?: string;
  titleColor?: string;
  titleBackgroundColor?: string;
  sloganCampagne?: string;
  imgCampagne?: string;
  count?: number;
  year?: string;
  month?: string;
};

const Card = ({ card, slug, isClickable, url }: CampagnePropsType) => {
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
    navigate("/marketing/campagne/" + card.id + "/edit");
  };

  return (
    <div
      className={"cards-content " + `${slug}`}
      onClick={(e) => handleClick(e)}
    >
      <CardTitle card={card} slug={slug} url={url} />
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
