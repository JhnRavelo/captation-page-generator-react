import { SVGPropsType } from "./DashboardSVG";

const ViewOffSVG = ({ width, height, className, onClick }: SVGPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      className={className}
      onClick={onClick}
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          d="M3.707 2.293a1 1 0 0 0-1.414 1.414l14 14a1 1 0 0 0 1.414-1.414l-1.473-1.473A10.014 10.014 0 0 0 19.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 0 0-4.512 1.074zm4.261 4.26l1.514 1.515a2.003 2.003 0 0 1 2.45 2.45l1.514 1.514a4 4 0 0 0-5.478-5.478"
          clipRule="evenodd"
        />
        <path d="M12.454 16.697L9.75 13.992a4 4 0 0 1-3.742-3.741L2.335 6.578A9.98 9.98 0 0 0 .458 10c1.274 4.057 5.065 7 9.542 7c.847 0 1.669-.105 2.454-.303" />
      </g>
    </svg>
  );
};

export default ViewOffSVG;
