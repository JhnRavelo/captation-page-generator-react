import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { TypeValidateForm, validateCampagne } from "../utils/validationSchema";

export type TypeSlug = "campagne" | "page" | "";

type TypeAddFormContext = {
  slug: TypeSlug;
  setSlug: React.Dispatch<React.SetStateAction<TypeSlug>>;
  openForm: boolean;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  initialValues: TypeInitialValues;
  setInitialValues: React.Dispatch<React.SetStateAction<TypeInitialValues>>;
  validate: TypeValidateForm;
  setValidate: React.Dispatch<React.SetStateAction<TypeValidateForm>>;
  formFields: TypeAddFormFields;
  setFormFields: React.Dispatch<React.SetStateAction<TypeAddFormFields>>;
};

export type TypeAddFormFields = {
  name: "name" | "dateDebut" | "dateFin" | "description";
  header: string;
  type: string;
  placeholder: string;
}[];

const AddFormContext = createContext<TypeAddFormContext | null>(null);

export type TypeInitialValues = {
  name: string;
  dateDebut?: string;
  dateFin?: string;
  description?: string;
  user?: string;
};

const AddFormProvider = ({ children }: ContextPropsType) => {
  const [slug, setSlug] = useState<TypeSlug>("");
  const [openForm, setOpenForm] = useState(false);
  const [initialValues, setInitialValues] = useState<TypeInitialValues>({
    name: "",
  });
  const [validate, setValidate] = useState<TypeValidateForm>(validateCampagne);
  const [formFields, setFormFields] = useState<TypeAddFormFields>([]);

  return (
    <AddFormContext.Provider
      value={{
        slug,
        setSlug,
        openForm,
        setOpenForm,
        initialValues,
        setInitialValues,
        validate,
        setValidate,
        formFields,
        setFormFields,
      }}
    >
      {children}
    </AddFormContext.Provider>
  );
};

export default AddFormContext;

export { AddFormProvider };
