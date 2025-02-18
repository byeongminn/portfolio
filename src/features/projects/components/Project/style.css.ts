import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";
import "@/shared/styles/globals.css";

export const container = style([
  f.pFixed,
  {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: "5rem 20rem",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    overflow: "auto",
  },
]);

export const wrapper = style([
  f.pRelative,
  f.wFull,
  f.flex,
  f.directionColumn,
  {
    gap: "2rem",
    padding: "5rem 20%",
    background:
      "linear-gradient(180deg, #DADADA 0%, #DADADA 24.9%, #FDFDFD 25%, #FDFDFD 100%)",
    color: "#191919",
  },
]);

export const closeWrapper = style([
  f.pAbsolute,
  {
    top: "1.5rem",
    right: "1.5rem",
  },
]);

export const close = style([
  {
    cursor: "pointer",
  },
]);

export const titleWrapper = style([
  f.flex,
  f.directionColumn,
  f.alignCenter,
  {
    gap: "0.5rem",
  },
]);

export const title = style([
  {
    fontWeight: 500,
  },
]);

export const thumbnailWrapper = style([
  {
    border: "4px solid #c3c3c3",
    borderRadius: "1rem",
    backgroundColor: "#ffffff",
    aspectRatio: "2 / 1",
  },
]);

export const contentTitle = style([
  {
    marginBottom: "0.5rem",
    fontWeight: 500,
    fontSize: "20px",
  },
]);

export const content = style([
  {
    lineHeight: 1.3,
  },
]);

export const divider = style([
  {
    height: "1px",
    backgroundColor: "#dadada",
  },
]);
