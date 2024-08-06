import { forgetPasswordFields } from "../../assets/ts/login";
import ForgetForm from "../../components/ProfileForm/ProfileForm";
import { validateForgetPassword } from "../../utils/validationSchema";

const initialForgetValues = {
  email: "",
};

const ForgetPassword = () => {
  return (
    <ForgetForm
      initialValues={initialForgetValues}
      title="Mot de passe oublié"
      validate={validateForgetPassword}
      btnTitle="Envoyer"
      forms={forgetPasswordFields}
    />
  );
};

export default ForgetPassword;
