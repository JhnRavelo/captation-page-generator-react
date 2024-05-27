import { TypeInitialValues } from "../../context/AddFormProvider";
import useForm from "../../hooks/useForm";
import { Field, Form, Formik } from "formik";

type FormFieldsPropsTypes = {
  handleSubmit: (value: TypeInitialValues) => void;
  error: string;
};

const FormFields = ({ handleSubmit, error }: FormFieldsPropsTypes) => {
  const formContext = useForm();
  return (
    <Formik
      initialValues={
        formContext?.initialValues ? formContext.initialValues : { name: "" }
      }
      onSubmit={(value) => handleSubmit(value)}
      validationSchema={formContext?.validate}
    >
      {({ errors }) => (
        <Form>
          {formContext?.formFields &&
            formContext?.formFields.length > 0 &&
            formContext?.formFields.map((form, index) => (
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
            ))}
          <div className="button-container">
            <button type="submit">Envoyer</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormFields;
