import { toast } from "react-toastify";
import useLog from "./useLog";
import { utils, writeFileXLSX } from "xlsx";
import useStat from "./useStat";

const useExportXLSX = () => {
  const logContext = useLog();
  const statContext = useStat();

  return (type: "mail" | "chart", id?: string) => {
    let datas;

    if (
      logContext?.userMails &&
      logContext.userMails.length > 0 &&
      type === "mail"
    ) {
      let mails = logContext.userMails;

      if (id) {
        mails = logContext.userMails.filter((user) => user.id == id);

        if (mails.length === 0) {
          toast.error("Aucun email enregistré pour ce campagne");
          return;
        }
      }
      datas = mails.map((mail) => {
        return {
          Email: `${mail.mail}`,
          Entreprise: `${mail.entreprise}`,
          "Tire de la Campagne": `${mail.title}`,
          Media: `${mail.media}`,
        };
      });
    } else if (
      type === "chart" &&
      statContext?.nbrChartMailPerCampagnes &&
      statContext?.nbrChartScanPerCampagnes
    ) {
      let scans = statContext.nbrChartScanPerCampagnes;
      let mails = statContext.nbrChartMailPerCampagnes;

      if (id) {
        scans = statContext.nbrChartScanPerCampagnes.filter(
          (scan) => scan.id == id
        );
        mails = statContext.nbrChartMailPerCampagnes.filter(
          (mail) => mail.id == id
        );

        if (scans.length === 0) {
          toast.error("Aucune scan pour ce programme");
          return;
        }
      }
      datas = scans.map((scan) => {
        const matchMail = mails.find(
          (mail) =>
            mail.id == scan.id &&
            mail.month == scan.month &&
            mail.year == scan.year &&
            mail.media == scan.media
        );

        return {
          "Titre de la Campagne": scan.title,
          Entreprise: scan.entreprise,
          Média: scan.media,
          Mois: scan.month,
          Année: scan.year,
          "Nombre de Visite": scan.count,
          "Nombre d'Email Envoyé": matchMail ? matchMail.count : 0,
        };
      });
    }

    if (datas) {
      const wb = utils.book_new();
      utils.book_append_sheet(wb, utils.json_to_sheet(datas));
      writeFileXLSX(wb, `${type}.xlsx`);
    }
  };
};

export default useExportXLSX;
