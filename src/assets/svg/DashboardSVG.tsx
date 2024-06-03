export type SVGPropsType = {
  width: string;
  height: string;
  className?: string;
  svgRef?: React.MutableRefObject<SVGSVGElement | null>;
  onClick?: () => void;
};

const DashboardSVG = ({ width, height }: SVGPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
    >
      <g fill="currentColor">
        <path
          d="M224 56v112a8 8 0 0 1-8 8h-24V88a8 8 0 0 0-8-8H64V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8"
          opacity=".2"
        />
        <path d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 88h144v16H40Zm144 112H40v-80h144zm32-32h-16V88a16 16 0 0 0-16-16H72V56h144Z" />
      </g>
    </svg>
  );
};

export default DashboardSVG;
