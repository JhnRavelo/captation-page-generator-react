/* eslint-disable react-hooks/exhaustive-deps */
import FormFields from "../../../../components/Form/Form";
import { useEffect, useState } from "react";
import "./campagneEdit.scss";
import useForm from "../../../../hooks/useForm";
import { campagneFields } from "../../../../assets/ts/campagne";
import { validateCampagne } from "../../../../utils/validationSchema";
import useCampagne from "../../../../hooks/useCampagne";
import { TypeInitialValues } from "../../../../context/AddFormProvider";
import useFilterCampagne from "../../../../hooks/useFilterCampagne";
import { useParams } from "react-router-dom";

const CampagneEdit = () => {
  const formContext = useForm();
  const campagneContext = useCampagne();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState<TypeInitialValues>(null);
  const filterCampagne = useFilterCampagne();

  useEffect(() => {
    console.log("INITIAL", initialValues);
    formContext?.setFormFields(campagneFields);
    formContext?.setValidate(validateCampagne);
    const currentCampagne = filterCampagne(campagneContext?.campagnes, id);
    if (currentCampagne) {
      const initialValues: TypeInitialValues = {
        title: currentCampagne?.title,
        dateDebut: currentCampagne?.dateDebut,
        dateFin: currentCampagne?.dateFin,
        description: currentCampagne?.description,
      };
      console.log("EDIT", currentCampagne, initialValues);
      setInitialValues(initialValues);
    }
    return () => {
      setInitialValues(null);
    };
  }, [campagneContext?.campagne]);

  return (
    <div className="edit-campagne-container">
      {initialValues ? (
        <FormFields
          setState={campagneContext?.setCampagnes}
          initialValues={initialValues}
        />
      ) : null}
    </div>
  );
};

export default CampagneEdit;
