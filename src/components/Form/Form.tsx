import { TypeInitialValues } from "../../context/AddFormProvider";
import useForm from "../../hooks/useForm";
import { Field, Form, Formik } from "formik";
import InputFile from "./InputFile/InputFile";
import MailForm from "./MailForm/MailForm";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useState } from "react";
import { toast } from "react-toastify";
import useMediaEntreprise from "../../hooks/useMediaEntreprise";
import { TypeSetState } from "../../context/CampagneProvider";

type FormFieldsPropsType = {
  setState: TypeSetState | undefined;
};

const FormFields = ({ setState }: FormFieldsPropsType) => {
  const formContext = useForm();
  const axiosPrivate = useAxiosPrivate();
  const [error, setError] = useState("");
  const entrepriseContext = useMediaEntreprise();

  const handleSubmit = async (values: TypeInitialValues) => {
    
    if (!values || !entrepriseContext?.entreprise) {
      toast.error("Erreur valeur nulle ou entreprise nulle");
      return;
    }
    const formData = new FormData();
    const valuesEntries = Object.entries(values);
    formData.append("entreprise", entrepriseContext?.entreprise);
    valuesEntries.forEach(([key, value]) => {

      if (value instanceof File) {
        formData.append(`${key}`, value);
      } else if (value) formData.append(`${key}`, value.toString());
    });
    try {
      let res;

      if (formContext?.title == "add") {
        res = await axiosPrivate.post(formContext.url, formData);
      } else if (formContext?.title == "update") {
        res = await axiosPrivate.put(formContext.url, formData);
      }

      if (res?.data.success && formContext?.setOpenForm && setState) {
        setState(res.data.datas);
        toast.success(res.data.message);
        formContext.setOpenForm(false);
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
    <Formik
      initialValues={
        formContext?.initialValues ? formContext.initialValues : {}
      }
      onSubmit={(value) => handleSubmit(value)}
      validationSchema={formContext?.validate}
    >
      {({ errors, setFieldValue, values }) => (
        <Form>
          {formContext?.formFields &&
            formContext?.formFields.length > 0 &&
            formContext?.formFields.map((form, index) => {
              if (form.name == "logo" || form.name == "imgCampagne") {
                return (
                  <InputFile
                    name={form.name}
                    setFieldValue={setFieldValue}
                    value={values[form.name]?.name}
                    key={index}
                  />
                );
              } else if (form.name == "mailText") {
                return (
                  <MailForm
                    setFieldValue={setFieldValue}
                    name={form.name}
                    key={index}
                  />
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
                    {error ? (
                      <p className="error">{error}</p>
                    ) : errors[form.name] ? (
                      <p className="error">{errors[form.name]}</p>
                    ) : null}
                  </div>
                );
            })}
          <div className="button-container">
            <button type="submit">Enregistrer</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormFields;
