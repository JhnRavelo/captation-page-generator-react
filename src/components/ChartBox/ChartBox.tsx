import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import "./chartBox.scss";
import MailSVG from "../../assets/svg/MailSVG";
import ScanSVG from "../../assets/svg/ScanSVG";
import CustomTooltip from "./CustomTooltip/CustomTooltip";
import { useRef } from "react";
import useAnimationNbr from "../../hooks/useAnimationNbr";
import MailOpenSVG from "../../assets/svg/MailOpenSVG";

export type TypeChartData = {
  name: string;
  users: number;
  number: number;
}[];

type ChartBoxPropsType = {
  color: string;
  chartData: TypeChartData;
  dataKey: string;
  title: "Emails envoyés" | "QR Code scannés" | "Emails ouverts";
  nbrTotal: number;
  percentage: number;
};

const ChartBox = ({
  color,
  chartData,
  dataKey,
  title,
  nbrTotal,
  percentage,
}: ChartBoxPropsType) => {
  const totalRef = useRef<HTMLSpanElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);

  useAnimationNbr(nbrTotal, totalRef);
  useAnimationNbr(percentage, percentageRef);

  return (
    <div className="chart-container">
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <LineChart data={chartData}>
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-info">
        {title == "Emails envoyés" ? (
          <div className="chart-image blue">
            <MailSVG width="25" height="25" />
          </div>
        ) : title == "Emails ouverts" ? (
          <div className="chart-image green">
            <MailOpenSVG width="25" height="25" />
          </div>
        ) : (
          <div className="chart-image orange">
            <ScanSVG width="25" height="25" />
          </div>
        )}
        <div className="chart-desc">
          <span style={{ color: color }}>
            <span ref={totalRef}>0</span>
            {" " + title}
          </span>
          <span className="chart-percentage">
            Ce mois{" "}
            <span
              className="percentage-value"
              style={{
                color: percentage >= 0 ? "greenyellow" : "#B31024",
              }}
            >
              {percentage >= 0 ? "+" : "-"}
            </span>
            <span
              className="percentage-value"
              style={{
                color: percentage >= 0 ? "greenyellow" : "#B31024",
              }}
              ref={percentageRef}
            >
              {0}
            </span>
            <span
              className="percentage-value"
              style={{
                color: percentage >= 0 ? "greenyellow" : "#B31024",
              }}
            >
              {"%"}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
