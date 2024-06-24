import "./company.scss";
import { useRef } from "react";
import useActive from "../../hooks/useActive";
import { companies } from "../../assets/ts/company";
import useMediaEntreprise from "../../hooks/useMediaEntreprise";

const Company = () => {
  const listCompanyRef = useRef<HTMLDivElement>(null);
  const active = useActive();
  const companyContext = useMediaEntreprise();

  return (
    <div className="company-container">
      <div className="company-list" ref={listCompanyRef}>
        {companies.map((company, index) => (
          <div
            className={
              index == 0 ? "company-content active" : "company-content"
            }
            onClick={(e) => {
              active(e, listCompanyRef);
              companyContext?.setEntreprise(company.company);
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
