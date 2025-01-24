import { FONT_SOURCE_CODE_PRO } from "@/shared/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const chip = style([
  {
    display: "inline-block",
    padding: "0.5rem 0.75rem",
    backgroundColor: "#f2f2f2",
    borderRadius: "999px",
    fontFamily: FONT_SOURCE_CODE_PRO,
    fontSize: "12px",
    color: "#555555",
  },
]);
