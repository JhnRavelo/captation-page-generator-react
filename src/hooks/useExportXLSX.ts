import { toast } from "react-toastify";
import useLog from "./useLog";
import { utils, writeFileXLSX } from "xlsx";

const useExportXLSX = () => {
  const logContext = useLog();

  return (id?: string) => {
    if (logContext?.userMails && logContext.userMails.length > 0) {
      let mails = logContext.userMails;
      if (id) {
        mails = logContext.userMails.filter((user) => user.id == id);

        if (mails.length === 0) {
          toast.error("Aucun email enregistré pour ce campagne");
          return;
        }
      }
      const userMails = mails.map((mail) => {
        return {
          Email: `${mail.mail}`,
          Entreprise: `${mail.entreprise}`,
          "Tire de la Campagne": `${mail.title}`,
          Media: `${mail.media}`,
        };
      });
      const wb = utils.book_new();
      utils.book_append_sheet(wb, utils.json_to_sheet(userMails));
      writeFileXLSX(wb, `emails.xlsx`);
    }
  };
};

export default useExportXLSX;
