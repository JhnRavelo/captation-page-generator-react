import { ReactNode } from "react";
import "./pagePreviewCard.scss";

type PagePreviewCardPropsTypes = {
  pageCard: TypePageCard;
};

export type TypePageCard = {
  img: ReactNode;
  description: string;
  title: string;
  color: string;
};

const PagePreviewCard = ({ pageCard }: PagePreviewCardPropsTypes) => {
  return (
    <div className="page-preview-card">
      <div
        className="page-preview-icon-container"
        style={{ backgroundColor: pageCard.color }}
      >
        {pageCard.img}
      </div>
      <h2>{pageCard.title}</h2>
      <div className="avantage">
        <span>{pageCard.description}</span>
      </div>
    </div>
  );
};

export default PagePreviewCard;
