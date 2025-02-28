import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";
import "@/shared/styles/globals.css";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";

export const container = style([
  f.pFixed,
  {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    overflow: "auto",
  },
  responsiveStyle({
    md: {
      padding: "5rem 12rem",
    },
  }),
]);

export const wrapper = style([
  f.pRelative,
  f.wFull,
  f.flex,
  f.directionColumn,
  {
    color: "#191919",
  },
]);

export const topWrapper = style([
  f.pRelative,
  f.flex,
  f.directionColumn,
  {
    gap: "2rem",
    padding: "4rem 5% 2rem",
    backgroundColor: "#FDFDFD",
    zIndex: 1,
  },
  responsiveStyle({
    md: {
      padding: "5rem 20% 2rem",
    },
  }),
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
    scale: 0.75,
    cursor: "pointer",
  },
  responsiveStyle({
    md: {
      scale: 1,
    },
  }),
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
    textAlign: "center",
  },
]);

export const thumbnailWrapper = style([
  {
    border: "4px solid #c3c3c3",
    borderRadius: "1rem",
    backgroundColor: "#ffffff",
    aspectRatio: "2 / 1",
  },
  {
    selectors: {
      "&::before": {
        position: "absolute",
        top: 0,
        left: 0,
        content: "",
        width: "100%",
        height: "70%",
        backgroundColor: "#DADADA",
        zIndex: -1,
      },
    },
  },
]);

export const bottomWrapper = style([
  f.flex,
  f.directionColumn,
  {
    gap: "2rem",
    padding: "0 5% 5rem 5%",
    backgroundColor: "#FDFDFD",
  },
  responsiveStyle({
    md: {
      padding: "0 20% 5rem 20%",
    },
  }),
]);

export const contentTitle = style([
  {
    marginBottom: "0.5rem",
    fontWeight: 500,
    fontSize: "20px",
  },
]);

export const content = style([
  f.pRelative,
  {
    paddingLeft: "0.75rem",
    lineHeight: "1.5rem",
  },
  {
    selectors: {
      "&::before": {
        content: "",
        position: "absolute",
        top: "0.75rem",
        left: 0,
        width: "0.25rem",
        height: "0.25rem",
        borderRadius: "50%",
        backgroundColor: "#000000",
      },
    },
  },
]);

export const detail = style([
  f.pRelative,
  {
    paddingLeft: "0.75rem",
    lineHeight: "1.5rem",
  },
  {
    selectors: {
      "&::before": {
        content: "",
        position: "absolute",
        top: "0.75rem",
        left: 0,
        width: "0.375rem",
        height: "1px",
        backgroundColor: "#000000",
      },
    },
  },
]);

export const divider = style([
  {
    height: "1px",
    backgroundColor: "#dadada",
  },
]);
