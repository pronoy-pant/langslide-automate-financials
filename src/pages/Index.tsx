import logo from "@/assets/langslide-logo.png";
import { Card } from "@/components/ui/card";

const workflows = [
  {
    category: "Lending & Credit Automation",
    description: "Streamline the entire credit lifecycle, from application to recovery",
    items: [
      {
        title: "Automated Loan Application Data Collation",
        problem: "Manually collecting and verifying applicant data from various sources is time-consuming, error-prone, and delays loan approval.",
        benefit: "Reduces data collection time by over 90%, minimizes manual errors, shortens loan application-to-decision cycle."
      },
      {
        title: "Real-time Creditworthiness Assessment",
        problem: "Traditional credit assessment relies on static credit bureau scores, which may not reflect a customer's current financial health.",
        benefit: "Enables more accurate risk assessment, increases loan approval rates for deserving applicants, reduces default risk."
      },
      {
        title: "Automated Loan Disbursal & Repayment Reminders",
        problem: "Manual processes for loan disbursal cause delays, and inconsistent follow-ups for EMI payments lead to higher delinquency rates.",
        benefit: "Ensures instant loan disbursal post-approval, reduces late payments by 15-20% through proactive reminders."
      },
      {
        title: "Smart Non-Performing Asset (NPA) Monitoring",
        problem: "Identifying and managing potential NPAs relies on reactive, manual tracking, often after several defaults have already occurred.",
        benefit: "Proactive identification of at-risk accounts, enables early intervention to prevent defaults, improves collection efficiency."
      },
      {
        title: "Seamless Co-lending Partner Data Sync",
        problem: "In co-lending partnerships, syncing loan data between a bank and fintech partner is often a manual, batch-based process.",
        benefit: "Eliminates manual reconciliation, ensures both partners have a real-time view of the loan portfolio."
      }
    ]
  },
  {
    category: "Payments & Transaction Processing",
    description: "Make payments faster, safer, and more efficient",
    items: [
      {
        title: "Automated Merchant Onboarding & KYC",
        problem: "Onboarding merchants for payment processing involves extensive paperwork and manual verification.",
        benefit: "Reduces merchant onboarding time from days to minutes, lowers operational costs, ensures compliance."
      },
      {
        title: "Intelligent Transaction Routing",
        problem: "Payment gateways experience revenue loss due to high transaction failure rates when servers or networks are down.",
        benefit: "Increases payment success rates by 5-10%, reduces customer drop-offs at checkout, maximizes revenue."
      },
      {
        title: "Real-time Fraud Detection & Alerting",
        problem: "Detecting fraudulent transactions after the fact leads to financial losses and damages reputation.",
        benefit: "Significantly reduces fraud losses, protects customers from unauthorized transactions, minimizes chargeback penalties."
      },
      {
        title: "Automated Chargeback Dispute Management",
        problem: "Managing chargeback disputes is a manual, evidence-intensive process, often leading to missed deadlines and lost revenue.",
        benefit: "Increases chargeback win rate, reduces manual effort by up to 80%, prevents revenue loss."
      },
      {
        title: "QR Code Payment Reconciliation for Merchants",
        problem: "Small merchants using QR code payments from multiple providers struggle to reconcile daily collections manually.",
        benefit: "Saves merchants hours of manual reconciliation work, provides clear visibility into daily earnings."
      }
    ]
  },
  {
    category: "Compliance & Risk Management",
    description: "Stay compliant with regulations and manage risk effectively",
    items: [
      {
        title: "Continuous AML/CFT Transaction Monitoring",
        problem: "Periodic, batch-based checks for Anti-Money Laundering can miss suspicious activities that occur between checks.",
        benefit: "Ensures real-time compliance with regulatory requirements, significantly reduces risk of heavy fines."
      },
      {
        title: "Automated Regulatory Reporting",
        problem: "Financial institutions must submit numerous reports to regulators. Manually compiling this data is laborious and prone to errors.",
        benefit: "Drastically reduces time spent on report generation, improves data accuracy, minimizes risk of non-compliance penalties."
      },
      {
        title: "Centralized Compliance Audit Trail Generation",
        problem: "During audits, gathering evidence of compliance from disparate systems is a chaotic and time-consuming process.",
        benefit: "Simplifies audit preparation from weeks to hours, provides irrefutable proof of process adherence."
      },
      {
        title: "Third-party Vendor Risk Assessment",
        problem: "Onboarding and monitoring third-party vendors for compliance and security risks is often overlooked.",
        benefit: "Standardizes vendor due diligence, provides clear and objective view of vendor risk, protects from third-party breaches."
      },
      {
        title: "Automated Policy & Procedure Updates Dissemination",
        problem: "Ensuring all employees have read and acknowledged policy changes when regulations change is a logistical nightmare.",
        benefit: "Ensures rapid and auditable dissemination of critical policy updates, guarantees employee acknowledgment."
      }
    ]
  },
  {
    category: "Customer Operations & Experience",
    description: "Improve customer satisfaction and enable personalized engagement",
    items: [
      {
        title: "AI-powered Customer Support Ticket Triage",
        problem: "Manually reading, categorizing, and routing each customer query to the right agent is inefficient and slow.",
        benefit: "Reduces first-response time significantly, improves agent productivity, ensures high-priority issues are addressed first."
      },
      {
        title: "Automated Cross-sell/Up-sell Offer Generation",
        problem: "Identifying opportunities to offer existing customers relevant new products is often based on guesswork rather than data.",
        benefit: "Increases customer lifetime value, improves cross-sell conversion rates through timely and relevant offers."
      },
      {
        title: "Personalized Financial Advisory Nudges",
        problem: "Customers often lack the financial literacy or discipline to make optimal financial decisions.",
        benefit: "Improves customer financial health, increases engagement with investment and insurance products."
      },
      {
        title: "Omnichannel Customer Complaint Resolution",
        problem: "When a customer complains on social media, the issue is often handled in isolation from their previous interactions.",
        benefit: "Provides unified 360-degree view of the customer, enables faster and more contextual problem-solving."
      },
      {
        title: "Automated Customer Offboarding & Data Archival",
        problem: "When a customer closes their account, the process of revoking access and archiving data is often manual and forgotten.",
        benefit: "Ensures compliance with data retention regulations, mitigates security risks from dormant active accounts."
      }
    ]
  },
  {
    category: "Investment & Wealth Management",
    description: "Automate key processes for venture capital and asset management",
    items: [
      {
        title: "Automated Portfolio Rebalancing Alerts",
        problem: "An investor's portfolio can drift from its target allocation due to market movements. Manually tracking deviations is impossible.",
        benefit: "Ensures portfolios remain aligned with investment goals, helps manage risk proactively."
      },
      {
        title: "Due Diligence Data Room Automation for VCs",
        problem: "Manually requesting, tracking, and organizing documents in a data room during fundraising is tedious and inefficient.",
        benefit: "Streamlines due diligence process, saves hours of administrative work, accelerates investment decision-making."
      },
      {
        title: "Real-time Market Sentiment Analysis & Alerts",
        problem: "Traders need to stay on top of market-moving news and social media sentiment, but manually tracking is impossible.",
        benefit: "Provides early warning system for potential market volatility, enables faster reaction to breaking news."
      },
      {
        title: "Automated Capital Call & Distribution Notices",
        problem: "For VCs and private equity funds, issuing capital call notices to Limited Partners involves complex manual calculations.",
        benefit: "Eliminates manual calculation errors, drastically reduces administrative time, provides secure communication channel."
      },
      {
        title: "New Fund Offer (NFO) Subscription Process Automation",
        problem: "During an NFO, AMCs receive a massive influx of applications. Manually processing these is a huge operational challenge.",
        benefit: "Scales to handle high volumes without manual intervention, reduces processing errors, shortens time to unit allocation."
      }
    ]
  },
  {
    category: "Insurance & Cross-functional Automation",
    description: "Comprehensive automation across insurance and multi-domain processes",
    items: [
      {
        title: "Automated Insurance Claim Processing & Verification",
        problem: "Initial processing of insurance claims involves significant manual effort in verifying policy details and collecting documents.",
        benefit: "Reduces claim settlement time from weeks to days, lowers claim processing costs by 30%+, enhances customer satisfaction."
      },
      {
        title: "Cross-border Remittance Compliance Checks",
        problem: "Processing international payments requires stringent compliance checks at multiple stages, making the process slow and complex.",
        benefit: "Ensures full compliance with international and local regulations, reduces risk of penalties, accelerates remittance process."
      },
      {
        title: "Unified Customer Financial View (360-degree Profile)",
        problem: "A single customer may have multiple products with a bank. Data is often siloed, preventing holistic view of customer relationship.",
        benefit: "Empowers relationship managers with complete view, enables personalized conversations, increases cross-selling effectiveness."
      }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={logo} 
              alt="Langslide" 
              className="h-16 md:h-20 mx-auto mb-8 glow-effect"
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Intelligent Workflow Automation for{" "}
              <span className="gradient-text">Financial Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Transform your lending, payments, compliance, and customer operations with AI-powered automation
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
              From loan origination to payment processing, from regulatory compliance to customer experience—our intelligent automation workflows help BFSI organizations reduce manual effort by up to 90%, accelerate decision-making, and ensure regulatory compliance at every step.
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
                <div className="inline-block px-6 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <span className="text-sm font-semibold gradient-text uppercase tracking-wider">
                    Category {categoryIndex + 1}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {category.category}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Workflow Items */}
              <div className="grid gap-6 md:gap-8">
                {category.items.map((item, itemIndex) => (
                  <Card 
                    key={itemIndex}
                    className="p-6 md:p-8 bg-card border-border hover:border-primary/30 transition-all duration-300 hover:glow-effect"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {itemIndex + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                          {item.title}
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                              Problem Statement
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.problem}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
                              Key Benefits & ROI
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {item.benefit}
                            </p>
                          </div>
                        </div>
                      </div>
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
            <img 
              src={logo} 
              alt="Langslide" 
              className="h-12 mx-auto mb-6 opacity-80"
            />
            <p className="text-lg text-muted-foreground mb-6">
              Intelligent workflow automation for the financial services industry
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

export default Index;
