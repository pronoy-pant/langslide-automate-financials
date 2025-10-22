import logoIcon from "@/assets/langslide-icon.png";
import { Card } from "@/components/ui/card";
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
    link: "/industries/financial-services",
    color: "from-blue-500/20 to-cyan-500/20"
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
    link: "/industries/healthcare",
    color: "from-pink-500/20 to-rose-500/20"
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
    link: "/industries/retail",
    color: "from-yellow-500/20 to-orange-500/20"
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
    link: "/industries/manufacturing",
    color: "from-indigo-500/20 to-purple-500/20"
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
    link: "/industries/insurance",
    color: "from-green-500/20 to-emerald-500/20"
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
    link: "/industries/real-estate",
    color: "from-violet-500/20 to-fuchsia-500/20"
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
    link: "/industries/logistics",
    color: "from-red-500/20 to-pink-500/20"
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
    link: "/industries/hr",
    color: "from-teal-500/20 to-cyan-500/20"
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-8">
              <img 
                src={logoIcon} 
                alt="Langslide Icon" 
                className="h-16 md:h-20 w-auto glow-effect"
              />
              <h2 className="text-4xl md:text-6xl font-bold gradient-text">Langslide</h2>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Intelligent AI Agents for{" "}
              <span className="gradient-text">Enterprise Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              Powerful AI agents that automate complex workflows across industries—from financial services to healthcare, retail to manufacturing
            </p>
            <div className="inline-block px-8 py-4 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border">
              <p className="text-lg text-foreground">
                <span className="text-muted-foreground">Get in touch:</span>{" "}
                <a href="mailto:hello@langslide.com" className="gradient-text font-semibold hover:underline transition-all">
                  hello@langslide.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What We Do
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Langslide builds custom AI agents that handle end-to-end workflows, integrate with your existing systems, and scale with your business
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {valueProps.map((prop, index) => (
                <Card 
                  key={index}
                  className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:glow-effect group"
                >
                  <div className="mb-4">
                    <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <prop.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
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
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                AI agents powering automation across every industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Link 
                  key={index}
                  to={industry.link}
                  className="block"
                >
                  <Card 
                    className={`relative overflow-hidden p-8 bg-gradient-to-br ${industry.color} border-border hover:border-primary/50 transition-all duration-300 hover:glow-effect group cursor-pointer h-full`}
                  >
                    <div className="relative z-10">
                      <div className="mb-6">
                        <div className="inline-flex p-4 rounded-xl bg-background/50 border border-border backdrop-blur-sm">
                          <industry.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:gradient-text transition-all">
                        {industry.title}
                      </h3>
                      
                      <div className="mb-6">
                        <div className="inline-block px-4 py-2 rounded-lg bg-background/70 backdrop-blur-sm border border-primary/30">
                          <p className="text-lg font-bold gradient-text">
                            {industry.metric}
                          </p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {industry.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        Learn more
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
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
                    className="p-8 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:glow-effect group h-full"
                  >
                    <div className="mb-6">
                      <div className="text-6xl font-bold gradient-text opacity-20 mb-4">
                        {step.number}
                      </div>
                      <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how AI agents can revolutionize your workflows
            </p>
            <div className="inline-block px-10 py-5 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/30 glow-effect">
              <p className="text-xl text-foreground">
                <span className="text-muted-foreground">Contact us:</span>{" "}
                <a href="mailto:hello@langslide.com" className="gradient-text font-bold hover:underline transition-all text-2xl">
                  hello@langslide.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <img 
                src={logoIcon} 
                alt="Langslide Icon" 
                className="h-14 w-auto opacity-80"
              />
              <h2 className="text-3xl font-bold gradient-text opacity-80">Langslide</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              AI agents for enterprise automation
            </p>
            <div className="inline-block px-8 py-4 rounded-lg bg-card border border-border">
              <p className="text-base text-foreground">
                <span className="text-muted-foreground">Contact us:</span>{" "}
                <a href="mailto:hello@langslide.com" className="gradient-text font-semibold hover:underline transition-all">
                  hello@langslide.com
                </a>
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Langslide. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
