/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import DownloadSVG from "../../../assets/svg/DownloadSVG";
import WebSVG from "../../../assets/svg/WebSVG";
import { Card } from "../../Card/Card";
import "./cardContentQRCode.scss";
import useDownload from "../../../hooks/useDownload";
import useGetImagePrivate from "../../../hooks/useGetImagePrivate";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useQRCode from "../../../hooks/useQRCode";

type QRCodePropsType = {
  qrcode: Card;
};

const CardContentQRCode = ({ qrcode }: QRCodePropsType) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const download = useDownload();
  const qrCodeContext = useQRCode();
  const axiosPrivate = useAxiosPrivate();
  const [url, setUrl] = useState("");
  const getImage = useGetImagePrivate();

  useEffect(() => {
    (async () => {
      if (qrcode.idData) {
        try {
          const urlImg = await getImage(
            axiosPrivate,
            qrcode.idData,
            "/qr-code/img/"
          );
          setUrl(urlImg);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, [qrcode.idData, qrCodeContext?.qrCodes]);

  return (
    <>
      {url ? (
        <>
          <div className="qr-desc-image">
            <img
              src={url}
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
      ) : null}
    </>
  );
};

export default CardContentQRCode;
