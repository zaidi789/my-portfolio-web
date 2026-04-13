import { motion } from "framer-motion";
import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Briefcase, Layers3, Smartphone, Users } from "lucide-react";

const metrics = [
  { label: "Years shipping mobile software", value: "4+", icon: Briefcase },
  { label: "Products running in production", value: "12+", icon: Smartphone },
  { label: "Distinct app surfaces delivered", value: "25+", icon: Layers3 },
  { label: "Typical client mix", value: "B2B and consumer", icon: Users },
];

const PortfolioMetrics = () => {
  return (
    <section id="metrics" className="py-16">
      <div className="site-width">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Delivery snapshot</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A quick view of how much product has gone out the door and who it
              is built for.
            </p>
          </div>
          <Badge variant="secondary" className="glass w-fit shrink-0">
            Senior mobile application developer
          </Badge>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {metrics.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
            >
              <Card className="glass p-6 border-border/70 hover:border-primary/40 transition-colors h-full">
                <item.icon className="w-5 h-5 text-primary mb-3" />
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioMetrics;
