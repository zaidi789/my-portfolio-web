import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Case studies | Zaid Rafiq",
  description:
    "How I approach product problems, architecture choices, and production delivery in mobile-first environments.",
};

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

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <main className="pb-16 pt-28">
        <div className="site-width">
          <Badge variant="secondary" className="glass mb-4">
            Detailed Work
          </Badge>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Case Studies</h1>
          <p className="mb-10 max-w-3xl leading-relaxed text-muted-foreground">
            How I approach product problems, architecture choices, and production
            delivery in mobile-first environments.
          </p>

          <div className="space-y-6">
            {caseStudies.map((item) => (
              <Card
                key={item.title}
                className="glass border-border/60 p-7"
              >
                <h2 className="mb-4 text-2xl font-semibold">{item.title}</h2>
                <div className="space-y-4 leading-relaxed text-muted-foreground">
                  <div>
                    <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                      Challenge
                    </h3>
                    <p>{item.challenge}</p>
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-sm font-semibold text-foreground">
                      What I built
                    </h3>
                    <p>{item.implementation}</p>
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-sm font-semibold text-foreground">
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
    </div>
  );
}
