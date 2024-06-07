import { useRef } from "react";
import DownloadSVG from "../../../assets/svg/DownloadSVG";
import WebSVG from "../../../assets/svg/WebSVG";
import { Card } from "../../Card/Card";
import "./cardContentQRCode.scss";

type QRCodePropsType = {
  qrcode: Card;
};

const CardContentQRCode = ({ qrcode }: QRCodePropsType) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const handleDownload = () => {
    const imageUrl = imgRef.current?.src;
    if (!imageUrl) return;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "qr-code " + qrcode.title + ".png"; // Specify the filename you want to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="qr-desc-image">
        <img
          src={qrcode.img}
          alt="image de qr code"
          className="qr-image"
          ref={imgRef}
        />
        <DownloadSVG width="40" height="40" onClick={handleDownload} />
      </div>
      <div className="campagne-description">
        <WebSVG width="20" height="20" />
        <span>{qrcode.url}</span>
      </div>
    </>
  );
};

export default CardContentQRCode;
