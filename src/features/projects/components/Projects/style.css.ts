import { f } from "@/shared/styles/functions";
import { responsiveStyle } from "@/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  {
    padding: "2rem 0",
    overflow: "hidden",
  },
  responsiveStyle({
    lg: {
      padding: "11.25rem 0",
    },
  }),
]);

export const wrapper = style([
  f.pRelative,
  {
    zIndex: 0,
  },
]);

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
    scale: 0.75,
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
  responsiveStyle({
    lg: {
      scale: 1,
    },
  }),
]);

export const swiperButtonPrev = style([
  swiperButton,
  {
    left: "1rem",
  },
  responsiveStyle({
    lg: {
      left: "3rem",
    },
  }),
]);

export const swiperButtonNext = style([
  swiperButton,
  {
    right: "1rem",
  },
  responsiveStyle({
    lg: {
      right: "3rem",
    },
  }),
]);
