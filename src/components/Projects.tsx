import { useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { portfolioProjects } from "@/src/constants/portfolioProjects";

const ProjectCover = ({
  src,
  alt,
  priority,
  Icon,
}: {
  src: string;
  alt: string;
  priority: boolean;
  Icon: LucideIcon;
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-muted">
        <Icon className="h-16 w-16 text-primary/40" aria-hidden />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 50vw"
      priority={priority}
      decoding="async"
      fetchPriority={priority ? "high" : "low"}
      onError={() => setHasError(true)}
    />
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="projects" className="py-24">
      <div className="site-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-widest">
            Shipping production mobile
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Multi-app React Native work for iOS and Android, covering payments,
            sync, and day-to-day operations for live businesses.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {portfolioProjects.map((project, index) => {
            const isFirstAboveFold = index === 0;
            return (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <motion.div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  } relative group`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass overflow-hidden border-border/60 shadow-lg shadow-primary/5">
                    <div className="aspect-video bg-muted/50 relative overflow-hidden rounded-t-lg">
                      <ProjectCover
                        src={project.image}
                        alt={project.title}
                        priority={isFirstAboveFold}
                        Icon={project.icon}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                        <Badge variant="secondary" className="glass">
                          {project.type}
                        </Badge>
                        {project.platforms ? (
                          <Badge variant="outline" className="glass bg-background/60">
                            {project.platforms}
                          </Badge>
                        ) : null}
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
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
                      Technologies
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

                  <div>
                    <h4 className="font-semibold mb-3 text-primary">
                      Key features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
