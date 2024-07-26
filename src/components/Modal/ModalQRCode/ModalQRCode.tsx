import { QRCode } from "react-qrcode-logo";
import EntrepriseSVG from "../../../assets/svg/EntrepriseSVG";
import WebSVG from "../../../assets/svg/WebSVG";
import FormFields from "../../Form/Form";
import logoEuro from "../../../assets/png/Logo_Euro.png";
import "./modalQRCode.scss";
import ApercuSVG from "../../../assets/svg/ApercuSVG";
import useQRCode from "../../../hooks/useQRCode";
import { qrCodeInitialValue } from "../../../assets/ts/qrcode";
import useMediaEntreprise from "../../../hooks/useMediaEntreprise";
import useCurrentCampagne from "../../../hooks/useCurrentCampagne";

const url = import.meta.env.VITE_FRONT_PATH;

const ModalQRCode = () => {
  const qrCodeContext = useQRCode();
  const entrepriseContext = useMediaEntreprise();
  const currentCampagne = useCurrentCampagne();

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
          <span className="modal-qr-content-value">
            {url +
              "/campagne/" +
              currentCampagne.campagneCheckbox[0] +
              "/" +
              entrepriseContext?.media.url}
          </span>
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
          value="logo"
          size={160}
          logoImage={logoEuro}
          logoWidth={60}
          qrStyle="squares"
        />
      </div>
    </div>
  );
};

export default ModalQRCode;
