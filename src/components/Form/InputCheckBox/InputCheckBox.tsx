import { Field } from "formik";
import { useRef } from "react";
import ChevronDownSVG from "../../../assets/svg/ChevronDownSVG";
import "./inputCheckBox.scss";
import ErrorForm from "../ErrorForm/ErrorForm";

type InputCheckBoxPropsType = {
  type?: string[];
  title: string;
  name: string;
  arrays?: string[];
  error: string;
  errors: string | undefined;
};

const InputCHeckBox = ({
  type,
  arrays,
  title,
  name,
  error,
  errors
}: InputCheckBoxPropsType) => {
  const btnListRef = useRef<HTMLDivElement | null>(null);
  const typeRef = useRef<HTMLUListElement | null>(null);

  const handleListClick = () => {
    const btnList = btnListRef.current;
    const typeList = typeRef.current;
    btnList?.classList.toggle("open");
    typeList?.classList.toggle("open");
  };

  return (
    <div className="item-inputCheckBox">
      <div className="menu-deroulant">
        <label className="title">{title}</label>
        <div className="containerList">
          <div
            className="select-btn"
            ref={btnListRef}
            onClick={handleListClick}
          >
            <span className="btn-text">{type ? type[0] : ""}</span>
            <span className="arrow-dwn">
              <ChevronDownSVG
                width="25"
                height="25"
                className="fa-solid fa-chevron-down"
              />
            </span>
          </div>
          <ul className="list-type" ref={typeRef}>
            {arrays &&
              arrays.map((array: string, index: number) => (
                <label className="type" key={index}>
                  <Field
                    className="checkbox"
                    type="checkbox"
                    name={name}
                    value={array}
                  />
                  <span className="item-text">{array}</span>
                </label>
              ))}
          </ul>
          <ErrorForm error={error} errors={errors} />
        </div>
      </div>
    </div>
  );
};

export default InputCHeckBox;
