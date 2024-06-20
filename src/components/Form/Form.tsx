import { TypeInitialValues } from "../../context/AddFormProvider";
import useForm from "../../hooks/useForm";
import { Field, Form, Formik } from "formik";
import InputFile from "./InputFile/InputFile";
import MailForm from "./MailForm/MailForm";

export type TypeHandleSubmit = (value: TypeInitialValues) => void;

type FormFieldsPropsTypes = {
  handleSubmit: TypeHandleSubmit;
  error: string;
};

const FormFields = ({ handleSubmit, error }: FormFieldsPropsTypes) => {
  const formContext = useForm();
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
            <button
              type="submit"
              onClick={() => console.log("VALUES", values)}
            >
              Enregistrer
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormFields;
