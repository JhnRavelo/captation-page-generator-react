import { dataHome } from "../../../assets/ts/data";
import ChartBox from "../../../components/ChartBox/ChartBox";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <>
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
    </>
  );
};

export default Dashboard;
