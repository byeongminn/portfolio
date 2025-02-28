import { StyleRule } from "@vanilla-extract/css";

type responsiveStyleParams = {
  xxl?: StyleRule;
  xl?: StyleRule;
  lg?: StyleRule;
  md?: StyleRule;
  sm?: StyleRule;
};

export const responsiveStyle = ({
  xxl = {},
  xl = {},
  lg = {},
  md = {},
  sm = {},
}: responsiveStyleParams) => ({
  "@media": {
    "screen and (min-width: 1px)": sm,
    "screen and (min-width: 768px)": md,
    "screen and (min-width: 992px)": lg,
    "screen and (min-width: 1200px)": xl,
    "screen and (min-width: 1440px)": xxl,
  },
});
