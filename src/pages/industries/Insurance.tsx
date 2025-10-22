import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/ui/call-to-action";
import {
  Umbrella,
  FileCheck,
  ShieldCheck,
  Users,
  DollarSign,
  AlertTriangle,
  Zap,
  TrendingUp,
  FileText,
  MessageSquare,
  BarChart,
  CheckCircle,
  Search,
  UserCheck,
  Calculator,
  Clock,
  Shield,
  FileSearch,
  Activity,
  Target
} from "lucide-react";

const workflows = [
  {
    title: "Underwriting Automation",
    description: "Accelerate policy decisions with AI-powered risk assessment",
    icon: Calculator,
    items: [
      {
        title: "AI-Powered Underwriting",
        description: "Automated risk assessment using multiple data sources, credit scores, and predictive analytics",
        icon: Calculator,
        metrics: "75% faster decisions"
      },
      {
        title: "Automated Quote Generation",
        description: "Instant premium calculations and policy quote generation based on applicant data",
        icon: DollarSign,
        metrics: "Real-time quotes"
      },
      {
        title: "Medical Underwriting Automation",
        description: "AI analyzes medical records and health data for life and health insurance underwriting",
        icon: Activity,
        metrics: "90% accuracy"
      },
      {
        title: "Risk Scoring & Classification",
        description: "Automated risk tier assignment with consistent scoring across all applications",
        icon: Target,
        metrics: "Consistent evaluation"
      }
    ]
  },
  {
    title: "Claims Management",
    description: "Process claims faster with intelligent automation and fraud detection",
    icon: FileCheck,
    items: [
      {
        title: "Automated Claims Intake & Triage",
        description: "AI categorizes and routes claims instantly based on type, severity, and complexity",
        icon: FileCheck,
        metrics: "85% faster intake"
      },
      {
        title: "Claims Assessment Automation",
        description: "AI evaluates claim validity, coverage applicability, and recommended settlement amounts",
        icon: CheckCircle,
        metrics: "70% auto-adjudication"
      },
      {
        title: "Document Processing & Verification",
        description: "Automated extraction and validation of data from claim forms, receipts, and supporting documents",
        icon: FileText,
        metrics: "99% accuracy"
      },
      {
        title: "Claims Status Tracking",
        description: "Automated updates to customers on claim progress with multi-channel notifications",
        icon: Clock,
        metrics: "100% transparency"
      }
    ]
  },
  {
    title: "Policy Administration",
    description: "Streamline policy lifecycle management from issue to renewal",
    icon: FileText,
    items: [
      {
        title: "Automated Policy Issuance",
        description: "End-to-end automation from application approval to policy document generation and delivery",
        icon: FileCheck,
        metrics: "Same-day issuance"
      },
      {
        title: "Endorsement & Change Processing",
        description: "AI handles policy modifications, rider additions, and coverage changes",
        icon: FileText,
        metrics: "Instant processing"
      },
      {
        title: "Renewal Automation",
        description: "Intelligent renewal processing with automated rate adjustments and customer notifications",
        icon: TrendingUp,
        metrics: "95% retention rate"
      },
      {
        title: "Cancellation & Reinstatement",
        description: "Automated processing of policy cancellations and reinstatements with proper refund calculations",
        icon: AlertTriangle,
        metrics: "Full compliance"
      }
    ]
  },
  {
    title: "Fraud Detection",
    description: "Protect your business with advanced AI fraud prevention",
    icon: ShieldCheck,
    items: [
      {
        title: "Real-Time Fraud Detection",
        description: "AI analyzes claim patterns, applicant behavior, and historical data to flag suspicious activity",
        icon: AlertTriangle,
        metrics: "80% fraud detection"
      },
      {
        title: "Identity Verification",
        description: "Automated identity checks using document analysis, biometrics, and data cross-referencing",
        icon: UserCheck,
        metrics: "99.5% verification rate"
      },
      {
        title: "Network Analysis",
        description: "AI identifies fraud rings by detecting connections between claims, claimants, and providers",
        icon: Search,
        metrics: "Early pattern detection"
      },
      {
        title: "Investigation Workflow",
        description: "Automated assignment and tracking of suspicious claims for special investigation units",
        icon: FileSearch,
        metrics: "Streamlined investigations"
      }
    ]
  },
  {
    title: "Customer Service",
    description: "Enhance customer experience with intelligent support automation",
    icon: Users,
    items: [
      {
        title: "AI Customer Service Chatbot",
        description: "24/7 automated support for policy questions, claims status, and general inquiries",
        icon: MessageSquare,
        metrics: "24/7 availability"
      },
      {
        title: "Customer Onboarding Automation",
        description: "Guided digital onboarding with document collection and policy setup assistance",
        icon: UserCheck,
        metrics: "80% digital adoption"
      },
      {
        title: "Billing & Payment Automation",
        description: "Automated premium billing, payment processing, and late payment follow-ups",
        icon: DollarSign,
        metrics: "95% collection rate"
      },
      {
        title: "Customer Communication Hub",
        description: "Centralized automated communications for policy updates, renewals, and important notices",
        icon: MessageSquare,
        metrics: "Multi-channel delivery"
      }
    ]
  },
  {
    title: "Compliance & Reporting",
    description: "Maintain regulatory compliance with automated monitoring and reporting",
    icon: Shield,
    items: [
      {
        title: "Regulatory Compliance Monitoring",
        description: "Continuous tracking of state and federal regulations with automated policy updates",
        icon: Shield,
        metrics: "100% compliance"
      },
      {
        title: "Automated Regulatory Reporting",
        description: "Generation and filing of required reports to insurance departments and regulators",
        icon: BarChart,
        metrics: "On-time filing"
      },
      {
        title: "Audit Trail Management",
        description: "Comprehensive logging of all transactions, changes, and decisions for audit purposes",
        icon: FileSearch,
        metrics: "Complete traceability"
      },
      {
        title: "Risk & Performance Analytics",
        description: "AI-powered analysis of portfolio performance, loss ratios, and risk concentration",
        icon: BarChart,
        metrics: "Real-time insights"
      }
    ]
  }
];

const Insurance = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
              <Umbrella className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Intelligent Workflow Automation for{" "}
              <span className="gradient-text">Insurance</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              AI agents that accelerate underwriting, automate claims processing, and detect fraud—improving customer satisfaction while reducing costs and risk
            </p>
            <Button asChild size="lg">
              <Link to="/request-demo">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Insurance companies face pressure to deliver faster service, accurate risk assessment, and fraud prevention while managing complex regulations. Langslide's AI agents transform insurance operations by automating underwriting decisions, accelerating claims processing, detecting fraudulent activity, and ensuring regulatory compliance—helping insurers serve customers better while protecting profitability.
            </p>
          </div>
        </div>
      </section>

      {/* Workflows Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {workflows.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mt-2">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card 
                      key={itemIndex}
                      className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:glow-effect group"
                    >
                      <CardHeader>
                        <div className="mb-3">
                          <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-primary">{item.metrics}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        badge="Transform Insurance"
        title="Ready to accelerate claims and underwriting?"
        description="Discover how Langslide's AI agents automate underwriting, claims processing, and fraud detection for insurance companies. Improve customer satisfaction, reduce operational costs, and detect fraud with advanced AI-powered automation."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Schedule a Call"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your insurance operations?
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

export default Insurance;
