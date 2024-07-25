import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";
import { TypeSetState } from "./CampagneProvider";

type TypeEntrepriseContext = {
  entreprises: Card[];
  setEntreprises: TypeSetState;
} | null;

const EntrepriseContext = createContext<TypeEntrepriseContext>(null);

const EntrepriseProvider = ({ children }: ContextPropsType) => {
  const [entreprises, setEntreprises] = useState<Card[]>([]);

  return (
    <EntrepriseContext.Provider value={{ entreprises, setEntreprises }}>
      {children}
    </EntrepriseContext.Provider>
  );
};

export default EntrepriseProvider;

export { EntrepriseContext };
