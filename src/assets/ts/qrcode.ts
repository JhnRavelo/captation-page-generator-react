import {
  TypeAddFormFields,
  TypeInitialValues,
} from "../../context/AddFormProvider";

export const qrcodeFields: TypeAddFormFields = [
  {
    name: "campagnes",
    placeholder: "Liste des campagnes",
    type: "text",
    header: "Liste des campagnes",
  },
  {
    name: "logo",
    placeholder: "Si vous ne choisissez pas, le logo par défaut sera choisit.",
    type: "file",
    header: "Logo du QR Code",
  },
];

export const qrCodeInitialValue: TypeInitialValues = {
  logo: null,
  campagnes: null,
};
