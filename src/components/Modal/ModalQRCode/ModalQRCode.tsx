import { QRCode } from "react-qrcode-logo";
import EntrepriseSVG from "../../../assets/svg/EntrepriseSVG";
import WebSVG from "../../../assets/svg/WebSVG";
import FormFields from "../../Form/Form";
import "./modalQRCode.scss";
import ApercuSVG from "../../../assets/svg/ApercuSVG";
import useQRCode from "../../../hooks/useQRCode";
import { qrCodeInitialValue } from "../../../assets/ts/qrcode";
import useMediaEntreprise from "../../../hooks/useMediaEntreprise";
import useCurrentCampagne from "../../../hooks/useCurrentCampagne";
import { useState } from "react";

const url = import.meta.env.VITE_FRONT_PATH;

const ModalQRCode = () => {
  const qrCodeContext = useQRCode();
  const entrepriseContext = useMediaEntreprise();
  const currentCampagne = useCurrentCampagne();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [load, setLoad] = useState(true);

  const handleImageLoad = (event: Event) => {
    if (!load) return;
    const target = event.target as HTMLImageElement;
    const ratio = target.naturalWidth / target.naturalHeight;
    const maxLogoSize =
      entrepriseContext?.entreprise.company == "Vertec" ? 80 : 60;
    let logoWidth = maxLogoSize;
    let logoHeight = maxLogoSize;

    if (ratio > 1) {
      logoHeight = maxLogoSize / ratio;
    } else {
      logoWidth = maxLogoSize * ratio;
    }
    setDimensions({ width: logoWidth, height: logoHeight });
    setLoad(false);
  };
  const campagneUrl =
    url +
    "/campagne/" +
    currentCampagne.campagneCheckbox[0] +
    "/" +
    entrepriseContext?.media.url;

  return (
    <div className="modal-qr-container">
      <div className="modal-qr-content left">
        <span className="modal-qr-url">
          <EntrepriseSVG width="25" height="20" />
          <span className="modal-qr-content-value">
            {entrepriseContext?.entreprise.company}
          </span>
        </span>
        <span className="modal-qr-url">
          <WebSVG height="22" width="25" />
          <span className="modal-qr-content-value">{campagneUrl}</span>
        </span>
        <FormFields
          setState={qrCodeContext?.setQrCodes}
          initialValues={qrCodeInitialValue}
          checkboxes={currentCampagne.campagneCheckbox}
        />
      </div>
      <div className="modal-qr-content right">
        <div className="labelInput apercu">
          <ApercuSVG width="20" height="20" />
        </div>
        <QRCode
          value={campagneUrl}
          size={160}
          logoImage={entrepriseContext?.entreprise.logo}
          logoWidth={dimensions.width}
          logoHeight={dimensions.height}
          logoOnLoad={(event) => {
            handleImageLoad(event);
          }}
          qrStyle="squares"
        />
      </div>
    </div>
  );
};

export default ModalQRCode;
