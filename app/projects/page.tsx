"use client";
import { useEffect } from "react";
import Navigation from "@/src/components/Navigation";
import Projects from "@/src/components/Projects";
import Footer from "@/src/components/Footer";

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
      <Navigation />

      <main>
        <section id="projects">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
