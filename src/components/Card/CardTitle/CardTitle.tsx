import { useRef } from "react";
import DeleteSVG from "../../../assets/svg/DeleteSVG";
import ScanSVG from "../../../assets/svg/ScanSVG";
import { TypeSlug } from "../../../context/AddFormProvider";
import useForm from "../../../hooks/useForm";
import { Card } from "../Card";

type CardTitlePropsType = {
  card: Card;
  slug: TypeSlug;
};

const CardTitle = ({ card, slug }: CardTitlePropsType) => {
  const formContext = useForm();
  const scanRef = useRef<HTMLSpanElement>(null);

  const handleDelete = () => {
    formContext?.setTitle("delete");
    formContext?.setOpenForm(true);
    formContext?.setIdDelete(card.id);
    formContext?.setSlug(slug);
  };

  return (
    <div className="title">
      <div className="title-left">
        <div className="circle circle-green"></div>
        <h3>{card.id}</h3>
      </div>
      <div className="title-right">
        {slug == "Page" && (
          <div className="title-scan-nbr">
            <ScanSVG width="27" height="27" />
            <span ref={scanRef}>{card.scanNbr}</span>
          </div>
        )}
        <DeleteSVG
          width="30"
          height="30"
          className="delete-icon"
          onClick={() => handleDelete()}
        />
      </div>
    </div>
  );
};

export default CardTitle;
