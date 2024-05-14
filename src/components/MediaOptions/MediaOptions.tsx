import JournalSVG from "../../assets/svg/JournalSVG";
import FacebookSVG from "../../assets/svg/FacebookSVG";
import CinemaSVG from "../../assets/svg/CinemaSVG";
import PancarteSVG from "../../assets/svg/PancarteSVG";
import "./mediaOptions.scss";
import useActive from "../../hooks/useActive";
import { useRef } from "react";

const MediaOptions = () => {
  const active = useActive();
  const mediaRef = useRef<HTMLDivElement>(null);

  return (
    <div className="media-container" ref={mediaRef}>
      <div className="media-content" onClick={(e) => active(e, mediaRef)}>
        <JournalSVG width="30" height="25" />
        <span>Journaux</span>
      </div>
      <div className="media-content" onClick={(e) => active(e, mediaRef)}>
        <FacebookSVG width="30" height="28" />
        <span>Sociaux Media</span>
      </div>
      <div className="media-content" onClick={(e) => active(e, mediaRef)}>
        <CinemaSVG width="30" height="26" />
        <span>Cinema</span>
      </div>
      <div className="media-content" onClick={(e) => active(e, mediaRef)}>
        <PancarteSVG width="30" height="26" />
        <span>Pancarte</span>
      </div>
    </div>
  );
};

export default MediaOptions;
