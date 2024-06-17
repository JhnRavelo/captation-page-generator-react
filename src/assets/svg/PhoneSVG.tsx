import { SVGPropsType } from "./DashboardSVG";

const PhoneSVG = ({ width, height }: SVGPropsType) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M1481 5104 c-169 -45 -301 -180 -346 -351 -23 -87 -23 -4299 0 -4386
45 -173 178 -307 350 -352 89 -23 2061 -23 2150 0 178 47 321 197 355 374 7
35 10 776 10 2180 0 1878 -2 2134 -15 2186 -45 172 -179 305 -352 350 -84 22
-2070 21 -2152 -1z m1479 -384 l0 -80 -400 0 -400 0 0 80 0 80 400 0 400 0 0
-80z m880 -2160 l0 -1760 -1280 0 -1280 0 0 1760 0 1760 1280 0 1280 0 0
-1760z m-1206 -1932 c86 -26 166 -136 166 -228 0 -124 -116 -240 -240 -240
-124 0 -240 116 -240 240 0 63 23 114 75 165 70 71 145 90 239 63z"
        />
      </g>
    </svg>
  );
};

export default PhoneSVG;
