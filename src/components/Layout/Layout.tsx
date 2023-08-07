import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="grid gap-4 max-w-screen-xl mx-auto p-4">{children}</main>
  );
};
