import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";

const caseStudies = [
  {
    title: "Glo Bar",
    challenge: "Disconnected salon operations across customer, staff, and billing.",
    outcome: "Unified booking, POS, payroll, and Stripe payments in one ecosystem.",
    tags: ["Multi-tenant", "Stripe", "Operations"],
  },
  {
    title: "Restaurant POS Ecosystem",
    challenge:
      "Neighborhood and multi-branch venues needed focused apps for each role while keeping menus, stock, and orders on one backbone.",
    outcome:
      "Delivered waiter, kitchen, counter POS, booking, and kiosk clients with centralized admin, real-time sync, and inventory-aware flows.",
    tags: ["Multi-role apps", "Real-time sync", "Multi-location"],
  },
  {
    title: "SAAP",
    challenge: "Scam reports lacked trust and local context.",
    outcome: "Built verified social reporting with location-aware scam alerts.",
    tags: ["Community safety", "Push alerts", "Moderation"],
  },
];

const CaseStudiesPreview = () => {
  return (
    <section id="case-studies" className="py-24">
      <div className="site-width">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-2">
              Problem to outcome
            </p>
            <h2 className="text-4xl font-bold">Case Studies</h2>
          </div>
          <Link href="/case-studies">
            <Button variant="neon">View Full Case Studies</Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="glass p-6 h-full border-border/70 hover:border-primary/35 transition-colors">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Challenge</p>
                    <p>{item.challenge}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Outcome</p>
                    <p>{item.outcome}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
