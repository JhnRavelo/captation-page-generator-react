/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import FilePNGSVG from "../../../assets/svg/FilePNGSVG";
import { Card } from "../Card";
import "./CardContentCompany.scss";
import FontSVG from "../../../assets/svg/FontSVG";
import { axiosDefault } from "../../../api/axios";
import useGetImagePrivate from "../../../hooks/useGetImagePrivate";
import useEntreprise from "../../../hooks/useEntreprise";
import FacebookSVG from "../../../assets/svg/FacebookSVG";

const CardContentCompany = ({ company }: { company: Card }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [url, setUrl] = useState({ urlLogo: "", urlImg: "" });
  const getImage = useGetImagePrivate();
  const entrepriseContext = useEntreprise();

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    const logoRatio = naturalWidth / naturalHeight;

    const maxLogoSize = 30;
    let logoHeight = maxLogoSize;
    let logoWidth = maxLogoSize;

    if (logoRatio < 1) {
      logoHeight = maxLogoSize / logoRatio;
    } else {
      logoWidth = maxLogoSize * logoRatio;
    }
    setDimensions({ width: logoWidth, height: logoHeight });
  };

  useEffect(() => {
    (async () => {
      if (company.idData) {
        try {
          const urlLogo = await getImage(
            axiosDefault,
            company.idData,
            "/entreprise/logo/"
          );
          const urlImg = await getImage(
            axiosDefault,
            company.idData,
            "/entreprise/img/"
          );
          setUrl({ urlImg, urlLogo });
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [company.idData, entrepriseContext?.entreprises]);

  return (
    <>
      <div className="campagne-description">
        <FontSVG width="20" height="20" />
        <span style={{ fontSize: "14px", fontWeight: "normal" }}>
          {company.fontFamily}
        </span>
      </div>
      <div className="campagne-description">
        <FacebookSVG width="23" height="23" />
        <span style={{ fontSize: "11px", fontWeight: "normal" }}>
          {company.facebook}
        </span>
      </div>
      <div className="campagne-description">
        <FilePNGSVG width="26" height="26" />
        {url.urlLogo ? (
          <img
            className="company-logo"
            src={url.urlLogo}
            onLoad={(e) => handleImageLoad(e)}
            alt="company qrcode"
            style={{ height: dimensions.height, width: dimensions.width }}
          />
        ) : null}
      </div>
      {url.urlImg ? (
        <img className="company-img" src={url.urlImg} alt="company logo" />
      ) : null}
    </>
  );
};

export default CardContentCompany;
