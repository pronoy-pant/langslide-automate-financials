import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/ui/call-to-action";
import { FAQ } from "@/components/FAQ";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import AutoLogoCarousel from "@/components/AutoLogoCarousel";
import FunctionHeroDashboard from "@/components/FunctionHeroDashboard";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FileText, 
  CreditCard, 
  Shield, 
  Users, 
  TrendingUp, 
  Umbrella,
  Zap,
  CircleDollarSign,
  CheckCircle,
  Sparkles,
  TrendingDown,
  ArrowRight,
  Clock,
  BarChart3
} from "lucide-react";

const financialServicesApps = [
  { name: "JPMorgan Chase", category: "Banking", logo: "https://logo.clearbit.com/jpmorganchase.com" },
  { name: "Bank of America", category: "Banking", logo: "https://logo.clearbit.com/bankofamerica.com" },
  { name: "Wells Fargo", category: "Banking", logo: "https://logo.clearbit.com/wellsfargo.com" },
  { name: "Goldman Sachs", category: "Investment Banking", logo: "https://logo.clearbit.com/goldmansachs.com" },
  { name: "Morgan Stanley", category: "Investment Banking", logo: "https://logo.clearbit.com/morganstanley.com" },
  { name: "American Express", category: "Financial Services", logo: "https://logo.clearbit.com/americanexpress.com" },
  { name: "Visa", category: "Payments", logo: "https://logo.clearbit.com/visa.com" },
  { name: "Mastercard", category: "Payments", logo: "https://logo.clearbit.com/mastercard.com" },
  { name: "PayPal", category: "Digital Payments", logo: "https://logo.clearbit.com/paypal.com" },
  { name: "Stripe", category: "Payment Processing", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "Square", category: "Payment Solutions", logo: "https://logo.clearbit.com/squareup.com" },
  { name: "Intuit", category: "Financial Software", logo: "https://logo.clearbit.com/intuit.com" },
  { name: "Fidelity", category: "Investment Services", logo: "https://logo.clearbit.com/fidelity.com" },
  { name: "Charles Schwab", category: "Investment Services", logo: "https://logo.clearbit.com/schwab.com" },
  { name: "BlackRock", category: "Asset Management", logo: "https://logo.clearbit.com/blackrock.com" },
  { name: "State Farm", category: "Insurance", logo: "https://logo.clearbit.com/statefarm.com" },
  { name: "Allstate", category: "Insurance", logo: "https://logo.clearbit.com/allstate.com" },
  { name: "Progressive", category: "Insurance", logo: "https://logo.clearbit.com/progressive.com" },
  { name: "MetLife", category: "Insurance", logo: "https://logo.clearbit.com/metlife.com" },
  { name: "Prudential", category: "Insurance", logo: "https://logo.clearbit.com/prudential.com" },
  { name: "AIG", category: "Insurance", logo: "https://logo.clearbit.com/aig.com" },
  { name: "Chubb", category: "Insurance", logo: "https://logo.clearbit.com/chubb.com" },
  { name: "Liberty Mutual", category: "Insurance", logo: "https://logo.clearbit.com/libertymutual.com" },
  { name: "Travelers", category: "Insurance", logo: "https://logo.clearbit.com/travelers.com" },
  { name: "USAA", category: "Financial Services", logo: "https://logo.clearbit.com/usaa.com" },
  { name: "Capital One", category: "Banking", logo: "https://logo.clearbit.com/capitalone.com" },
  { name: "Discover", category: "Financial Services", logo: "https://logo.clearbit.com/discover.com" },
  { name: "TD Bank", category: "Banking", logo: "https://logo.clearbit.com/td.com" },
  { name: "PNC", category: "Banking", logo: "https://logo.clearbit.com/pnc.com" },
  { name: "US Bank", category: "Banking", logo: "https://logo.clearbit.com/usbank.com" }
];

const workflowCategories = [
  { id: "lending", label: "Lending & Credit", icon: FileText },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "compliance", label: "Compliance", icon: Shield },
  { id: "customer", label: "Customer Ops", icon: Users },
  { id: "investment", label: "Investment", icon: TrendingUp },
  { id: "insurance", label: "Insurance", icon: Umbrella },
];

