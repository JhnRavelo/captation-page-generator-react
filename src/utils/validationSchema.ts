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
    >;

export type TypeValidateForm = Yup.ObjectSchema<
  {
    name: string;
    dateDebut: Date;
    dateFin: Date;
    description: string;
  },
  Yup.AnyObject,
  {
    name: undefined;
    dateDebut: undefined;
    dateFin: undefined;
    description: undefined;
  },
  ""
> | null;

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
  name: Yup.string().required("Vous devez mettre le titre du campagne"),
  dateDebut: Yup.date().required("Vous devez mettre le debut de la campagne"),
  dateFin: Yup.date().required("Vous devez mettre la fin de la campagne"),
  description: Yup.string().required("Vous devez mettre un description"),
});
