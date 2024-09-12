/* eslint-disable react-hooks/exhaustive-deps */
import "./company.scss";
import { useEffect, useRef, useState } from "react";
import useActive from "../../hooks/useActive";
import useMediaEntreprise from "../../hooks/useMediaEntreprise";
import { useLocation } from "react-router-dom";
import useEntreprise from "../../hooks/useEntreprise";

const Company = () => {
  const [once, setOnce] = useState(true);
  const { pathname } = useLocation();
  const listCompanyRef = useRef<HTMLDivElement>(null);
  const active = useActive();
  const companyContext = useMediaEntreprise();
  const entrepriseContext = useEntreprise();

  useEffect(() => {
    if (
      entrepriseContext?.entreprises &&
      entrepriseContext?.entreprises.length > 0 &&
      once
    ) {
      companyContext?.setEntreprise(entrepriseContext?.entreprises[0]);
      setOnce(false);
    }
  }, [entrepriseContext?.entreprises, once]);

  return (
    <div
      className={
        pathname.includes("marketing/campagne/")
          ? "company-container campagne"
          : "company-container"
      }
    >
      <div className="company-list" ref={listCompanyRef}>
        {entrepriseContext?.entreprises &&
          companyContext?.entreprise &&
          entrepriseContext?.entreprises.map((company, index) => (
            <div
              className={
                companyContext?.entreprise?.company == company.company
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