const workflows = {
  lending: [
    { icon: FileText, title: "Loan Application", metric: "90% faster" },
    { icon: TrendingUp, title: "Credit Assessment", metric: "15-20% more approvals" },
    { icon: CheckCircle, title: "Smart Disbursal", metric: "20% fewer late payments" },
  ],
  payments: [
    { icon: CheckCircle, title: "Merchant Onboarding", metric: "Minutes vs days" },
    { icon: Zap, title: "Intelligent Routing", metric: "5-10% better success" },
    { icon: Shield, title: "Fraud Detection", metric: "Real-time screening" },
  ],
  compliance: [
    { icon: Shield, title: "AML Monitoring", metric: "Real-time compliance" },
    { icon: FileText, title: "Regulatory Reporting", metric: "Hours vs weeks" },
    { icon: CheckCircle, title: "Audit Trail", metric: "Instant readiness" },
  ],
  customer: [
    { icon: Sparkles, title: "AI Support Triage", metric: "Instant prioritization" },
    { icon: TrendingUp, title: "Cross-sell Generation", metric: "Higher conversions" },
    { icon: Shield, title: "Omnichannel Resolution", metric: "360° context" },
  ],
  investment: [
    { icon: TrendingUp, title: "Portfolio Rebalancing", metric: "Proactive risk management" },
    { icon: FileText, title: "Due Diligence", metric: "Accelerated decisions" },
    { icon: TrendingDown, title: "Market Sentiment", metric: "Early warning system" },
  ],
  insurance: [
    { icon: TrendingUp, title: "AI Underwriting", metric: "75% faster decisions" },
    { icon: CheckCircle, title: "Claims Processing", metric: "85% faster processing" },
    { icon: Shield, title: "Fraud Detection", metric: "80% detection rate" },
  ],
};

const stats = [
  { value: "90%", label: "Time reduction" },
  { value: "99.9%", label: "Accuracy" },
  { value: "10x", label: "ROI" },
];

const BFSI = () => {
  const [activeTab, setActiveTab] = useState("lending");

  const heroWorkflows = [
    { title: "Lending", icon: FileText, color: "bg-blue-500" },
    { title: "Payments", icon: CreditCard, color: "bg-green-500" },
    { title: "Compliance", icon: Shield, color: "bg-purple-500" },
    { title: "Insurance", icon: Umbrella, color: "bg-orange-500" }
  ];

  const heroMetrics = [
    { value: "90%", label: "Time Saved", icon: Clock },
    { value: "99.9%", label: "Accuracy", icon: Zap },
    { value: "10x", label: "ROI", icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, hsl(220 20% 96%), hsl(210 25% 94%), hsl(200 20% 95%))' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-mesh py-16 md:py-24">
        <div className="container mx-auto px-6">
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
                    <Shield className="w-4 h-4" />
                    Financial Services & Insurance
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Transform financial operations{" "}
                  <span className="gradient-text">with intelligent automation</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From lending and payments to compliance and claims processing, automate complex financial workflows with AI agents that ensure accuracy, reduce risk, and accelerate decision-making.
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                    <a href="mailto:hello@langslide.com" className="flex items-center">
                      Get Started <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                    <a href="#workflows">View Workflows</a>
                  </Button>
                </div>
              </motion.div>
              
              {/* Right Column - Interactive Dashboard */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FunctionHeroDashboard 
                  icon={CircleDollarSign}
                  workflows={heroWorkflows}
                  metrics={heroMetrics}
                />
              </motion.div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Categories - Tabbed */}
      <section className="py-20 md:py-32 bg-white" id="workflows">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Workflow <span className="gradient-text">Automation</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Streamline operations across all areas
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {workflowCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                      activeTab === cat.id
                        ? 'gradient-primary text-primary-foreground shadow-md'
                        : 'bg-white border-2 border-border text-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {workflows[activeTab as keyof typeof workflows].map((workflow, idx) => {
                  const Icon = workflow.icon;
                  return (
                    <Card
                      key={idx}
                      className="p-6 bg-white border-2 border-border hover:border-primary/50 transition-all group"
                    >
                      <div className="mb-4">
                        <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2">{workflow.title}</h3>
                      <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs mt-4">
                        {workflow.metric}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Focus */}
      <section className="py-16 md:py-20 bg-white border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Trusted by Leading Financial Institutions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Integrates with{" "}
                <span className="gradient-text">your financial stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with 30+ banking, payments, and insurance platforms
              </p>
            </div>
            <AutoLogoCarousel apps={financialServicesApps} rows={3} speed={40} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA */}
      <CTA 
        badge="Transform Finance"
        title="Ready to modernize your operations?"
        description="Automate lending, payments, compliance, and claims with AI agents."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="View Demo"
        secondaryButtonHref="/contact-us"
      />

      <Footer />
    </div>
  );
};

export default BFSI;
