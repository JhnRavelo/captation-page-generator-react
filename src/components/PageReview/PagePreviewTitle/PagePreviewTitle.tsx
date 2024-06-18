import "./pagePreviewTitle.scss";

type PagePreviewTitlePropsTypes = {
  logo: string;
  slogan: string;
  imgCampagne: string;
  title: string;
};

const PagePreviewTitle = ({
  logo,
  slogan,
  imgCampagne,
  title,
}: PagePreviewTitlePropsTypes) => {
  return (
    <div
      className="page-preview-title-container"
      style={{ backgroundColor: "gray" }}
    >
      <div className="title-container">
        <img src={logo} alt="logo" />
        <h1 style={{ color: "aliceblue", fontFamily: '"Lato", sans-serif' }}>
          {title}
        </h1>
      </div>
      <div className="slogan-image-container">
        <div className="slogan-container">
          <div className="slogan-content">
            <span>{slogan}</span>
          </div>
          <div className="input-email">
            <input type="text" placeholder="Veuillez mettre votre email!" />
            <button>Envoyer</button>
          </div>
        </div>
        <img src={imgCampagne} alt="image de campagne" />
      </div>
    </div>
  );
};

export default PagePreviewTitle;
