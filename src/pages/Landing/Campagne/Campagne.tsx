import AddButton from "../../../components/AddButton/AddButton";
import CampagneCard from "../../../components/CampagneCard/CampagneCard";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
import { TypeAddFormFields, TypeInitialValues } from "../../../context/AddFormProvider";
import useForm from "../../../hooks/useForm";
import "./campagne.scss";

const campagnes = [
  {
    id: "ID Campagne",
    title: "Title Campagne",
    user: "Name Owner",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ver dolorum voluptatibus amet. Recusandae perferendis repellat sed.Ducimus alias ullam consequatur eveniet ratione at nemo explicabonatus asperiores dicta",
    dateDebut: "12-05-2024",
    dateFin: "17-05-2024",
  },
  {
    id: "ID Campagne",
    title: "Title Campagne",
    user: "Name Owner",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ver dolorum voluptatibus amet. Recusandae perferendis repellat sed.Ducimus alias ullam consequatur eveniet ratione at nemo explicabonatus asperiores dicta",
    dateDebut: "12-05-2024",
    dateFin: "17-05-2024",
  },
  {
    id: "ID Campagne",
    title: "Title Campagne",
    user: "Name Owner",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ver dolorum voluptatibus amet. Recusandae perferendis repellat sed.Ducimus alias ullam consequatur eveniet ratione at nemo explicabonatus asperiores dicta",
    dateDebut: "12-05-2024",
    dateFin: "17-05-2024",
  },
  {
    id: "ID Campagne",
    title: "Title Campagne",
    user: "Name Owner",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ver dolorum voluptatibus amet. Recusandae perferendis repellat sed.Ducimus alias ullam consequatur eveniet ratione at nemo explicabonatus asperiores dicta",
    dateDebut: "12-05-2024",
    dateFin: "17-05-2024",
  },
  {
    id: "ID Campagne",
    title: "Title Campagne",
    user: "Name Owner",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ver dolorum voluptatibus amet. Recusandae perferendis repellat sed.Ducimus alias ullam consequatur eveniet ratione at nemo explicabonatus asperiores dicta",
    dateDebut: "12-05-2024",
    dateFin: "17-05-2024",
  },
  {
    id: "ID Campagne",
    title: "Title Campagne",
    user: "Name Owner",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ver dolorum voluptatibus amet. Recusandae perferendis repellat sed.Ducimus alias ullam consequatur eveniet ratione at nemo explicabonatus asperiores dicta",
    dateDebut: "12-05-2024",
    dateFin: "17-05-2024",
  },
  {
    id: "ID Campagne",
    title: "Title Campagne",
    user: "Name Owner",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ver dolorum voluptatibus amet. Recusandae perferendis repellat sed.Ducimus alias ullam consequatur eveniet ratione at nemo explicabonatus asperiores dicta",
    dateDebut: "12-05-2024",
    dateFin: "17-05-2024",
  },
];

const initialValues: TypeInitialValues = {
  name: "",
  dateDebut: "",
  dateFin: "",
  description: "",
  user: "",
};

const campagneFields: TypeAddFormFields = [
  {
    name: "name",
    type: "text",
    header: "Titre de la campagne",
    placeholder: "Titre de la campagne",
  },
  {
    name: "description",
    type: "text",
    header: "Description de la campagne",
    placeholder: "Description de la campagne",
  },
  {
    name: "dateDebut",
    type: "date",
    header: "Date de début de la campagne",
    placeholder: "Date de début de la campagne",
  },
  {
    name: "dateFin",
    type: "date",
    header: "Date de fin de la campagne",
    placeholder: "Date de fin de la campagne",
  },
];

const Campagne = () => {
  const formContext = useForm();

  const handleClick = () => {
    formContext?.setOpenForm(true);
    formContext?.setSlug("campagne");
    formContext?.setInitialValues(initialValues);
    formContext?.setFormFields(campagneFields)
  };

  return (
    <MediaCompanyContainer>
      <div className="content-container">
        <AddButton handleClick={handleClick} />
        <div className="campagne-container">
          {campagnes?.length > 0 &&
            campagnes.map((campagne) => <CampagneCard campagne={campagne} />)}
        </div>
      </div>
    </MediaCompanyContainer>
  );
};

export default Campagne;
