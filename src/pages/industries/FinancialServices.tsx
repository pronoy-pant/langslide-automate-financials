import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/ui/call-to-action";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
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
  TrendingDown
} from "lucide-react";

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

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, hsl(220 20% 96%), hsl(210 25% 94%), hsl(200 20% 95%))' }}>
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-mesh border-b border-border pt-6">
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                    <Shield className="w-4 h-4" />
                    Financial Services & Insurance
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Intelligent automation for{" "}
                  <span className="gradient-text">finance & insurance</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  AI agents that automate lending, payments, compliance, and claims processing
                </p>
                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link to="/contact-us">Get Started</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="#workflows">View Workflows</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Visual Dashboard */}
              <motion.div
                className="glass rounded-3xl p-8 shadow-2xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl p-6 text-center border-2 border-border"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

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
