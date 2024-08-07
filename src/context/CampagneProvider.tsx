import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";

export type TypeSetState = React.Dispatch<React.SetStateAction<Card[]>>;

type TypeCampagnesValues = {
  campagnes: Card[];
  setCampagnes: TypeSetState;
  isCampagne: boolean;
  setIsCampagne: React.Dispatch<React.SetStateAction<boolean>>;
} | null;

const CampagneContext = createContext<TypeCampagnesValues>(null);

const CampagneProvider = ({ children }: ContextPropsType) => {
  const [campagnes, setCampagnes] = useState<Card[]>([]);
  const [isCampagne, setIsCampagne] = useState(false);
  return (
    <CampagneContext.Provider
      value={{ campagnes, setCampagnes, isCampagne, setIsCampagne }}
    >
      {children}
    </CampagneContext.Provider>
  );
};

export { CampagneProvider };

export default CampagneContext;
