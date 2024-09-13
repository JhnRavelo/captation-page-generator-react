import { useEffect, useState } from "react";
import FilePNGSVG from "../../../assets/svg/FilePNGSVG";
import { Card } from "../Card";
import "./CardContentCompany.scss";
import FontSVG from "../../../assets/svg/FontSVG";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

// const url = import.meta.env.VITE_SERVER_PATH;

const CardContentCompany = ({ company }: { company: Card }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const axiosPrivate = useAxiosPrivate();
  const [url, setUrl] = useState({ urlLogo: "", urlImg: "" });

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
          const resLogo = await axiosPrivate.get(
            "/entreprise/logo/" + company.idData,
            { responseType: "blob" }
          );
          const resImg = await axiosPrivate.get(
            "/entreprise/img/" + company.idData,
            { responseType: "blob" }
          );
          const urlLogo = window.URL.createObjectURL(new Blob([resLogo.data]));
          const urlImg = window.URL.createObjectURL(new Blob([resImg.data]));
          setUrl({ urlImg, urlLogo });
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [company.idData, axiosPrivate]);

  return (
    <>
      <div className="campagne-description">
        <FontSVG width="20" height="20" />
        <span style={{ fontSize: "14px", fontWeight: "normal" }}>
          {company.fontFamily}
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
