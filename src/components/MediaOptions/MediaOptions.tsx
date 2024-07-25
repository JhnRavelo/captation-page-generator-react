import "./mediaOptions.scss";
import useActive from "../../hooks/useActive";
import { useRef } from "react";
import { medias } from "../../assets/ts/media";
import useMediaEntreprise from "../../hooks/useMediaEntreprise";

const MediaOptions = () => {
  const active = useActive();
  const mediaRef = useRef<HTMLDivElement>(null);
  const mediaContext = useMediaEntreprise();

  return (
    <div className="media-container" ref={mediaRef}>
      {medias.map((media, index) => (
        <div
          className={index == 0 ? "media-content active" : "media-content"}
          onClick={(e) => {
            active(e, mediaRef);
            mediaContext?.setMedia(media.media);
            mediaContext?.setUrlMedia(media.url);
          }}
          key={index}
        >
          {media.SVG}
          <span>{media.media}</span>
        </div>
      ))}
    </div>
  );
};

export default MediaOptions;
