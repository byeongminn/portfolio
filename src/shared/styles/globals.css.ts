import { globalStyle } from "@vanilla-extract/css";

export const WIDTH_DESKTOP = "90rem";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  maxWidth: "100vw",
  minHeight: "100vh",
  backgroundColor: "#FAFAFF",
});

globalStyle("h1", {
  fontSize: "36px",
  lineHeight: 1.3,
});

globalStyle("h2", {
  fontSize: "24px",
  lineHeight: 1.3,
});

globalStyle("h3", {
  fontSize: "18px",
  lineHeight: 1.3,
});

globalStyle("h4", {
  fontSize: "16px",
  lineHeight: 1.3,
});

globalStyle("h5", {
  fontSize: "14px",
  lineHeight: 1.3,
});

globalStyle("h6", {
  fontSize: "12px",
  lineHeight: 1.3,
});
