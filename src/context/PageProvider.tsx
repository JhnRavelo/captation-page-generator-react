import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";

type TypePageContext = {
  pages: Card[];
  setPages: React.Dispatch<React.SetStateAction<Card[]>>;
  page: Card | null;
  setPage: React.Dispatch<React.SetStateAction<Card | null>>;
} | null;

const PageContext = createContext<TypePageContext>(null);

const PageProvider = ({ children }: ContextPropsType) => {
  const [pages, setPages] = useState<Card[]>([]);
  const [page, setPage] = useState<Card | null>(null);
  
  return (
    <PageContext.Provider value={{ pages, setPages, page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;

export { PageProvider };
