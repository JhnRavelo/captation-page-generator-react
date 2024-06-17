import AddButton from "../../../components/AddButton/AddButton";
import Card from "../../../components/Card/Card";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
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
  const handleCLick = () => {
    console.log("");
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
