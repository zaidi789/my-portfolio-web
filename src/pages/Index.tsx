import { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import ClientOnly from "@/src/components/ClientOnly";

// Dynamically import components to prevent SSR issues
const Navigation = dynamic(() => import("@/src/components/Navigation"), {
  ssr: false,
  loading: () => <div className="h-16 md:h-20" />,
});

const Hero = dynamic(() => import("@/src/components/Hero"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  ),
});

const About = dynamic(() => import("@/src/components/About"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  ),
});

const Skills = dynamic(() => import("@/src/components/Skills"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  ),
});

const Projects = dynamic(() => import("@/src/components/Projects"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  ),
});

const Experience = dynamic(() => import("@/src/components/Experience"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  ),
});

const Contact = dynamic(() => import("@/src/components/Contact"), {
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
      <ClientOnly fallback={<div className="h-16 md:h-20" />}>
        <Navigation />
      </ClientOnly>

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <ClientOnly>
            <About />
          </ClientOnly>
        </section>

        <section id="skills">
          <ClientOnly>
            <Skills />
          </ClientOnly>
        </section>

        <section id="projects">
          <ClientOnly>
            <Projects />
          </ClientOnly>
        </section>

        <section id="experience">
          <ClientOnly>
            <Experience />
          </ClientOnly>
        </section>

        <section id="contact">
          <ClientOnly>
            <Contact />
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
