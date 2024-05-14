import { useRef, useState } from "react";
import ChevronDownSVG from "../../assets/svg/ChevronDownSVG";
import "./inputYear.scss";

const years = ["2021", "2022", "2023", "2024", "2025"];

const InputYear = () => {
  const chevronRef = useRef<SVGSVGElement | null>(null);
  const selectDateRef = useRef<HTMLDivElement | null>(null);
  const [year, setYear] = useState("2022");

  const handleVisibleSelectYear = () => {
    selectDateRef.current?.classList.toggle("visible");
    chevronRef.current?.classList.toggle("up");
  };

  const handleClickYear = (value: string) => {
    selectDateRef.current?.classList.remove("visible");
    chevronRef.current?.classList.remove("up");
    setYear(value);
  };

  return (
    <div className="date">
      <div className="selected__date" onClick={handleVisibleSelectYear}>
        <h2 onClick={handleVisibleSelectYear}>Année {year}</h2>
        <ChevronDownSVG
          width="35"
          height="30"
          className="chevron"
          svgRef={chevronRef}
        />
      </div>
      <div ref={selectDateRef} className="setect__date">
        {years.map((item, index) => (
          <label key={index} onClick={() => handleClickYear(item)}>
            <input name="year" type="radio" value={item} />
            année {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default InputYear;
