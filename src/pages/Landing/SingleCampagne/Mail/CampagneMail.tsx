/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import FormFields from "../../../../components/Form/Form";
import { TypeInitialValues } from "../../../../context/AddFormProvider";
import useForm from "../../../../hooks/useForm";
import { campagneMail } from "../../../../assets/ts/campagne";

const CampagneMail = () => {
  const [error, setError] = useState("");
  const formContext = useForm();

  const handleSubmit = async (value: TypeInitialValues) => {
    console.log(value);
  };

  useEffect(() => {
    formContext?.setFormFields(campagneMail);
  }, []);

  return (
    <div className="edit-campagne-container">
      <FormFields handleSubmit={handleSubmit} error={error} />
    </div>
  );
};

export default CampagneMail;
