import { SVGPropsType } from "./DashboardSVG";

const SaveSVG = ({ width, height }: SVGPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6.5 20q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.58-2.02 2.14-3.4Q8.95 4.38 11 4.08v8.07L9.4 10.6L8 12l4 4l4-4l-1.4-1.4l-1.6 1.55V4.08q2.58.35 4.29 2.31T19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20Z"
      />
    </svg>
  );
};

export default SaveSVG;
