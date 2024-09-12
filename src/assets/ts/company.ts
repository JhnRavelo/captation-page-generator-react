import { TypeAddFormFields } from "../../context/AddFormProvider";

export const companyFields: TypeAddFormFields = [
  {
    name: "company",
    type: "text",
    header: "Entreprise",
    placeholder: "Nom de l'entreprise",
  },
  {
    name: "fontFamily",
    type: "text",
    header: "Nom de police",
    placeholder: "Nom de police de l'entreprise",
  },
  {
    name: "logo",
    type: "img",
    header: "Logo de l'entreprise",
    placeholder: "Logo de l'entreprise pour le QR Code",
  },
  {
    name: "imgCampagne",
    type: "img",
    header: "Image de l'entreprise",
    placeholder: "Logo de l'entreprise standard",
  },
];
