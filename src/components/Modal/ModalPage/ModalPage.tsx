import WebSVG from "../../../assets/svg/WebSVG";
import { TypeInitialValues } from "../../../context/AddFormProvider";
import useCurrentCampagne from "../../../hooks/useCurrentCampagne";
import useMediaEntreprise from "../../../hooks/useMediaEntreprise";
import usePage from "../../../hooks/usePage";
import FormFields from "../../Form/Form";

const url = import.meta.env.VITE_FRONT_PATH;

const ModalPage = () => {
  const pageContext = usePage();
  const currentCampagne = useCurrentCampagne();
  const mediaContext = useMediaEntreprise();

  const initialValues: TypeInitialValues = {
    titleColor: pageContext?.page?.titleColor
      ? pageContext.page.titleColor
      : "",
    titleBackgroundColor: pageContext?.page?.titleBackgroundColor
      ? pageContext.page.titleBackgroundColor
      : "",
    sloganCampagne: pageContext?.page?.sloganCampagne
      ? pageContext.page.sloganCampagne
      : "",
    imgCampagne: null,
    campagnes: pageContext?.page?.id ? [pageContext.page.id] : [""],
  };

  return (
    <>
      <div className="modal-qr-url">
        <WebSVG width="22" height="25" />
        <span>
          {url +
            "/campagne/" +
            currentCampagne.campagneCheckbox[0] +
            "/" +
            mediaContext?.media.url}
        </span>
      </div>
      <FormFields
        initialValues={initialValues}
        setState={pageContext?.setPages}
        checkboxes={currentCampagne.campagneCheckbox}
      />
    </>
  );
};

export default ModalPage;
