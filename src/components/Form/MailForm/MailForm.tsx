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
import { useEffect, useState } from "react";

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
  const [model, setModel] = useState(() => {
    return mail ? mail : localStorage.getItem("savedText" + name) || "";
  });
  const height = window.innerHeight;

  useEffect(() => {
    if (mail) {
      setModel(mail);
    }
  }, [mail]);

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
          heightMax:
            name == "title"
              ? 50
              : height > 800
              ? 300
              : height > 740
              ? 240
              : 190,
          height:
            name == "title"
              ? 50
              : height > 800
              ? 300
              : height > 740
              ? 240
              : 190,
          saveInterval: 4000,
          fontFamily: {
            "Lato, sans-serif": "Lato",
            "'Futura', Arial, sans-serif": "Futura MD",
            Montserrat: "Montserrat",
          },
          events: {
            "save.before": function (html: string) {
              localStorage.setItem("savedText" + name, html);
            },
          },
        }}
      />
    </div>
  );
};

export default MailForm;
