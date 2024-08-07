import { Card } from "../Card/Card";

type SubscribePropsType = {
  card: Card;
};

const Subscribe = ({ card }: SubscribePropsType) => {
  return (
    <div className="cards-content campagne-log">
      {card.mail ? (
        <span>
          <span className="span-bold span-orange">{card.mail}</span> s'est
          inscrit sur le campagne {card.entreprise}{" "}
          <span className="span-bold span-white">{card.id}</span>.
        </span>
      ) : card.deleteId ? (
        <span>
          Suppression de la campagne{" "}
          <span className="span-bold span-orange">{card.title}</span> pour
          l'entreprise{" "}
          <span className="span-bold span-white">{card.entreprise}</span>.
        </span>
      ) : (
        <span>
          Création de la campagne{" "}
          <span className="span-bold span-orange">{card.title}</span> pour
          l'entreprise{" "}
          <span className="span-bold span-white">{card.entreprise}</span>.
        </span>
      )}
      <span className="span-bold span-white">
        {card.dateDebut?.slice(0, 10) + " " + card.dateDebut?.slice(11, 16)}
      </span>
    </div>
  );
};

export default Subscribe;
