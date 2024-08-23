import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";
import { TypeSetState } from "./CampagneProvider";

type TypeMailContextValue = {
  mails: Card[];
  setMails: TypeSetState;
};

const MailContext = createContext<TypeMailContextValue | null>(null);

const MailProvider = ({ children }: ContextPropsType) => {
  const [mails, setMails] = useState<Card[]>([]);

  return (
    <MailContext.Provider value={{ mails, setMails }}>
      {children}
    </MailContext.Provider>
  );
};

export default MailContext;

export { MailProvider };
