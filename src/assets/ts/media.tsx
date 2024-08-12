import React from "react";
import JournalSVG from "../svg/JournalSVG";
import FacebookSVG from "../svg/FacebookSVG";
import CinemaSVG from "../svg/CinemaSVG";
import PancarteSVG from "../svg/PancarteSVG";

export type TypeMedia = "Journaux" | "Sociaux Media" | "Cinema" | "Affiche";
export type TypeUrlMedia = "jn" | "sc" | "cn" | "pc";
export type TypeMediasObject = {
  media: TypeMedia;
  SVG: React.ReactNode;
  url: TypeUrlMedia;
};

type TypeMediasArray = TypeMediasObject[];

export const medias: TypeMediasArray = [
  {
    media: "Journaux",
    SVG: <JournalSVG width="30" height="25" />,
    url: "jn",
  },
  {
    media: "Sociaux Media",
    SVG: <FacebookSVG width="30" height="28" />,
    url: "sc",
  },
  {
    media: "Cinema",
    SVG: <CinemaSVG width="30" height="26" />,
    url: "cn",
  },
  {
    media: "Affiche",
    SVG: <PancarteSVG width="30" height="26" />,
    url: "pc",
  },
];
