import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";
import { TypeSetState } from "./CampagneProvider";

type TypeLogProvider = {
  userMails: Card[];
  setUserMails: TypeSetState;
  logs: Card[];
  setLogs: TypeSetState;
  notifs: Card[];
  setNotifs: TypeSetState;
} | null;

const LogContext = createContext<TypeLogProvider>(null);

const LogProvider = ({ children }: ContextPropsType) => {
  const [userMails, setUserMails] = useState<Card[]>([]);
  const [logs, setLogs] = useState<Card[]>([]);
  const [notifs, setNotifs] = useState<Card[]>([]);
  return (
    <LogContext.Provider
      value={{ userMails, setUserMails, logs, setLogs, notifs, setNotifs }}
    >
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;

export { LogProvider };
