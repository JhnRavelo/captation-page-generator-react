import { useContext } from "react";
import QRCodeContext from "../context/QRCodeProvider";

const useQRCode = () => {
  return useContext(QRCodeContext);
};

export default useQRCode;
