import { f } from "@/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const container = style([
  {
    padding: "11.25rem 0",
    overflow: "hidden",
  },
]);

export const wrapper = style([f.pRelative]);

export const swiper = style([
  {
    width: "70%",
    overflow: "visible",
  },
]);

export const swiperSlider = style([
  {
    padding: "1rem",
    maxWidth: "532px",
    minWidth: "272px",
    height: "auto",
  },
]);

export const swiperButton = style([
  f.pAbsolute,
  {
    top: "50%",
    transform: "translateY(-50%)",
    padding: 0,
    width: "4rem",
    height: "4rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    border: "none",
    borderRadius: "50%",
    color: "#ffffff",
    opacity: 0,
    zIndex: 2,
    transition: "all 0.3s",
    cursor: "pointer",
  },
  {
    selectors: {
      [`${wrapper}:hover &`]: {
        opacity: 1,
      },
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 1)",
      },
    },
  },
]);

export const swiperButtonPrev = style([
  swiperButton,
  {
    left: "3rem",
  },
]);

export const swiperButtonNext = style([
  swiperButton,
  {
    right: "3rem",
  },
]);
