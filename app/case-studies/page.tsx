"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";

const Navigation = dynamic(() => import("@/src/components/Navigation"), {
  ssr: false,
  loading: () => <div className="h-16 md:h-20" />,
});

const Footer = dynamic(() => import("@/src/components/Footer"), {
  ssr: false,
  loading: () => <div className="h-20" />,
});

const caseStudies = [
  {
    title: "Glo Bar",
    challenge:
      "Salon teams were juggling bookings, staff workflows, payroll, and payments in disconnected tools.",
    implementation:
      "Built customer and staff mobile apps with a multi-tenant web admin for salons and locations. Added Stripe payment flows and role-based access patterns.",
    result:
      "Unified operations across booking, service execution, payroll, and reporting for live salon environments.",
    stack: ["React Native", "Next.js", "Stripe", "TypeScript", "Redux Toolkit"],
  },
  {
    title: "Restaurant POS Ecosystem",
    challenge:
      "Multi-branch and neighborhood locations needed reliable tools for wait staff, kitchen, counter POS, reservations, and self-service. Menus, inventory, and orders had to stay aligned everywhere without splitting systems.",
    implementation:
      "Built a coordinated React Native product suite (waiter, kitchen display, main POS, booking, kiosk) with a centralized web console for menus, pricing, branches, and permissions. Connected real-time order sync, inventory-aware flows, and clear handoffs so each role sees only the actions and data it needs.",
    result:
      "Orders moved faster to the kitchen, misrouted tickets dropped, and service stayed consistent across neighborhood dining rooms and larger multi-site groups.",
    stack: ["React Native", "Next.js", "Node.js", "Real-time sync"],
  },
  {
    title: "SAAP",
    challenge:
      "Public scam reports lacked trust and verification, reducing usefulness for users and organizations.",
    implementation:
      "Built social reporting with moderated publishing, company CRUD, and local push notifications for area-specific scam alerts.",
    result:
      "Created a safer, trust-first reporting channel with community engagement loops.",
    stack: ["React Native", "Nest.js", "Next.js", "Push notifications"],
  },
];

const CaseStudiesPage = () => {
  useEffect(() => {
    document.title = "Case studies | Zaid Rafiq";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      <main className="pt-28 pb-16">
        <div className="site-width">
          <Badge variant="secondary" className="glass mb-4">
            Detailed Work
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            How I approach product problems, architecture choices, and production
            delivery in mobile-first environments.
          </p>

          <div className="space-y-6">
            {caseStudies.map((item) => (
              <Card key={item.title} className="glass p-7 border-border/60">
                <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">
                      Challenge
                    </h3>
                    <p>{item.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">
                      What I built
                    </h3>
                    <p>{item.implementation}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">
                      Outcome
                    </h3>
                    <p>{item.result}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
