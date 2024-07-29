import { pageFields } from "../../../assets/ts/page";
import AddButton from "../../../components/AddButton/AddButton";
import Card from "../../../components/Card/Card";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
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

const PageCampagne = () => {
  const formContext = useForm();

  const handleCLick = () => {
    formContext?.setSlug("Page");
    formContext?.setOpenForm(true);
    formContext?.setFormFields(pageFields);
    formContext?.setTitle("add");
    formContext?.setUrl("/page");
  };

  return (
    <MediaCompanyContainer>
      <div className="page-cards-container">
        <AddButton handleClick={handleCLick} />
        <div className="cards-container Page">
          {pageCampagnes.length > 0 &&
            pageCampagnes.map((pageCampagne) => (
              <Card
                slug="Page"
                card={pageCampagne}
                isClickable={false}
                url="/page/delete"
              />
            ))}
        </div>
      </div>
    </MediaCompanyContainer>
  );
};

export default PageCampagne;
