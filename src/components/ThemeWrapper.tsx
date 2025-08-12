"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Ensure theme is properly initialized
    const root = document.documentElement;
    const body = document.body;

    // Force light theme if none is set
    if (!root.classList.contains("dark") && !root.classList.contains("light")) {
      root.classList.add("light");
    }

    // Ensure CSS variables are available
    if (!body.style.getPropertyValue("--background")) {
      // Force a re-render of CSS variables
      root.classList.remove("light");
      setTimeout(() => root.classList.add("light"), 10);
    }
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </ThemeProvider>
  );
}
