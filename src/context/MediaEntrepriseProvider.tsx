import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";

export type TypeCompany = "Europ'Alu" | "Smart" | "Vertec" | "Alu";
export type TypeMedia = "Journaux" | "Sociaux Media" | "Cinema" | "Pancarte";

type TypeMediaEntrepriseContextValue = {
  media: TypeMedia;
  setMedia: React.Dispatch<React.SetStateAction<TypeMedia>>;
  entreprise: TypeCompany;
  setEntreprise: React.Dispatch<React.SetStateAction<TypeCompany>>;
};

const MediaEntrepriseContext =
  createContext<TypeMediaEntrepriseContextValue | null>(null);

const MediaEntrepriseProvider = ({ children }: ContextPropsType) => {
  const [media, setMedia] = useState<TypeMedia>("Journaux");
  const [entreprise, setEntreprise] = useState<TypeCompany>("Europ'Alu");

  return (
    <MediaEntrepriseContext.Provider
      value={{ media, setMedia, entreprise, setEntreprise }}
    >
      {children}
    </MediaEntrepriseContext.Provider>
  );
};

export default MediaEntrepriseContext;

export { MediaEntrepriseProvider };
