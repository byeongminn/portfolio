import { f } from "@/shared/styles/functions";
import { WIDTH_DESKTOP } from "@/shared/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  f.wFull,
  f.flex,
  f.directionColumn,
  {
    margin: "0 auto",
    padding: "5rem 0",
    maxWidth: WIDTH_DESKTOP,
    gap: "3.125rem",
  },
]);

export const wrapper = style([
  f.flex,
  f.directionColumn,
  {
    gap: "1.125rem",
    padding: "2.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.16)",
  },
]);

export const title = style([
  {
    fontWeight: 700,
    letterSpacing: "-0.03rem",
    color: "#222222",
  },
]);

export const contents = style([
  {
    fontWeight: 300,
    letterSpacing: "-0.04rem",
  },
]);
