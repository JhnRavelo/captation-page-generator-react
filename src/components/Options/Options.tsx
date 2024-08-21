import { useRef, useState } from "react";
import "./options.scss";
import useActive from "../../hooks/useActive";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PLusSVG from "../../assets/svg/PLusSVG";

export type TypeOptions = {
  title: string;
  url: string;
}[];

type OptionsPropsTypes = {
  options: TypeOptions;
  type: "standard" | "number";
};

const Options = ({ options, type }: OptionsPropsTypes) => {
  const [stateOptions, setStateOptions] = useState<TypeOptions>(options);
  const { id } = useParams();
  const optionRef = useRef<HTMLDivElement>(null);
  const active = useActive();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleAddOption = () => {
    const newItem = {
      title: `${stateOptions.length + 1}`,
      url:
        "/marketing/campagne/" +
        id +
        "/mail/" +
        id +
        "MAIL" +
        `${stateOptions.length + 1}`,
    };
    setStateOptions([...stateOptions, newItem]);
  };

  return (
    <div
      className={
        type == "number"
          ? "options-container option-number"
          : "options-container"
      }
      ref={optionRef}
    >
      {stateOptions.length > 0 &&
        stateOptions.map((option, index) => (
          <div
            className={
              type == "standard" &&
              option.url.slice(0, 35) == pathname.slice(0, 35)
                ? "option active"
                : type == "number" && option.url == pathname
                ? "option active"
                : "option"
            }
            onClick={(e) => {
              active(e, optionRef);
              navigate(option.url);
            }}
            key={index}
          >
            <span>{option.title}</span>
          </div>
        ))}
      {type == "number" && stateOptions.length <= 3 ? (
        <PLusSVG
          width="40"
          height="40"
          className="svg-option-plus"
          onClick={() => handleAddOption()}
        />
      ) : null}
    </div>
  );
};

export default Options;
