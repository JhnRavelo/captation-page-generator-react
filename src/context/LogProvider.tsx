import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";

type TypeLogProvider = {
  userMails: Card[];
  setUserMails: React.Dispatch<React.SetStateAction<Card[]>>;
  logs: Card[];
  setLogs: React.Dispatch<React.SetStateAction<Card[]>>;
} | null;

const LogContext = createContext<TypeLogProvider>(null);

const LogProvider = ({ children }: ContextPropsType) => {
  const [userMails, setUserMails] = useState<Card[]>([]);
  const [logs, setLogs] = useState<Card[]>([]);
  return (
    <LogContext.Provider value={{ userMails, setUserMails, logs, setLogs }}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;

export { LogProvider };
