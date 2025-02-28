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
  {
    margin: "0 auto",
    padding: "5rem 0",
    gap: "3.125rem",
  },
  responsiveStyle({
    xxl: {
      maxWidth: WIDTH_XXL,
    },
    xl: {
      maxWidth: WIDTH_XL,
    },
    lg: {
      maxWidth: WIDTH_LG,
    },
    md: {
      maxWidth: WIDTH_MD,
    },
    sm: {
      padding: "5rem 1rem",
    },
  }),
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
