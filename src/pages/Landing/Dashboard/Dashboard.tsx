import { useParams } from "react-router-dom";
import { dataHome } from "../../../assets/ts/data";
import ChartBox from "../../../components/ChartBox/ChartBox";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
import useFilterStatsNbr from "../../../hooks/useFilterStatsNbr";

const Dashboard = () => {
  const { id } = useParams();
  const nbrSTat = useFilterStatsNbr(id);

  return (
    <MediaCompanyContainer>
      <div className="info">
        <ChartBox
          nbrTotal={nbrSTat.nbrScans[0]?.count ? nbrSTat.nbrScans[0].count : 0}
          color="#FC7845"
          dataKey="users"
          chartData={dataHome}
          title="QR Code scannés"
          percentage={14}
        />
      </div>
      <div className="info">
        <ChartBox
          nbrTotal={nbrSTat.nbrMails[0]?.count ? nbrSTat.nbrMails[0].count : 0}
          color="#3978CD"
          dataKey="users"
          chartData={dataHome}
          title="Emails envoyés"
          percentage={-56}
        />
      </div>
    </MediaCompanyContainer>
  );
};

export default Dashboard;
