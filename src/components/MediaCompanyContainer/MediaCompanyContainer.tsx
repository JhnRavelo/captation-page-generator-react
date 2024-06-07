import MediaOptions from "../MediaOptions/MediaOptions";
import InputYear from "../InputYear/InputYear";
import Company from "../Company/Company";
import { ReactNode } from "react";
import "./mediaCompanyContainer.scss";
import { useLocation } from "react-router-dom";

type MediaCompanyContainerPropsTypes = {
  children: ReactNode;
};

const MediaCompanyContainer = ({
  children,
}: MediaCompanyContainerPropsTypes) => {
  const { pathname } = useLocation();
  return (
    <div className="main-stat">
      {pathname == "/campagne" ? null : <MediaOptions />}
      <div className="year-container">
        <InputYear />
      </div>
      <div
        className="infos-container"
        style={
          pathname == "/campagne" ? { height: "458px" } : { height: "410px" }
        }
      >
        {children}
      </div>
      <Company />
    </div>
  );
};

export default MediaCompanyContainer;
