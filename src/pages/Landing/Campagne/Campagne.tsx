import { Fragment } from "react/jsx-runtime";
import AddButton from "../../../components/AddButton/AddButton";
import CampagneCard, { Card } from "../../../components/Card/Card";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
import { TypeInitialValues } from "../../../context/AddFormProvider";
import useForm from "../../../hooks/useForm";
import "./campagne.scss";
import { campagneFields } from "../../../assets/ts/campagne";
import useMediaEntreprise from "../../../hooks/useMediaEntreprise";
import { useEffect, useState } from "react";
import useCampagne from "../../../hooks/useCampagne";

const initialValues: TypeInitialValues = {
  name: "",
  dateDebut: "",
  dateFin: "",
  description: "",
  user: "",
};

const Campagne = () => {
  const formContext = useForm();
  const entrepriseContext = useMediaEntreprise();
  const campagneContext = useCampagne();
  const [campagnes, setCampagnes] = useState<Card[]>([]);

  useEffect(() => {
    const filterCampagnes = campagneContext?.campagnes.filter(
      (campagne) => campagne.entreprise == entrepriseContext?.entreprise
    );
    if (filterCampagnes) {
      setCampagnes(filterCampagnes);
    }
  }, [entrepriseContext?.entreprise, campagneContext?.campagnes]);

  const handleClick = () => {
    formContext?.setOpenForm(true);
    formContext?.setSlug("Campagne");
    formContext?.setInitialValues(initialValues);
    formContext?.setFormFields(campagneFields);
    formContext?.setTitle("add");
    formContext?.setUrl("/campagne");
  };

  return (
    <MediaCompanyContainer>
      <div className="page-cards-container">
        <AddButton handleClick={handleClick} />
        <div className="campagne-container cards-container">
          {campagnes?.length > 0 &&
            campagnes.map((campagne, index) => (
              <Fragment key={index}>
                <CampagneCard
                  card={campagne}
                  slug="Campagne"
                  isClickable={true}
                />
              </Fragment>
            ))}
        </div>
      </div>
    </MediaCompanyContainer>
  );
};

export default Campagne;
