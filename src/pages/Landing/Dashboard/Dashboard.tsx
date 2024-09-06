import ChartBox from "../../../components/ChartBox/ChartBox";
import MediaCompanyContainer from "../../../components/MediaCompanyContainer/MediaCompanyContainer";
import useFilterStatsNbr from "../../../hooks/useFilterStatsNbr";

const Dashboard = () => {
  const nbrSTat = useFilterStatsNbr();

  return (
    <MediaCompanyContainer>
      <div className="info">
        <ChartBox
          nbrTotal={nbrSTat.nbrScans[0]?.count ? nbrSTat.nbrScans[0].count : 0}
          color="#FC7845"
          dataKey="users"
          chartData={nbrSTat.nbrScanPerMonths}
          title="QR Code scannés"
          percentage={nbrSTat.scanPercentagePerMonth}
        />
      </div>
      <div className="info">
        <ChartBox
          nbrTotal={nbrSTat.nbrMails[0]?.count ? nbrSTat.nbrMails[0].count : 0}
          color="#3978CD"
          dataKey="users"
          chartData={nbrSTat.nbrMailPerMonths}
          title="Emails envoyés"
          percentage={nbrSTat.mailPercentagePerMonth}
        />
      </div>
      <div className="info">
        <ChartBox
          nbrTotal={nbrSTat.nbrOpened[0]?.count ? nbrSTat.nbrOpened[0].count : 0}
          color="#388218"
          dataKey="users"
          chartData={nbrSTat.nbrOpenedPerMonths}
          title="Emails ouverts"
          percentage={nbrSTat.openedPercentagePerMonth}
        />
      </div>
    </MediaCompanyContainer>
  );
};

export default Dashboard;
