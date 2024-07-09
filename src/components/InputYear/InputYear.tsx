import { useRef } from "react";
import ChevronDownSVG from "../../assets/svg/ChevronDownSVG";
import "./inputYear.scss";
import useForm from "../../hooks/useForm";
import { StrNb } from "../../context/AddFormProvider";

const InputYear = () => {
  const chevronRef = useRef<SVGSVGElement | null>(null);
  const selectDateRef = useRef<HTMLDivElement | null>(null);
  const formContext = useForm();

  const handleVisibleSelectYear = () => {
    selectDateRef.current?.classList.toggle("visible");
    chevronRef.current?.classList.toggle("up");
  };

  const handleClickYear = (value: StrNb) => {
    selectDateRef.current?.classList.remove("visible");
    chevronRef.current?.classList.remove("up");
    formContext?.setYear(value);
  };

  return (
    <div className="date">
      <div className="selected__date" onClick={handleVisibleSelectYear}>
        <h2 onClick={handleVisibleSelectYear}>Année {formContext?.year}</h2>
        <ChevronDownSVG
          width="35"
          height="30"
          className="chevron"
          svgRef={chevronRef}
        />
      </div>
      <div ref={selectDateRef} className="setect__date">
        {formContext?.years && formContext?.years.length > 0
          ? formContext?.years.map((item, index) => (
              <label key={index} onClick={() => handleClickYear(item)}>
                <input name="year" type="radio" value={item} />
                année {item}
              </label>
            ))
          : null}
      </div>
    </div>
  );
};

export default InputYear;
