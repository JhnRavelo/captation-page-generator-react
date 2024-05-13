import { validateLogin } from "../../utils/validationSchema";
import LoginForm from "../../components/ProfileForm/ProfileForm";
import { TypeProfileFormFields } from "../EditProfile/EditProfile";

const initialLoginValues = {
  email: "",
  password: "",
};

const loginFields: TypeProfileFormFields = [
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

const Login = () => {
  return (
    <LoginForm
      title="Connexion"
      validate={validateLogin}
      initialValues={initialLoginValues}
      forms={loginFields}
      btnTitle="Se connecter"
    />
  );
};

export default Login;
