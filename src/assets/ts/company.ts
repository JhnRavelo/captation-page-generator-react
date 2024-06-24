import LogoEuro from "../png/Logo_aluhd.png";
import LogoVertec from "../png/vertec.png";
import LogoAlu from "../png/alu.png";
import LogoSmart from "../png/EA_smart.png";
import { TypeCompany } from "../../context/MediaEntrepriseProvider";

export type TypeCompaniesObject = { company: TypeCompany; img: string };

type TypeCompaniesArray = TypeCompaniesObject[];

export const companies: TypeCompaniesArray = [
  {
    company: "Europ'Alu",
    img: LogoEuro,
  },
  {
    company: "Alu",
    img: LogoAlu,
  },
  {
    company: "Vertec",
    img: LogoVertec,
  },
  {
    company: "Smart",
    img: LogoSmart,
  },
];
