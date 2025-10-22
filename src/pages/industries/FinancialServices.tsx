import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import {
  FileText, 
  CreditCard, 
  Shield, 
  Users, 
  TrendingUp, 
  Umbrella,
  Zap,
  CircleDollarSign,
  UserCheck,
  Bell,
  Eye,
  RefreshCw,
  Target,
  AlertCircle,
  CheckCircle,
  Send,
  FileCheck,
  Database,
  Lock,
  MessageSquare,
  Sparkles,
  Heart,
  BarChart3,
  Briefcase,
  LineChart,
  FileSpreadsheet,
  Globe,
  UserCircle
} from "lucide-react";

const workflows = [
  {
    category: "Lending & Credit Automation",
    description: "AI agents automate the entire credit lifecycle—from application to recovery",
    icon: FileText,
    items: [
      {
        title: "Loan Application Automation",
        description: "AI agents collate data from multiple sources, verify documents, and create unified customer profiles",
        icon: FileCheck,
        metrics: "90% faster processing"
      },
      {
        title: "Real-time Creditworthiness",
        description: "Intelligent assessment using credit bureaus, bank statements, and alternative data sources",
        icon: Target,
        metrics: "15-20% approval increase"
      },
      {
        title: "Smart Disbursal & Reminders",
        description: "Automated loan disbursal with proactive EMI payment reminders via multiple channels",
        icon: Bell,
        metrics: "20% reduction in late payments"
      },
      {
        title: "NPA Monitoring",
        description: "Proactive identification and early intervention for at-risk accounts",
        icon: Eye,
        metrics: "Early default prevention"
      },
      {
        title: "Co-lending Sync",
        description: "Real-time data synchronization between bank and fintech partners",
        icon: RefreshCw,
        metrics: "Zero reconciliation delays"
      }
    ]
  },
  {
    category: "Payments & Transaction Processing",
    description: "AI agents make payments faster, safer, and more efficient across all channels",
    icon: CreditCard,
    items: [
      {
        title: "Merchant Onboarding",
        description: "Automated KYC verification with document OCR and compliance checks",
        icon: UserCheck,
        metrics: "Minutes vs days"
      },
      {
        title: "Intelligent Routing",
        description: "Dynamic transaction routing based on real-time network health monitoring",
        icon: Zap,
        metrics: "5-10% success rate boost"
      },
      {
        title: "Fraud Detection",
        description: "Real-time AI-powered fraud screening with instant alerts",
        icon: Shield,
        metrics: "Significant loss reduction"
      },
      {
        title: "Chargeback Management",
        description: "Automated evidence collection and dispute resolution",
        icon: AlertCircle,
        metrics: "80% effort reduction"
      },
      {
        title: "QR Payment Reconciliation",
        description: "Multi-provider payment reconciliation for merchants",
        icon: CheckCircle,
        metrics: "Daily auto-reconciliation"
      }
    ]
  },
  {
    category: "Compliance & Risk Management",
    description: "AI agents ensure continuous compliance and proactive risk management",
    icon: Shield,
    items: [
      {
        title: "AML/CFT Monitoring",
        description: "Continuous transaction monitoring with sanctions screening",
        icon: Eye,
        metrics: "Real-time compliance"
      },
      {
        title: "Regulatory Reporting",
        description: "Automated data aggregation and report generation for regulators",
        icon: FileSpreadsheet,
        metrics: "Hours vs weeks"
      },
      {
        title: "Audit Trail Generation",
        description: "Centralized compliance evidence with immutable logging",
        icon: Database,
        metrics: "Instant audit readiness"
      },
      {
        title: "Vendor Risk Assessment",
        description: "Automated third-party security and compliance evaluation",
        icon: Lock,
        metrics: "Standardized due diligence"
      },
      {
        title: "Policy Updates",
        description: "Automated dissemination and acknowledgment tracking",
        icon: Send,
        metrics: "100% coverage guarantee"
      }
    ]
  },
  {
    category: "Customer Operations & Experience",
    description: "AI agents enable personalized, omnichannel customer engagement at scale",
    icon: Users,
    items: [
      {
        title: "AI Support Triage",
        description: "Intelligent categorization and routing with sentiment analysis",
        icon: MessageSquare,
        metrics: "Instant prioritization"
      },
      {
        title: "Cross-sell Generation",
        description: "Data-driven product recommendations at the right moment",
        icon: Sparkles,
        metrics: "Higher conversion rates"
      },
      {
        title: "Financial Nudges",
        description: "Personalized advisory based on transaction patterns",
        icon: Heart,
        metrics: "Improved financial health"
      },
      {
        title: "Omnichannel Resolution",
        description: "Unified customer view across all touchpoints",
        icon: Globe,
        metrics: "360-degree context"
      },
      {
        title: "Account Offboarding",
        description: "Automated access revocation and compliant data archival",
        icon: UserCircle,
        metrics: "Zero security gaps"
      }
    ]
  },
  {
    category: "Investment & Wealth Management",
    description: "AI agents automate portfolio management and investment operations",
    icon: TrendingUp,
    items: [
      {
        title: "Portfolio Rebalancing",
        description: "Daily deviation tracking with actionable recommendations",
        icon: BarChart3,
        metrics: "Proactive risk management"
      },
      {
        title: "Due Diligence Automation",
        description: "Structured data room creation and document tracking for VCs",
        icon: Briefcase,
        metrics: "Accelerated decisions"
      },
      {
        title: "Market Sentiment Analysis",
        description: "Real-time news and social media monitoring with alerts",
        icon: LineChart,
        metrics: "Early warning system"
      },
      {
        title: "Capital Call Notices",
        description: "Automated calculation and secure distribution to LPs",
        icon: CircleDollarSign,
        metrics: "Error-free processing"
      },
      {
        title: "NFO Processing",
        description: "High-volume subscription handling with instant verification",
        icon: FileCheck,
        metrics: "Scalable operations"
      }
    ]
  },
  {
    category: "Insurance & Cross-functional",
    description: "AI agents provide comprehensive automation across insurance and multi-domain processes",
    icon: Umbrella,
    items: [
      {
        title: "Claim Processing",
        description: "Automated verification, fraud detection, and instant approval for simple claims",
        icon: CheckCircle,
        metrics: "Days to minutes settlement"
      },
      {
        title: "Remittance Compliance",
        description: "Multi-stage compliance checks for cross-border payments",
        icon: Globe,
        metrics: "Full regulatory adherence"
      },
      {
        title: "360° Customer View",
        description: "Unified financial profile across all products and touchpoints",
        icon: UserCircle,
        metrics: "Complete relationship insights"
      }
    ]
  }
];

const BFSI = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Intelligent Workflow Automation for{" "}
              <span className="gradient-text">Financial Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              AI agents that automate complex workflows across lending, payments, compliance, and operations
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

      {/* Introduction */}
      <section className="py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Streamline Your Entire Financial Operations
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Intelligent AI agents handle complex workflows end-to-end—from loan origination to payment processing, compliance monitoring to customer engagement. Reduce manual effort by 90%, accelerate decisions, and maintain continuous regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Categories */}
      {workflows.map((category, categoryIndex) => (
        <section 
          key={categoryIndex} 
          className="py-16 md:py-24 border-b border-border"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Category Header */}
              <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center gap-3 mb-6">
                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {category.category}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Workflow Items */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card 
                    key={itemIndex}
                    className="p-6 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:glow-effect group"
                  >
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="pt-4 border-t border-border mt-auto">
                      <p className="text-sm font-semibold gradient-text">
                        {item.metrics}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your financial services operations?
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

export default BFSI;
