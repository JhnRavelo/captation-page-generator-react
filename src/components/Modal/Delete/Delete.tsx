import useForm from "../../../hooks/useForm";
import imgDelete from "../../../assets/png/poubelle.png";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { TypeSetState } from "../../../context/CampagneProvider";
import { toast } from "react-toastify";

type DeletePropsType = {
  setState: TypeSetState | undefined;
};

const Delete = ({ setState }: DeletePropsType) => {
  const formContext = useForm();
  const axiosPrivate = useAxiosPrivate();

  const handleDelete = async () => {
    try {
      if (!formContext?.url) return;
      const res = await axiosPrivate.delete(
        formContext.url + "/" + formContext.idDelete
      );

      if (res.data.success && setState) {
        setState(res.data.datas);
        toast.success(res.data.message);
        formContext.setOpenForm(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Erreur de suppression");
      console.log(error);
    }
  };

  return (
    <>
      <div className="delete-title-container">
        <img src={imgDelete} alt="image poubelle" />
        <h3>Suppression</h3>
      </div>
      <div className="para-container">
        <p>
          Vous êtes sûre de vouloir de supprimer le{" "}
          {formContext?.slug.toUpperCase()} pour {formContext?.id} ?
        </p>
      </div>
      <div className="button__delete">
        <button onClick={() => handleDelete()}>Confirmez</button>
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
