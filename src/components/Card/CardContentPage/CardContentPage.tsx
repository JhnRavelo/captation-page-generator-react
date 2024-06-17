import OrdinateurSVG from "../../../assets/svg/OrdinateurSVG";
import WebSVG from "../../../assets/svg/WebSVG";
import { Card } from "../Card";
import "./cardContentPage.scss";
import logo from "../../../assets/png/Logo_aluhd.png";
import imgDur from "../../../assets/png/durabilite.png";
import imgTher from "../../../assets/png/thermique.png";
import imgEco from "../../../assets/png/recycler.png";
import PhoneSVG from "../../../assets/svg/PhoneSVG";

type CardContentPagePropsType = {
  page: Card;
};

const CardContentPage = ({ page }: CardContentPagePropsType) => {
  return (
    <div className="page-desc-container">
      <div className="campagne-description">
        <WebSVG width="20" height="20" />
        <span>{page.url}</span>
      </div>
      <div className="screen-page-multi">
        <div className="ordi-container">
          <OrdinateurSVG width="310" height="280" />
          <div className="ordi-content">
            <div className="ordi-title" style={{ backgroundColor: "gray" }}>
              <div className="ordi-logo-title">
                <img src={logo} alt="logo" />
                <h4 style={{ color: "aliceblue" }}>{page.title}</h4>
              </div>
              <div className="ordi-campagne">
                <div className="left">
                  <span style={{ color: "aliceblue" }}>{page.description}</span>
                  <div className="input-ordi">
                    <span>Veuillez mettre votre email</span>
                    <button>Envoyer</button>
                  </div>
                </div>
                <img src={page.img} alt="image campagne" />
              </div>
            </div>
            <div className="ordi-avantage">
              <img src={imgDur} alt="image durabilité" />
              <img src={imgEco} alt="image recyclage" />
              <img src={imgTher} alt="image thermique" />
            </div>
          </div>
        </div>
        <div className="phone-container">
          <PhoneSVG width="210" height="270" />
          <div className="phone-content" style={{ backgroundColor: "gray" }}>
            <div className="phone-title">
              <img src={logo} alt="logo" />
              <h4 style={{ color: "aliceblue" }}>{page.title}</h4>
            </div>
            <div className="phone-img-campagne">
              <img src={page.img} alt="image campagne" />
            </div>
            <div className="phone-input">
              <span>Veuillez mettre votre email</span>
              <button>Envoyer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContentPage;
