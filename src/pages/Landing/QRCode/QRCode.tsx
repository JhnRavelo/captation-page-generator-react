import AddButton from "../../../components/AddButton/AddButton";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
import imgScan from "../../../../public/img/technico qr code.png";
import "./qrCode.scss";
import Card from "../../../components/Card/Card";

const qrCodes = [
  {
    id: "ID Campagne",
    title: "Title Campagne",
    url: "URL Page",
    img: imgScan,
    scanNbr: 25,
  },
  {
    id: "ID Campagne",
    title: "Title Campagne",
    url: "URL Page",
    img: imgScan,
    scanNbr: 25,
  },
  {
    id: "ID Campagne",
    title: "Title Campagne",
    url: "URL Page",
    img: imgScan,
    scanNbr: 25,
  },
  {
    id: "ID Campagne",
    title: "Title Campagne",
    url: "URL Page",
    img: imgScan,
    scanNbr: 25,
  },
];

const QRCode = () => {
  const handleClick = () => {
    console.log("");
  };
  return (
    <MediaCompanyContainer>
      <div className="page-cards-container">
        <AddButton handleClick={handleClick} />
        <div className="qr-container cards-container">
          {qrCodes.length > 0 &&
            qrCodes.map((qrCode) => (
              <Card card={qrCode} slug="QR-Code" isClickable={false} />
            ))}
        </div>
      </div>
    </MediaCompanyContainer>
  );
};

export default QRCode;
