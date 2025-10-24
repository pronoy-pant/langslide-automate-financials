import { Card } from "@/components/ui/card";
import { CTA } from "@/components/ui/call-to-action";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomerStories } from "@/components/CustomerStories";
import { FAQ } from "@/components/FAQ";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Zap,
  RefreshCw,
  Shield,
  CheckCircle,
  Building2,
  Heart,
  Target,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Workflow
} from "lucide-react";

const whyLangslide = [
  {
    icon: Zap,
    title: "Fastest Time-to-Value",
    description: "From concept to fully automated workflow in minutes - realize instant impact and ROI with Langslide's rapid deployment."
  },
  {
    icon: Workflow,
    title: "Truly Stateful Agents",
    description: "Unlike simple chatbots, our agents remember context, make decisions, and adapt to your business in real-time."
  },
  {
    icon: Target,
    title: "No-Code to Full-Code",
    description: "Intuitive visual tools for everyone, with powerful APIs and SDKs for developers who need advanced control."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Built for regulated industries with SOC 2 compliance, encryption, and full audit trails to keep your data safe."
  }
];

const industries = [
  {
    id: "financial",
    icon: Building2,
    title: "Financial Services & Banking",
    tagline: "Banks, Credit Unions, Financial Institutions",
    description: "Automate lending, payments, compliance, and customer operations with intelligent AI agents that understand your workflows",
    metric: "70% faster loan approvals",
    features: [
      "End-to-end loan processing automation",
      "Real-time fraud detection & compliance",
      "Automated KYC and document verification",
      "Intelligent payment processing"
    ],
    link: "/industries/financial-services"
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare",
    tagline: "Hospitals, Clinics, Healthcare Providers",
    description: "Streamline patient intake, claims processing, and medical records management while maintaining HIPAA compliance",
    metric: "60% faster patient intake",
    features: [
      "Automate medical records management",
      "AI-powered claims processing",
      "Real-time patient data verification",
      "HIPAA-compliant automation"
    ],
    link: "/industries/healthcare"
  },
  {
    id: "media",
    icon: Target,
    title: "Media & Marketing",
    tagline: "Agencies, Publishers, Content Creators",
    description: "Automate content creation, campaign management, and audience analytics to accelerate your marketing operations",
    metric: "65% faster content production",
    features: [
      "AI-powered content generation",
      "Automated campaign optimization",
      "Real-time audience insights",
      "Multi-channel automation"
    ],
    link: "/industries/media-marketing"
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
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);
  const selectedIndustry = industries.find(ind => ind.id === activeIndustry) || industries[0];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/20 to-white dark:from-background dark:via-secondary/10 dark:to-background">
        <div className="container mx-auto px-6 py-20 md:py-28 lg:py-36 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              
              {/* Left Column - Content */}
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                    ✨ AI-Powered Enterprise Automation
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground">
                  Intelligent AI Agents for{" "}
                  <span className="gradient-text">Enterprise Automation</span>
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Powerful <span className="text-primary font-semibold">AI agents</span> that automate complex workflows across industries—from financial services to healthcare, retail to manufacturing
                </p>
                
                <div className="pt-2">
                  <Button asChild size="lg" className="text-base px-8 py-6">
                    <a href="mailto:hello@langslide.com">
                      Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Right Column - Workflow Diagram Placeholder */}
              <div className="relative lg:pl-8">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/5 via-secondary/20 to-primary/10 dark:from-primary/5 dark:via-secondary/10 dark:to-primary/5 rounded-3xl border border-border/50 shadow-xl overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                  
                  {/* Workflow Nodes Mockup */}
                  <div className="relative h-full flex items-center justify-center p-8">
                    <div className="space-y-6 w-full max-w-md">
                      {/* Node 1 */}
                      <div className="bg-white dark:bg-background border border-border rounded-xl p-4 shadow-lg transform translate-x-0 hover:scale-105 transition-transform">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="h-3 bg-foreground/10 rounded w-24 mb-2"></div>
                            <div className="h-2 bg-foreground/5 rounded w-32"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="flex justify-center">
                        <ArrowRight className="w-6 h-6 text-primary/40" />
                      </div>
                      
                      {/* Node 2 */}
                      <div className="bg-white dark:bg-background border border-border rounded-xl p-4 shadow-lg transform translate-x-8 hover:scale-105 transition-transform">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Workflow className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="h-3 bg-foreground/10 rounded w-28 mb-2"></div>
                            <div className="h-2 bg-foreground/5 rounded w-36"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="flex justify-center">
                        <ArrowRight className="w-6 h-6 text-primary/40" />
                      </div>
                      
                      {/* Node 3 */}
                      <div className="bg-white dark:bg-background border border-border rounded-xl p-4 shadow-lg transform translate-x-0 hover:scale-105 transition-transform">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Zap className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="h-3 bg-foreground/10 rounded w-20 mb-2"></div>
                            <div className="h-2 bg-foreground/5 rounded w-28"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 
                    TODO: Replace this mockup with actual workflow diagram graphic
                    This is a temporary visual representation showing the automation flow concept.
                    For production, replace with custom-designed SVG or interactive component.
                  */}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </header>

      {/* Industries We Serve Section - Interactive Tabs */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-secondary/20 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Industries We Serve
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                AI agents powering automation across every industry
              </p>
            </div>

            {/* Industry Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeIndustry === industry.id
                      ? 'bg-foreground text-background shadow-lg scale-105'
                      : 'bg-secondary/50 text-foreground hover:bg-secondary hover:scale-105'
                  }`}
                >
                  {industry.title}
                </button>
              ))}
            </div>

            {/* Industry Content Card */}
            <Link to={selectedIndustry.link} className="block">
              <div className="relative rounded-3xl border border-border bg-white shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden cursor-pointer group">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 min-h-[500px]">
                  {/* Left Column - Content */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div>
                      <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
                        <selectedIndustry.icon className="w-10 h-10 text-primary" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
                        {selectedIndustry.title}
                      </h3>
                      <p className="text-xl text-muted-foreground mb-6">
                        {selectedIndustry.tagline}
                      </p>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {selectedIndustry.description}
                    </p>

                    <div className="inline-block">
                      <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm">
                        {selectedIndustry.metric}
                      </span>
                    </div>

                    <div className="space-y-3 pt-4">
                      {selectedIndustry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-base text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-primary font-semibold text-base pt-4">
                      Explore {selectedIndustry.title}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Right Column - Visual */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-full h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/30 to-primary/10 border border-border/50 overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute inset-0 flex items-center justify-center p-12">
                        <div className="relative">
                          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl"></div>
                          <selectedIndustry.icon className="relative w-32 h-32 text-primary/20" />
                        </div>
                      </div>

                      {/* Floating Cards Animation */}
                      <div className="absolute top-8 right-8 bg-white rounded-lg p-4 shadow-lg transform rotate-3 opacity-80">
                        <div className="h-2 w-20 bg-primary/20 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-primary/10 rounded"></div>
                      </div>
                      <div className="absolute bottom-12 left-8 bg-white rounded-lg p-4 shadow-lg transform -rotate-2 opacity-80">
                        <div className="h-2 w-24 bg-primary/20 rounded mb-2"></div>
                        <div className="h-2 w-20 bg-primary/10 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Langslide Section */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Why Langslide
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Langslide brings intelligent, context-aware automation to repetitive work—making teams faster, sharper, and more impactful.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyLangslide.map((item, index) => (
                <div 
                  key={index}
                  className="relative p-8 bg-white rounded-2xl border-2 border-border hover:border-transparent transition-all duration-300 group hover:shadow-lg"
                  style={{
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)))',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                  }}
                >
                  <div className="mb-6">
                    <div className="inline-flex p-3.5 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                How It Works
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Three simple steps to transform your operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative">
                  <div 
                    className="relative p-8 bg-white rounded-2xl border-2 border-border hover:border-transparent transition-all duration-300 group hover:shadow-lg h-full"
                    style={{
                      backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)))',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                    }}
                  >
                    <div className="mb-6">
                      <div className="inline-flex p-3.5 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <CustomerStories />

      {/* FAQ Section */}
      <FAQ />

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
