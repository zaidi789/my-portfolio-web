"use client";
import { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import ClientOnly from "@/src/components/ClientOnly";

// Dynamically import components to prevent SSR issues
const Navigation = dynamic(() => import("@/src/components/Navigation"), {
  ssr: false,
  loading: () => <div className="h-16 md:h-20" />,
});

const Projects = dynamic(() => import("@/src/components/Projects"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  ),
});

const Footer = dynamic(() => import("@/src/components/Footer"), {
  ssr: false,
  loading: () => <div className="h-20" />,
});

const Index = () => {
  useEffect(() => {
    // Set the page title
    document.title =
      "Zaid Rafiq - React Native Developer | Mobile App Developer | Cross-Platform Developer";

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ClientOnly fallback={<div className="h-16 md:h-20" />}>
        <Navigation />
      </ClientOnly>

      <main>
        <section id="projects">
          <ClientOnly>
            <Projects />
          </ClientOnly>
        </section>
      </main>

      <ClientOnly>
        <Footer />
      </ClientOnly>
    </div>
  );
};

export default Index;
