"use client";

import type { ReactNode } from "react";
import Navigation from "@/components/Navigation";

type SiteChromeProps = {
  children: ReactNode;
};

export const SiteChrome = ({ children }: SiteChromeProps) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
