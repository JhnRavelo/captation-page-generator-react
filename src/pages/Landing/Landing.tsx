import AddForm from "../../components/Modal/Modal";
import Menu from "../../components/Menu/Menu";
import useForm from "../../hooks/useForm";
import AdminRouter from "../../routers/AdminRouter";
import "./landing.scss";

const Landing = () => {
  const formContext = useForm();
  return (
    <div
      className="main"
      onClick={(e) => {
        if (!(e.target instanceof Element)) return;
        const parent = e.target.parentNode;
        if (!parent || !(parent instanceof Element)) return;
        const isOutsideOptions = !(
          parent.classList.contains("option") ||
          parent.classList.contains("more-options")
        );
        if (isOutsideOptions) {
          const optionsMenu = document.querySelector(".options");
          if (optionsMenu) {
            optionsMenu.classList.remove("visible");
          }
        }
      }}
    >
      <div className="background dashboard">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      {formContext?.openForm && <AddForm />}
      <div className="container">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="page-container">
          <div className="page-content content">
            <AdminRouter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
