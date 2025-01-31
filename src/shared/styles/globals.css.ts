import { globalStyle } from "@vanilla-extract/css";

export const WIDTH_DESKTOP = "90rem";

export const FONT_PRETENDARD = "var(--font-pretendard)";
export const FONT_SOURCE_CODE_PRO = "var(--font-source-code-pro)";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
  maxWidth: "100vw",
  minHeight: "100vh",
  backgroundColor: "#FAFAFF",
  fontFamily: FONT_PRETENDARD,
  color: "#333333",
});

globalStyle("h1", {
  fontSize: "32px",
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

globalStyle("strong", {
  fontWeight: 500,
  background: "#e0e0e0",
  marginRight: "0.0625rem",
  padding: "0.125rem 0.1875rem",
  borderRadius: "0.25rem",
});
