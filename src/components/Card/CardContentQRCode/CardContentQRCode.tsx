import { useRef } from "react";
import DownloadSVG from "../../../assets/svg/DownloadSVG";
import WebSVG from "../../../assets/svg/WebSVG";
import { Card } from "../../Card/Card";
import "./cardContentQRCode.scss";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { toast } from "react-toastify";

type QRCodePropsType = {
  qrcode: Card;
};

const CardContentQRCode = ({ qrcode }: QRCodePropsType) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const axiosPrivate = useAxiosPrivate();

  const handleDownload = async () => {
    const img = qrcode.img;
    if (!img) return;
    try {
      const res = await axiosPrivate.post(
        "/qr-code/download/",
        { img },
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        "qr-code-" +
          qrcode.id +
          "-" +
          qrcode.media +
          "-" +
          qrcode.entreprise +
          ".png"
      );
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      toast.error("Erreur serveur");
      console.log(error);
    }
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
      <div className="campagne-description url">
        <WebSVG width="20" height="20" />
        <span>{qrcode.url}</span>
      </div>
    </>
  );
};

export default CardContentQRCode;
