import { useRef } from "react";
import useAnimationNbr from "../../hooks/useAnimationNbr";
import ScanSVG from "../../assets/svg/ScanSVG";
import MailSVG from "../../assets/svg/MailSVG";
import "./campagneHeader.scss";
import useColorCampagne from "../../hooks/useColorCampagne";

type CampagneHeaderPropsTypes = {
  scanNbr: number;
  mailNbr: number;
  idCampagne: string;
};

const CampagneHeader = ({
  scanNbr,
  mailNbr,
  idCampagne,
}: CampagneHeaderPropsTypes) => {
  const scanRef = useRef<HTMLSpanElement>(null);
  const mailRef = useRef<HTMLSpanElement>(null);
  const color = useColorCampagne(idCampagne);

  useAnimationNbr(scanNbr, scanRef);
  useAnimationNbr(mailNbr, mailRef);
  return (
    <div className="id-single-campagne-container">
      <div className="id-single-campagne">
        <div
          className={
            color == "red" ? "circle circle-red" : "circle circle-green"
          }
        ></div>
        <span>{idCampagne}</span>
      </div>
      <div className="icon-campagne-container">
        <div className="icon-campagne">
          <ScanSVG width="34" height="34" />
          <span ref={scanRef}>0</span>
        </div>
        <div className="icon-campagne">
          <MailSVG width="30" height="30" />
          <span ref={mailRef}>0</span>
        </div>
      </div>
    </div>
  );
};

export default CampagneHeader;
