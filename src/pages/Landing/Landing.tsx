import Company from "../../components/Company/Company";
import InputYear from "../../components/InputYear/InputYear";
import MediaOptions from "../../components/MediaOptions/MediaOptions";
import Menu from "../../components/Menu/Menu";
import AdminRouter from "../../routers/AdminRouter";
import "./landing.scss";

const Landing = () => {
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
      <div className="container">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="page-container">
          <div className="page-content content">
            <div className="main-stat">
              <MediaOptions />
              <div className="year-container">
                <InputYear />
              </div>
              <div className="infos-container">
                <AdminRouter />
              </div>
              <Company />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
