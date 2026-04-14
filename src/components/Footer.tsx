"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/src/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import { Linkedin, Mail } from "lucide-react";
import WhatsAppIcon from "@/src/components/icons/WhatsAppIcon";
import { WHATSAPP_CHAT_URL } from "@/src/constants/contactLinks";

type FooterSocial =
  | { kind: "lucide"; icon: LucideIcon; href: string; label: string }
  | { kind: "whatsapp"; href: string; label: string };

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const socialLinks: FooterSocial[] = [
    {
      kind: "lucide",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/zaid-rafiq-a6132128a/",
      label: "LinkedIn",
    },
    {
      kind: "lucide",
      icon: Mail,
      href: "mailto:zaidrafiq11@gmail.com",
      label: "Email",
    },
    {
      kind: "whatsapp",
      href: WHATSAPP_CHAT_URL,
      label: "WhatsApp",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Metrics", href: "/#metrics" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative py-16 mt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-5" />
      <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />

      <div className="site-width relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-3 mb-6 cursor-pointer hover:opacity-80 transition-opacity text-left"
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/headshot.jpg"
                  alt="Zaid Rafiq Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Zaid Rafiq</h3>
                <p className="text-sm text-muted-foreground">
                  Senior mobile application developer
                </p>
              </div>
            </button>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              React Native specialist focused on production-grade iOS and
              Android apps, including multi-role suites, store releases, and
              field-ready integrations.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.kind === "whatsapp" ? "_blank" : undefined}
                  rel={
                    social.kind === "whatsapp"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-lg glass p-3 transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                  aria-label={social.label}
                >
                  {social.kind === "whatsapp" ? (
                    <WhatsAppIcon className="h-5 w-5" />
                  ) : (
                    <social.icon className="h-5 w-5" />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const isSectionLink = link.href.startsWith("/#");
                      if (!isSectionLink) {
                        router.push(link.href);
                        return;
                      }

                      const isHomePage = pathname === "/";
                      const sectionId = link.href.slice(2);
                      const element = document.getElementById(sectionId);
                      if (element && isHomePage) {
                        element.scrollIntoView({ behavior: "smooth" });
                        window.history.replaceState(null, "", link.href);
                      } else {
                        window.location.assign(link.href);
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group text-left w-full"
                  >
                    <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-6 text-primary">Get in Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:zaidrafiq11@gmail.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  zaidrafiq11@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-sm">129 E Punjab Society Phase 2, Lahore</p>
              </div>
              <div>
                <Badge variant="secondary" className="glass">
                  <div className="w-2 h-2 bg-green rounded-full mr-2 animate-pulse" />
                  Open to senior mobile roles
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Copyright © 2026. All rights reserved by Zaid Rafiq.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
