/* eslint-disable react-hooks/exhaustive-deps */
import OrdinateurSVG from "../../../assets/svg/OrdinateurSVG";
import WebSVG from "../../../assets/svg/WebSVG";
import { Card } from "../Card";
import "./cardContentPage.scss";
// import imgDur from "../../../assets/png/durabilite.png";
// import imgTher from "../../../assets/png/thermique.png";
// import imgEco from "../../../assets/png/recycler.png";
import PhoneSVG from "../../../assets/svg/PhoneSVG";
import useMediaEntreprise from "../../../hooks/useMediaEntreprise";
import { useEffect, useState } from "react";
import useGetImagePrivate from "../../../hooks/useGetImagePrivate";
import { axiosDefault } from "../../../api/axios";
import useEntreprise from "../../../hooks/useEntreprise";
import { avantages } from "../../../assets/ts/page";

type CardContentPagePropsType = {
  page: Card;
};

const urlFront = import.meta.env.VITE_FRONT_PATH;

const CardContentPage = ({ page }: CardContentPagePropsType) => {
  const entrepriseContext = useMediaEntreprise();
  const [urlImg, setUrlImg] = useState("");
  const [urlImgCampagne, setUrlImgCampagne] = useState("");
  const getImage = useGetImagePrivate();
  const companyContext = useEntreprise();

  useEffect(() => {
    (async () => {
      if (page?.entrepriseId && page?.idData) {
        try {
          const urlImg = await getImage(
            axiosDefault,
            page.entrepriseId,
            "/entreprise/img/"
          );
          setUrlImg(urlImg);
          const urlImgCampagne = await getImage(
            axiosDefault,
            page.idData,
            "/page/img/"
          );
          setUrlImgCampagne(urlImgCampagne);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [page.entrepriseId, companyContext?.entreprises, page.idData]);

  const url =
    urlFront + "/campagne/" + page.id + "/" + entrepriseContext?.media.url;

  return (
    <div className="page-desc-container">
      <div className="campagne-description">
        <WebSVG width="20" height="20" />
        <span>{url}</span>
      </div>
      <div className="screen-page-multi">
        <div className="ordi-container">
          <OrdinateurSVG width="310" height="280" />
          <div className="ordi-content">
            <div
              className="ordi-title"
              style={{ backgroundColor: page.titleBackgroundColor }}
            >
              <div className="ordi-logo-title">
                {urlImg ? <img src={urlImg} alt="logo" /> : null}
                <h4 style={{ color: page.titleColor }}>
                  {page.sloganCampagne}
                </h4>
              </div>
              <div className="ordi-campagne">
                <div className="left">
                  <span style={{ color: page.titleColor, fontWeight: 800 }}>
                    {page.description}
                  </span>
                  <div className="input-ordi">
                    <span>Veuillez mettre votre email</span>
                    <button>Envoyer</button>
                  </div>
                </div>
                {urlImgCampagne ? (
                  <img src={urlImgCampagne} alt="image campagne" />
                ) : null}
              </div>
            </div>
            <div className="ordi-avantage">
              {avantages.map((avantage, index) => (
                <div key={index} style={{backgroundColor: avantage.color}} className="ordi-icon-container">
                  {avantage.img}
                </div>
              ))}
              {/* <img src={imgDur} alt="image durabilité" />
              <img src={imgEco} alt="image recyclage" />
              <img src={imgTher} alt="image thermique" /> */}
            </div>
          </div>
        </div>
        <div className="phone-container">
          <PhoneSVG width="210" height="270" />
          <div
            className="phone-content"
            style={{ backgroundColor: page.titleBackgroundColor }}
          >
            <div className="phone-title">
              <img src={urlImg} alt="logo" />
              <h4 style={{ color: page.titleColor }}>{page.sloganCampagne}</h4>
            </div>
            <div className="phone-img-campagne">
              <img src={urlImgCampagne} alt="image campagne" />
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
