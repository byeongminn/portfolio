import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import {
  WIDTH_LG,
  WIDTH_MD,
  WIDTH_XL,
  WIDTH_XXL,
} from "@/shared/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  f.wFull,
  f.flex,
  f.directionColumn,
  f.justifyCenter,
  {
    margin: "0 auto",
    padding: "2rem 1rem",
    gap: "1.25rem",
    height: "100dvh",
  },
  responsiveStyle({
    xxl: {
      maxWidth: WIDTH_XXL,
    },
    xl: {
      maxWidth: WIDTH_XL,
    },
    lg: {
      gap: "3.125rem",
      padding: "5rem 1rem",
      maxWidth: WIDTH_LG,
    },
    md: {
      maxWidth: WIDTH_MD,
    },
  }),
]);

export const wrapper = style([
  f.flex,
  f.directionColumn,
  {
    gap: "1.125rem",
    padding: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.16)",
  },
  responsiveStyle({
    lg: {
      padding: "2.5rem",
    },
  }),
]);

export const title = style([
  {
    fontWeight: 700,
    fontSize: "18px",
    letterSpacing: "-0.03rem",
    color: "#222222",
  },
  responsiveStyle({
    lg: {
      fontSize: "32px",
    },
  }),
]);

export const contents = style([
  {
    fontWeight: 300,
    fontSize: "16px",
    letterSpacing: "-0.04rem",
  },
  responsiveStyle({
    lg: {
      fontSize: "24px",
    },
  }),
]);
