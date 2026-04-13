import { useEffect } from "react";
import dynamic from "next/dynamic";
import {
  HeroLoadingShell,
  SectionLoadingShell,
} from "@/src/components/PageSectionSkeleton";

const Navigation = dynamic(() => import("@/src/components/Navigation"), {
  ssr: false,
  loading: () => <div className="h-16 md:h-20" />,
});

const Hero = dynamic(() => import("@/src/components/Hero"), {
  ssr: false,
  loading: () => <HeroLoadingShell />,
});

const About = dynamic(() => import("@/src/components/About"), {
  ssr: false,
  loading: () => <SectionLoadingShell minHeight="min-h-[28rem]" />,
});

const Skills = dynamic(() => import("@/src/components/Skills"), {
  ssr: false,
  loading: () => <SectionLoadingShell minHeight="min-h-[32rem]" />,
});

const Projects = dynamic(() => import("@/src/components/Projects"), {
  ssr: false,
  loading: () => <SectionLoadingShell minHeight="min-h-[36rem]" />,
});

const PortfolioMetrics = dynamic(
  () => import("@/src/components/PortfolioMetrics"),
  {
    ssr: false,
    loading: () => <SectionLoadingShell minHeight="min-h-48" />,
  },
);

const CaseStudiesPreview = dynamic(
  () => import("@/src/components/CaseStudiesPreview"),
  {
    ssr: false,
    loading: () => <SectionLoadingShell minHeight="min-h-80" />,
  },
);

const Experience = dynamic(() => import("@/src/components/Experience"), {
  ssr: false,
  loading: () => <SectionLoadingShell minHeight="min-h-[36rem]" />,
});

const Contact = dynamic(() => import("@/src/components/Contact"), {
  ssr: false,
  loading: () => <SectionLoadingShell minHeight="min-h-[28rem]" />,
});

const Footer = dynamic(() => import("@/src/components/Footer"), {
  ssr: false,
  loading: () => <div className="h-20" />,
});

const Index = () => {
  useEffect(() => {
    document.title =
      "Zaid Rafiq | Senior mobile application developer, React Native portfolio";

    document.documentElement.style.scrollBehavior = "smooth";

    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    handleHashNavigation();
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

        <section id="metrics">
          <PortfolioMetrics />
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

        <section id="case-studies">
          <CaseStudiesPreview />
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
