import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Scene3D from "./Scene3D";

const Hero = () => {
  const roles = [
    "React Native Developer",
    "Mobile App Developer",
    "Cross-Platform Developer",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80 z-0" />

      {/* Main container with grid layout */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16 lg:py-20">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8 text-left order-2 lg:order-1"
            >
              {/* Role badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-wrap gap-3 mb-6"
              >
                {roles.map((role, index) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                  >
                    <Badge
                      variant="secondary"
                      className="glass text-sm px-4 py-2 font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      {role}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>

              {/* Main heading ---*/}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
              >
                <span className="block">Hey, I'm</span>
                <span className="block text-gradient">Zaid Rafiq</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                I craft{" "}
                <span className="text-blue font-semibold">
                  high-performance mobile applications
                </span>
                , build{" "}
                <span className="text-purple font-semibold">
                  cross-platform solutions
                </span>
                , and deliver{" "}
                <span className="text-teal font-semibold">
                  scalable React Native apps{" "}
                </span>
                that users love.
              </motion.p>

              {/* CTA Buttons ---- */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-8"
              >
                <Link href="#contact">
                  <Button variant="hero" size="lg" className="group">
                    <Mail className="mr-2 group-hover:scale-110 transition-transform" />
                    Hire Me
                  </Button>
                </Link>
                <Link href="/Zaid_Resume.pdf">
                  <Button variant="neon" size="lg" className="group">
                    <Download className="mr-2 group-hover:scale-110 transition-transform" />
                    Download Resume
                  </Button>
                </Link>
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex gap-6 pt-8"
              >
                {[
                  {
                    icon: Github,
                    href: "https://github.com/zaidrafiq",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/zaid-rafiq-a6132128a/",
                    label: "LinkedIn",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass p-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - 3D Scene */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] w-full order-1 lg:order-2"
            >
              <Scene3D />
              {/* Mobile overlay for better visibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none lg:hidden" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
