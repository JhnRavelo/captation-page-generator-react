import { TypeAddFormFields } from "../../context/AddFormProvider";

export const campagneFields: TypeAddFormFields = [
    {
      name: "name",
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