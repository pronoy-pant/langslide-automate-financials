import { Card } from "@/components/ui/card";
import { CTA } from "@/components/ui/call-to-action";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomerStories } from "@/components/CustomerStories";
import { SecuritySection } from "@/components/SecuritySection";
import { Link } from "react-router-dom";
import {
  Zap,
  RefreshCw,
  Shield,
  CheckCircle,
  Building2,
  Heart,
  ShoppingCart,
  Factory,
  Umbrella,
  Home as HomeIcon,
  Truck,
  Users,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp
} from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    title: "90% Reduction in Manual Work",
    description: "Automate repetitive tasks and free your team for strategic work"
  },
  {
    icon: RefreshCw,
    title: "Real-time Process Automation",
    description: "AI agents work 24/7 to keep your operations running smoothly"
  },
  {
    icon: Shield,
    title: "Regulatory Compliance Built-in",
    description: "Stay compliant with automated monitoring and reporting"
  },
  {
    icon: CheckCircle,
    title: "Seamless System Integration",
    description: "Connect with your existing tools and workflows effortlessly"
  }
];

const industries = [
  {
    icon: Building2,
    title: "Financial Services & Banking",
    description: "Automate lending, payments, compliance, and customer operations",
    metric: "70% faster loan approvals",
    features: [
      "End-to-end loan processing automation",
      "Real-time fraud detection & compliance",
      "Automated KYC and document verification"
    ],
    link: "/industries/financial-services"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Streamline patient intake, claims processing, and medical records management",
    metric: "60% faster patient intake",
    features: [
      "Automate medical records management",
      "AI-powered claims processing",
      "Real-time patient data verification"
    ],
    link: "/industries/healthcare"
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Optimize inventory, personalize experiences, and automate fulfillment",
    metric: "80% inventory accuracy improvement",
    features: [
      "Personalized customer recommendations",
      "Automated order fulfillment",
      "Real-time inventory sync"
    ],
    link: "/industries/retail"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Automate supply chain, quality control, and predictive maintenance",
    metric: "50% reduction in quality issues",
    features: [
      "Predictive maintenance alerts",
      "Supply chain optimization",
      "Automated quality control"
    ],
    link: "/industries/manufacturing"
  },
  {
    icon: Umbrella,
    title: "Insurance",
    description: "Accelerate claims processing, underwriting, and fraud detection",
    metric: "65% faster claims processing",
    features: [
      "Automated claims intake & triage",
      "AI-powered underwriting",
      "Real-time fraud detection"
    ],
    link: "/industries/insurance"
  },
  {
    icon: HomeIcon,
    title: "Real Estate",
    description: "Automate property management, lease processing, and compliance checks",
    metric: "75% reduction in lease processing time",
    features: [
      "Automated lease processing",
      "Maintenance request routing",
      "Tenant screening automation"
    ],
    link: "/industries/real-estate"
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Optimize routing, track shipments, and manage warehouse operations",
    metric: "55% improvement in delivery efficiency",
    features: [
      "Intelligent route planning",
      "Automated shipment tracking",
      "Smart warehouse operations"
    ],
    link: "/industries/logistics"
  },
  {
    icon: Users,
    title: "Human Resources",
    description: "Streamline recruitment, onboarding, and employee support",
    metric: "70% faster candidate screening",
    features: [
      "AI resume screening",
      "Automated onboarding workflows",
      "24/7 employee query chatbot"
    ],
    link: "/industries/hr"
  }
];

const howItWorks = [
  {
    icon: Target,
    number: "01",
    title: "Understand Your Workflow",
    description: "Our AI analyzes your existing processes to identify automation opportunities"
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Build Custom Agents",
    description: "We develop tailored automation solutions that fit your unique needs"
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Deploy & Scale",
    description: "Agents integrate seamlessly and continuously adapt to your business"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/20 to-white">
        <div className="container mx-auto px-6 py-32 md:py-48 relative">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                ✨ AI-Powered Enterprise Automation
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground">
              Intelligent AI Agents for{" "}
              <span className="gradient-text">Enterprise Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              Powerful AI agents that automate complex workflows across industries—from financial services to healthcare, retail to manufacturing
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button asChild size="lg">
                <a href="mailto:hello@langslide.com">
                  Get Started <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:hello@langslide.com">
                  Book a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Value Props Section */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                What We Do
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Langslide builds custom AI agents that handle end-to-end workflows, integrate with your existing systems, and scale with your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {valueProps.map((prop, index) => (
                <Card 
                  key={index}
                  className="p-8 bg-white border border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105"
                >
                  <div className="mb-6">
                    <div className="inline-flex p-3.5 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <prop.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {prop.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-secondary/30 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Industries We Serve
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                AI agents powering automation across every industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {industries.map((industry, index) => (
                <Link 
                  key={index}
                  to={industry.link}
                  className="block"
                >
                  <Card 
                    className="relative overflow-hidden p-6 bg-white border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full flex flex-col hover:scale-105"
                  >
                    <div className="relative z-10 flex flex-col flex-1">
                      <div className="mb-5">
                        <div className="inline-flex p-3.5 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <industry.icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {industry.title}
                      </h3>
                      
                      <div className="mb-5">
                        <span className="inline-block px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs">
                          {industry.metric}
                        </span>
                      </div>
                      
                      <ul className="space-y-2.5 mb-5 flex-1">
                        {industry.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                            <CheckCircle className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-auto">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                How It Works
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Three simple steps to transform your operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <Card 
                    className="p-10 bg-white border border-border hover:border-primary/50 transition-all group h-full"
                  >
                    <div className="mb-8">
                      <div className="text-7xl font-bold gradient-text opacity-20 mb-6">
                        {step.number}
                      </div>
                      <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security and Governance */}
      <SecuritySection />

      {/* Customer Stories */}
      <CustomerStories />

      {/* CTA Section */}
      <CTA
        badge="Get Started"
        title="Ready to Transform Your Operations?"
        description="Discover how Langslide's AI agents can automate complex workflows across your enterprise. From reducing manual work to ensuring compliance, we help businesses across all industries operate smarter and faster."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Schedule a Call"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
