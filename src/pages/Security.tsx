import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Key, Database, ShieldCheck, FileSearch, AlertTriangle } from "lucide-react";

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

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Security and{" "}
              <span className="gradient-text">Governance</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              Langslide helps you to keep your data secure with built-in GDPR and SOC 2 Type II compliance, encryption, and single sign-on (SSO).
            </p>
          </div>
        </div>
      </header>

      {/* Security Badges */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;