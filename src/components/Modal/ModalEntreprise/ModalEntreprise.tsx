import { TypeInitialValues } from "../../../context/AddFormProvider";
import useEntreprise from "../../../hooks/useEntreprise";
import FormFields from "../../Form/Form";

const ModalEntreprise = () => {
  const entreprisesContext = useEntreprise();
  const initialValues: TypeInitialValues = {
    company: entreprisesContext?.entreprise?.entreprise
      ? entreprisesContext.entreprise.entreprise
      : "",
    logo: entreprisesContext?.entreprise?.logo
      ? { name: entreprisesContext.entreprise.logo }
      : null,
    imgCampagne: entreprisesContext?.entreprise?.imgCampagne
      ? { name: entreprisesContext.entreprise.imgCampagne }
      : null,
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
