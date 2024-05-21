import "./customTooltip.scss"

type Payload = {
  datakey: string;
  payload: { name: string; id: number };
  value: number;
  color: string;
};

const CustomTooltip: React.FC<{ active?: boolean; payload?: Payload[] }> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ borderColor: payload[0].color }}>
        {payload.map((item, index) => {
          return (
            <p
              key={index}
              className={`data ${item.datakey}`}
              style={{ color: "aliceblue" }}
            >
              {`${item.payload.name}: ${item.value}`}
            </p>
          );
        })}
      </div>
    );
  }
};

export default CustomTooltip;
