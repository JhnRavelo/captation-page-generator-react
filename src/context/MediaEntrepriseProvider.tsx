import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";

export type TypeCompany = "Europ'Alu" | "Smart" | "Vertec" | "Alu" | "";
export type TypeMedia = "journaux" | "reseau" | "cinema" | "pancarte" | "";

type TypeMediaEntrepriseContextValue = {
  media: TypeMedia;
  setMedia: React.Dispatch<React.SetStateAction<TypeMedia>>;
  entreprise: TypeCompany;
  setEntreprise: React.Dispatch<React.SetStateAction<TypeCompany>>;
};

const MediaEntrepriseContext =
  createContext<TypeMediaEntrepriseContextValue | null>(null);

const MediaEntrepriseProvider = ({ children }: ContextPropsType) => {
  const [media, setMedia] = useState<TypeMedia>("");
  const [entreprise, setEntreprise] = useState<TypeCompany>("");

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
