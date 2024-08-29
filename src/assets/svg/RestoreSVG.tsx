import { SVGPropsType } from "./DashboardSVG";

const RestoreSVG = ({ width, height }: SVGPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 18.5c0 .5.07 1 .18 1.5H6.5c-1.5 0-2.81-.5-3.89-1.57C1.54 17.38 1 16.09 1 14.58q0-1.95 1.17-3.48C3.34 9.57 4 9.43 5.25 9.15c.42-1.53 1.25-2.77 2.5-3.72S10.42 4 12 4c1.95 0 3.6.68 4.96 2.04S19 9.05 19 11c1.15.13 2.1.63 2.86 1.5c.24.26.43.55.6.86A6.37 6.37 0 0 0 18.5 12a6.5 6.5 0 0 0-6.5 6.5m6-4c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5h4v-4l-1.17 1.17A4 4 0 0 0 18 14.5"
      />
    </svg>
  );
};

export default RestoreSVG;