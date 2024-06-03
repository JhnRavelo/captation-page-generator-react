import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { TypeValidateForm, validateCampagne } from "../utils/validationSchema";

export type TypeSlug = "campagne" | "page" | "";

export type TypeTitleModal = "add" | "delete";

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
  title: TypeTitleModal;
  setTitle: React.Dispatch<React.SetStateAction<TypeTitleModal>>;
  idDelete: string;
  setIdDelete: React.Dispatch<React.SetStateAction<string>>;
};

export type TypeAddFormFields = {
  name: "name" | "dateDebut" | "dateFin" | "description";
  header: string;
  type: string;
  placeholder: string;
}[];

export type TypeInitialValues = {
  name: string;
  dateDebut?: string;
  dateFin?: string;
  description?: string;
  user?: string;
};

const AddFormContext = createContext<TypeAddFormContext | null>(null);

const AddFormProvider = ({ children }: ContextPropsType) => {
  const [slug, setSlug] = useState<TypeSlug>("");
  const [openForm, setOpenForm] = useState(false);
  const [initialValues, setInitialValues] = useState<TypeInitialValues>({
    name: "",
  });
  const [validate, setValidate] = useState<TypeValidateForm>(validateCampagne);
  const [formFields, setFormFields] = useState<TypeAddFormFields>([]);
  const [title, setTitle] = useState<TypeTitleModal>("add");
  const [idDelete, setIdDelete] = useState<string>("");

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
        title,
        setTitle,
        idDelete,
        setIdDelete,
      }}
    >
      {children}
    </AddFormContext.Provider>
  );
};

export default AddFormContext;

export { AddFormProvider };
