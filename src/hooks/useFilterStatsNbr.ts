/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useFilterDatas from "./useFilterDatas";
import useStat from "./useStat";
import useGetChart from "./useGetChart";
import { dataHome } from "../assets/ts/data";
import usePercentagePerMonth from "./usePercentagePerMonth";

const useFilterStatsNbr = (id?: string) => {
  const statContext = useStat();
  const getChart = useGetChart();
  const getPercentagePerMonth = usePercentagePerMonth();
  const nbrScans = useFilterDatas(statContext?.nbrScans);
  const nbrMails = useFilterDatas(statContext?.nbrMails);
  const nbrScanPerCampagnes = useFilterDatas(
    statContext?.nbrScanPerCampagnes,
    id
  );
  const nbrMailPerCampagnes = useFilterDatas(
    statContext?.nbrMailPerCampagnes,
    id
  );
  const nbrScanMonths = useFilterDatas(statContext?.nbrChartScans);
  const nbrMailMonths = useFilterDatas(statContext?.nbrChartMails);
  const nbrMailChartPerCampagnes = useFilterDatas(
    statContext?.nbrChartMailPerCampagnes,
    id
  );
  const nbrScanChartPerCampagnes = useFilterDatas(
    statContext?.nbrChartScanPerCampagnes,
    id
  );
  const nbrOpened = useFilterDatas(statContext?.nbrOpened);
  const nbrOpenedPerCampagnes = useFilterDatas(
    statContext?.nbrOpenedPerCampagnes,
    id
  );
  const nbrOpenedMonths = useFilterDatas(statContext?.nbrChartOpened);
  const nbrOpenedChartPerCampagnes = useFilterDatas(
    statContext?.nbrChartOpenedPerCampagnes,
    id
  );
  const [nbrMailPerMonths, setNbrMailPerMonths] = useState(dataHome);
  const [nbrScanPerMonths, setNbrScanPerMonths] = useState(dataHome);
  const [nbrMailMonthPerCampagnes, setNbrMailMonthPerCampagnes] =
    useState(dataHome);
  const [nbrScanMonthPerCampagnes, setNbrScanMonthPerCampagnes] =
    useState(dataHome);
  const [nbrOpenedPerMonths, setNbrOpenedPerMonths] = useState(dataHome);
  const [nbrOpenedPerMonthPerCampagnes, setNbrOpenedPerMonthPerCampagnes] =
    useState(dataHome);
  const [mailPercentagePerMonth, setMailPercentagePerMonth] = useState(0);
  const [scanPercentagePerMonth, setScanPercentagePerMonth] = useState(0);
  const [openedPercentagePerMonth, setOpenedPercentagePerMonth] = useState(0);
  const [mailPercentagePerCampagne, setMailPercentagePerCampagne] = useState(0);
  const [scanPercentagePerCampagne, setScanPercentagePerCampagne] = useState(0);
  const [openedPercentagePerCampagne, setOpenedPercentagePerCampagne] =
    useState(0);

  useEffect(() => {
    if (id) {
      if (nbrMailChartPerCampagnes) {
        const nbrMailMonthPerCampagnes = getChart(
          dataHome,
          nbrMailChartPerCampagnes
        );
        setNbrMailMonthPerCampagnes(nbrMailMonthPerCampagnes);
        const mailPercentagePerMonth = getPercentagePerMonth(
          nbrMailChartPerCampagnes
        );
        setMailPercentagePerCampagne(mailPercentagePerMonth);
      }

      if (nbrScanChartPerCampagnes) {
        const nbrScanMonthPerCampagnes = getChart(
          dataHome,
          nbrScanChartPerCampagnes
        );
        setNbrScanMonthPerCampagnes(nbrScanMonthPerCampagnes);
        const scanPercentagePerMonth = getPercentagePerMonth(
          nbrScanChartPerCampagnes
        );
        setScanPercentagePerCampagne(scanPercentagePerMonth);
      }

      if (nbrOpenedChartPerCampagnes) {
        const nbrOpenedMonthPerCampagnes = getChart(
          dataHome,
          nbrOpenedChartPerCampagnes
        );
        setNbrOpenedPerMonthPerCampagnes(nbrOpenedMonthPerCampagnes);
        const openedPercentagePerMonth = getPercentagePerMonth(
          nbrOpenedChartPerCampagnes
        );
        setOpenedPercentagePerCampagne(openedPercentagePerMonth);
      }
    } else {
      if (nbrMailMonths) {
        const nbrMailMonth = getChart(dataHome, nbrMailMonths);
        setNbrMailPerMonths(nbrMailMonth);
        const mailPercentagePerMonth = getPercentagePerMonth(nbrMailMonths);
        setMailPercentagePerMonth(mailPercentagePerMonth);
      }

      if (nbrScanMonths) {
        const nbrScanMonth = getChart(dataHome, nbrScanMonths);
        setNbrScanPerMonths(nbrScanMonth);
        const scanPercentagePerMonth = getPercentagePerMonth(nbrScanMonths);
        setScanPercentagePerMonth(scanPercentagePerMonth);
      }

      if (nbrOpenedMonths) {
        const nbrOpenedMonth = getChart(dataHome, nbrOpenedMonths);
        setNbrOpenedPerMonths(nbrOpenedMonth);
        const openedPercentagePerMonth = getPercentagePerMonth(nbrOpenedMonths);
        setOpenedPercentagePerMonth(openedPercentagePerMonth);
      }
    }
  }, [
    nbrScanChartPerCampagnes,
    nbrMailChartPerCampagnes,
    nbrOpenedChartPerCampagnes,
    id,
    nbrMailMonths,
    nbrScanMonths,
    nbrOpenedMonths,
  ]);

  return {
    nbrMails,
    nbrScans,
    nbrMailPerCampagnes,
    nbrScanPerCampagnes,
    nbrMailPerMonths,
    nbrScanPerMonths,
    nbrMailMonthPerCampagnes,
    nbrScanMonthPerCampagnes,
    mailPercentagePerMonth,
    scanPercentagePerMonth,
    mailPercentagePerCampagne,
    scanPercentagePerCampagne,
    nbrOpened,
    nbrOpenedPerCampagnes,
    nbrOpenedPerMonths,
    openedPercentagePerMonth,
    openedPercentagePerCampagne,
    nbrOpenedPerMonthPerCampagnes,
  };
};

export default useFilterStatsNbr;
