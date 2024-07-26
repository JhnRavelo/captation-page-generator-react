import AddButton from "../../../components/AddButton/AddButton";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
import "./qrCode.scss";
import Card from "../../../components/Card/Card";
import useForm from "../../../hooks/useForm";
import { qrcodeFields } from "../../../assets/ts/qrcode";
import { Fragment } from "react";
import { validateQRCode } from "../../../utils/validationSchema";
import useQRCode from "../../../hooks/useQRCode";

const QRCode = () => {
  const formContext = useForm();
  const qrCodeContext = useQRCode();

  const handleClick = () => {
    formContext?.setOpenForm(true);
    formContext?.setFormFields(qrcodeFields);
    formContext?.setTitle("add");
    formContext?.setSlug("QR-Code");
    formContext?.setUrl("/qr-code");
    formContext?.setValidate(validateQRCode);
  };

  return (
    <MediaCompanyContainer>
      <div className="page-cards-container">
        <AddButton handleClick={handleClick} />
        <div className="qr-container cards-container">
          {qrCodeContext?.qrCodes &&
            qrCodeContext.qrCodes.length > 0 &&
            qrCodeContext.qrCodes.map((qrCode, index) => (
              <Fragment key={index}>
                <Card card={qrCode} slug="QR-Code" isClickable={false} />
              </Fragment>
            ))}
        </div>
      </div>
    </MediaCompanyContainer>
  );
};

export default QRCode;
