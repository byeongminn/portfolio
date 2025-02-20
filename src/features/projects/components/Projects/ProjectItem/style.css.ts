import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

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

export const thumbnailWrapper = style([
  f.wFull,
  {
    aspectRatio: "2 / 1",
    backgroundColor: "#dedede",
    borderTopLeftRadius: "0.75rem",
    borderTopRightRadius: "0.75rem",
  },
]);

export const contentsWrapper = style([
  f.flex,
  f.directionColumn,
  {
    flex: 1,
    gap: "1.5rem",
    padding: "1.75rem",
  },
]);

export const infoWrapper = style([
  f.flex,
  f.directionColumn,
  {
    flex: 1,
    gap: "1rem",
  },
]);

export const title = style([
  f.truncate2,
  {
    fontWeight: 600,
    color: "#050505",
  },
]);

export const description = style([
  f.truncate2,
  {
    marginTop: "0.25rem",
    color: "#111111",
  },
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

export const achievementTitle = style([
  {
    fontWeight: 500,
  },
]);

export const achievementContents = style([
  {
    paddingLeft: "0.5rem",
    fontWeight: 400,
    fontSize: "16px",
  },
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
    fontSize: "14px",
    color: "#ffffff",
    cursor: "pointer",
    textDecoration: "none",
  },
]);
