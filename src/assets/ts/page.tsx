import { TypePageCard } from "../../components/PageReview/PagePreviewCard/PagePreviewCard";
import { TypeAddFormFields } from "../../context/AddFormProvider";
import { TypeAgence } from "../../components/PageReview/PagePreviewFooter/PagePreviewFooter";
import DiamondSVG from "../svg/DiamondSVG";
import MissionSVG from "../svg/MissionSVG";
import ObjectifSVG from "../svg/ObjectifSVG";

export const pageFields: TypeAddFormFields = [
  {
    name: "imgCampagne",
    type: "file",
    header: "Image de la campagne",
    placeholder: "Choisissez votre image pour la campagne.",
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
    img: <DiamondSVG width="25" height="25" />,
    title: "Valeur",
    description:
      "Chez Europ'Alu, nous plaçons l'innovation, la qualité, et la satisfaction client au cœur de tout ce que nous entreprenons. Nous nous engageons à respecter les standards les plus élevés en matière de sécurité et d'excellence, tout en favorisant un environnement de travail collaboratif et respectueux.",
    color: "#FFCC66",
  },
  {
    img: <MissionSVG width="25" height="25" />,
    title: "Mission",
    description:
      "Notre mission est de concevoir et fournir des solutions en aluminium de haute qualité, répondant aux besoins spécifiques de nos clients. Nous visons à améliorer le confort et l’esthétique des bâtiments tout en intégrant des technologies durables et performantes.",
    color: "#FF9966",
  },
  {
    img: <ObjectifSVG width="25" height="25" />,
    title: "Objectif",
    description:
      "L’objectif d’Europ'Alu est de devenir le partenaire de référence dans le domaine de l'aluminium, en offrant des produits et services qui allient design, durabilité et innovation, tout en construisant des relations de confiance avec nos clients et partenaires.",
    color: "#33CCCC",
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
