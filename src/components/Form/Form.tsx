import { Field, Form, Formik } from "formik";
import { TypeInitialValues } from "../../context/AddFormProvider";
import useForm from "../../hooks/useForm";
import "./form.scss";
import { useState } from "react";

const AddForm = () => {
  const formContext = useForm();
  const [error, setError] = useState("");

  const handleSubmit = (value: TypeInitialValues) => {
    console.log(value);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => formContext?.setOpenForm(false)}>
          X
        </span>
        <h3>
          Ajouter un nouveau{" "}
          {formContext &&
            formContext?.slug[0].toUpperCase() +
              formContext?.slug.slice(1).toLowerCase()}
        </h3>
        <Formik
          initialValues={
            formContext?.initialValues
              ? formContext.initialValues
              : { name: "" }
          }
          onSubmit={(value) => handleSubmit(value)}
          validationSchema={formContext?.validate}
        >
          {({ errors }) => (
            <Form>
              {formContext?.formFields &&
                formContext?.formFields.length > 0 &&
                formContext?.formFields.map((form) => (
                  <div className="input-container">
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
      </div>
    </div>
  );
};

export default AddForm;
