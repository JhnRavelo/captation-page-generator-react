import { TypeProfileFormFields } from "../../components/ProfileForm/ProfileForm";

export const loginFields: TypeProfileFormFields = [
  {
    type: "text",
    name: "email",
    placeholder: "Adresse Email",
    header: "Email",
  },
  {
    type: "password",
    name: "password",
    placeholder: "Mot de passe",
    header: "Mot de passe",
  },
];

export const signupFields: TypeProfileFormFields = [
  {
    name: "name",
    header: "Nom d'utilisateur",
    placeholder: "Nom d'utilisateur",
    type: "text",
  },
  {
    name: "password",
    header: "Mot de passe",
    placeholder: "Mot de passe",
    type: "password",
  },
  {
    name: "confirmPassword",
    header: "Confirmez le mot de passe",
    placeholder: "Confirmez le mot de passe",
    type: "password",
  },
];
