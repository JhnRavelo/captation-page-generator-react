import { TypeAddFormFields } from "../../context/AddFormProvider";

export const pageFields: TypeAddFormFields = [
  {
    name: "imgCampagne",
    type: "file",
    header: "Image de la campagne",
    placeholder: "Image de la campagne",
  },
  {
    name: "sloganCampagne",
    type: "text",
    header: "Slogan de la campagne",
    placeholder: "Slogan de la campagne",
  },
  {
    name: "titleColor",
    type: "color",
    header: "Couleur du titre de la campagne",
    placeholder: "Couleur du titre de la campagne",
  },
  {
    name: "titleBackgroundColor",
    type: "color",
    header: "Couleur du fond du titre du campagne",
    placeholder: "Couleur du fond du titre du campagne",
  },
];
