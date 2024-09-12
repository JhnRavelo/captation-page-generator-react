import DeleteSVG from "../../../assets/svg/DeleteSVG";
import ScanSVG from "../../../assets/svg/ScanSVG";
import { TypeSlug, TypeUrl } from "../../../context/AddFormProvider";
import useForm from "../../../hooks/useForm";
import { Card } from "../Card";
import EditSVG from "../../../assets/svg/EditSVG";
import ViewSVG from "../../../assets/svg/ViewSVG";
import { useNavigate } from "react-router-dom";
import useColorCampagne from "../../../hooks/useColorCampagne";
import useMediaEntreprise from "../../../hooks/useMediaEntreprise";
import usePage from "../../../hooks/usePage";
import { pageFields } from "../../../assets/ts/page";
import {
  validateEntreprise,
  validateUpdatePage,
} from "../../../utils/validationSchema";
import useFilterStatsNbr from "../../../hooks/useFilterStatsNbr";
import useEntreprise from "../../../hooks/useEntreprise";
import { companyFields } from "../../../assets/ts/company";

type CardTitlePropsType = {
  card: Card;
  slug: TypeSlug;
  url: TypeUrl;
};

const CardTitle = ({ card, slug, url }: CardTitlePropsType) => {
  const formContext = useForm();
  const navigate = useNavigate();
  const color = useColorCampagne(card.id);
  const mediaContext = useMediaEntreprise();
  const pageContext = usePage();
  const entrepriseContext = useEntreprise();
  const nbrSTat = useFilterStatsNbr(card.id);

  const handleDelete = () => {
    formContext?.setTitle("delete");
    formContext?.setOpenForm(true);
    formContext?.setIdDelete(card.idData ? card.idData : "");
    formContext?.setId(card.id);
    formContext?.setSlug(slug);
    formContext?.setUrl(url);
  };

  const handleEditPage = () => {
    pageContext?.setPage(card);
    formContext?.setSlug("Page");
    formContext?.setOpenForm(true);
    formContext?.setIdUpdate(card.idData ? card.idData : "");
    formContext?.setFormFields(pageFields);
    formContext?.setValidate(validateUpdatePage);
    formContext?.setTitle("update");
    formContext?.setUrl("/page");
  };

  const handleEditEntreprise = () => {
    entrepriseContext?.setEntreprise(card);
    formContext?.setSlug("Entreprise");
    formContext?.setOpenForm(true);
    formContext?.setIdUpdate(card.idData ? card.idData : "");
    formContext?.setFormFields(companyFields);
    formContext?.setValidate(validateEntreprise);
    formContext?.setTitle("update");
    formContext?.setUrl("/entreprise");
  };

  return (
    <div className="title">
      <div className="title-left">
        {slug !== "Entreprise" && (
          <div
            className={
              color == "red" ? "circle circle-red" : "circle circle-green"
            }
          ></div>
        )}
        <h3>{card.id}</h3>
      </div>
      <div className="title-right">
        {slug === "Page" ? (
          <>
            <div className="title-scan-nbr">
              <ScanSVG width="27" height="27" />
              <span>
                {nbrSTat.nbrScanPerCampagnes[0]?.count
                  ? nbrSTat.nbrScanPerCampagnes[0].count
                  : 0}
              </span>
            </div>
            <EditSVG
              width="30"
              height="30"
              className="icon edit"
              onClick={() => handleEditPage()}
            />
            <ViewSVG
              width="30"
              height="30"
              className="icon view"
              onClick={() => {
                navigate(
                  "/campagne/" + card.id + "/" + mediaContext?.media.url
                );
              }}
            />
          </>
        ) : slug === "Entreprise" ? (
          <EditSVG
            width="30"
            height="30"
            className="icon edit"
            onClick={() => handleEditEntreprise()}
          />
        ) : null}
        <DeleteSVG
          width="30"
          height="30"
          className="icon delete"
          onClick={() => handleDelete()}
        />
      </div>
    </div>
  );
};

export default CardTitle;
