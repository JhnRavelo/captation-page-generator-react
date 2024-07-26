import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { medias, TypeMediasObject } from "../assets/ts/media";
import { companies, TypeCompaniesObject } from "../assets/ts/company";

type TypeMediaEntrepriseContextValue = {
  media: TypeMediasObject;
  setMedia: React.Dispatch<React.SetStateAction<TypeMediasObject>>;
  entreprise: TypeCompaniesObject;
  setEntreprise: React.Dispatch<React.SetStateAction<TypeCompaniesObject>>;
};

const MediaEntrepriseContext =
  createContext<TypeMediaEntrepriseContextValue | null>(null);

const MediaEntrepriseProvider = ({ children }: ContextPropsType) => {
  const [media, setMedia] = useState<TypeMediasObject>(medias[0]);
  const [entreprise, setEntreprise] = useState<TypeCompaniesObject>(
    companies[0]
  );

  return (
    <MediaEntrepriseContext.Provider
      value={{
        media,
        setMedia,
        entreprise,
        setEntreprise,
      }}
    >
      {children}
    </MediaEntrepriseContext.Provider>
  );
};

export default MediaEntrepriseContext;

export { MediaEntrepriseProvider };
