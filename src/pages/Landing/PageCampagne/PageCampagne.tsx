import { pageFields } from "../../../assets/ts/page";
import AddButton from "../../../components/AddButton/AddButton";
import Card from "../../../components/Card/Card";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
import { TypeInitialValues } from "../../../context/AddFormProvider";
import useForm from "../../../hooks/useForm";
import "./pageCampagne.scss";

const pageCampagnes = [
  {
    id: "ID campagne",
    title: "titre campagne",
    img: "../../../../public/img/paroi_pvb_blanc.jpg",
    scanNbr: 23,
    url: "URL page",
    description: "Slogan de la campagne",
  },
  {
    id: "ID campagne",
    title: "titre campagne",
    img: "../../../../public/img/paroi_pvb_blanc.jpg",
    scanNbr: 23,
    url: "URL page",
    description: "Slogan de la campagne",
  },
];

const initialValues: TypeInitialValues = {
  titleColor: "",
  titleBackgroundColor: "",
  sloganCampagne: "",
  imgCampagne: null,
};

const PageCampagne = () => {
  const formContext = useForm();

  const handleCLick = () => {
    formContext?.setSlug("Page");
    formContext?.setOpenForm(true);
    formContext?.setFormFields(pageFields);
    formContext?.setTitle("add");
  };
  
  return (
    <MediaCompanyContainer>
      <div className="page-cards-container">
        <AddButton handleClick={handleCLick} />
        <div className="cards-container Page">
          {pageCampagnes.length > 0 &&
            pageCampagnes.map((pageCampagne) => (
              <Card slug="Page" card={pageCampagne} isClickable={false} />
            ))}
        </div>
      </div>
    </MediaCompanyContainer>
  );
};

export default PageCampagne;
