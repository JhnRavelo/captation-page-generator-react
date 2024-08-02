/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useFilterDatas from "./useFilterDatas";
import useStat from "./useStat";
import { Card } from "../components/Card/Card";
import useMediaEntreprise from "./useMediaEntreprise";
import useGetChart from "./useGetChart";
import { dataHome } from "../assets/ts/data";

function useFilterStatsNbr(id: string | undefined) {
  const statContext = useStat();
  const mediaContext = useMediaEntreprise();
  const getChart = useGetChart();
  const nbrScans = useFilterDatas(statContext?.nbrScans);
  const nbrMails = useFilterDatas(statContext?.nbrMails);
  const nbrScanMonths = useFilterDatas(statContext?.nbrChartScans);
  const nbrMailMonths = useFilterDatas(statContext?.nbrChartMails);
  const nbrMailChartPerCampagnes = useFilterDatas(
    statContext?.nbrChartMails,
    id
  );
  const nbrScanChartPerCampagnes = useFilterDatas(
    statContext?.nbrChartScans,
    id
  );
  const [nbrStatScanPerCampagnes, setNbrStatScanPerCampagnes] = useState<
    Card[]
  >([]);
  const [nbrStatMailPerCampagnes, setNbrStatMailPerCampagnes] = useState<
    Card[]
  >([]);
  const [nbrMailPerMonths, setNbrMailPerMonths] = useState(dataHome);
  const [nbrScanPerMonths, setNbrScanPerMonths] = useState(dataHome);
  const [nbrMailMonthPerCampagnes, setNbrMailMonthPerCampagnes] =
    useState(dataHome);
  const [nbrScanMonthPerCampagnes, setNbrScanMonthPerCampagnes] =
    useState(dataHome);

  useEffect(() => {
    if (id && mediaContext?.media) {
      if (statContext?.nbrMails) {
        const nbrStatMailPerCampagnes = statContext.nbrMails.filter(
          (mail) => mail.id == id && mail.media == mediaContext.media.media
        );
        setNbrStatMailPerCampagnes(nbrStatMailPerCampagnes);
      }

      if (statContext?.nbrScans) {
        const nbrStatScanPerCampagnes = statContext.nbrScans.filter(
          (scan) => scan.id == id && scan.media == mediaContext.media.media
        );
        setNbrStatScanPerCampagnes(nbrStatScanPerCampagnes);
      }

      if (statContext?.nbrChartMails && nbrMailMonthPerCampagnes) {
        const nbrMailMonthPerCampagnes = getChart(
          dataHome,
          nbrMailChartPerCampagnes
        );
        setNbrMailMonthPerCampagnes(nbrMailMonthPerCampagnes);
      }

      if (statContext?.nbrChartScans && nbrScanChartPerCampagnes) {
        const nbrScanMonthPerCampagnes = getChart(
          dataHome,
          nbrScanChartPerCampagnes
        );
        setNbrScanMonthPerCampagnes(nbrScanMonthPerCampagnes);
      }
    }

    if (nbrMailMonths) {
      const nbrMailMonth = getChart(dataHome, nbrMailMonths);
      setNbrMailPerMonths(nbrMailMonth);
    }

    if (nbrScanMonths) {
      const nbrScanMonth = getChart(dataHome, nbrScanMonths);
      setNbrScanPerMonths(nbrScanMonth);
    }
  }, [
    statContext?.nbrMails,
    statContext?.nbrScans,
    id,
    mediaContext?.media.media,
    nbrMailMonths,
    nbrScanMonths,
    statContext?.nbrChartMails,
    statContext?.nbrChartScans,
  ]);

  return {
    nbrMails,
    nbrScans,
    nbrStatMailPerCampagnes,
    nbrStatScanPerCampagnes,
    nbrMailPerMonths,
    nbrScanPerMonths,
    nbrMailMonthPerCampagnes,
    nbrScanMonthPerCampagnes,
  };
}

export default useFilterStatsNbr;
