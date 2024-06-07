import { TypeInitialValues } from "../../context/AddFormProvider";
import useForm from "../../hooks/useForm";
import "./modal.scss";
import { useState } from "react";
import FormFields from "../Form/Form";
import Delete from "./Delete/Delete";

const Modal = () => {
  const formContext = useForm();
  const [error, setError] = useState("");

  const handleSubmit = (value: TypeInitialValues) => {
    console.log(value);
  };

  return (
    <div className="add">
      <div
        className="modal"
        style={
          formContext?.title == "delete"
            ? { width: "350px", height: "300px" }
            : {}
        }
      >
        <span className="close" onClick={() => formContext?.setOpenForm(false)}>
          X
        </span>
        {formContext?.title == "add" ? (
          <>
            <h3>
              Ajouter un nouveau{" "}
              {formContext &&
                formContext?.slug[0].toUpperCase() +
                  formContext?.slug.slice(1).toLowerCase()}
            </h3>
            <FormFields handleSubmit={handleSubmit} error={error} />
          </>
        ) : (
          <Delete />
        )}
      </div>
    </div>
  );
};

export default Modal;
