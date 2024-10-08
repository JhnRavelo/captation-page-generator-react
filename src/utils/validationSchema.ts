import * as Yup from "yup";

export type TypeValidateLogin =
  | Yup.ObjectSchema<
      {
        email: string;
        password: string;
      },
      Yup.AnyObject,
      {
        email: undefined;
        password: undefined;
      },
      ""
    >
  | Yup.ObjectSchema<
      {
        name: string;
        password: string | undefined;
        confirmPassword: string | undefined;
      },
      Yup.AnyObject,
      {
        name: undefined;
        password: undefined;
        confirmPassword: undefined;
      },
      ""
    >
  | Yup.ObjectSchema<
      {
        email: string;
      },
      Yup.AnyObject,
      {
        email: undefined;
      },
      ""
    >
  | Yup.ObjectSchema<
      {
        title: string;
        dateDebut: Date;
        dateFin: Date;
        description: string;
      },
      Yup.AnyObject,
      {
        title: undefined;
        dateDebut: undefined;
        dateFin: undefined;
        description: undefined;
      },
      ""
    >;

export type TypeValidateForm =
  | Yup.ObjectSchema<
      {
        title: string;
        dateDebut: Date;
        dateFin: Date;
        description: string;
      },
      Yup.AnyObject,
      {
        title: undefined;
        dateDebut: undefined;
        dateFin: undefined;
        description: undefined;
      },
      ""
    >
  | null
  | Yup.ObjectSchema<
      {
        mailText: string;
        object: string;
      },
      Yup.AnyObject,
      {
        mailText: undefined;
        object: undefined;
      },
      ""
    >
  | Yup.ObjectSchema<
      {
        campagnes: (string | undefined)[] | undefined;
      },
      Yup.AnyObject,
      {
        campagnes: "";
      },
      ""
    >
  | Yup.ObjectSchema<
      {
        company: string;
      },
      Yup.AnyObject,
      {
        company: undefined;
      },
      ""
    >;

export const validateLogin = Yup.object({
  email: Yup.string()
    .required("Vous devez mettre votre adresse email")
    .email("L’adresse email est invalide"),
  password: Yup.string()
    .min(8, "Le mot de passe doit avoir au moins 8 caractères")
    .matches(
      /[A-Z]/,
      "Le mot de passe doit contenir au moins une lettre majuscule"
    )
    .matches(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
    .required("Le mot de passe est requis"),
});

export const validateForgetPassword = Yup.object({
  email: Yup.string()
    .required("Vous devez mettre votre adresse email")
    .email("L’adresse email est invalide"),
});

export const validateProfile = Yup.object({
  name: Yup.string().required("Vous devez mettre votre nom"),
  password: Yup.string()
    .min(8, "Le mot de passe doit avoir au moins 8 caractères")
    .matches(
      /[A-Z]/,
      "Le mot de passe doit contenir au moins une lettre majuscule"
    )
    .matches(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), ""],
    "Le mot de passe doit être le même"
  ),
});

export const validateCampagne = Yup.object({
  title: Yup.string().required("Vous devez mettre le titre du campagne"),
  dateDebut: Yup.date().required(
    "Vous devez mettre la date de debut de la campagne"
  ),
  dateFin: Yup.date().required(
    "Vous devez mettre la date de la fin de la campagne"
  ),
  description: Yup.string().required("Vous devez mettre un description"),
});

export const validateCampagneMail = Yup.object({
  mailText: Yup.string().required(
    "Le contenu de l'email ne doit pas être vide"
  ),
  object: Yup.string().required("L'objet de l'email ne doit pas être vide"),
  delay: Yup.number().required("Vous mettre un délais entre les emails"),
  title: Yup.string().required("Vous devez mettre le titre de l'email"),
});

export const validateCampagneMailOne = Yup.object({
  mailText: Yup.string().required(
    "Le contenu de l'email ne doit pas être vide"
  ),
  object: Yup.string().required("L'objet de l'email ne doit pas être vide"),
  title: Yup.string().required("Vous devez mettre le titre de l'email"),
});

export const validateQRCode = Yup.object({
  campagnes: Yup.array()
    .of(Yup.string())
    .min(1, "Sélectionnez une campagne")
    .max(1, "Sélectionnez seulement une campagne"),
});

export const validatePage = Yup.object({
  campagnes: Yup.array()
    .of(Yup.string())
    .min(1, "Vous devez sélectionnez une campagne")
    .max(1, "Vous devez choisir seulement une campagne"),
  titleColor: Yup.string().required(
    "Vous devez choisir une couleur pour le titre"
  ),
  sloganCampagne: Yup.string().required(
    "Vous devez mettre le slogan du campagne"
  ),
  titleBackgroundColor: Yup.string().required(
    "Vous devez choisir une couleur pour le fond"
  ),
  imgCampagne: Yup.mixed().required(
    "Vous devez choisir l'image de la campagne"
  ),
});

export const validateUpdatePage = Yup.object({
  campagnes: Yup.array()
    .of(Yup.string())
    .min(1, "Vous devez sélectionnez une campagne")
    .max(1, "Vous devez choisir seulement une campagne"),
  titleColor: Yup.string().required(
    "Vous devez choisir une couleur pour le titre"
  ),
  sloganCampagne: Yup.string().required(
    "Vous devez mettre le slogan du campagne"
  ),
  titleBackgroundColor: Yup.string().required(
    "Vous devez choisir une couleur pour le fond"
  ),
});

export const validateEntreprise = Yup.object({
  company: Yup.string().required("Vous devez remplir votre nom d'entreprise"),
  logo: Yup.mixed().required("Vous devez choisir le logo pour le QR Code"),
  imgCampagne: Yup.mixed().required(
    "Vous devez choisir le logo de l'entreprise"
  ),
  facebook: Yup.string().required("Vous devez remplir le lien pour facebook"),
});
