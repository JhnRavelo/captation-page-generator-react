import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";
import { TypeSetState } from "./CampagneProvider";

type TypeEntrepriseContext = {
  entreprises: Card[];
  setEntreprises: TypeSetState;
  entreprise: Card | null;
  setEntreprise: React.Dispatch<React.SetStateAction<Card | null>>;
} | null;

const EntrepriseContext = createContext<TypeEntrepriseContext>(null);

const EntrepriseProvider = ({ children }: ContextPropsType) => {
  const [entreprises, setEntreprises] = useState<Card[]>([]);
  const [entreprise, setEntreprise] = useState<Card | null>(null);

  return (
    <EntrepriseContext.Provider
      value={{
        entreprises,
        setEntreprises,
        entreprise,
        setEntreprise,
      }}
    >
      {children}
    </EntrepriseContext.Provider>
  );
};

export default EntrepriseProvider;

export { EntrepriseContext };
