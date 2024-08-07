import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";
import { TypeSetState } from "./CampagneProvider";

type TypeStatContext = {
  nbrScans: Card[];
  setNbrScans: TypeSetState;
  nbrMails: Card[];
  setNbrMails: TypeSetState;
  nbrChartMails: Card[];
  setNbrChartMails: TypeSetState;
  nbrChartScans: Card[];
  setNbrChartScans: TypeSetState;
} | null;

const StatContext = createContext<TypeStatContext>(null);

const StatProvider = ({ children }: ContextPropsType) => {
  const [nbrScans, setNbrScans] = useState<Card[]>([]);
  const [nbrMails, setNbrMails] = useState<Card[]>([]);
  const [nbrChartMails, setNbrChartMails] = useState<Card[]>([]);
  const [nbrChartScans, setNbrChartScans] = useState<Card[]>([]);
  
  return (
    <StatContext.Provider
      value={{
        nbrScans,
        setNbrScans,
        nbrMails,
        setNbrMails,
        nbrChartMails,
        setNbrChartMails,
        nbrChartScans,
        setNbrChartScans,
      }}
    >
      {children}
    </StatContext.Provider>
  );
};

export default StatContext;

export { StatProvider };
