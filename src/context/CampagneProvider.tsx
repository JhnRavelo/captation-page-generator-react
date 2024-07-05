import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";

export type TypeSetState = React.Dispatch<React.SetStateAction<Card[]>>;

type TypeCampagnesValues = {
  campagnes: Card[];
  setCampagnes: TypeSetState;
} | null;

const CampagneContext = createContext<TypeCampagnesValues>(null);

const CampagneProvider = ({ children }: ContextPropsType) => {
  const [campagnes, setCampagnes] = useState<Card[]>([]);
  return (
    <CampagneContext.Provider value={{ campagnes, setCampagnes }}>
      {children}
    </CampagneContext.Provider>
  );
};

export { CampagneProvider };

export default CampagneContext;
