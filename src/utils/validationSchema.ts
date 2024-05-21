import * as Yup from "yup";

export type TypeValidateLogin = Yup.ObjectSchema<
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

export const validateProfile = Yup.object({
  name: Yup.string()
    .required("Vous devez mettre votre nom")
    .matches(/^[A-Za-z]+$/, "Votre nom doit seulement contenir des lettres"),
  email: Yup.string()
    .required("Vous devez mettre votre adresse email")
    .email(`l'adresse email est invalide`),
  password: Yup.string()
    .min(8, "Le mot de passe doit avoir au moins 8 caractères")
    .matches(
      /[A-Z]/,
      "Le mot de passe doit contenir au moins une lettre majuscule"
    )
    .matches(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
    .required("Le mot de passe est requis"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Le mot de passe doit être le même")
    .required("Le mot de passe doit être confirmer"),
});
