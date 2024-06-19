import "./PagePreviewFooter.scss";

export type TypeAgence = {
  location: string;
  phone: string;
};

type PagePreviewFooterPropsTypes = {
  agence: TypeAgence;
};

const PagePreviewFooter = ({ agence }: PagePreviewFooterPropsTypes) => {
  return (
    <div className="page-preview-footer-card">
      <span>{agence.location}</span>
      <span>{agence.phone}</span>
    </div>
  );
};

export default PagePreviewFooter;
