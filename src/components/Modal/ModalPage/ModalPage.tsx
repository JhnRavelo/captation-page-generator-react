import WebSVG from "../../../assets/svg/WebSVG";
import FormFields from "../../Form/Form";

const ModalPage = () => {
  return (
    <>
      <div className="modal-qr-url">
        <WebSVG width="22" height="25" />
        <span>URL Campagne</span>
      </div>
      <FormFields />
    </>
  );
};

export default ModalPage;
