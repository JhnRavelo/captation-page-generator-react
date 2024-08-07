import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";
import { TypeSetState } from "./CampagneProvider";

type TypePageContext = {
  pages: Card[];
  setPages: TypeSetState;
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
