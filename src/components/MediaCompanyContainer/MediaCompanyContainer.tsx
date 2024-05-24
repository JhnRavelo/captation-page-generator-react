import MediaOptions from "../MediaOptions/MediaOptions";
import InputYear from "../InputYear/InputYear";
import Company from "../Company/Company";
import { ReactNode } from "react";
import "./mediaCompanyContainer.scss"

type MediaCompanyContainerPropsTypes = {
    children: ReactNode
}

const MediaCompanyContainer = ({children}:MediaCompanyContainerPropsTypes) => {
  return (
    <div className="main-stat">
      <MediaOptions />
      <div className="year-container">
        <InputYear />
      </div>
      <div className="infos-container">
        {children}
      </div>
      <Company />
    </div>
  );
};

export default MediaCompanyContainer;
