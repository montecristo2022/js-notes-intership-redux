import { FC, ReactNode } from "react";
import css from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
