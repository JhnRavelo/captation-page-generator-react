import LogoEuro from "../../assets/png/Logo_aluhd.png";
import LogoVertec from "../../assets/png/vertec.png";
import LogoAlu from "../../assets/png/alu.png";
import LogoSmart from "../../assets/png/logo EA SMART-RVB blanc-2.png";
import "./company.scss";
import { useRef } from "react";
import useActive from "../../hooks/useActive";

const Company = () => {
  const listCompanyRef = useRef<HTMLDivElement>(null);
  const active = useActive();

  return (
    <div className="company-container">
      <div className="company-list" ref={listCompanyRef}>
        <div
          className="company-content active"
          onClick={(e) => active(e, listCompanyRef)}
        >
          <img src={LogoEuro} alt="logo Europ'alu" />
        </div>
        <div
          className="company-content"
          onClick={(e) => active(e, listCompanyRef)}
        >
          <img src={LogoAlu} alt="logo Alu" />
        </div>
        <div
          className="company-content"
          onClick={(e) => active(e, listCompanyRef)}
        >
          <img src={LogoVertec} alt="logo Vertec" />
        </div>
        <div
          className="company-content"
          onClick={(e) => active(e, listCompanyRef)}
        >
          <img src={LogoSmart} alt="logo Europ'alu Smart" />
        </div>
      </div>
    </div>
  );
};

export default Company;
