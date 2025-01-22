import { f } from "@/shared/styles/functions";
import { WIDTH_DESKTOP } from "@/shared/styles/globals.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  f.flexCenterBox,
  f.directionColumn,
  f.wFull,
  {
    margin: "0 auto",
    padding: "5rem 0",
    maxWidth: WIDTH_DESKTOP,
    height: "100dvh",
  },
]);

export const contentWrapper = style([
  f.flex,
  f.wFull,
  f.alignCenter,
  { flex: 1 },
]);

export const content = style([
  {
    flex: "1 1 940px",
  },
]);

export const titleWrapper = style([
  {
    maxWidth: "45rem",
    fontWeight: "700",
    lineHeight: 1.4,
    fontSize: "78px",
    color: "#111111",
  },
]);

export const p1 = style([
  f.flex,
  f.justifyBetween,
  f.alignCenter,
  {
    padding: "0 1rem 0 2.5rem",
    border: "0.25rem solid #4141FF",
    borderRadius: "999px",
  },
]);

export const p2 = style([
  {
    padding: "0 2.5rem",
  },
]);

export const stacksWrapper = style([
  f.flex,
  f.directionColumn,
  {
    marginTop: "6.25rem",
    padding: "0 2.5rem",
    gap: "1.5rem",
    color: "#333333",
  },
]);

export const stacks = style([
  f.flex,
  {
    gap: "2rem",
  },
]);

export const type = style([
  {
    width: "6.25rem",
    flexShrink: 0,
    letterSpacing: "-0.04rem",
    fontWeight: 600,
  },
]);

export const stackWrapper = style([
  f.flex,
  {
    gap: "1.125rem",
    flexWrap: "wrap",
  },
]);

export const stack = style([
  f.flex,
  f.alignCenter,
  {
    gap: "0.75rem",
    fontWeight: 300,
  },
]);

export const imageWrapper = style([
  f.pRelative,
  {
    flex: "1 1 500px",
    aspectRatio: "1 / 1",
  },
]);

export const image = style([f.wFull, f.hFull]);

export const infoWrapper = style([
  f.wFull,
  {
    fontWeight: 300,
    textAlign: "right",
    color: "#222222",
  },
]);
