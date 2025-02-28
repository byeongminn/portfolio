import { style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import {
  WIDTH_LG,
  WIDTH_MD,
  WIDTH_XL,
  WIDTH_XXL,
} from "@/shared/styles/globals.css";

export const container = style([
  f.flexCenterBox,
  f.directionColumn,
  f.wFull,
  {
    margin: "0 auto",
    padding: "2rem 1rem",
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
      padding: "5rem 1rem",
      maxWidth: WIDTH_LG,
    },
    md: {
      maxWidth: WIDTH_MD,
    },
  }),
]);

export const contentWrapper = style([
  f.flexCenterBox,
  {
    flex: 1,
  },
]);

export const content = style([
  f.wFull,
  {
    display: "grid",
    gridTemplateColumns: "auto",
    gridAutoRows: "auto",
    gridTemplateAreas: `
      "title"
      "image"
      "stack"
    `,
  },
  responsiveStyle({
    lg: {
      gridTemplateColumns: "repeat(2, auto)",
      gridAutoRows: "auto",
      gridTemplateAreas: `
        "title image"
        "stack image"
      `,
    },
  }),
]);

export const titleWrapper = style([
  {
    gridArea: "title",
    fontWeight: "700",
    lineHeight: 1.4,
    color: "#111111",
  },
  responsiveStyle({
    xxl: {
      maxWidth: "45rem",
      fontSize: "78px",
    },
    xl: {
      maxWidth: "42rem",
      fontSize: "72px",
    },
    lg: {
      padding: "0",
      maxWidth: "32rem",
      fontSize: "52px",
    },
    md: {
      padding: "0 2rem",
      maxWidth: "100%",
      fontSize: "40px",
    },
    sm: {
      fontSize: "24px",
    },
  }),
]);

export const p1 = style([
  f.flex,
  f.justifyBetween,
  f.alignCenter,
  {
    padding: "0 1rem 0 0.75rem",
    border: "0.25rem solid #4141FF",
    borderRadius: "999px",
  },
  responsiveStyle({
    md: {
      padding: "0 1rem 0 2.5rem",
    },
  }),
]);

export const searchIconWrapper = style([
  f.flexCenterBox,
  {
    width: "2rem",
    height: "2rem",
  },
  responsiveStyle({
    xl: {
      width: "4.5rem",
      height: "4.5rem",
    },
    lg: {
      width: "3.25rem",
      height: "3.25rem",
    },
    md: {
      width: "2.5rem",
      height: "2.5rem",
    },
  }),
]);

export const searchIcon = style([
  f.wFull,
  { height: "auto", objectFit: "contain" },
]);

export const p2 = style([
  {
    padding: "0 0.75rem",
  },
  responsiveStyle({
    md: {
      padding: "0 2.5rem",
    },
  }),
]);

export const stacksWrapper = style([
  f.flex,
  f.directionColumn,
  {
    gridArea: "stack",
    gap: "1.5rem",
    color: "#333333",
  },
  responsiveStyle({
    lg: {
      marginTop: "6.25rem",
      padding: "0 2.5rem",
    },
    sm: {
      marginTop: "0",
      padding: "0 2rem",
    },
  }),
]);

export const stacks = style([
  f.flex,
  f.directionColumn,
  {
    gap: "1rem",
    textTransform: "capitalize",
  },
  responsiveStyle({
    lg: {
      flexDirection: "row",
      gap: "2rem",
    },
  }),
]);

export const type = style([
  {
    width: "6.25rem",
    flexShrink: 0,
    letterSpacing: "-0.04rem",
    fontWeight: 600,
    fontSize: "16px",
  },
  responsiveStyle({
    lg: {
      fontSize: "24px",
    },
    md: {
      fontSize: "20px",
    },
  }),
]);

export const stackWrapper = style([
  f.flex,
  {
    gap: "0.75rem",
    flexWrap: "wrap",
  },
  responsiveStyle({
    lg: {
      gap: "1.125rem",
    },
  }),
]);

export const stack = style([
  f.flex,
  f.alignCenter,
  {
    gap: "0.375rem",
  },
  responsiveStyle({
    lg: {
      gap: "0.75rem",
    },
    md: {
      gap: "0.5rem",
    },
  }),
]);

export const stackIcon = style([
  {
    scale: 0.75,
  },
  responsiveStyle({
    lg: {
      scale: 1,
    },
    md: {
      scale: 0.85,
    },
  }),
]);

export const stackName = style([
  {
    fontWeight: 300,
    fontSize: "10px",
  },
  responsiveStyle({
    lg: {
      fontSize: "16px",
    },
    md: {
      fontSize: "12px",
    },
  }),
]);

export const imageWrapper = style([
  f.flexCenterBox,
  {
    gridArea: "image",
    margin: "1.25rem 0",
  },
  responsiveStyle({
    lg: {
      margin: 0,
    },
    sm: {},
  }),
]);

export const image = style([
  {
    width: "50vw",
    height: "50vw",
  },
  responsiveStyle({
    xxl: {
      width: "31.25rem",
      height: "31.25rem",
    },
    lg: {
      width: "25rem",
      height: "25rem",
    },
    md: {
      width: "20rem",
      height: "20rem",
    },
  }),
]);

export const infoWrapper = style([
  f.wFull,
  {
    fontWeight: 300,
    textAlign: "right",
    color: "#222222",
  },
]);

export const info = style([
  {
    fontSize: "12px",
  },
  responsiveStyle({
    xl: {
      fontSize: "24px",
    },
    lg: {
      fontSize: "20px",
    },
    md: {
      fontSize: "14px",
    },
  }),
]);
