import { useRef } from "react";
import DownloadSVG from "../../../assets/svg/DownloadSVG";
import WebSVG from "../../../assets/svg/WebSVG";
import { Card } from "../../Card/Card";
import "./cardContentQRCode.scss";
import useDownload from "../../../hooks/useDownload";

type QRCodePropsType = {
  qrcode: Card;
};

const CardContentQRCode = ({ qrcode }: QRCodePropsType) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const download = useDownload();

  return (
    <>
      <div className="qr-desc-image">
        <img
          src={qrcode.img}
          alt="image de qr code"
          className="qr-image"
          ref={imgRef}
        />
        <DownloadSVG
          width="40"
          height="40"
          onClick={() =>
            download(
              "qr-code-" +
                qrcode.id +
                "-" +
                qrcode.media +
                "-" +
                qrcode.entreprise,
              "png",
              "/qr-code/download/",
              qrcode.img
            )
          }
        />
      </div>
      <div className="campagne-description url">
        <WebSVG width="20" height="20" />
        <span>{qrcode.url}</span>
      </div>
    </>
  );
};

export default CardContentQRCode;
