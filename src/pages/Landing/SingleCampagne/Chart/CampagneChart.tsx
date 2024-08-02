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
              nbrStat.nbrStatScanPerCampagnes[0]?.count
                ? nbrStat.nbrStatScanPerCampagnes[0].count
                : 0
            }
            color="#FC7845"
            dataKey="users"
            chartData={nbrStat.nbrScanMonthPerCampagnes}
            title="QR Code scannés"
            percentage={14}
          />
        </div>
        <div className="info">
          <ChartBox
            nbrTotal={
              nbrStat.nbrStatMailPerCampagnes[0]?.count
                ? nbrStat.nbrStatMailPerCampagnes[0].count
                : 0
            }
            color="#3978CD"
            dataKey="users"
            chartData={nbrStat.nbrMailMonthPerCampagnes}
            title="Emails envoyés"
            percentage={-56}
          />
        </div>
      </div>
    </div>
  );
};

export default CampagneChart;
