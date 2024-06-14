import { ErrorMessage, FormikErrors } from "formik";
import imgGallery from "../../../assets/png/gallery.png";
import { TypeInitialValues } from "../../../context/AddFormProvider";
import "./inputFile.scss"

type InputFileProps = {
  name: "logo";
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
      <label htmlFor={name} className="labelInput">
        <img
          src={imgGallery}
          alt="image de gallery"
          style={{ width: "20px", height: "20px" }}
        />
        <span style={value ? { fontSize: "9px" } : undefined}>
          {value ? value : "Si vous ne choisissez pas, le logo par défaut sera choisit."}
        </span>
      </label>
      <ErrorMessage component={"p"} className="error" name={name} />
    </>
  );
};

export default InputFile;
