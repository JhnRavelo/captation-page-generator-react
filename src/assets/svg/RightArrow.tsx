import { SVGPropsType } from "./DashboardSVG";

const RightArrow = ({ height, width, className }: SVGPropsType) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M4133 3468 c-11 -5 -29 -25 -38 -42 -37 -68 -34 -72 320 -426 l325
-325 -2327 -5 c-2567 -6 -2356 0 -2389 -68 -20 -43 -11 -85 28 -117 l30 -25
2329 0 c1281 0 2329 -3 2329 -7 0 -4 -148 -156 -330 -338 -298 -299 -330 -334
-330 -363 0 -68 44 -112 112 -112 28 0 78 46 462 428 237 235 436 436 443 447
17 27 16 60 -1 93 -18 33 -832 845 -863 861 -27 13 -71 13 -100 -1z"
        />
      </g>
    </svg>
  );
};

export default RightArrow;
