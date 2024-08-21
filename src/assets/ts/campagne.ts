import {
  TypeAddFormFields,
  TypeInitialValues,
} from "../../context/AddFormProvider";

export const campagneFields: TypeAddFormFields = [
  {
    name: "title",
    type: "text",
    header: "Titre de la campagne",
    placeholder: "Titre de la campagne",
  },
  {
    name: "description",
    type: "text-area",
    header: "Description de la campagne",
    placeholder: "Description de la campagne",
  },
  {
    name: "dateDebut",
    type: "date",
    header: "Date de début de la campagne",
    placeholder: "Date de début de la campagne",
  },
  {
    name: "dateFin",
    type: "date",
    header: "Date de fin de la campagne",
    placeholder: "Date de fin de la campagne",
  },
];

export const campagneMail: TypeAddFormFields = [
  {
    name: "object",
    type: "text",
    header: "Objet de l'email",
    placeholder: "Objet de l'email",
  },
  {
    name: "title",
    type: "mail",
    header: "Titre de l'email",
    placeholder: "Titre de l'email",
  },
  {
    name: "imgCampagne",
    type: "file",
    header: "Image de l'email",
    placeholder: "Image de l'email",
  },
  {
    name: "delay",
    type: "number",
    header: "Nombre de jour de délais",
    placeholder: "Nombre de jour de délais",
  },
  {
    name: "mailText",
    type: "mail",
    header: "Contenu de l'email",
    placeholder: "Contenu de l'email",
  },
];

export const campagneInitialValues: TypeInitialValues = {
  title: "",
  dateDebut: "",
  dateFin: "",
  description: "",
};
