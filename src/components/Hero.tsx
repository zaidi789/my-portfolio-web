"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { Button } from "@/src/components/ui/button";
import {
  Download,
  Mail,
  Linkedin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import HeroMobileShowcase from "@/src/components/HeroMobileShowcase";
import WhatsAppIcon from "@/src/components/icons/WhatsAppIcon";
import { WHATSAPP_CHAT_URL } from "@/src/constants/contactLinks";

const Hero = () => {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  const goToProjectsSection = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById("projects")?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
      });
      window.history.replaceState(null, "", "/#projects");
    } else {
      e.preventDefault();
      window.location.assign("/#projects");
    }
  };
  const ease = [0.22, 1, 0.36, 1] as const;
  const fadeUp = reduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, ease },
      };

  const capabilities = [
    "Multi-app suites for customer, staff, and field teams.",
    "TypeScript and React Native for iOS and Android.",
    "Push notifications, offline-aware flows, and store releases.",
  ];

  return (
    <section
      className="relative min-h-[100dvh] overflow-hidden hero-portfolio-mobile"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background via-background to-muted/25" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] tech-grid" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col lg:justify-center">
        <div className="site-width flex flex-1 flex-col pb-[max(1rem,env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] sm:pb-8 sm:pt-[calc(5.75rem+env(safe-area-inset-top))] lg:flex-none lg:pb-24 lg:pt-[calc(6.25rem+env(safe-area-inset-top))]">
          <div className="grid min-h-0 flex-1 content-start items-stretch gap-6 sm:gap-10 lg:min-h-0 lg:flex-none lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-14 lg:content-center xl:gap-16">
            <div className="order-2 flex min-h-0 flex-col lg:order-1 lg:justify-center">
              <motion.div {...fadeUp}>
                <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  React Native, iOS, Android
                </span>
              </motion.div>

              <motion.div
                className="mt-4 sm:mt-5"
                {...(reduceMotion
                  ? { initial: false, animate: { opacity: 1, y: 0 } }
                  : {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: 0.04, ease },
                    })}
              >
                <h1
                  id="hero-heading"
                  className="text-[2.125rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
                >
                  <span className="block">Zaid Rafiq</span>
                  <span className="mt-2 block text-[1.125rem] font-normal leading-snug tracking-normal text-muted-foreground sm:text-xl lg:text-[1.35rem]">
                    Senior mobile application developer
                  </span>
                </h1>
              </motion.div>

              <motion.p
                className="mt-4 max-w-[34rem] text-[1.0625rem] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg"
                {...(reduceMotion
                  ? { initial: false, animate: { opacity: 1 } }
                  : {
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.45, delay: 0.1, ease },
                    })}
              >
                I build production mobile apps people open every day. The stack
                is fast, maintainable React Native, tuned for real devices and
                store-ready quality.
              </motion.p>

              <motion.ul
                className="mt-5 max-w-[34rem] space-y-2.5 sm:mt-7 sm:space-y-3"
                {...(reduceMotion
                  ? { initial: false, animate: { opacity: 1 } }
                  : {
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.45, delay: 0.14, ease },
                    })}
              >
                {capabilities.map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-[0.9375rem] leading-snug text-muted-foreground sm:text-[15px]"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-[18px] w-[18px] shrink-0 text-primary"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                className="mt-6 grid max-w-md grid-cols-3 gap-2 sm:mt-8 sm:max-w-lg sm:gap-3"
                {...(reduceMotion
                  ? { initial: false, animate: { opacity: 1 } }
                  : {
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.45, delay: 0.18, ease },
                    })}
              >
                {[
                  { label: "Years of experience", value: "4+" },
                  { label: "Products in production", value: "12+" },
                  { label: "UI surfaces delivered", value: "25+" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border/60 bg-card/40 px-2 py-3 text-center shadow-sm backdrop-blur-sm sm:px-3 sm:py-3.5"
                  >
                    <p className="text-lg font-semibold tabular-nums text-foreground sm:text-xl">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground sm:text-[11px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="mt-7 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-3"
                {...(reduceMotion
                  ? { initial: false, animate: { opacity: 1 } }
                  : {
                      initial: { opacity: 0, y: 12 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.45, delay: 0.22, ease },
                    })}
              >
                <Link href="#contact" className="sm:min-w-0">
                  <Button
                    variant="hero"
                    size="lg"
                    className="h-12 w-full rounded-xl text-[15px] font-semibold sm:h-12 sm:w-auto sm:min-w-[200px]"
                  >
                    <Mail className="mr-2 h-[18px] w-[18px]" />
                    Start a conversation
                  </Button>
                </Link>
                <Link
                  href="/#projects"
                  onClick={goToProjectsSection}
                  className="sm:min-w-0"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 w-full rounded-xl border-border/70 bg-background/50 text-[15px] font-semibold backdrop-blur-sm sm:h-12 sm:w-auto sm:min-w-[160px]"
                  >
                    View projects
                    <ArrowRight className="ml-2 h-[18px] w-[18px]" />
                  </Button>
                </Link>
                <Link href="/Zaid_Resume.pdf" className="sm:min-w-0">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="h-12 w-full rounded-xl text-[15px] font-medium text-muted-foreground hover:bg-muted/40 hover:text-foreground sm:h-12 sm:w-auto"
                  >
                    <Download className="mr-2 h-[18px] w-[18px]" />
                    Resume
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="mt-8 flex w-full flex-col gap-3 border-t border-border/40 pt-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pt-8"
                {...(reduceMotion
                  ? { initial: false, animate: { opacity: 1 } }
                  : {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.4, delay: 0.28, ease },
                    })}
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Connect
                </span>
                <div className="grid w-full max-w-xs grid-cols-2 gap-2 sm:flex sm:w-auto sm:max-w-none">
                  <a
                    href="https://www.linkedin.com/in/zaid-rafiq-a6132128a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-12 items-center justify-center rounded-xl border border-border/60 bg-card/30 text-muted-foreground transition-colors hover:border-primary/35 hover:text-foreground sm:h-10 sm:w-10"
                  >
                    <Linkedin className="h-[18px] w-[18px]" />
                  </a>
                  <a
                    href={WHATSAPP_CHAT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="flex h-12 items-center justify-center rounded-xl border border-border/60 bg-card/30 text-muted-foreground transition-colors hover:border-[#25D366]/45 hover:text-[#25D366] sm:h-10 sm:w-10"
                  >
                    <WhatsAppIcon className="h-[18px] w-[18px]" />
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="order-1 flex min-h-[min(42dvh,380px)] flex-1 items-center justify-center sm:min-h-[340px] lg:order-2 lg:min-h-[420px] lg:flex-none">
              <HeroMobileShowcase reduceMotion={!!reduceMotion} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
