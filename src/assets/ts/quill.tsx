export const modules = {
  clipboard: {
    matchVisual: false,
  },
  toolbar: [
    [{ font: [] }],
    [{ size: ["0.75em", "1em", "1.5em", "2.5em"]}],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
    ["clean"],
  ],
};

export const formats = [
  "font",
  "size",
  "align",
  "color",
  "background",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "link",
];
