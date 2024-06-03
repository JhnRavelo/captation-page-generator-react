import { TypeInitialValues } from "../../context/AddFormProvider";
import useForm from "../../hooks/useForm";
import "./modal.scss";
import { useState } from "react";
import FormFields from "../Form/Form";
import imgDelete from "../../assets/png/poubelle.png";

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
          <>
            <div className="delete-title-container">
              <img src={imgDelete} alt="image poubelle" />
              <h3>Suppression</h3>
            </div>
            <div className="para-container">
              <p>
                Vous êtes sûre de vouloir de supprimer le {formContext?.slug}{" "}
                {formContext?.idDelete} ?
              </p>
            </div>
            <div className="button__delete">
              <button>Confirmez</button>
              <button
                className="cancel"
                onClick={() => formContext?.setOpenForm(false)}
              >
                Annuler
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
