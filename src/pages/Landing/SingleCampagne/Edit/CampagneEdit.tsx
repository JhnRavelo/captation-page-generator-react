/* eslint-disable react-hooks/exhaustive-deps */
import FormFields from "../../../../components/Form/Form";
import { TypeInitialValues } from "../../../../context/AddFormProvider";
import { useEffect, useState } from "react";
import "./campagneEdit.scss";
import useForm from "../../../../hooks/useForm";
import { campagneFields } from "../../../../assets/ts/campagne";
import { validateCampagne } from "../../../../utils/validationSchema";

const CampagneEdit = () => {
  const [error, setError] = useState("");
  const formContext = useForm();

  const handleEdit = async (value: TypeInitialValues) => {
    console.log(value);
  };

  useEffect(() => {
    formContext?.setFormFields(campagneFields);
    formContext?.setValidate(validateCampagne);
  }, []);

  return (
    <div className="edit-campagne-container">
      <FormFields handleSubmit={handleEdit} error={error} />
    </div>
  );
};

export default CampagneEdit;
