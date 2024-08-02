import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";

type TypeStatContext = {
  nbrScans: Card[];
  setNbrScans: React.Dispatch<React.SetStateAction<Card[]>>;
  nbrMails: Card[];
  setNbrMails: React.Dispatch<React.SetStateAction<Card[]>>;
} | null;

const StatContext = createContext<TypeStatContext>(null);

const StatProvider = ({ children }: ContextPropsType) => {
  const [nbrScans, setNbrScans] = useState<Card[]>([]);
  const [nbrMails, setNbrMails] = useState<Card[]>([]);
  return (
    <StatContext.Provider
      value={{ nbrScans, setNbrScans, nbrMails, setNbrMails }}
    >
      {children}
    </StatContext.Provider>
  );
};

export default StatContext;

export { StatProvider };
