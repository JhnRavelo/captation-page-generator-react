import useForm from "../../hooks/useForm";
import "./modal.scss";
import FormFields from "../Form/Form";
import Delete from "./Delete/Delete";
import ModalQRCode from "./ModalQRCode/ModalQRCode";
import ModalPage from "./ModalPage/ModalPage";
import useCampagne from "../../hooks/useCampagne";
import { campagneInitialValues } from "../../assets/ts/campagne";
import useQRCode from "../../hooks/useQRCode";
import usePage from "../../hooks/usePage";

const Modal = () => {
  const formContext = useForm();
  const campagneContext = useCampagne();
  const qrCodeContext = useQRCode();
  const pageContext = usePage();

  return (
    <div className="add">
      <div
        className="modal"
        style={
          formContext?.title == "delete"
            ? { width: "350px", height: "300px" }
            : {}
        }
      >
        <span className="close" onClick={() => formContext?.setOpenForm(false)}>
          X
        </span>
        {formContext?.title != "delete" ? (
          <>
            <h3>Ajouter un nouveau {formContext && formContext?.slug}</h3>
            {formContext?.slug == "QR-Code" ? (
              <ModalQRCode />
            ) : formContext?.slug == "Page" ? (
              <ModalPage />
            ) : (
              <FormFields
                setState={campagneContext?.setCampagnes}
                initialValues={campagneInitialValues}
              />
            )}
          </>
        ) : (
          <Delete
            setState={
              formContext.slug == "Campagne"
                ? campagneContext?.setCampagnes
                : formContext.slug == "Page"
                ? pageContext?.setPages
                : qrCodeContext?.setQrCodes
            }
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
