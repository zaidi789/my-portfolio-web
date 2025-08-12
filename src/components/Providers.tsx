"use client";

import { TooltipProvider } from "@/src/components/ui/tooltip";
import { Toaster } from "@/src/components/ui/toaster";
import { Toaster as Sonner } from "@/src/components/ui/sonner";
import { ThemeWrapper } from "./ThemeWrapper";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeWrapper>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {children}
      </TooltipProvider>
    </ThemeWrapper>
  );
}
