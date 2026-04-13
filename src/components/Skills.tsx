import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import Image from "next/image";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData = [
    // Mobile Development
    {
      name: "React Native",
      category: "Mobile Development",
      icon: "/icons/react.png",
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Expo",
      category: "Mobile Development",
      icon: "/icons/expo.png",
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "TypeScript",
      category: "Mobile Development",
      icon: "/icons/typescript.png",
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "JavaScript",
      category: "Mobile Development",
      icon: "/icons/javascript.png",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Native Android Bridging",
      category: "Mobile Development",
      icon: "/icons/android.png",
      color: "from-green-500 to-emerald-500",
    },

    // State Management
    {
      name: "Redux Toolkit",
      category: "State Management",
      icon: "/icons/redux.png",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Context API",
      category: "State Management",
      icon: "/icons/react.png",
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "AsyncStorage",
      category: "State Management",
      icon: "/icons/react.png",
      color: "from-blue-400 to-cyan-400",
    },

    // Backend & APIs
    {
      name: "Firebase",
      category: "Backend & APIs",
      icon: "/icons/firebase.png",
      color: "from-orange-400 to-yellow-500",
    },
    {
      name: "Supabase",
      category: "Backend & APIs",
      icon: "/icons/supabase.png",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "REST APIs",
      category: "Backend & APIs",
      icon: "/icons/rest.png",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "GraphQL",
      category: "Backend & APIs",
      icon: "/icons/graphql.png",
      color: "from-pink-500 to-purple-500",
    },
    {
      name: "Stripe",
      category: "Backend & APIs",
      icon: "/icons/firebase.png",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Adapty",
      category: "Backend & APIs",
      icon: "/icons/adapty.png",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Adyen",
      category: "Backend & APIs",
      icon: "/icons/adyen.png",
      color: "from-orange-500 to-red-500",
    },

    // Database
    {
      name: "MySQL",
      category: "Database",
      icon: "/icons/mysql.png",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Realm",
      category: "Database",
      icon: "/icons/realm.png",
      color: "from-purple-600 to-indigo-600",
    },
    {
      name: "Firestore",
      category: "Database",
      icon: "/icons/firebase.png",
      color: "from-orange-400 to-yellow-500",
    },

    // Tools & Platforms
    {
      name: "Git",
      category: "Tools & Platforms",
      icon: "/icons/git.png",
      color: "from-orange-600 to-red-600",
    },
    {
      name: "Bitbucket",
      category: "Tools & Platforms",
      icon: "/icons/bitbucket.png",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Jira",
      category: "Tools & Platforms",
      icon: "/icons/jira.png",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "CI/CD",
      category: "Tools & Platforms",
      icon: "/icons/ci_cd.png",
      color: "from-green-500 to-green-700",
    },
    {
      name: "VS Code",
      category: "Tools & Platforms",
      icon: "/icons/visual_studio_code.png",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Android Studio",
      category: "Tools & Platforms",
      icon: "/icons/android_studio.png",
      color: "from-green-500 to-green-700",
    },
    {
      name: "Xcode",
      category: "Tools & Platforms",
      icon: "/icons/xcode.png",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Next.js",
      category: "Web Development & Hosting",
      icon: "/icons/next_js.png",
      color: "from-gray-800 to-black",
    },
    {
      name: "Vercel",
      category: "Web Development & Hosting",
      icon: "/icons/vercel.png",
      color: "from-gray-900 to-black",
    },
    {
      name: "Web Hosting",
      category: "Web Development & Hosting",
      icon: "/icons/aws.png",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "Deployment",
      category: "Web Development & Hosting",
      icon: "/icons/ci_cd.png",
      color: "from-green-500 to-blue-500",
    },
  ];

  const categories = [
    "Mobile Development",
    "State Management",
    "Backend & APIs",
    "Database",
    "Tools & Platforms",
    "Web Development & Hosting",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="site-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting exceptional mobile experiences with React Native and modern
            technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skillsData.filter(
              (skill) => skill.category === category,
            );

            return (
              <motion.div
                key={category}
                variants={categoryVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm font-semibold border-2"
                  >
                    {category}
                  </Badge>
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants as any}
                      whileHover={{
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group cursor-pointer"
                    >
                      <Card className="relative overflow-hidden p-6 h-28 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20">
                        {/* Animated background gradient */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                          initial={false}
                          animate={{ opacity: 0 }}
                          whileHover={{ opacity: 0.2 }}
                        />

                        {/* Floating animation for icon */}
                        <motion.div
                          animate={{
                            y: [0, -4, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: skillIndex * 0.1,
                          }}
                          className="mb-2 filter group-hover:drop-shadow-lg transition-all duration-300"
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              // Fallback to a default icon if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              const parent = target.parentElement;
                              if (parent) {
                                const fallbackDiv =
                                  document.createElement("div");
                                fallbackDiv.className =
                                  "w-8 h-8 bg-primary/20 rounded flex items-center justify-center text-primary text-xs font-bold";
                                fallbackDiv.textContent = skill.name.charAt(0);
                                parent.appendChild(fallbackDiv);
                              }
                            }}
                          />
                        </motion.div>

                        <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>

                        {/* Subtle glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-lg"
                          initial={false}
                          whileHover={{
                            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating elements for visual interest */}
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full opacity-30"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Bottom section with summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="glass p-8 max-w-4xl mx-auto border-2">
            <h3 className="text-2xl font-semibold mb-4">
              Continuous <span className="text-primary">Learning</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in staying current with emerging mobile technologies and
              React Native best practices. Each project is an opportunity to
              explore new tools and refine existing skills, ensuring I can
              deliver cutting-edge mobile solutions that meet modern standards.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
