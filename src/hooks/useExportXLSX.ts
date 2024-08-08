import useLog from "./useLog";
import { utils, writeFileXLSX } from "xlsx";

const useExportXLSX = () => {
  const logContext = useLog();

  return (id?: string) => {
    if (logContext?.userMails && logContext.userMails.length > 0) {
      let mails = logContext.userMails;
      if (id) {
        const userMails = logContext.userMails.filter((user) => user.id == id);
        mails = userMails;
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
