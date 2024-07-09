import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins/align.min";
import "froala-editor/js/plugins/font_family.min";
import "froala-editor/js/plugins/font_size.min";
import "froala-editor/js/plugins/word_paste.min";
import "froala-editor/js/plugins/url.min";
import "froala-editor/js/plugins/save.min";
import "froala-editor/js/plugins.pkgd.min.js";
import "./mailForm.scss";
import { TypeInitialValues } from "../../../context/AddFormProvider";
import { FormikErrors } from "formik";
import { useState } from "react";

type MailFromPropsTypes = {
  setFieldValue: (
    field: string,
    values: string,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<TypeInitialValues>>;
  name: "mailText";
  mail: string | null;
};

const MailForm = ({ setFieldValue, name, mail }: MailFromPropsTypes) => {
  const [model, setModel] = useState(() => {
    return mail ? mail : localStorage.getItem("savedText") || "";
  });

  return (
    <div className="mail-input">
      <FroalaEditor
        tag="textarea"
        model={model}
        onModelChange={(e: string) => {
          setFieldValue(name, e);
          setModel(e);
        }}
        config={{
          placeholderText: "Écrivez votre mail ici ...",
          heightMax: 190,
          height: 190,
          saveInterval: 2000,
          fontFamily: {
            "Lato, sans-serif": "Lato",
            "'Futura', Arial, sans-serif": "Futura MD",
            "Montserrat": "Montserrat",
          },
          events: {
            "save.before": function (html: string) {
              localStorage.setItem("savedText", html);
            },
          },
        }}
      />
    </div>
  );
};

export default MailForm;
