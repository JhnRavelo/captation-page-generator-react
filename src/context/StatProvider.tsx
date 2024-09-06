import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";
import { TypeSetState } from "./CampagneProvider";

type TypeStatContext = {
  nbrScans: Card[];
  setNbrScans: TypeSetState;
  nbrMails: Card[];
  setNbrMails: TypeSetState;
  nbrScanPerCampagnes: Card[];
  setNbrScanPerCampagnes: TypeSetState;
  nbrMailPerCampagnes: Card[];
  setNbrMailPerCampagnes: TypeSetState;
  nbrChartMails: Card[];
  setNbrChartMails: TypeSetState;
  nbrChartScans: Card[];
  setNbrChartScans: TypeSetState;
  nbrChartMailPerCampagnes: Card[];
  setNbrChartMailPerCampagnes: TypeSetState;
  nbrChartScanPerCampagnes: Card[];
  setNbrChartScanPerCampagnes: TypeSetState;
  nbrOpened: Card[];
  setNbrOpened: TypeSetState;
  nbrOpenedPerCampagnes: Card[];
  setNbrOpenedPerCampagnes: TypeSetState;
  nbrChartOpened: Card[];
  setNbrChartOpened: TypeSetState;
} | null;

const StatContext = createContext<TypeStatContext>(null);

const StatProvider = ({ children }: ContextPropsType) => {
  const [nbrScans, setNbrScans] = useState<Card[]>([]);
  const [nbrMails, setNbrMails] = useState<Card[]>([]);
  const [nbrScanPerCampagnes, setNbrScanPerCampagnes] = useState<Card[]>([]);
  const [nbrMailPerCampagnes, setNbrMailPerCampagnes] = useState<Card[]>([]);
  const [nbrChartMails, setNbrChartMails] = useState<Card[]>([]);
  const [nbrChartScans, setNbrChartScans] = useState<Card[]>([]);
  const [nbrChartMailPerCampagnes, setNbrChartMailPerCampagnes] = useState<
    Card[]
  >([]);
  const [nbrChartScanPerCampagnes, setNbrChartScanPerCampagnes] = useState<
    Card[]
  >([]);
  const [nbrOpened, setNbrOpened] = useState<Card[]>([]);
  const [nbrOpenedPerCampagnes, setNbrOpenedPerCampagnes] = useState<Card[]>(
    []
  );
  const [nbrChartOpened, setNbrChartOpened] = useState<Card[]>([]);

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
        nbrChartMailPerCampagnes,
        setNbrChartMailPerCampagnes,
        nbrChartScanPerCampagnes,
        setNbrChartScanPerCampagnes,
        nbrScanPerCampagnes,
        setNbrScanPerCampagnes,
        nbrMailPerCampagnes,
        setNbrMailPerCampagnes,
        nbrOpened,
        setNbrOpened,
        nbrOpenedPerCampagnes,
        setNbrOpenedPerCampagnes,
        nbrChartOpened,
        setNbrChartOpened,
      }}
    >
      {children}
    </StatContext.Provider>
  );
};

export default StatContext;

export { StatProvider };
