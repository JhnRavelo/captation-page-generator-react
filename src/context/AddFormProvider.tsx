import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { TypeValidateForm } from "../utils/validationSchema";

export type TypeSlug = "Campagne" | "Page" | "" | "QR-Code";

export type TypeTitleModal = "add" | "delete" | "qr-code" | "page";

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
  name:
    | "name"
    | "dateDebut"
    | "dateFin"
    | "description"
    | "logo"
    | "titleColor"
    | "titleBackgroundColor"
    | "sloganCampagne"
    | "imgCampagne"
    | "object"
    | "mailText";
  header: string;
  type: string;
  placeholder: string;
}[];

export type TypeInitialValues = {
  name?: string;
  dateDebut?: string;
  dateFin?: string;
  description?: string;
  user?: string;
  logo?: File | null;
  titleColor?: string;
  titleBackgroundColor?: string;
  sloganCampagne?: string;
  imgCampagne?: File | null;
  object?: string;
  mailText?: string;
} | null;

const AddFormContext = createContext<TypeAddFormContext | null>(null);

const AddFormProvider = ({ children }: ContextPropsType) => {
  const [slug, setSlug] = useState<TypeSlug>("");
  const [openForm, setOpenForm] = useState(false);
  const [initialValues, setInitialValues] = useState<TypeInitialValues>(null);
  const [validate, setValidate] = useState<TypeValidateForm>(null);
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
