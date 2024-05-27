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
      {pathname == "/marketing" && <MediaOptions />}
      <div className="year-container">
        <InputYear />
      </div>
      <div
        className="infos-container"
        style={
          pathname == "/marketing" ? { height: "410px" } : { height: "458px" }
        }
      >
        {children}
      </div>
      <Company />
    </div>
  );
};

export default MediaCompanyContainer;
