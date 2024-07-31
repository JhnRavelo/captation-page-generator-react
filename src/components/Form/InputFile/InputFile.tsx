import { FormikErrors } from "formik";
import imgGallery from "../../../assets/png/gallery.png";
import { TypeInitialValues } from "../../../context/AddFormProvider";
import "./inputFile.scss";

type InputFileProps = {
  name: "logo" | "imgCampagne";
  setFieldValue: (
    field: string,
    value: TypeInitialValues,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<TypeInitialValues>>;
  value: string | undefined;
};

const InputFile = ({ name, setFieldValue, value }: InputFileProps) => {
  return (
    <>
      <input
        style={{ display: "none" }}
        id={name}
        type="file"
        name={name}
        onChange={(e) => {
          if (e.target.files && e.target.files?.length > 0) {
            const file = e.target.files[0];
            setFieldValue(name, file);
          }
        }}
      />
      <label htmlFor={name} className={"labelInput " + name}>
        <img
          src={imgGallery}
          alt="image de gallery"
          style={{ width: "20px", height: "20px" }}
        />
        <span>
          {value
            ? value
            : (name == "logo" && !value)
            ? "Si vous ne choisissez pas, le logo par défaut sera choisit."
            : "Choisissez votre image pour la campagne."}
        </span>
      </label>
    </>
  );
};

export default InputFile;
