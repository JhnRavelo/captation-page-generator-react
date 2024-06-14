import useForm from "../../../hooks/useForm";
import imgDelete from "../../../assets/png/poubelle.png";

const Delete = () => {
    const formContext = useForm()
  return (
    <>
      <div className="delete-title-container">
        <img src={imgDelete} alt="image poubelle" />
        <h3>Suppression</h3>
      </div>
      <div className="para-container">
        <p>
          Vous êtes sûre de vouloir de supprimer le {formContext?.slug.toLowerCase()}{" "}
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
  );
};

export default Delete;
