import { createVar, style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";

export const link = style([
  {
    color: "#333333",
    textDecoration: "none",
  },
]);

export const container = style([
  f.flex,
  f.directionColumn,
  f.hFull,
  {
    backgroundColor: "#ffffff",
    borderRadius: "0.75rem",
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.16)",
    lineHeight: 1.3,
  },
]);

export const backgroundColorVar = createVar();
export const thumbnailWrapper = style([
  f.wFull,
  f.flexCenterBox,
  {
    aspectRatio: "2 / 1",
    backgroundColor: backgroundColorVar,
    borderTopLeftRadius: "0.75rem",
    borderTopRightRadius: "0.75rem",
  },
]);

export const contentsWrapper = style([
  f.flex,
  f.directionColumn,
  {
    flex: 1,
    gap: "0.625rem",
    padding: "0.75rem",
  },
  responsiveStyle({
    lg: {
      gap: "1.5rem",
      padding: "1.75rem",
    },
  }),
]);

export const infoWrapper = style([
  f.flex,
  f.directionColumn,
  {
    flex: 1,
    gap: "0.625rem",
  },
  responsiveStyle({
    lg: {
      gap: "1rem",
    },
  }),
]);

export const title = style([
  f.truncate2,
  {
    fontWeight: 600,
    fontSize: "16px",
    color: "#050505",
  },
  responsiveStyle({
    lg: {
      fontSize: "24px",
    },
  }),
]);

export const description = style([
  f.truncate2,
  {
    marginTop: "0.25rem",
    fontSize: "14px",
    color: "#111111",
  },
  responsiveStyle({
    lg: {
      fontSize: "16px",
    },
  }),
]);

export const divider = style([
  {
    height: "1px",
    backgroundColor: "#d2d2d2",
  },
]);

export const achievementsWrapper = style([
  f.flex,
  f.directionColumn,
  {
    gap: "0.5rem",
  },
]);

export const period = style([
  {
    fontSize: "14px",
  },
  responsiveStyle({
    lg: {
      fontSize: "16px",
    },
  }),
]);

export const achievementTitle = style([
  {
    fontWeight: 500,
    fontSize: "14px",
  },
  responsiveStyle({
    lg: {
      fontSize: "16px",
    },
  }),
]);

export const achievementContents = style([
  {
    paddingLeft: "0.5rem",
    fontWeight: 400,
    fontSize: "14px",
  },
  responsiveStyle({
    lg: {
      fontSize: "16px",
    },
  }),
]);

export const stacksWrapper = style([
  f.flex,
  {
    gap: "0.5rem",
    flexWrap: "wrap",
  },
]);

export const buttonWrapper = style([f.flex, f.justifyEnd]);

export const button = style([
  f.flex,
  {
    gap: "0.25rem",
    padding: "0.5rem 0.75rem",
    backgroundColor: "#333333",
    border: "none",
    borderRadius: "0.25rem",
    fontSize: "12px",
    color: "#ffffff",
    cursor: "pointer",
  },
  responsiveStyle({
    lg: {
      fontSize: "14px",
    },
  }),
]);
