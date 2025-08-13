"use client";

import { useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeWrapper } from "./ThemeWrapper";
import { TooltipProvider } from "@/src/components/ui/tooltip";
import { Toaster } from "@/src/components/ui/toaster";
import { Toaster as Sonner } from "@/src/components/ui/sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // During SSR/build, render without any context providers
  if (!isClient) {
    return (
      <ErrorBoundary>
        <div className="light">{children}</div>
      </ErrorBoundary>
    );
  }

  // On client side, render with theme support
  return (
    <ErrorBoundary>
      <ThemeWrapper>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </ThemeWrapper>
    </ErrorBoundary>
  );
}
