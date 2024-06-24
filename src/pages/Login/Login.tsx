import { validateLogin } from "../../utils/validationSchema";
import LoginForm from "../../components/ProfileForm/ProfileForm";
import { loginFields } from "../../assets/ts/login";

const initialLoginValues = {
  email: "",
  password: "",
};

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
