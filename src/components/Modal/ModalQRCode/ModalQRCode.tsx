import { QRCode } from "react-qrcode-logo";
import EntrepriseSVG from "../../../assets/svg/EntrepriseSVG";
import WebSVG from "../../../assets/svg/WebSVG";
import FormFields from "../../Form/Form";
import logoEuro from "../../../assets/png/Logo_Euro.png";
import "./modalQRCode.scss";
import ApercuSVG from "../../../assets/svg/ApercuSVG";

const ModalQRCode = () => {
  return (
    <div className="modal-qr-container">
      <div className="modal-qr-content left">
        <span>
          Titre campagne :{" "}
          <span className="modal-qr-content-value">Title campagne</span>
        </span>
        <span className="modal-qr-url">
          <EntrepriseSVG width="25" height="20" />
          <span className="modal-qr-content-value">Europ'Alu</span>
        </span>
        <span className="modal-qr-url">
          <WebSVG height="22" width="25" />
          <span className="modal-qr-content-value">URL campagne</span>
        </span>
        <FormFields />
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
