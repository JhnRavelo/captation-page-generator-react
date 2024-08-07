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
import { validateUpdatePage } from "../../../utils/validationSchema";
import useFilterStatsNbr from "../../../hooks/useFilterStatsNbr";

type CardTitlePropsType = {
  card: Card;
  slug: TypeSlug;
  url: TypeUrl;
};

const CardTitle = ({ card, slug, url }: CardTitlePropsType) => {
  const formContext = useForm();
  const navigate = useNavigate();
  const color = useColorCampagne(card.id);
  const entrepriseContext = useMediaEntreprise();
  const pageContext = usePage();
  const nbrSTat = useFilterStatsNbr(card.id);

  const handleDelete = () => {
    formContext?.setTitle("delete");
    formContext?.setOpenForm(true);
    formContext?.setIdDelete(card.idData ? card.idData : "");
    formContext?.setId(card.id);
    formContext?.setSlug(slug);
    formContext?.setUrl(url);
  };

  const handleEdit = () => {
    pageContext?.setPage(card);
    formContext?.setSlug("Page");
    formContext?.setOpenForm(true);
    formContext?.setIdUpdate(card.idData ? card.idData : "");
    formContext?.setFormFields(pageFields);
    formContext?.setValidate(validateUpdatePage);
    formContext?.setTitle("update");
    formContext?.setUrl("/page");
  };

  return (
    <div className="title">
      <div className="title-left">
        <div
          className={
            color == "red" ? "circle circle-red" : "circle circle-green"
          }
        ></div>
        <h3>{card.id}</h3>
      </div>
      <div className="title-right">
        {slug == "Page" && (
          <>
            <div className="title-scan-nbr">
              <ScanSVG width="27" height="27" />
              <span>
                {nbrSTat.nbrScanPerCampagnes[0]?.count ? nbrSTat.nbrScanPerCampagnes[0].count : 0}
              </span>
            </div>
            <EditSVG
              width="30"
              height="30"
              className="icon edit"
              onClick={() => handleEdit()}
            />
            <ViewSVG
              width="30"
              height="30"
              className="icon view"
              onClick={() => {
                navigate(
                  "/campagne/" + card.id + "/" + entrepriseContext?.media.url
                );
              }}
            />
          </>
        )}
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
