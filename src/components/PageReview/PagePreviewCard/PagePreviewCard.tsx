import "./pagePreviewCard.scss";

type PagePreviewCardPropsTypes = {
  pageCard: TypePageCard;
};

export type TypePageCard = {
  img: string;
  description: string;
  title: string;
};

const PagePreviewCard = ({ pageCard }: PagePreviewCardPropsTypes) => {
  return (
    <div className="page-preview-card">
      <img src={pageCard.img} alt="image écologie" />
      <h2>{pageCard.title}</h2>
      <div className="avantage">
        <span>{pageCard.description}</span>
      </div>
    </div>
  );
};

export default PagePreviewCard;
