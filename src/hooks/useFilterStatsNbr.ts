import { useEffect, useState } from "react";
import useFilterDatas from "./useFilterDatas";
import useStat from "./useStat";
import { Card } from "../components/Card/Card";
import useMediaEntreprise from "./useMediaEntreprise";

function useFilterStatsNbr(id: string | undefined) {
  const statContext = useStat();
  const mediaContext = useMediaEntreprise();
  const nbrScans = useFilterDatas(statContext?.nbrScans);
  const nbrMails = useFilterDatas(statContext?.nbrMails);
  const [nbrStatScanPerCampagnes, setNbrStatScanPerCampagnes] = useState<
    Card[]
  >([]);
  const [nbrStatMailPerCampagnes, setNbrStatMailPerCampagnes] = useState<
    Card[]
  >([]);

  useEffect(() => {
    if (
      statContext?.nbrMails &&
      statContext?.nbrScans &&
      id &&
      mediaContext?.media.media
    ) {
      const nbrStatMailPerCampagnes = statContext.nbrMails.filter(
        (mail) => mail.id == id && mail.media == mediaContext.media.media
      );
      setNbrStatMailPerCampagnes(nbrStatMailPerCampagnes);
      const nbrStatScanPerCampagnes = statContext.nbrScans.filter(
        (scan) => scan.id == id && scan.media == mediaContext.media.media
      );
      setNbrStatScanPerCampagnes(nbrStatScanPerCampagnes);
    }
  }, [statContext?.nbrMails, statContext?.nbrScans, id, mediaContext]);

  return {
    nbrMails,
    nbrScans,
    nbrStatMailPerCampagnes,
    nbrStatScanPerCampagnes,
  };
}

export default useFilterStatsNbr;
