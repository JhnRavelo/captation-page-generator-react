import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";

type TypePageContext = {
  pages: Card[];
  setPages: React.Dispatch<React.SetStateAction<Card[]>>;
} | null;

const PageContext = createContext<TypePageContext>(null);

const PageProvider = ({ children }: ContextPropsType) => {
  const [pages, setPages] = useState<Card[]>([]);
  return (
    <PageContext.Provider value={{ pages, setPages }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;

export { PageProvider };
