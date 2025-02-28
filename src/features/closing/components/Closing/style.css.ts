import { style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";

export const container = style([
  f.flex,
  f.directionColumn,
  {
    padding: "1rem",
    height: "100dvh",
  },
]);

export const closingWrapper = style([
  f.flexCenterBox,
  f.directionColumn,
  {
    flex: 1,
  },
]);

export const thanks = style([
  {
    fontWeight: 700,
    fontSize: "32px",
    color: "#111111",
  },
  responsiveStyle({
    lg: {
      fontSize: "60px",
    },
    md: {
      fontSize: "46px",
    },
  }),
]);

export const aspiration = style([
  {
    marginTop: "1.5rem",
    fontSize: "16px",
    textAlign: "center",
  },
  responsiveStyle({
    lg: {
      marginTop: "4.5rem",
      fontSize: "32px",
    },
    md: {
      marginTop: "3rem",
      fontSize: "24px",
    },
  }),
]);

export const githubLink = style([
  {
    marginTop: "0.75rem",
    scale: 0.5,
  },
  responsiveStyle({
    lg: {
      marginTop: "3rem",
      scale: 1,
    },
    md: {
      marginTop: "1rem",
      scale: 0.75,
    },
  }),
]);

export const copyrightWrapper = style([
  f.flexCenterBox,
  {
    height: "5rem",
  },
]);

export const copyright = style([
  {
    fontSize: "12px",
    color: "#696969",
  },
  responsiveStyle({
    lg: {
      fontSize: "14px",
    },
  }),
]);

export const onwer = style([
  {
    fontWeight: 700,
  },
]);
