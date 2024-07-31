import "./pagePreview.scss";
import PagePreviewTitle from "../../components/PageReview/PagePreviewTitle/PagePreviewTitle";
import { agences, avantages } from "../../assets/ts/page";
import PagePreviewCard from "../../components/PageReview/PagePreviewCard/PagePreviewCard";
import PagePreviewFooter from "../../components/PageReview/PagePreviewFooter/PagePreviewFooter";

const PagePreview = () => {
  return (
    <div className="page-preview">
      <PagePreviewTitle />
      <div className="page-preview-avantage-container">
        {avantages.map((avantage, index) => (
          <PagePreviewCard pageCard={avantage} key={index} />
        ))}
      </div>
      <div className="page-preview-footer">
        <h3>Nos Agences</h3>
        <div className="page-preview-footer-row">
          {agences.map((agence, index) => (
            <PagePreviewFooter agence={agence} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PagePreview;
