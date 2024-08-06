import { Field, Form, Formik } from "formik";
import { TypeValidateLogin } from "../../utils/validationSchema";
import "./profileForm.scss";
import useAuth from "../../hooks/useAuth";
import { axiosDefault } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import LeftArrow from "../../assets/svg/LeftArrow";
import { toast } from "react-toastify";
import ViewSVG from "../../assets/svg/ViewSVG";
import ViewOffSVG from "../../assets/svg/ViewOffSVG";

type ProfileFormPropsType = {
  initialValues: TypeInitialProfile;
  validate: TypeValidateLogin;
  title: "Connexion" | "Modifier Profile" | "Mot de passe oublié";
  btnTitle: "Se connecter" | "Envoyer";
  forms: TypeProfileFormFields;
};

export type TypeProfileFormFields = {
  name: "email" | "password" | "confirmPassword" | "name";
  header: string;
  placeholder: string;
  type: string;
}[];

export type TypeInitialProfile = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
};

const ProfileForm = ({
  initialValues,
  validate,
  title,
  btnTitle,
  forms,
}: ProfileFormPropsType) => {
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const authContext = useAuth();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const handleSubmit = async (values: TypeInitialProfile) => {
    const formData = new FormData();
    const valuesEntries = Object.entries(values);
    valuesEntries.forEach(([key, value]) => {
      formData.append(`${key}`, value);
    });
    try {
      let res;

      if (title === "Mot de passe oublié") {
        res = await axiosDefault.post("/auth/password-forget", formData);

        if (res.data.success) {
          setError("");
          toast.success(res.data.message);
          navigate("/");
        } else {
          toast.error(res.data.message);
          setError(res.data.message);
        }
        return;
      }

      if (title == "Connexion") {
        res = await axiosDefault.post("/auth/login", formData);
      } else {
        res = await axiosPrivate.post("/auth/edit", formData);
      }

      if (res.data.success) {
        setError("");
        toast.success(res.data.message);
        authContext?.setAuth(res.data.user);
        navigate("/marketing");
      } else {
        toast.error(res.data.message);
        setError(res.data.message);
      }
    } catch (error) {
      toast.error("Erreur du serveur");
      setError("Erreur du serveur");
      console.log(error);
    }
  };

  return (
    <div className="login-content">
      <div className="background login">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validate}
      >
        {({ errors }) => (
          <Form>
            {title === "Modifier Profile" ? (
              <div className="title-container">
                <div className="arrow" onClick={() => navigate("/marketing")}>
                  <LeftArrow width="50" height="40" />
                </div>
                <h3>{title}</h3>
              </div>
            ) : (
              <h3>{title}</h3>
            )}
            {forms &&
              forms.length > 0 &&
              forms.map((form, index) => (
                <div key={index} className="input-container">
                  <label htmlFor={form.name}>{form.header}</label>
                  {form.name === "password" ||
                  form.name === "confirmPassword" ? (
                    <div className="password-container">
                      <Field
                        type={!visible ? form.type : "text"}
                        placeholder={form.placeholder}
                        id={form.name}
                        name={form.name}
                      />
                      {visible ? (
                        <ViewOffSVG
                          height="20"
                          width="20"
                          onClick={() => setVisible((prev) => !prev)}
                        />
                      ) : (
                        <ViewSVG
                          height="20"
                          width="20"
                          onClick={() => setVisible((prev) => !prev)}
                        />
                      )}
                    </div>
                  ) : (
                    <Field
                      type={!visible ? form.type : "text"}
                      placeholder={form.placeholder}
                      id={form.name}
                      name={form.name}
                    />
                  )}
                  {error ? (
                    <p className="error">{error}</p>
                  ) : errors[form.name] ? (
                    <p className="error">{errors[form.name]}</p>
                  ) : null}
                </div>
              ))}
            <button type="submit">{btnTitle}</button>
            {title == "Connexion" ? (
              <div
                className="password-forget"
                onClick={() => navigate("/forget")}
              >
                <span>Mot de passe oublié ?</span>
              </div>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfileForm;
