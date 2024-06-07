import { SVGPropsType } from "./DashboardSVG";

const DownloadSVG = ({width, height, onClick}:SVGPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M8 17v-2h8v2zm8-7l-4 4l-4-4h2.5V6h3v4zm-4-8c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8"
      />
    </svg>
  );
};

export default DownloadSVG;
