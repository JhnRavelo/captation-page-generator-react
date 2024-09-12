import { useState } from "react";
import FilePNGSVG from "../../../assets/svg/FilePNGSVG";
import { Card } from "../Card";
import "./CardContentCompany.scss";

const CardContentCompany = ({ company }: { company: Card }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

  return (
    <>
      <div className="campagne-description">
        <FilePNGSVG width="26" height="26" />
        {typeof company.logo === "string" ? (
          <img
            className="company-logo"
            src={company.logo}
            onLoad={(e) => handleImageLoad(e)}
            alt="company qrcode"
            style={{ height: dimensions.height, width: dimensions.width }}
          />
        ) : null}
      </div>
      {typeof company.img === "string" ? (
        <img className="company-img" src={company.img} alt="company logo" />
      ) : null}
    </>
  );
};

export default CardContentCompany;
