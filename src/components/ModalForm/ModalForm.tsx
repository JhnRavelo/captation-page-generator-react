import { TypeInitialValues } from "../../context/AddFormProvider";
import useForm from "../../hooks/useForm";
import "./modalForm.scss";
import { useState } from "react";
import FormFields from "../Form/Form";

const AddForm = () => {
  const formContext = useForm();
  const [error, setError] = useState("");

  const handleSubmit = (value: TypeInitialValues) => {
    console.log(value);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => formContext?.setOpenForm(false)}>
          X
        </span>
        <h3>
          Ajouter un nouveau{" "}
          {formContext &&
            formContext?.slug[0].toUpperCase() +
              formContext?.slug.slice(1).toLowerCase()}
        </h3>
        <FormFields handleSubmit={handleSubmit} error={error}/>
      </div>
    </div>
  );
};

export default AddForm;
