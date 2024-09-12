import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { medias, TypeMediasObject } from "../assets/ts/media";
import { Card } from "../components/Card/Card";

type TypeMediaEntrepriseContextValue = {
  media: TypeMediasObject;
  setMedia: React.Dispatch<React.SetStateAction<TypeMediasObject>>;
  entreprise: Card | null;
  setEntreprise: React.Dispatch<React.SetStateAction<Card | null>>;
};

const MediaEntrepriseContext =
  createContext<TypeMediaEntrepriseContextValue | null>(null);

const MediaEntrepriseProvider = ({ children }: ContextPropsType) => {
  const [media, setMedia] = useState<TypeMediasObject>(medias[0]);
  const [entreprise, setEntreprise] = useState<Card | null>(null);

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
