/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment } from "react/jsx-runtime";
import AddButton from "../../../components/AddButton/AddButton";
import CampagneCard from "../../../components/Card/Card";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
import useForm from "../../../hooks/useForm";
import "./campagne.scss";
import { campagneFields } from "../../../assets/ts/campagne";
import useCampagne from "../../../hooks/useCampagne";
import useFilterDatas from "../../../hooks/useFilterDatas";
import { validateCampagne } from "../../../utils/validationSchema";

const Campagne = () => {
  const formContext = useForm();
  const campagneContext = useCampagne();
  const campagnes = useFilterDatas(campagneContext?.campagnes);

  const handleClick = () => {
    formContext?.setOpenForm(true);
    formContext?.setSlug("Campagne");
    formContext?.setFormFields(campagneFields);
    formContext?.setTitle("add");
    formContext?.setUrl("/campagne");
    formContext?.setValidate(validateCampagne);
  };

  return (
    <MediaCompanyContainer>
      <div className="page-cards-container">
        <AddButton handleClick={handleClick} />
        <div className="campagne-container cards-container">
          {campagnes?.length > 0
            ? campagnes.map((campagne, index) => (
                <Fragment key={index}>
                  <CampagneCard
                    card={campagne}
                    slug="Campagne"
                    isClickable={true}
                    url="/campagne/delete"
                  />
                </Fragment>
              ))
            : null}
        </div>
      </div>
    </MediaCompanyContainer>
  );
};

export default Campagne;
