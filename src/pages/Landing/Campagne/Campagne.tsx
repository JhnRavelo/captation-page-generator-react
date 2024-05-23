import AddButton from "../../../components/AddButton/AddButton";
import CampagneCard from "../../../components/CampagneCard/CampagneCard";
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

const Campagne = () => {
  return (
    <div className="content-container">
      <AddButton />
      <div className="campagne-container">
        {campagnes?.length > 0 &&
          campagnes.map((campagne) => <CampagneCard campagne={campagne} />)}
      </div>
    </div>
  );
};

export default Campagne;
