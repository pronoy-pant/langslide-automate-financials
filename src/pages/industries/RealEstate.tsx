import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Home,
  FileText,
  Users,
  Wrench,
  Shield,
  Key,
  Zap,
  CheckCircle,
  DollarSign,
  Search,
  Calendar,
  FileCheck,
  TrendingUp,
  ClipboardCheck,
  AlertTriangle,
  UserCheck,
  Building,
  BarChart,
  MessageSquare,
  Clock
} from "lucide-react";

const workflows = [
  {
    title: "Property Management",
    description: "Automate daily property operations and tenant communications",
    icon: Building,
    items: [
      {
        title: "Tenant Portal Automation",
        description: "AI-powered platform for rent payments, maintenance requests, and document access",
        icon: Users,
        metrics: "24/7 tenant access"
      },
      {
        title: "Rent Collection & Tracking",
        description: "Automated rent invoicing, payment processing, and late payment follow-ups",
        icon: DollarSign,
        metrics: "98% collection rate"
      },
      {
        title: "Property Inspection Scheduling",
        description: "AI coordinates and schedules routine inspections with automated reporting",
        icon: ClipboardCheck,
        metrics: "100% compliance"
      },
      {
        title: "Vacancy Management",
        description: "Automated listing creation, showing scheduling, and prospect tracking",
        icon: Search,
        metrics: "40% faster filling"
      }
    ]
  },
  {
    title: "Lease Administration",
    description: "Streamline lease processing from application to renewal",
    icon: FileText,
    items: [
      {
        title: "Automated Lease Processing",
        description: "AI extracts lease terms, generates documents, and schedules e-signatures",
        icon: FileText,
        metrics: "75% time reduction"
      },
      {
        title: "Lease Renewal Automation",
        description: "Intelligent tracking of lease expirations with automated renewal offers and negotiations",
        icon: TrendingUp,
        metrics: "85% renewal rate"
      },
      {
        title: "Lease Amendment Processing",
        description: "Automated processing of lease modifications, addendums, and rent adjustments",
        icon: FileCheck,
        metrics: "Same-day processing"
      },
      {
        title: "Lease Abstraction",
        description: "AI extracts key terms and critical dates from lease documents into structured data",
        icon: Search,
        metrics: "99% accuracy"
      }
    ]
  },
  {
    title: "Tenant Services",
    description: "Enhance tenant experience with responsive automated support",
    icon: Users,
    items: [
      {
        title: "Maintenance Request Routing",
        description: "AI prioritizes and assigns work orders to appropriate vendors or staff",
        icon: Wrench,
        metrics: "50% faster response"
      },
      {
        title: "Tenant Screening Automation",
        description: "Comprehensive background checks, credit verification, and rental history analysis",
        icon: UserCheck,
        metrics: "48-hour turnaround"
      },
      {
        title: "Move-In/Move-Out Coordination",
        description: "Automated checklists, inspections, and security deposit processing",
        icon: Key,
        metrics: "Seamless transitions"
      },
      {
        title: "Tenant Communication Hub",
        description: "Centralized messaging, announcements, and automated response system",
        icon: MessageSquare,
        metrics: "24/7 availability"
      }
    ]
  },
  {
    title: "Compliance & Legal",
    description: "Ensure regulatory compliance and manage legal requirements",
    icon: Shield,
    items: [
      {
        title: "Regulatory Compliance Monitoring",
        description: "Automated tracking of local, state, and federal property regulations",
        icon: Shield,
        metrics: "100% compliance"
      },
      {
        title: "Fair Housing Compliance",
        description: "AI ensures all tenant interactions and decisions comply with fair housing laws",
        icon: CheckCircle,
        metrics: "Zero violations"
      },
      {
        title: "Eviction Process Automation",
        description: "Automated notice generation, court filing preparation, and timeline tracking",
        icon: AlertTriangle,
        metrics: "Full legal compliance"
      },
      {
        title: "Insurance & Risk Management",
        description: "Automated tracking of property insurance, certificates, and claims processing",
        icon: Shield,
        metrics: "Complete coverage"
      }
    ]
  },
  {
    title: "Transactions & Sales",
    description: "Accelerate property transactions with intelligent automation",
    icon: DollarSign,
    items: [
      {
        title: "Deal Management Automation",
        description: "AI tracks transaction pipeline, deadlines, and required documentation",
        icon: ClipboardCheck,
        metrics: "Zero missed deadlines"
      },
      {
        title: "Due Diligence Coordination",
        description: "Automated collection and review of property documents, inspections, and reports",
        icon: FileCheck,
        metrics: "70% faster closings"
      },
      {
        title: "Contract Generation & Management",
        description: "AI creates purchase agreements, disclosures, and addendums from templates",
        icon: FileText,
        metrics: "Same-day generation"
      },
      {
        title: "Commission & Settlement Processing",
        description: "Automated calculation and distribution of commissions and closing costs",
        icon: DollarSign,
        metrics: "Instant calculations"
      }
    ]
  },
  {
    title: "Financial Management",
    description: "Optimize property financials and reporting with automation",
    icon: BarChart,
    items: [
      {
        title: "Automated Accounting & Reconciliation",
        description: "AI posts transactions, reconciles accounts, and generates financial statements",
        icon: DollarSign,
        metrics: "99% accuracy"
      },
      {
        title: "Budget & Expense Management",
        description: "Intelligent budget tracking, variance analysis, and expense approval workflows",
        icon: BarChart,
        metrics: "Real-time insights"
      },
      {
        title: "CAM Reconciliation",
        description: "Automated calculation and reconciliation of common area maintenance charges",
        icon: TrendingUp,
        metrics: "Transparent billing"
      },
      {
        title: "Owner Reporting Automation",
        description: "Scheduled generation and distribution of property performance reports to owners",
        icon: FileCheck,
        metrics: "Automated delivery"
      }
    ]
  }
];

const RealEstate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
              <Home className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Intelligent Workflow Automation for{" "}
              <span className="gradient-text">Real Estate</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              AI agents that automate property management, streamline leasing, and accelerate transactions—reducing administrative burden while improving tenant satisfaction
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

      {/* Introduction Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Real estate professionals juggle complex workflows across property management, leasing, compliance, and transactions. Langslide's AI agents transform real estate operations by automating lease processing, tenant communications, maintenance coordination, and deal management—allowing property managers and brokers to focus on growth and tenant relationships.
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

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your real estate operations?
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

export default RealEstate;
