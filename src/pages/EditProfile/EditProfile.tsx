import EditForm from "../../components/ProfileForm/ProfileForm";
import { validateProfile } from "../../utils/validationSchema";
import useAuth from "../../hooks/useAuth";

export type TypeProfileFormFields = {
  name: "email" | "password" | "confirmPassword" | "name";
  header: string;
  placeholder: string;
  type: string;
}[];

export type TypeInitialProfile = {
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
};

const signupFields: TypeProfileFormFields = [
  {
    name: "name",
    header: "Nom d'utilisateur",
    placeholder: "Nom d'utilisateur",
    type: "text",
  },
  {
    name: "email",
    header: "Email",
    placeholder: "Adresse email",
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

const EditProfile = () => {
  const authContext = useAuth();

  const initialSignupValue: TypeInitialProfile = {
    email: authContext?.auth?.email ? authContext?.auth?.email : "",
    password: "",
    confirmPassword: "",
    name: authContext?.auth?.name,
  };
  return (
    <EditForm
      title="Modifier Profile"
      forms={signupFields}
      initialValues={initialSignupValue}
      btnTitle="Envoyer"
      validate={validateProfile}
    />
  );
};

export default EditProfile;
