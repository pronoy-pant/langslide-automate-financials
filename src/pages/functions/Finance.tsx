import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Receipt, TrendingUp, FileText, Zap, CheckCircle } from "lucide-react";

interface App {
  name: string;
  category: string;
  logo?: string;
}

const commonApps: App[] = [
  { name: "QuickBooks", category: "Accounting", logo: "https://logo.clearbit.com/intuit.com" },
  { name: "Xero", category: "Accounting", logo: "https://logo.clearbit.com/xero.com" },
  { name: "NetSuite", category: "ERP & Financial Management", logo: "https://logo.clearbit.com/netsuite.com" },
  { name: "SAP", category: "ERP & Financial Management", logo: "https://logo.clearbit.com/sap.com" },
  { name: "Oracle", category: "ERP & Financial Management", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "Stripe", category: "Payment Processing", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "PayPal", category: "Payment Processing", logo: "https://logo.clearbit.com/paypal.com" },
  { name: "Bill.com", category: "Accounts Payable", logo: "https://logo.clearbit.com/bill.com" },
  { name: "Expensify", category: "Expense Management", logo: "https://logo.clearbit.com/expensify.com" },
  { name: "Concur", category: "Expense Management", logo: "https://logo.clearbit.com/concur.com" },
  { name: "Tableau", category: "Financial Analytics", logo: "https://logo.clearbit.com/tableau.com" },
  { name: "Power BI", category: "Financial Analytics", logo: "https://logo.clearbit.com/powerbi.microsoft.com" },
  { name: "BlackLine", category: "Account Reconciliation", logo: "https://logo.clearbit.com/blackline.com" },
];

const workflows = [
  {
    title: "Accounts Payable Automation",
    description: "Streamline invoice processing and payment workflows",
    icon: Receipt,
    capabilities: [
      "Automated invoice data extraction and validation",
      "Intelligent 3-way matching (PO, invoice, receipt)",
      "Automated approval routing based on business rules",
      "Payment scheduling and execution"
    ]
  },
  {
    title: "Expense Management",
    description: "Automate expense reporting and reimbursement",
    icon: DollarSign,
    capabilities: [
      "Receipt OCR and expense categorization",
      "Policy compliance checking and violation alerts",
      "Automated approval workflows",
      "Direct integration with accounting systems"
    ]
  },
  {
    title: "Financial Reporting",
    description: "Generate accurate financial reports automatically",
    icon: TrendingUp,
    capabilities: [
      "Automated month-end and quarter-end close",
      "Real-time financial dashboard generation",
      "Variance analysis and anomaly detection",
      "Regulatory compliance reporting"
    ]
  },
  {
    title: "Accounts Receivable",
    description: "Optimize cash collection and reduce DSO",
    icon: FileText,
    capabilities: [
      "Automated invoice generation and delivery",
      "Payment reminder and follow-up automation",
      "Cash application and reconciliation",
      "Customer payment portal management"
    ]
  },
];

const Finance = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
            <DollarSign className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Intelligent Automation for{" "}
            <span className="gradient-text">Finance & Accounting Teams</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            AI agents that automate AP/AR, expense management, and financial reporting—enabling finance and accounting teams to focus on strategic decision-making
          </p>
          <Button asChild size="lg">
            <Link to="/request-demo">Request a Demo</Link>
          </Button>
        </div>
      </div>
    </header>

    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Finance and accounting teams spend countless hours on manual data entry, invoice processing, and reconciliation. Langslide's AI agents automate these repetitive tasks, ensure accuracy, and provide real-time financial insights—freeing finance professionals to drive business growth.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Workflows</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {workflows.map((workflow, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:glow-effect">
                <CardHeader>
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20">
                      <workflow.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{workflow.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {workflow.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {workflow.capabilities.map((capability, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Common Apps for Finance & Accounting Automation</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Langslide integrates with your existing financial systems and tools
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {commonApps.map((app, i) => (
              <div key={i} className="flex flex-col items-center text-center group hover:scale-110 transition-all duration-300">
                <div className="w-20 h-20 mb-4 flex items-center justify-center group-hover:drop-shadow-lg transition-all duration-300">
                  {app.logo ? (
                    <img src={app.logo} alt={app.name} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-300" />
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{app.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{app.name}</p>
                <p className="text-xs text-muted-foreground">{app.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Finance;
