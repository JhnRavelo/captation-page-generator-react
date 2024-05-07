import "./login.scss";

const Login = () => {
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Connexion</h3>
        <label htmlFor="username">Email</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Mot de passe</label>
        <input type="password" placeholder="Password" id="password" />
        <button type="submit">Se connecter</button>
      </form>
    </>
  );
};

export default Login;
