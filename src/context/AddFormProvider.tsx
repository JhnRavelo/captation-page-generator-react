import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { TypeValidateForm } from "../utils/validationSchema";

export type TypeSlug = "Campagne" | "Page" | "" | "QR-Code";

export type TypeTitleModal = "add" | "delete" | "update";

export type TypeUrl = "/campagne" | "/qr-code" | "/page" | "" | "/campagne/mail";

type TypeAddFormContext = {
  slug: TypeSlug;
  setSlug: React.Dispatch<React.SetStateAction<TypeSlug>>;
  openForm: boolean;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  validate: TypeValidateForm;
  setValidate: React.Dispatch<React.SetStateAction<TypeValidateForm>>;
  formFields: TypeAddFormFields;
  setFormFields: React.Dispatch<React.SetStateAction<TypeAddFormFields>>;
  title: TypeTitleModal;
  setTitle: React.Dispatch<React.SetStateAction<TypeTitleModal>>;
  idDelete: string;
  setIdDelete: React.Dispatch<React.SetStateAction<string>>;
  url: TypeUrl;
  setUrl: React.Dispatch<React.SetStateAction<TypeUrl>>;
  idUpdate: string;
  setIdUpdate: React.Dispatch<React.SetStateAction<string>>;
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
    | "mailText"
    | "title";
  header: string;
  type: string;
  placeholder: string;
}[];

export type TypeInitialValues = {
  id?: number | string;
  name?: string;
  dateDebut?: string;
  dateFin?: string;
  description?: string;
  user?: string;
  title?: string;
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
  const [validate, setValidate] = useState<TypeValidateForm>(null);
  const [formFields, setFormFields] = useState<TypeAddFormFields>([]);
  const [title, setTitle] = useState<TypeTitleModal>("add");
  const [idDelete, setIdDelete] = useState("");
  const [idUpdate, setIdUpdate] = useState("");
  const [url, setUrl] = useState<TypeUrl>("");

  return (
    <AddFormContext.Provider
      value={{
        slug,
        setSlug,
        openForm,
        setOpenForm,
        validate,
        setValidate,
        formFields,
        setFormFields,
        title,
        setTitle,
        idDelete,
        setIdDelete,
        url,
        setUrl,
        idUpdate,
        setIdUpdate,
      }}
    >
      {children}
    </AddFormContext.Provider>
  );
};

export default AddFormContext;

export { AddFormProvider };
