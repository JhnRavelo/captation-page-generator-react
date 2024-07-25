/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import FormFields from "../../../../components/Form/Form";
import useForm from "../../../../hooks/useForm";
import { campagneMail } from "../../../../assets/ts/campagne";
import useCampagne from "../../../../hooks/useCampagne";
import { TypeInitialValues } from "../../../../context/AddFormProvider";
import { validateCampagneMail } from "../../../../utils/validationSchema";
import useFilterCampagne from "../../../../hooks/useFilterCampagne";
import { useParams } from "react-router-dom";

const CampagneMail = () => {
  const formContext = useForm();
  const campagneContext = useCampagne();
  const [initialValues, setInitialValues] = useState<TypeInitialValues>(null);
  const filterCampagne = useFilterCampagne();
  const { id } = useParams();

  useEffect(() => {
    formContext?.setFormFields(campagneMail);
    formContext?.setUrl("/campagne/mail");
    formContext?.setTitle("update");
    formContext?.setSlug("Campagne");
    formContext?.setValidate(validateCampagneMail);
    formContext?.setIdUpdate(id ? id : "");

    const currentCampagne = filterCampagne(campagneContext?.campagnes, id);
    if (currentCampagne) {
      const newInitialValues: TypeInitialValues = {
        mailText: currentCampagne.mailText,
        object: currentCampagne.object,
      };
      setInitialValues(newInitialValues);
    }

    return () => {
      setInitialValues(null);
    };
  }, [id]);

  return (
    <div className="edit-campagne-container">
      <FormFields
        setState={campagneContext?.setCampagnes}
        initialValues={initialValues}
      />
    </div>
  );
};

export default CampagneMail;
