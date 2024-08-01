import ImgEuro from "../png/Logo_aluhd.png";
import ImgVertec from "../png/vertec.png";
import ImgAlu from "../png/alu.png";
import ImgSmart from "../png/EA_smart.png";
import LogoEuro from "../logo/logo_europ-alu.png";
import LogoSmart from "../logo/logo_smart.png";
import LogoAlu from "../logo/logo_alu.jpg";
import LogoVertec from "../logo/logo_vertec.jpg";

export type TypeCompany = "Europ'Alu" | "Europ'Alu Smart" | "Vertec" | "Alu";
export type TypeCompaniesObject = {
  company: TypeCompany;
  img: string;
  logo: string;
};

type TypeCompaniesArray = TypeCompaniesObject[];

export const companies: TypeCompaniesArray = [
  {
    company: "Europ'Alu",
    img: ImgEuro,
    logo: LogoEuro,
  },
  {
    company: "Alu",
    img: ImgAlu,
    logo: LogoAlu,
  },
  {
    company: "Vertec",
    img: ImgVertec,
    logo: LogoVertec,
  },
  {
    company: "Europ'Alu Smart",
    img: ImgSmart,
    logo: LogoSmart,
  },
];
