/* eslint-disable react-hooks/exhaustive-deps */
import "./company.scss";
import { Fragment, useEffect, useRef, useState } from "react";
import useMediaEntreprise from "../../hooks/useMediaEntreprise";
import { useLocation } from "react-router-dom";
import useEntreprise from "../../hooks/useEntreprise";
import SingleCompany from "./SingleCompany/SingleCompany";

const Company = () => {
  const [once, setOnce] = useState(true);
  const { pathname } = useLocation();
  const listCompanyRef = useRef<HTMLDivElement>(null);
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
            <Fragment key={index}>
              <SingleCompany company={company} />
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default Company;
