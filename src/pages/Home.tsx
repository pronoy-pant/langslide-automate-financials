import { Card } from "@/components/ui/card";
import { CTA } from "@/components/ui/call-to-action";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CustomerStories } from "@/components/CustomerStories";
import { FAQ } from "@/components/FAQ";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
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
  Workflow,
  BarChart3,
  Clock,
  Users
} from "lucide-react";
import { 
  SiSalesforce, 
  SiSap,
  SiStripe,
  SiSlack,
  SiOracle,
  SiMongodb,
  SiAtlassian,
  SiZoom,
  SiAmazondynamodb,
  SiSnowflake,
  SiDatabricks,
  SiHubspot,
  SiAmazons3,
  SiRedis
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import HeroDashboard from "@/components/HeroDashboard";
import BentoGrid from "@/components/BentoGrid";
import AnimatedStats from "@/components/AnimatedStats";
import LogoWall from "@/components/LogoWall";

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
    title: "Financial Services",
    tagline: "Banks, Credit Unions, Financial Institutions",
    description: "Automate lending, payments, compliance, and customer operations with intelligent AI agents that understand your workflows",
    metric: "70% faster loan approvals",
    backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
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
    backgroundImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2128&auto=format&fit=crop",
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
    backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
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
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, hsl(220 20% 96%), hsl(210 25% 94%), hsl(200 20% 95%))' }}>
      <Navigation />

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-mesh">
        <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Content */}
              <motion.div 
                className="space-y-6 lg:space-y-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 gradient-text text-sm font-semibold border border-primary/20">
                    <Sparkles className="w-4 h-4" />
                    AI-Powered Automation
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  AI agents that automate{" "}
                  <span className="gradient-text">your workflows</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From loan processing to claims management, automate complex workflows end-to-end
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                    <a href="mailto:hello@langslide.com" className="flex items-center">
                      Get Started <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                    <a href="#how-it-works">View Demo</a>
                  </Button>
                </div>

                {/* Floating Metrics */}
                <motion.div 
                  className="flex gap-6 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">80%</div>
                      <div className="text-xs text-muted-foreground">Time Saved</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">99.9%</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Right Column - Interactive Dashboard */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <HeroDashboard />
              </motion.div>
              
            </div>
          </div>
        </div>
      </header>

      {/* Logo Wall Section */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Trusted by Leading Organizations
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                Integrates with{" "}
                <span className="gradient-text">500+ apps</span>
              </h2>
            </div>
            <LogoWall
              logos={[
                { name: "Salesforce", category: "CRM", Icon: SiSalesforce },
                { name: "SAP", category: "ERP", Icon: SiSap },
                { name: "AWS S3", category: "Storage", Icon: SiAmazons3 },
                { name: "Stripe", category: "Payments", Icon: SiStripe },
                { name: "Slack", category: "Communication", Icon: SiSlack },
                { name: "HubSpot", category: "Marketing", Icon: SiHubspot },
                { name: "Oracle", category: "Database", Icon: SiOracle },
                { name: "Microsoft", category: "Cloud", Icon: FaMicrosoft },
                { name: "DynamoDB", category: "Database", Icon: SiAmazondynamodb },
                { name: "Snowflake", category: "Analytics", Icon: SiSnowflake },
                { name: "Databricks", category: "Data", Icon: SiDatabricks },
                { name: "MongoDB", category: "Database", Icon: SiMongodb },
                { name: "Atlassian", category: "DevOps", Icon: SiAtlassian },
                { name: "Zoom", category: "Communication", Icon: SiZoom },
                { name: "Redis", category: "Database", Icon: SiRedis },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 md:py-32 bg-gradient-mesh" id="industries">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Heading with Industry Buttons */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-xl">
                Built for{" "}
                <span className="gradient-text">your industry</span>
              </h2>
              
              {/* Industry Selection Buttons */}
              <div className="flex flex-wrap gap-3">
                {industries.map((industry) => (
                  <motion.button
                    key={industry.id}
                    onClick={() => setActiveIndustry(industry.id)}
                    className={`px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wide transition-all duration-300 ${
                      activeIndustry === industry.id
                        ? 'gradient-primary text-primary-foreground shadow-md'
                        : 'bg-white border-2 border-border text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/30'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {industry.title}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              
              {/* Left Column - Dynamic Content */}
              <motion.div 
                className="lg:col-span-3 space-y-6"
                key={activeIndustry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedIndustry.description}
                </p>

                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 gradient-text font-semibold text-sm">
                    {selectedIndustry.metric}
                  </span>
                </div>

                <div className="space-y-3">
                  {selectedIndustry.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link 
                    to={selectedIndustry.link}
                    className="inline-flex items-center gap-2 gradient-text font-semibold text-base hover:gap-3 transition-all duration-300"
                  >
                    Learn More <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              {/* Right Column - Dynamic Background Image */}
              <Link 
                to={selectedIndustry.link}
                className="lg:col-span-2 block relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer min-h-[400px] lg:min-h-[500px]"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${selectedIndustry.backgroundImage})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                <div className="relative h-full min-h-[400px] lg:min-h-[500px] flex flex-col justify-end p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                      {selectedIndustry.tagline}
                    </h3>
                    <div className="flex items-center gap-2 text-white/90 font-medium">
                      <span>Explore Solutions</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Why Langslide Section */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Why{" "}
                <span className="gradient-text">Langslide</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Intelligent automation that works for your business
              </p>
            </div>

            <BentoGrid
              cards={[
                {
                  title: whyLangslide[0].title,
                  description: whyLangslide[0].description,
                  icon: whyLangslide[0].icon,
                },
                {
                  title: whyLangslide[1].title,
                  description: whyLangslide[1].description,
                  icon: whyLangslide[1].icon,
                },
                {
                  title: whyLangslide[2].title,
                  description: whyLangslide[2].description,
                  icon: whyLangslide[2].icon,
                },
                {
                  title: whyLangslide[3].title,
                  description: whyLangslide[3].description,
                  icon: whyLangslide[3].icon,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 md:py-40 bg-gradient-mesh" id="how-it-works">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                How It{" "}
                <span className="gradient-text">Works</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Three steps to deploy intelligent automation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="relative p-8 bg-white rounded-2xl border-2 border-border hover:border-primary/30 transition-all duration-300 group hover:shadow-lg h-full">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="inline-flex p-3.5 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="text-4xl font-bold text-primary/20">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary/20" />
                    </div>
                  )}
                </motion.div>
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
