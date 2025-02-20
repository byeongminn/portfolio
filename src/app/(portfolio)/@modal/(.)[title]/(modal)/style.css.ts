import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const modalOverlay = style([
  f.pFixed,
  f.flexCenterBox,
  {
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 1000,
  },
]);
