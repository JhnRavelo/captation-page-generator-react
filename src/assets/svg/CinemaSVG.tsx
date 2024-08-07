import { SVGPropsType } from "./DashboardSVG";

const CinemaSVG = ({ height, width }: SVGPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 3a9 9 0 0 1 9 9c0 2.453-.98 4.676-2.573 6.3A8.967 8.967 0 0 1 12 21a9 9 0 1 1 0-18m6.326 18c.55-.387 1.061-.822 1.53-1.3A10.967 10.967 0 0 0 23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11h12v-2zM12 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2M9 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-2 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m13-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-2 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0"
      />
    </svg>
  );
};

export default CinemaSVG;
