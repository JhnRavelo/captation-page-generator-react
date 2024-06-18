import WebSVG from "../../../assets/svg/WebSVG";
import FormFields, { TypeHandleSubmit } from "../../Form/Form";
import "./modalPage.scss";

type ModalPagePropsType = {
  handleClick: TypeHandleSubmit;
  error: string;
};

const ModalPage = ({ handleClick, error }: ModalPagePropsType) => {
  return (
    <>
      <div className="modal-qr-url">
        <WebSVG width="22" height="25" />
        <span>URL Campagne</span>
      </div>
      <FormFields handleSubmit={handleClick} error={error} />
    </>
  );
};

export default ModalPage;
