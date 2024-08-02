import { TypeChartData } from "../components/ChartBox/ChartBox";
import { Card } from "../components/Card/Card";

function useGetChart() {
  return (data: TypeChartData, stats: Card[]) => {
    const newState = data.map((prev) => {
      const matchingNb = stats.find((nb) => nb.month == prev.number.toString());
      if (matchingNb) {
        return { ...prev, users: matchingNb?.count ? matchingNb.count : 0 };
      } else {
        return prev;
      }
    });

    return newState;
  };
}

export default useGetChart;
