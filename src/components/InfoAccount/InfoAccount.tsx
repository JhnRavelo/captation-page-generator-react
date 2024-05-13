import { useRef } from "react";
import EditSVG from "../../assets/svg/EditSVG";
import LogoutSVG from "../../assets/svg/LogoutSVG";
import ThreeDotSVG from "../../assets/svg/ThreeDotSVG";
import "./infoAccount.scss";
import { useNavigate } from "react-router-dom";

type InfoAccountPropsType = {
  img: string;
  name: string;
};

const InfoAccount = ({ img, name }: InfoAccountPropsType) => {
  const optionsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  return (
    <>
      <div className="options" ref={optionsRef}>
        <div className="option" onClick={() => navigate("/edit-profile")}>
          <span>Modifier Profile</span>
          <EditSVG width="30" height="20" />
        </div>
        <div className="option">
          <span>Déconnexion</span>
          <LogoutSVG width="30" height="20" />
        </div>
      </div>
      <div className="account-info">
        <div className="account-info-picture">
          <span>
            <img src={img} alt="Account" />
            <input type="file" id="img-profile" style={{ display: "none" }} />
            <label className="image-overlay" htmlFor="img-profile">
              <EditSVG width="23" height="23" />
            </label>
          </span>
        </div>
        <span>{name}</span>
        <span className="more-options" onClick={() => optionsRef.current?.classList.toggle("visible")}>
          <ThreeDotSVG width="35" height="35" />
        </span>
      </div>
    </>
  );
};

export default InfoAccount;
