import { Award, Code, Smartphone } from "lucide-react";
import { portfolioProjects } from "@/src/constants/portfolioProjects";

const stats = [
  { label: "Years Experience", value: "4+", icon: Award },
  { label: "Products Shipped", value: "12+", icon: Code },
  { label: "Mobile Apps", value: "25+", icon: Smartphone },
];

const experiences = [
  {
    title: "Senior React Native Developer",
    company: "Future Dev Solutions",
    icon: "/icons/react.png",
    location: "Lahore, Pakistan",
    duration: "Nov 2024 - Present",
    description:
      "Spearheading multiple mobile app projects across Android and iOS including POS systems, AI-based image generation, and salon management systems.",
    achievements: [
      "Delivered restaurant POS ecosystem with waiter, kitchen, bar, kiosk, and display apps",
      "Built Pixsy AI image generation app",
      "Shipped salon customer and staff apps with booking and management flows",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Firebase",
      "Supabase",
      "CI/CD",
    ],
  },
  {
    title: "React Native Developer",
    company: "The First Sol",
    icon: "/icons/supabase.png",
    location: "Lahore, Pakistan",
    duration: "Oct 2023 - Nov 2024",
    description:
      "Developed STYLEY image generation app with Supabase, push notifications, payment integrations, and polished UI/UX.",
    achievements: [
      "Built AI image generation experience with modern mobile UX",
      "Integrated third-party APIs and payment methods",
      "Improved quality with testing and debugging workflows",
    ],
    technologies: [
      "React Native",
      "Supabase",
      "TypeScript",
      "Push Notifications",
      "Payment Integration",
    ],
  },
  {
    title: "React Native Developer",
    company: "Xentro Solutions",
    icon: "/icons/firebase.png",
    location: "Lahore, Pakistan",
    duration: "Aug 2022 - Sep 2023",
    description:
      "Developed mobile applications using Firebase, Firestore, Google Maps API, Twilio SMS, and Realm offline storage.",
    achievements: [
      "Built real-time and offline-capable mobile features",
      "Integrated maps and communication flows for production apps",
      "Improved reliability with Redux Toolkit architecture",
    ],
    technologies: [
      "React Native",
      "Firebase",
      "Firestore",
      "Google Maps API",
      "Twilio",
      "Realm",
    ],
  },
];

const projects = portfolioProjects.map((project) => ({
  ...project,
  live: project.demo,
}));

const skillsData = [
  { name: "React Native", category: "Mobile Development", icon: "/icons/react.png" },
  { name: "Expo", category: "Mobile Development", icon: "/icons/expo.png" },
  { name: "TypeScript", category: "Mobile Development", icon: "/icons/typescript.png" },
  { name: "JavaScript", category: "Mobile Development", icon: "/icons/javascript.png" },
  { name: "Redux Toolkit", category: "State Management", icon: "/icons/redux.png" },
  { name: "Context API", category: "State Management", icon: "/icons/react.png" },
  { name: "AsyncStorage", category: "State Management", icon: "/icons/react.png" },
  { name: "Firebase", category: "Backend & APIs", icon: "/icons/firebase.png" },
  { name: "Supabase", category: "Backend & APIs", icon: "/icons/supabase.png" },
  { name: "REST APIs", category: "Backend & APIs", icon: "/icons/rest.png" },
  { name: "GraphQL", category: "Backend & APIs", icon: "/icons/graphql.png" },
  { name: "Stripe", category: "Backend & APIs", icon: "/icons/firebase.png" },
  { name: "Adapty", category: "Backend & APIs", icon: "/icons/adapty.png" },
  { name: "Adyen", category: "Backend & APIs", icon: "/icons/adyen.png" },
  { name: "MySQL", category: "Database", icon: "/icons/mysql.png" },
  { name: "Realm", category: "Database", icon: "/icons/realm.png" },
  { name: "Firestore", category: "Database", icon: "/icons/firebase.png" },
  { name: "Git", category: "Tools & Platforms", icon: "/icons/git.png" },
  { name: "Bitbucket", category: "Tools & Platforms", icon: "/icons/bitbucket.png" },
  { name: "Jira", category: "Tools & Platforms", icon: "/icons/jira.png" },
  { name: "CI/CD", category: "Tools & Platforms", icon: "/icons/ci_cd.png" },
  { name: "VS Code", category: "Tools & Platforms", icon: "/icons/visual_studio_code.png" },
  { name: "Android Studio", category: "Tools & Platforms", icon: "/icons/android_studio.png" },
  { name: "Xcode", category: "Tools & Platforms", icon: "/icons/xcode.png" },
  { name: "Next.js", category: "Web Development & Hosting", icon: "/icons/next_js.png" },
  { name: "Vercel", category: "Web Development & Hosting", icon: "/icons/vercel.png" },
];

const categories = [
  "Mobile Development",
  "State Management",
  "Backend & APIs",
  "Database",
  "Tools & Platforms",
  "Web Development & Hosting",
];

export { stats, experiences, projects, skillsData, categories };
