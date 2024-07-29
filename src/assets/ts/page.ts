import { TypePageCard } from "../../components/PageReview/PagePreviewCard/PagePreviewCard";
import { TypeAddFormFields } from "../../context/AddFormProvider";
import imgDur from "../png/durabilite.png";
import imgTher from "../png/thermique.png";
import imgEco from "../png/recycler.png";
import { TypeAgence } from "../../components/PageReview/PagePreviewFooter/PagePreviewFooter";

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
  {
    name: "campagnes",
    placeholder: "Liste des campagnes",
    type: "text",
    header: "Liste des campagnes",
  },
];

export const avantages: TypePageCard[] = [
  {
    img: imgDur,
    title: "Durabilité",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ea temporibus et sequi id rerum. Vel iure molestias dolores earum nesciunt totam rerum vero minima, corporis accusamus dolorummolestiae numquam!",
  },
  {
    img: imgEco,
    title: "Écologique",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ea temporibus et sequi id rerum. Vel iure molestias dolores earum nesciunt totam rerum vero minima, corporis accusamus dolorummolestiae numquam!",
  },
  {
    img: imgTher,
    title: "Thermique",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ea temporibus et sequi id rerum. Vel iure molestias dolores earum nesciunt totam rerum vero minima, corporis accusamus dolorummolestiae numquam!",
  },
];

export const agences: TypeAgence[] = [
  {
    location: "Tana - Ankorondrano",
    phone: "+261 34 05 90 786",
  },
  {
    location: "Tana - Andravoahangy",
    phone: "+261 34 02 50 786",
  },
  {
    location: "Tana - Andraharo",
    phone: "+261 38 01 02 786",
  },
  {
    location: "Tamatave",
    phone: "+261 34 56 64 786",
  },
  {
    location: "Toliara",
    phone: "+261 38 11 20 110",
  },
  {
    location: "Antsiranana",
    phone: "+261 34 14 20 786",
  },
  {
    location: "Majunga",
    phone: "+261 34 07 80 786",
  },
  {
    location: "Nosy-Be",
    phone: "+261 34 11 80 786",
  },
];
