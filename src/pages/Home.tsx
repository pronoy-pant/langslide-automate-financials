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
    link: "/bfsi"
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Streamline patient intake, claims processing, and medical records management",
    link: "#"
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Optimize inventory, personalize experiences, and automate fulfillment",
    link: "#"
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Automate supply chain, quality control, and predictive maintenance",
    link: "#"
  },
  {
    icon: Umbrella,
    title: "Insurance",
    description: "Accelerate claims processing, underwriting, and fraud detection",
    link: "#"
  },
  {
    icon: HomeIcon,
    title: "Real Estate",
    description: "Automate property management, lease processing, and compliance checks",
    link: "#"
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Optimize routing, track shipments, and manage warehouse operations",
    link: "#"
  },
  {
    icon: Users,
    title: "Human Resources",
    description: "Streamline recruitment, onboarding, and employee support",
    link: "#"
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
            <div className="flex items-center justify-center gap-4 mb-8">
              <img 
                src={logoIcon} 
                alt="Langslide Icon" 
                className="h-16 md:h-20 glow-effect"
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                industry.link === "#" ? (
                  <Card 
                    key={index}
                    className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:glow-effect group cursor-default"
                  >
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                        <industry.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {industry.description}
                    </p>
                  </Card>
                ) : (
                  <Link 
                    key={index}
                    to={industry.link}
                    className="block"
                  >
                    <Card 
                      className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-effect group cursor-pointer h-full"
                    >
                      <div className="mb-4">
                        <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/30 transition-colors">
                          <industry.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-foreground group-hover:gradient-text transition-all">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {industry.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                )
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <img 
                src={logoIcon} 
                alt="Langslide Icon" 
                className="h-10 opacity-80"
              />
              <h2 className="text-2xl font-bold gradient-text opacity-80">Langslide</h2>
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
