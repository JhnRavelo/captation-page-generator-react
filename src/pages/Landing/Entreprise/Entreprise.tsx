import { Fragment } from "react";
import { companyFields } from "../../../assets/ts/company";
import AddButton from "../../../components/AddButton/AddButton";
import EntrepriseCard from "../../../components/Card/Card";
import useForm from "../../../hooks/useForm";
import "./entreprise.scss";
import { validateEntreprise } from "../../../utils/validationSchema";
import useEntreprise from "../../../hooks/useEntreprise";

const Entreprise = () => {
  const formContext = useForm();
  const entrepriseContext = useEntreprise();

  const handleClick = () => {
    formContext?.setOpenForm(true);
    formContext?.setSlug("Entreprise");
    formContext?.setFormFields(companyFields);
    formContext?.setTitle("add");
    formContext?.setUrl("/entreprise");
    formContext?.setValidate(validateEntreprise);
  };

  return (
    <div className="infos-container" style={{ height: "85vh" }}>
      <div className="page-cards-container">
        <AddButton handleClick={handleClick} />
        <div className="cards-container Entreprise">
          {entrepriseContext?.entreprises.map((company, index) => (
            <Fragment key={index}>
              <EntrepriseCard
                card={company}
                slug="Entreprise"
                isClickable={false}
                url="/entreprise"
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Entreprise;
