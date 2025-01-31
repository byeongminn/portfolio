import { style } from "@vanilla-extract/css";
import { f } from "@/shared/styles/functions";

export const container = style([
  f.flex,
  f.directionColumn,
  {
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
    fontSize: "60px",
    color: "#111111",
  },
]);

export const aspiration = style([
  {
    marginTop: "4.5rem",
    fontSize: "32px",
    textAlign: "center",
  },
]);

export const githubLink = style([
  {
    marginTop: "3rem",
  },
]);

export const copyrightWrapper = style([
  f.flexCenterBox,
  {
    height: "5rem",
  },
]);

export const copyright = style([
  {
    fontSize: "14px",
    color: "#696969",
  },
]);

export const onwer = style([
  {
    fontWeight: 700,
  },
]);
