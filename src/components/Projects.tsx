import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Smartphone, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Globar - Salon Management System",
      description:
        "Complete salon management platform featuring two specialized apps: Globar Staff App (complete reservation CRUD, payroll and earning management, user-based admin/staff roles, profile management, push notifications, ticket management, turn trackers) and Globar Customer App (service purchasing, salon services, Stripe payment integration). Both apps feature Firebase push notifications and comprehensive salon operations management.",
      image: "/projects/jtnails.png",
      type: "React Native Dual-App Suite",
      icon: Smartphone,
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Firebase",
        "Stripe Integration",
        "Push Notifications",
        "User Management",
        "Reservation System",
        "Payroll Management",
        "Turn Trackers",
      ],
      features: [
        "Dual App Architecture",
        "Staff Management System",
        "Customer Service App",
        "Reservation CRUD",
        "Payroll & Earnings",
        "User Role Management",
        "Profile Management",
        "Push Notifications",
        "Ticket Management",
        "Turn Trackers",
        "Stripe Payments",
        "Service Purchasing",
      ],
      github: "#",
      demo: "#",
      role: "Lead React Native Developer",
      duration: "4 months",
      category: "mobile",
    },
    {
      title: "Pixsy - AI Image Generation",
      description:
        "Advanced AI image generation app featuring payment integration with Adapty, predefined templates using Supabase Edge Functions, ReplicateAI integration for high-quality image generation, image-to-video conversion using Google Veo3, and complete generation management system for users to track and organize their AI creations.",
      image: "/projects/pixsy.png",
      type: "React Native AI Platform",
      icon: Smartphone,
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Firebase",
        "Supabase Edge Functions",
        "ReplicateAI",
        "Google Veo3",
        "Adapty Payment",
        "Generation Management",
      ],
      features: [
        "AI Image Generation",
        "Predefined Templates",
        "Supabase Edge Functions",
        "ReplicateAI Integration",
        "Image-to-Video (Veo3)",
        "Payment Integration",
        "Generation Management",
        "Template Library",
        "AI Processing",
        "User Dashboard",
      ],
      github: "#",
      demo: "#",
      role: "Lead React Native Developer",
      duration: "6 months",
      category: "mobile",
    },
    {
      title: "Flipsy - Card Flip Game",
      description:
        "React Native card flip memory game featuring multiple difficulty levels, diverse card themes, AdMob integration for monetization, and engaging gameplay mechanics. A perfect example of React Native game development with smooth animations, progressive difficulty, and multiple visual themes for enhanced user experience.",
      image: "/projects/flipsy.png",
      type: "React Native Game App",
      icon: Smartphone,
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Firebase",
        "Game Development",
        "AdMob Integration",
        "Multiple Themes",
        "Difficulty Levels",
        "Card Animations",
        "Memory Game Logic",
      ],
      features: [
        "Card Flip Memory Game",
        "Multiple Difficulty Levels",
        "Multiple Card Themes",
        "AdMob Integration",
        "Smooth Animations",
        "Progressive Difficulty",
        "Theme Selection",
        "Score Tracking",
        "Game Mechanics",
        "User Experience",
      ],
      github: "#",
      demo: "#",
      role: "Lead React Native Developer",
      duration: "3 months",
      category: "mobile",
    },
    {
      title: "STYLEY - AI Image Generation App",
      description:
        "A comprehensive AI-powered lifestyle platform featuring 100+ image generation templates, AI chatbot with multiple models, real-time chat using Supabase, payment integration with Supawal, Zillow property integration with complete map functionality, fashion AI for virtual clothing try-ons, and AI-powered virtual room decoration and staging capabilities. Led a team of 7 developers as Lead React Native Developer.",
      image: "/projects/styley.png",
      type: "React Native AI Lifestyle Platform",
      icon: Smartphone,
      technologies: [
        "React Native",
        "Supabase",
        "TypeScript",
        "Redux Toolkit",
        "AI Integration",
        "Real-time Chat",
        "Payment Gateway",
        "Maps Integration",
        "AI Models",
        "Virtual Try-on",
      ],
      features: [
        "100+ AI Templates",
        "AI Chatbot (Multiple Models)",
        "Real-time Chat",
        "Payment Integration",
        "Zillow Property Tab",
        "Complete Map Functionality",
        "Fashion AI (Virtual Clothes)",
        "Virtual Room Decoration",
        "Virtual Staging",
        "AI Image Generation",
      ],
      github: "#",
      demo: "#",
      role: "Lead React Native Developer",
      duration: "1 year",
      category: "mobile",
    },
    {
      title: "Restaurant POS System - Complete Suite",
      description:
        "Comprehensive restaurant POS management system featuring 6 specialized apps: Waiter App (order management, table responsibility, push notifications, stock management, menu, Adyen tap-to-pay with native Android bridging, profit/loss graphs, authentication), Main POS (waiter functionalities plus additional features), Kitchen Bar App (order display, status management, menu item availability), Booker App (complete booking system), Kiosk (large display ordering flow), and Bus Boy App. Full cross-platform support for Android and iOS with real-time synchronization.",
      image: "/projects/orbypos.png",
      type: "React Native Multi-App Suite",
      icon: Smartphone,
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Firebase",
        "Real-time Sync",
        "Adyen Payment",
        "Native Android Bridging",
        "Push Notifications",
        "Cross-platform (Android/iOS)",
        "Stock Management",
      ],
      features: [
        "6 Specialized Apps",
        "Order Management System",
        "Real-time Notifications",
        "Stock Management",
        "Adyen Tap-to-Pay",
        "Native Android Bridging",
        "Profit/Loss Analytics",
        "Table Management",
        "Menu Management",
        "Cross-platform Support",
      ],
      github: "#",
      demo: "#",
      role: "Lead React Native Developer",
      duration: "8 months",
      category: "mobile",
    },
    {
      title: "Sajam Gast - Event Management System",
      description:
        "Comprehensive event management system featuring 3 specialized apps: Sajam Gast Organizer (complete event planning, visitor management, QR code generation), Sajam Gast Exhibitor (booth management, visitor tracking, QR scanning for person identification and verification), and Sajam Gast Visitor (registration, QR codes, event access). Includes QR scanning for person identification, visitor list management with Excel downloads, and complete event lifecycle management.",
      image: "/projects/sajamgast.png",
      type: "React Native Event Management Suite",
      icon: Smartphone,
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Firebase",
        "QR Code Generation",
        "QR Scanning",
        "Real-time Updates",
        "Excel Export",
        "Visitor Management",
        "Event Planning",
      ],
      features: [
        "3 Specialized Apps",
        "Event Organizer App",
        "Exhibitor Management",
        "Visitor Registration",
        "QR Code Generation",
        "QR Scanning & Verification",
        "Person Identification",
        "Visitor List Management",
        "Excel Downloads",
        "Real-time Updates",
        "Event Planning Tools",
        "Booth Management",
      ],
      github: "#",
      demo: "#",
      role: "Lead React Native Developer",
      duration: "5 months",
      category: "mobile",
    },
    {
      title: "FFC Sports Complex - Event Management",
      description:
        "Comprehensive sports complex event management system featuring event planning, booking management, facility scheduling, user registration, and complete event lifecycle management. Built with React Native for cross-platform mobile access, enabling users to book sports facilities, manage events, and coordinate activities seamlessly.",
      image: "/projects/ffc.png",
      type: "React Native Event Management",
      icon: Smartphone,
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Firebase",
        "Event Planning",
        "Booking System",
        "Facility Management",
        "User Registration",
        "Scheduling System",
        "Cross-platform",
      ],
      features: [
        "Event Planning",
        "Facility Booking",
        "User Registration",
        "Scheduling System",
        "Event Management",
        "Sports Complex Features",
        "Booking Management",
        "User Dashboard",
        "Facility Scheduling",
        "Event Coordination",
      ],
      github: "#",
      demo: "#",
      role: "Lead React Native Developer",
      duration: "5 months",
      category: "mobile",
    },
    {
      title: "Orby Display - Digital Signage Control",
      description:
        "Digital signage control application for managing and controlling digital displays and signage systems. Built with React Native for cross-platform mobile access, enabling users to control digital displays, manage content, and coordinate signage operations seamlessly.",
      image: "/projects/orbydisplay.png",
      type: "React Native Digital Signage",
      icon: Smartphone,
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Digital Signage",
        "Display Control",
        "Content Management",
        "Signage Operations",
        "Cross-platform",
        "Real-time Control",
        "Media Management",
      ],
      features: [
        "Digital Display Control",
        "Content Management",
        "Signage Operations",
        "Real-time Control",
        "Media Management",
        "Display Coordination",
        "Content Scheduling",
        "Remote Management",
        "Cross-platform Access",
        "Signage System Control",
      ],
      github: "#",
      demo: "#",
      role: "Lead React Native Developer",
      duration: "2 months",
      category: "mobile",
    },
    {
      title: "Juliet Nails - Salon Management",
      description:
        "Salon management application for Juliet Nails featuring appointment booking, service management, customer profiles, and salon operations. Built with React Native for cross-platform mobile access, enabling staff and customers to manage salon services and appointments seamlessly.",
      image: "/projects/jtnails.png",
      type: "React Native Salon Management",
      icon: Smartphone,
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Salon Management",
        "Appointment Booking",
        "Service Management",
        "Customer Profiles",
        "Salon Operations",
        "Cross-platform",
        "User Management",
      ],
      features: [
        "Appointment Booking",
        "Service Management",
        "Customer Profiles",
        "Salon Operations",
        "Staff Management",
        "Service Catalog",
        "Booking System",
        "Customer Management",
        "Salon Dashboard",
        "Cross-platform Access",
      ],
      github: "#",
      demo: "#",
      role: "Lead React Native Developer",
      duration: "2 months",
      category: "mobile",
    },
    {
      title: "Future Sol - Complete Matrimonial App",
      description:
        "Comprehensive matrimonial/rishta application featuring user registration and profile creation, profile browsing of registered users, real-time chat functionality, nearby people discovery using location services, Firebase push notifications, and complete matrimonial app features for matchmaking and relationship building.",
      image: "/projects/futuresoul.png",
      type: "React Native Matrimonial Platform",
      icon: Smartphone,
      technologies: [
        "React Native",
        "TypeScript",
        "Redux Toolkit",
        "Firebase",
        "Real-time Chat",
        "Push Notifications",
        "Location Services",
        "User Management",
        "Profile System",
        "Matchmaking",
      ],
      features: [
        "User Registration",
        "Profile Creation",
        "Profile Browsing",
        "Real-time Chat",
        "Nearby People Discovery",
        "Firebase Push Notifications",
        "Location Services",
        "User Matching",
        "Profile Management",
        "Complete Matrimonial Features",
      ],
      github: "#",
      demo: "#",
      role: "Lead React Native Developer",
      duration: "4 months",
      category: "mobile",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my React Native mobile applications and cross-platform
            solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {projects
            .slice(0, pathname === "/" ? 4 : projects.length)
            .map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <motion.div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  } relative group`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass overflow-hidden">
                    <div className="aspect-video bg-muted/50 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            const iconDiv = document.createElement("div");
                            iconDiv.className =
                              "w-full h-full flex items-center justify-center";
                            iconDiv.innerHTML = `<div class="w-16 h-16 text-primary/50">${project.icon.name}</div>`;
                            parent.appendChild(iconDiv);
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge variant="secondary" className="glass">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Project Details */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      {(() => {
                        const iconColors = {
                          web: "text-blue",
                          mobile: "text-purple",
                          devops: "text-teal",
                        };
                        const colorClass =
                          iconColors[
                            project.category as keyof typeof iconColors
                          ] || "text-primary";
                        return (
                          <project.icon className={`w-6 h-6 ${colorClass}`} />
                        );
                      })()}
                      <Badge variant="outline">{project.role}</Badge>
                      <Badge variant="secondary">{project.duration}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4
                      className={`font-semibold mb-3 ${(() => {
                        const titleColors = {
                          web: "text-blue",
                          mobile: "text-purple",
                          devops: "text-teal",
                        };
                        return (
                          titleColors[
                            project.category as keyof typeof titleColors
                          ] || "text-primary"
                        );
                      })()}`}
                    >
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Removed */}
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* View More Button */}
        {pathname === "/" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center mt-16"
          >
            <Button
              variant="neon"
              size="lg"
              onClick={() => router.push("/projects")}
            >
              View All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
