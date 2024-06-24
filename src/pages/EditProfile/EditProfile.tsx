import EditForm, { TypeInitialProfile } from "../../components/ProfileForm/ProfileForm";
import { validateProfile } from "../../utils/validationSchema";
import useAuth from "../../hooks/useAuth";
import { signupFields } from "../../assets/ts/login";

const EditProfile = () => {
  const authContext = useAuth();

  const initialSignupValue: TypeInitialProfile = {
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
