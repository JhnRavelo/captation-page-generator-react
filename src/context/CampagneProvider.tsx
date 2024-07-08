import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";

export type TypeSetState = React.Dispatch<React.SetStateAction<Card[]>>;

type TypeCampagnesValues = {
  campagnes: Card[];
  setCampagnes: TypeSetState;
  campagne: Card | null;
  setCampagne: React.Dispatch<React.SetStateAction<Card | null>>;
} | null;

const CampagneContext = createContext<TypeCampagnesValues>(null);

const CampagneProvider = ({ children }: ContextPropsType) => {
  const [campagnes, setCampagnes] = useState<Card[]>([]);
  const [campagne, setCampagne] = useState<Card | null>(null);
  return (
    <CampagneContext.Provider
      value={{ campagnes, setCampagnes, campagne, setCampagne }}
    >
      {children}
    </CampagneContext.Provider>
  );
};

export { CampagneProvider };

export default CampagneContext;
