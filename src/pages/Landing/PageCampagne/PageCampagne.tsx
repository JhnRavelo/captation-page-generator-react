import { pageFields } from "../../../assets/ts/page";
import AddButton from "../../../components/AddButton/AddButton";
import Card from "../../../components/Card/Card";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
import useFilterDatas from "../../../hooks/useFilterDatas";
import useForm from "../../../hooks/useForm";
import usePage from "../../../hooks/usePage";
import "./pageCampagne.scss";

const PageCampagne = () => {
  const formContext = useForm();
  const pageContext = usePage();
  const pages = useFilterDatas(pageContext?.pages);

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
          {pages &&
            pages.length > 0 &&
            pages.map((pageCampagne) => (
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
