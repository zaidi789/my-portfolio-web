import { useEffect } from "react";
import Navigation from "@/src/components/Navigation";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import Experience from "@/src/components/Experience";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set the page title
    document.title =
      "Zaid Rafiq - React Native Developer | Mobile App Developer | Cross-Platform Developer";

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Handle hash navigation on page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Add a small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    // Handle initial hash
    handleHashNavigation();

    // Handle hash changes (when user navigates with hash)
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
