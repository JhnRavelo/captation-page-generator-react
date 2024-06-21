import "./thanks.scss";
import imgThank from "../../assets/png/thank.png";

const Thanks = () => {
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
        <button>Facebook</button>
      </div>
    </div>
  );
};

export default Thanks;
