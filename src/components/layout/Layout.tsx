import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light px-2 dark:bg-dark p-4 ${className ?? ""}`}
    >
      {children}
    </div>
  );
};
