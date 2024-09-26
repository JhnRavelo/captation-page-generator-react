import "./thanks.scss";
import imgThank from "../../assets/png/thank.png";
import usePage from "../../hooks/usePage";

const Thanks = () => {
  const pageContext = usePage();
  return (
    <div className="thank-container">
      <div className="thank-content">
        <img src={imgThank} alt="" />
        <span>Merci beaucoup !</span>
        <div className="thank-para">
          <p>Nous vous avons envoyer un email à votre adresse.</p>
          <p>
            Il sera dans l'onglet promotion, si vous ne le voyez pas, veuillez
            attendre quelques minutes.
          </p>
        </div>
        <button>
          <a href={pageContext?.page?.facebook}>Facebook</a>
        </button>
      </div>
    </div>
  );
};

export default Thanks;
