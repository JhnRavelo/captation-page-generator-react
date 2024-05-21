import { dataHome } from "../../../assets/ts/data";
import ChartBox from "../../../components/ChartBox/ChartBox";
import Company from "../../../components/Company/Company";
import InputYear from "../../../components/InputYear/InputYear";
import MediaOptions from "../../../components/MediaOptions/MediaOptions";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="main-stat">
      <MediaOptions />
      <div className="year-container">
        <InputYear />
      </div>
      <div className="infos-container">
        <div className="info">
          <ChartBox
            nbrTotal={320}
            color="#FC7845"
            dataKey="users"
            chartData={dataHome}
            title="QR Code scannés"
            percentage={14}
          />
        </div>
        <div className="info">
          <ChartBox
            nbrTotal={25}
            color="#3978CD"
            dataKey="users"
            chartData={dataHome}
            title="Emails envoyés"
            percentage={-56}
          />
        </div>
      </div>
      <Company />
    </div>
  );
};

export default Dashboard;
