import { FormikErrors } from "formik";
import imgGallery from "../../../assets/png/gallery.png";
import { TypeInitialValues } from "../../../context/AddFormProvider";
import "./inputFile.scss";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

type InputFileProps = {
  name: "logo" | "imgCampagne";
  setFieldValue: (
    field: string,
    value: TypeInitialValues,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<TypeInitialValues>>;
  value: string | undefined;
  img?: string | null;
  placeholder: string;
};

const InputFile = ({
  name,
  setFieldValue,
  value,
  img,
  placeholder,
}: InputFileProps) => {
  const { idMail } = useParams();

  useEffect(() => {
    Fancybox.bind("[data-fancybox]");
    return () => {
      Fancybox.destroy();
    };
  }, []);

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
          {value ? value.split("/")[value.split("/").length - 1] : placeholder}
        </span>
      </label>
      {img && idMail && (
        <a href={img} data-fancybox="gallery">
          <img
            src={img}
            alt="image campagne ou logo"
            className="input-file-image"
          />
        </a>
      )}
    </>
  );
};

export default InputFile;
