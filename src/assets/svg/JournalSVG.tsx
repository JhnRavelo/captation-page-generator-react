import { SVGPropsType } from "./DashboardSVG";

const JournalSVG = ({ width, height }: SVGPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512"
    >
      <rect width="96" height="96" fill="none" />
      <path
        fill="currentColor"
        d="M468 112h-52v304a32 32 0 0 0 32 32a32 32 0 0 0 32-32V124a12 12 0 0 0-12-12"
      />
      <path
        fill="currentColor"
        d="M431.15 477.75A64.11 64.11 0 0 1 384 416V44a12 12 0 0 0-12-12H44a12 12 0 0 0-12 12v380a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 .3-2.25M96 208v-96h96v96Zm224 192H96v-32h224Zm0-64H96v-32h224Zm0-64H96v-32h224Zm0-64h-96v-32h96Zm0-64h-96v-32h96Z"
      />
    </svg>
  );
};

export default JournalSVG;
