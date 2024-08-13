/* eslint-disable react-hooks/exhaustive-deps */
import "./company.scss";
import { useRef } from "react";
import useActive from "../../hooks/useActive";
import { companies } from "../../assets/ts/company";
import useMediaEntreprise from "../../hooks/useMediaEntreprise";
import { useLocation } from "react-router-dom";

const Company = () => {
  const { pathname } = useLocation();
  const listCompanyRef = useRef<HTMLDivElement>(null);
  const active = useActive();
  const companyContext = useMediaEntreprise();

  return (
    <div
      className={
        pathname.includes("marketing/campagne/")
          ? "company-container campagne"
          : "company-container"
      }
    >
      <div className="company-list" ref={listCompanyRef}>
        {companies.map((company, index) => (
          <div
            className={
              companyContext?.entreprise.company == company.company
                ? "company-content active"
                : "company-content"
            }
            onClick={(e) => {
              active(e, listCompanyRef);
              companyContext?.setEntreprise(company);
            }}
            key={index}
          >
            <img src={company.img} alt={"logo " + company.company} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
