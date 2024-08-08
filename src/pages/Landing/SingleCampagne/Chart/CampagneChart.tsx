import { useParams } from "react-router-dom";
import ChartBox from "../../../../components/ChartBox/ChartBox";
import "./campagneChart.scss";
import useFilterStatsNbr from "../../../../hooks/useFilterStatsNbr";

const CampagneChart = () => {
  const { id } = useParams();
  const nbrStat = useFilterStatsNbr(id);
  return (
    <div className="campagne-chart-container">
      <div className="infos-container">
        <div className="info">
          <ChartBox
            nbrTotal={
              nbrStat.nbrScanPerCampagnes[0]?.count
                ? nbrStat.nbrScanPerCampagnes[0].count
                : 0
            }
            color="#FC7845"
            dataKey="users"
            chartData={nbrStat.nbrScanMonthPerCampagnes}
            title="QR Code scannés"
            percentage={nbrStat.scanPercentagePerCampagne}
          />
        </div>
        <div className="info">
          <ChartBox
            nbrTotal={
              nbrStat.nbrMailPerCampagnes[0]?.count
                ? nbrStat.nbrMailPerCampagnes[0].count
                : 0
            }
            color="#3978CD"
            dataKey="users"
            chartData={nbrStat.nbrMailMonthPerCampagnes}
            title="Emails envoyés"
            percentage={nbrStat.mailPercentagePerCampagne}
          />
        </div>
      </div>
    </div>
  );
};

export default CampagneChart;
