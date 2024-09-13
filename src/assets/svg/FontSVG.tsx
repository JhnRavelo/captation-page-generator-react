import { SVGPropsType } from "./DashboardSVG";

const FontSVG = ({ width, height }: SVGPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M4.51 2.6L.25 13.67h1.34l1.49-3.86h4l1.52 3.86h1.34L5.68 2.6a.63.63 0 0 0-1.17 0m-.95 6l1.54-4l1.53 4zm9.35-2.54a2.8 2.8 0 0 0-3 2.08l1.21.31a1.6 1.6 0 0 1 1.78-1.14c.77 0 1.59.26 1.59 1v.75c-.27 0-.63.09-.94.13a9.1 9.1 0 0 0-2.5.52a2.06 2.06 0 0 0-1.41 2.23a1.94 1.94 0 0 0 .88 1.44a3 3 0 0 0 1.62.43a4.4 4.4 0 0 0 1.36-.22a2.9 2.9 0 0 0 1-.52v.61h1.25V8.3c0-1.3-1.14-2.24-2.84-2.24m.22 6.33a2.4 2.4 0 0 1-1.91-.07a.64.64 0 0 1-.32-.52c-.1-.89.82-1.16 2.8-1.38l.76-.1c-.19 1.68-.94 1.94-1.33 2.07"
      />
    </svg>
  );
};

export default FontSVG;