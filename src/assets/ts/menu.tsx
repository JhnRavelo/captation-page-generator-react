import React from "react";
import DashboardSVG from "../svg/DashboardSVG";
import MarketingSVG from "../svg/MarketingSVG";
import QRcodeSVG from "../svg/QRcodeSVG";
import PageSVG from "../svg/PageSVG";
import UserSVG from "../svg/UserSVG";
import NoteBookSVG from "../svg/NoteBookSVG";
import BellSVG from "../svg/BellSVG";
import EntrepriseSVG from "../svg/EntrepriseSVG";

export type TypeMenus = {
  url: string;
  title: string;
  SVG: React.ReactNode;
}[];

export const menus: TypeMenus = [
  {
    url: "/marketing",
    title: "Tableau de bord",
    SVG: <DashboardSVG height="30" width="30" />,
  },
  {
    url: "/marketing/company",
    title: "Entreprise",
    SVG: <EntrepriseSVG height="23" width="30" />,
  },
  {
    url: "/marketing/campagne",
    title: "Campagne marketing",
    SVG: <MarketingSVG height="25" width="30" />,
  },
  {
    url: "/marketing/qr-code",
    title: "Générer un QRCode",
    SVG: <QRcodeSVG height="20" width="30" />,
  },
  {
    url: "/marketing/page-campagne",
    title: "Page de captation",
    SVG: <PageSVG height="24" width="30" />,
  },
  {
    url: "/marketing/user",
    title: "Prospects",
    SVG: <UserSVG height="20" width="30" />,
  },
  {
    url: "/marketing/log",
    title: "Journals des événements",
    SVG: <NoteBookSVG width="30" height="23" />,
  },
  {
    url: "/marketing/notif",
    title: "Notifications",
    SVG: <BellSVG height="24" width="30" />,
  },
];
