import DeleteSVG from "../../../assets/svg/DeleteSVG";
import { TypeSlug } from "../../../context/AddFormProvider";
import useForm from "../../../hooks/useForm";

type CardTitlePropsType = {
  title: string;
  slug: TypeSlug;
};

const CardTitle = ({ title, slug }: CardTitlePropsType) => {
  const formContext = useForm();

  const handleDelete = () => {
    formContext?.setTitle("delete");
    formContext?.setOpenForm(true);
    formContext?.setIdDelete(title);
    formContext?.setSlug(slug);
  };

  return (
    <div className="title">
      <div className="title-left">
        <div className="circle circle-green"></div>
        <h3>{title}</h3>
      </div>
      <div className="title-right">
        <DeleteSVG
          width="30"
          height="30"
          className="delete-icon"
          onClick={() => handleDelete()}
        />
      </div>
    </div>
  );
};

export default CardTitle;
