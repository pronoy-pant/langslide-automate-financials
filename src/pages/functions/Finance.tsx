import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Receipt, TrendingUp, FileText, Zap, CheckCircle } from "lucide-react";

const commonApps = [
  { name: "QuickBooks", category: "Accounting" },
  { name: "Xero", category: "Accounting" },
  { name: "NetSuite", category: "ERP & Financial Management" },
  { name: "SAP", category: "ERP & Financial Management" },
  { name: "Oracle Financials", category: "ERP & Financial Management" },
  { name: "Stripe", category: "Payment Processing" },
  { name: "PayPal", category: "Payment Processing" },
  { name: "Bill.com", category: "Accounts Payable" },
  { name: "Expensify", category: "Expense Management" },
  { name: "Concur", category: "Expense Management" },
  { name: "Coupa", category: "Procurement" },
  { name: "Workday Financial", category: "Financial Planning" },
  { name: "Tableau", category: "Financial Analytics" },
  { name: "Power BI", category: "Financial Analytics" },
  { name: "BlackLine", category: "Account Reconciliation" },
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
            <span className="gradient-text">Finance Teams</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            AI agents that automate AP/AR, expense management, and financial reporting—enabling finance teams to focus on strategic decision-making
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
            Finance teams spend countless hours on manual data entry, invoice processing, and reconciliation. Langslide's AI agents automate these repetitive tasks, ensure accuracy, and provide real-time financial insights—freeing finance professionals to drive business growth.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Common Apps for Finance Automation</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Langslide integrates with your existing financial systems and tools
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {commonApps.map((app, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/30 transition-all duration-300 text-center">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{app.name.charAt(0)}</span>
                  </div>
                  <CardTitle className="text-base font-semibold">{app.name}</CardTitle>
                  <CardDescription className="text-xs">{app.category}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>

    <footer className="py-12 md:py-16 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">Ready to automate your finance operations?</p>
          <Button asChild size="lg">
            <Link to="/request-demo">Request a Demo</Link>
          </Button>
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Langslide. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Finance;
