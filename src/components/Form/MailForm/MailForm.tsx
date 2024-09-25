import "./mailForm.scss";
import { TypeInitialValues } from "../../../context/AddFormProvider";
import { FormikErrors } from "formik";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "../../../assets/ts/quill";
import ReactQuill, { Quill } from "react-quill"; 
import "react-quill/dist/quill.snow.css";

Quill.register(Quill.import("attributors/style/direction"), true);
Quill.register(Quill.import("attributors/style/align"), true);
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["0.75em", "1em", "1.5em", "2.5em"];
Quill.register(Size, true);

type MailFromPropsTypes = {
  setFieldValue: (
    field: string,
    values: string,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<TypeInitialValues>>;
  name: string;
  mail?: string | null;
};

const MailForm = ({ setFieldValue, name, mail }: MailFromPropsTypes) => {
  const [model, setModel] = useState("");

  useEffect(() => {
    if (mail) {
      setModel(mail);
    }
  }, [mail]);

  return (
    <div className="mail-input">
      <ReactQuill
        value={model}
        onChange={(e) => {
          setFieldValue(name, e);
          setModel(e);
        }}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default MailForm;
