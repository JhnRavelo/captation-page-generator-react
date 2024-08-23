import { TypeInitialValues } from "../../context/AddFormProvider";
import useForm from "../../hooks/useForm";
import { Field, Form, Formik } from "formik";
import InputFile from "./InputFile/InputFile";
import MailForm from "./MailForm/MailForm";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { Fragment, useState } from "react";
import { toast } from "react-toastify";
import useMediaEntreprise from "../../hooks/useMediaEntreprise";
import { TypeSetState } from "../../context/CampagneProvider";
import "./form.scss";
import ErrorForm from "./ErrorForm/ErrorForm";
import InputCheckBox from "./InputCheckBox/InputCheckBox";
import useCampagne from "../../hooks/useCampagne";
import { useParams } from "react-router-dom";

type FormFieldsPropsType = {
  setState: TypeSetState | undefined;
  initialValues: TypeInitialValues;
  checkboxes?: string[];
};

const FormFields = ({
  setState,
  initialValues,
  checkboxes,
}: FormFieldsPropsType) => {
  const formContext = useForm();
  const axiosPrivate = useAxiosPrivate();
  const [error, setError] = useState("");
  const entrepriseContext = useMediaEntreprise();
  const campagneContext = useCampagne();
  const { idMail } = useParams();

  const handleSubmit = async (values: TypeInitialValues) => {
    if (!values || !entrepriseContext?.entreprise) {
      toast.error("Erreur valeur nulle ou entreprise nulle");
      return;
    }
    const formData = new FormData();
    const valuesEntries = Object.entries(values);
    formData.append("entreprise", entrepriseContext?.entreprise.company);
    formData.append("media", entrepriseContext.media.media);
    formData.append("id", `${formContext?.idUpdate}`);
    formData.append("idMail", idMail ? idMail : "");
    valuesEntries.forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(`${key}`, value);
      } else if (value) formData.append(`${key}`, value.toString());
    });

    try {
      let res;

      if (formContext?.title === "add" && formContext.slug === "Campagne") {
        res = await axiosPrivate.post(formContext.url, formData);
      } else if (
        formContext?.title === "update" &&
        formContext.slug === "Campagne"
      ) {
        res = await axiosPrivate.put(formContext.url, formData);
      } else if (
        formContext?.title === "add" &&
        formContext.slug !== "Campagne"
      ) {
        res = await axiosPrivate.post(formContext.url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else if (
        formContext?.title === "update" &&
        formContext.slug !== "Campagne"
      ) {
        res = await axiosPrivate.put(formContext.url, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      if (res?.data.success && formContext?.slug == "Campagne") {
        campagneContext?.setIsCampagne((prev) => !prev);
      }
      if (res?.data.success && setState) {
        setState(res.data.datas);
        toast.success(res.data.message);
        formContext?.setOpenForm(false);
        setError("");
      } else {
        toast.error(res?.data.message);
        setError(res?.data.message);
      }
    } catch (error) {
      toast.error("Erreur serveur");
      setError("Erreur serveur");
      console.log(error);
    }
  };

  return (
    <>
      {initialValues ? (
        <Formik
          initialValues={initialValues}
          onSubmit={(value) => handleSubmit(value)}
          validationSchema={formContext?.validate}
          enableReinitialize={true}
        >
          {({ errors, setFieldValue, values }) => (
            <Form>
              <div
                className={
                  formContext?.url == "/campagne" &&
                  formContext.title == "update"
                    ? "campagne-input-update"
                    : (formContext?.url == "/campagne" &&
                        formContext.title == "add") ||
                      formContext?.url == "/page"
                    ? "campagne-input-add"
                    : formContext?.url == "/campagne/mail"
                    ? "campagne-input-add-email"
                    : ""
                }
              >
                {formContext?.formFields &&
                  formContext?.formFields.length > 0 &&
                  formContext?.formFields.map((form, index) => {
                    if (form.name == "campagnes") {
                      return (
                        <Fragment key={index}>
                          <InputCheckBox
                            title={form.placeholder}
                            name={form.name}
                            arrays={checkboxes}
                            type={
                              values.campagnes ? values.campagnes : undefined
                            }
                            error={error}
                            errors={errors[form.name]}
                          />
                        </Fragment>
                      );
                    } else if (
                      form.name == "logo" ||
                      form.name == "imgCampagne"
                    ) {
                      return (
                        <div
                          className={
                            form.name == "imgCampagne" && idMail
                              ? "input-container input-file-image-container"
                              : !idMail && form.name == "logo"
                              ? ""
                              : "input-container"
                          }
                          key={index}
                        >
                          <InputFile
                            name={form.name}
                            setFieldValue={setFieldValue}
                            value={values[form.name]?.name}
                            img={initialValues[form.name]?.name}
                          />
                          <ErrorForm error={error} errors={errors[form.name]} />
                        </div>
                      );
                    } else if (form.type == "mail") {
                      return (
                        <div className="input-container" key={index}>
                          <label htmlFor={form.name}>{form.header}</label>
                          <MailForm
                            setFieldValue={setFieldValue}
                            name={form.name}
                            mail={
                              initialValues[form.name]
                                ? initialValues[form.name]
                                : null
                            }
                          />
                          <ErrorForm error={error} errors={errors[form.name]} />
                        </div>
                      );
                    } else
                      return (
                        <div className="input-container" key={index}>
                          <label htmlFor={form.name}>{form.header}</label>
                          <Field
                            type={form.type}
                            placeholder={form.placeholder}
                            name={form.name}
                            id={form.name}
                          />
                          <ErrorForm error={error} errors={errors[form.name]} />
                        </div>
                      );
                  })}
              </div>
              <div className="button-container">
                <button
                  type="submit"
                  onClick={() => {
                    formContext?.formFields.map((item) => {
                      if (errors[item.name]) {
                        toast.error(errors[item.name]);
                      }
                    });
                  }}
                >
                  Enregistrer
                </button>
              </div>
            </Form>
          )}
        </Formik>
      ) : null}
    </>
  );
};

export default FormFields;
