import { Fragment } from "react/jsx-runtime";
import AddButton from "../../../components/AddButton/AddButton";
import CampagneCard from "../../../components/CampagneCard/CampagneCard";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
import { TypeInitialValues } from "../../../context/AddFormProvider";
import useForm from "../../../hooks/useForm";
import "./campagne.scss";
import { campagneFields } from "../../../assets/ts/campagne";

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

const Campagne = () => {
  const formContext = useForm();

  const handleClick = () => {
    formContext?.setOpenForm(true);
    formContext?.setSlug("campagne");
    formContext?.setInitialValues(initialValues);
    formContext?.setFormFields(campagneFields);
    formContext?.setTitle("add");
  };

  return (
    <MediaCompanyContainer>
      <div className="content-container">
        <AddButton handleClick={handleClick} />
        <div className="campagne-container cards-container">
          {campagnes?.length > 0 &&
            campagnes.map((campagne, index) => (
              <Fragment key={index}>
                <CampagneCard campagne={campagne} />
              </Fragment>
            ))}
        </div>
      </div>
    </MediaCompanyContainer>
  );
};

export default Campagne;
