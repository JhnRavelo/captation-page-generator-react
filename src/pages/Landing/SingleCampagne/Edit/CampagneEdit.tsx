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
import Company from "../../../../components/Company/Company";

const CampagneEdit = () => {
  const formContext = useForm();
  const campagneContext = useCampagne();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState<TypeInitialValues>(null);
  const filterCampagne = useFilterCampagne();

  useEffect(() => {
    formContext?.setFormFields(campagneFields);
    formContext?.setValidate(validateCampagne);
    formContext?.setTitle("update");
    formContext?.setUrl("/campagne");
    formContext?.setSlug("Campagne");
    formContext?.setIdUpdate(id ? id : "");

    const currentCampagne = filterCampagne(campagneContext?.campagnes, id);
    if (currentCampagne) {
      const initialValues: TypeInitialValues = {
        title: currentCampagne?.title,
        dateDebut: currentCampagne?.dateDebut,
        dateFin: currentCampagne?.dateFin,
        description: currentCampagne?.description,
      };
      setInitialValues(initialValues);
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
      <Company />
    </div>
  );
};

export default CampagneEdit;
