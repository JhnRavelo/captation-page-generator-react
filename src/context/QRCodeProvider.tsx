import { createContext, useState } from "react";
import { ContextPropsType } from "./AuthProvider";
import { Card } from "../components/Card/Card";
import { TypeSetState } from "./CampagneProvider";

type TypeQRCodeContext = {
  qrCodes: Card[];
  setQrCodes: TypeSetState;
} | null;

const QRCodeContext = createContext<TypeQRCodeContext>(null);

const QRCodeProvider = ({ children }: ContextPropsType) => {
  const [qrCodes, setQrCodes] = useState<Card[]>([]);
  return (
    <QRCodeContext.Provider value={{ qrCodes, setQrCodes }}>
      {children}
    </QRCodeContext.Provider>
  );
};

export { QRCodeProvider };

export default QRCodeContext;
