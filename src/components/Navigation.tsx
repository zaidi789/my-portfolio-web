"use client";

import { motion } from "framer-motion";
import { useState, useEffect, type MouseEvent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

/** Section order follows `/` (metrics block has no nav link; scroll spy still tracks `#metrics`). */
const mainNavItems = [
  { label: "Home", href: "/", kind: "route" as const },
  { label: "About", href: "/#about", kind: "section" as const },
  { label: "Skills", href: "/#skills", kind: "section" as const },
  { label: "Projects", href: "/#projects", kind: "section" as const },
  { label: "Case Studies", href: "/#case-studies", kind: "section" as const },
  { label: "Experience", href: "/#experience", kind: "section" as const },
  { label: "Contact", href: "/#contact", kind: "section" as const },
] as const;

const scrollSpySectionIds = [
  "metrics",
  "about",
  "skills",
  "projects",
  "case-studies",
  "experience",
  "contact",
] as const;

const getSectionIdFromHref = (href: string) => {
  const i = href.indexOf("#");
  if (i === -1) return "home";
  return href.slice(i + 1) || "home";
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  const themeContext = useTheme();
  const theme = themeContext?.theme || "light";
  const setTheme = themeContext?.setTheme || (() => {});
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const current = scrollSpySectionIds.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      setActiveSection(current || "home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (href: string) => {
    const sectionId = href.startsWith("/#") ? href.slice(2) : href.slice(1);
    const isHomePage = pathname === "/";
    const element = document.getElementById(sectionId);

    if (isHomePage && element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    } else {
      // App Router client navigation often strips hashes; full navigation preserves # for Index scroll handler.
      window.location.assign(href);
    }
    setIsMobileMenuOpen(false);
  };

  const handlePrimaryNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  if (!mounted) {
    return <div className="h-[4.5rem] md:h-[5.25rem]" aria-hidden />;
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <motion.nav
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="site-width"
          aria-label="Main navigation"
        >
          <div
            className={cn(
              "flex h-14 items-center justify-between gap-3 rounded-2xl px-3 sm:h-[3.35rem] sm:px-4 md:px-5 transition-[background,box-shadow,border-color,backdrop-filter] duration-300",
              isScrolled
                ? "border border-border/60 bg-background/75 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.35)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/65"
                : "border border-transparent bg-transparent",
            )}
          >
            <Link
              href="/"
              onClick={(e) => handlePrimaryNavClick(e, "/")}
              className="flex min-w-0 items-center gap-2.5 rounded-xl py-1 text-left transition-opacity hover:opacity-90 sm:gap-3"
            >
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-xl ring-1 ring-border/60 shadow-md sm:h-10 sm:w-10">
                <Image
                  src="/headshot.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="hidden min-w-0 sm:block">
                <p className="truncate font-semibold text-[15px] leading-tight tracking-tight text-foreground">
                  Zaid Rafiq
                </p>
                <p className="truncate text-[11px] font-medium text-muted-foreground">
                  Senior mobile developer · React Native
                </p>
              </div>
            </Link>

            <div className="hidden min-w-0 flex-1 justify-center overflow-x-auto [scrollbar-width:none] md:flex md:[&::-webkit-scrollbar]:hidden">
              <div className="flex shrink-0 items-center gap-0.5 px-1">
                {mainNavItems.map((item) =>
                  item.kind === "route" ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handlePrimaryNavClick(e, item.href)}
                      className={cn(
                        "shrink-0 rounded-lg px-2 py-2 text-[12px] font-medium transition-colors lg:px-2.5 lg:text-[13px]",
                        pathname === "/" && activeSection === "home"
                          ? "bg-primary/12 text-primary"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "shrink-0 rounded-lg px-2 py-2 text-[12px] font-medium transition-colors lg:px-2.5 lg:text-[13px]",
                        pathname === "/" &&
                          activeSection === getSectionIdFromHref(item.href)
                          ? "bg-primary/12 text-primary"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 bg-muted/30 text-foreground transition-colors hover:bg-muted/50 sm:h-10 sm:w-10"
                aria-label="Toggle color theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-[18px] w-[18px]" />
                ) : (
                  <Moon className="h-[18px] w-[18px]" />
                )}
              </button>

              <Button
                variant="hero"
                size="sm"
                className="hidden h-9 rounded-xl px-4 text-xs font-semibold sm:inline-flex sm:h-9"
                onClick={() => scrollToSection("/#contact")}
              >
                Let&apos;s talk
              </Button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 bg-muted/30 md:hidden"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-[18px] w-[18px]" />
                ) : (
                  <Menu className="h-[18px] w-[18px]" />
                )}
              </button>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? "auto" : 0,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "mt-2 overflow-hidden rounded-2xl border border-border/60 bg-background/90 shadow-lg backdrop-blur-xl md:hidden",
              !isMobileMenuOpen && "pointer-events-none",
            )}
          >
            <div className="max-h-[min(70vh,28rem)] space-y-0.5 overflow-y-auto p-2">
              {mainNavItems.map((item) =>
                item.kind === "route" ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handlePrimaryNavClick(e, item.href)}
                    className={cn(
                      "flex w-full rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors",
                      pathname === "/" && activeSection === "home"
                        ? "bg-primary/12 text-primary"
                        : "text-foreground hover:bg-muted/60",
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "flex w-full rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors",
                      pathname === "/" &&
                        activeSection === getSectionIdFromHref(item.href)
                        ? "bg-primary/12 text-primary"
                        : "text-foreground hover:bg-muted/60",
                    )}
                  >
                    {item.label}
                  </button>
                ),
              )}
              <div className="border-t border-border/50 p-2 pt-3">
                <Button
                  variant="hero"
                  size="sm"
                  className="h-11 w-full rounded-xl text-sm font-semibold"
                  onClick={() => scrollToSection("/#contact")}
                >
                  Let&apos;s talk
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.nav>
      </header>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 hidden lg:block"
      >
        <Badge
          variant="secondary"
          className="border border-border/50 bg-background/80 px-3 py-1.5 text-xs font-medium shadow-md backdrop-blur-md"
        >
          <span
            className="mr-2 inline-block h-2 w-2 rounded-full bg-green shadow-[0_0_8px_hsl(var(--green)/0.6)]"
            aria-hidden
          />
          Open to roles &amp; contracts
        </Badge>
      </motion.div>
    </>
  );
};

export default Navigation;
