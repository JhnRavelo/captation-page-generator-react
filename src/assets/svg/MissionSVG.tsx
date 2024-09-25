import { SVGPropsType } from "./DashboardSVG";

const MissionSVG = ({ height, width }: SVGPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M11.998 1.998c1.204 0 2.358.213 3.427.602L14.23 3.794a8.502 8.502 0 1 0 5.974 5.976l1.194-1.194A10 10 0 0 1 22 12c0 5.524-4.478 10.002-10.002 10.002S1.996 17.524 1.996 12S6.474 1.998 11.998 1.998m0 4.002a6 6 0 0 1 1.502.19v1.567a4.5 4.5 0 1 0 2.742 2.743h1.567A6 6 0 1 1 12 6m2 6a2 2 0 1 1-1.217-1.841l1.72-1.72L14.5 5.25a.75.75 0 0 1 .22-.53l2.5-2.5a.75.75 0 0 1 1.28.53V5.5h2.75a.75.75 0 0 1 .53 1.28l-2.5 2.5a.75.75 0 0 1-.53.22h-3.19l-1.72 1.72c.102.24.158.503.158.78m4.441-4l1-1h-1.69a.75.75 0 0 1-.75-.75V4.56l-.999 1v2.381l.059.06z"
      />
    </svg>
  );
};

export default MissionSVG;