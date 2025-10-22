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

const complianceDetails = [
  {
    title: "Data Privacy",
    description: "Your data stays your data—never used for model training. Encryption at rest and in transit by default.",
    colorClass: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Access Control",
    description: "Fine-grained permissions with Spaces, SSO/SCIM support, and role-based controls for sensitive information.",
    colorClass: "from-red-500/20 to-pink-500/20"
  },
  {
    title: "Compliance",
    description: "SOC 2 Type II certified. GDPR compliant. Enables HIPAA compliance. Enterprise audit logs and data residency options.",
    colorClass: "from-green-500/20 to-emerald-500/20"
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

            <Button size="lg" className="mt-8">
              Learn more
            </Button>
          </div>

          {/* Security & Compliance Details */}
          <div className="mt-32">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground text-center">
              Security & Compliance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {complianceDetails.map((detail, index) => (
                <Card 
                  key={index}
                  className="p-8 bg-white border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${detail.colorClass} mb-6 flex items-center justify-center`}>
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${detail.colorClass.replace('/20', '/40')}`}></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {detail.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {detail.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
