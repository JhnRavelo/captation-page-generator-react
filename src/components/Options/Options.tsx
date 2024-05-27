import { useRef } from "react";
import "./options.scss";
import useActive from "../../hooks/useActive";
import { useLocation, useNavigate } from "react-router-dom";

export type TypeOptions = {
  title: string;
  url: string;
}[];

type OptionsPropsTypes = {
  options: TypeOptions;
};

const Options = ({ options }: OptionsPropsTypes) => {
  const optionRef = useRef<HTMLDivElement>(null);
  const active = useActive();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="options-container" ref={optionRef}>
      {options.length > 0 &&
        options.map((option, index) => (
          <div
            className={pathname == option.url ? "option active" : "option"}
            onClick={(e) => {
              active(e, optionRef);
              navigate(option.url);
            }}
            key={index}
          >
            <span>{option.title}</span>
          </div>
        ))}
    </div>
  );
};

export default Options;
