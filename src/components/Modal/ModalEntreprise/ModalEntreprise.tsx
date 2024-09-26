import { TypeInitialValues } from "../../../context/AddFormProvider";
import useEntreprise from "../../../hooks/useEntreprise";
import FormFields from "../../Form/Form";

const ModalEntreprise = () => {
  const entreprisesContext = useEntreprise();
  const initialValues: TypeInitialValues = {
    company: entreprisesContext?.entreprise?.company
      ? entreprisesContext.entreprise.company
      : "",
    logo: entreprisesContext?.entreprise?.logo
      ? { name: entreprisesContext.entreprise.logo }
      : null,
    imgCampagne: entreprisesContext?.entreprise?.img
      ? { name: entreprisesContext.entreprise.img }
      : null,
    fontFamily: entreprisesContext?.entreprise?.fontFamily
      ? entreprisesContext.entreprise.fontFamily
      : "",
    facebook: entreprisesContext?.entreprise?.facebook
      ? entreprisesContext.entreprise.facebook
      : "",
  };

  return (
    <>
      <FormFields
        setState={entreprisesContext?.setEntreprises}
        initialValues={initialValues}
      />
    </>
  );
};

export default ModalEntreprise;
