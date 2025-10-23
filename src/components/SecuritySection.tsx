import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Key, Database } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "SOC2 Type II",
    description: "Certified security controls and compliance"
  },
  {
    icon: Lock,
    title: "GDPR Compliant",
    description: "Full data protection and privacy compliance"
  },
  {
    icon: Key,
    title: "Single Sign-On (SSO)",
    description: "Enterprise-grade authentication and access"
  },
  {
    icon: Database,
    title: "Data Encryption",
    description: "End-to-end encryption at rest and in transit"
  }
];


export const SecuritySection = () => {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-white via-secondary/20 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Security Badges */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                Security
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Security and Governance
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16">
              Langslide helps you to keep your data secure with built-in GDPR and SOC 2 Type II compliance, encryption, and single sign-on (SSO).
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-4 hover:bg-primary/20 transition-all">
                    <feature.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-8">
              <Link to="/security">Learn more</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
