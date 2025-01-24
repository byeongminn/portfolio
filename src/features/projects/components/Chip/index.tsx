import * as s from "./style.css";

export const Chip = ({ children }: { children: React.ReactNode }) => {
  return <span className={s.chip}>{children}</span>;
};
