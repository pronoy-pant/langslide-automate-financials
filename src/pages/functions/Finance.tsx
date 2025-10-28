import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/ui/call-to-action";
import { FAQ } from "@/components/FAQ";
import AutoLogoCarousel from "@/components/AutoLogoCarousel";
import FunctionHeroDashboard from "@/components/FunctionHeroDashboard";
import { 
  DollarSign, 
  Receipt, 
  TrendingUp, 
  FileText, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  Zap,
  Users,
  BarChart3,
  CreditCard,
  Calculator
} from "lucide-react";

const financeApps = [
  { name: "QuickBooks", category: "Accounting", logo: "https://logo.clearbit.com/quickbooks.com" },
  { name: "Xero", category: "Accounting", logo: "https://logo.clearbit.com/xero.com" },
  { name: "NetSuite", category: "ERP", logo: "https://logo.clearbit.com/netsuite.com" },
  { name: "SAP", category: "ERP", logo: "https://logo.clearbit.com/sap.com" },
  { name: "Oracle", category: "ERP", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "Stripe", category: "Payments", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "PayPal", category: "Payments", logo: "https://logo.clearbit.com/paypal.com" },
  { name: "Square", category: "Payments", logo: "https://logo.clearbit.com/squareup.com" },
  { name: "Tableau", category: "Analytics", logo: "https://logo.clearbit.com/tableau.com" },
  { name: "Power BI", category: "Analytics", logo: "https://logo.clearbit.com/powerbi.microsoft.com" },
  { name: "Workday", category: "HR", logo: "https://logo.clearbit.com/workday.com" },
  { name: "ADP", category: "Payroll", logo: "https://logo.clearbit.com/adp.com" },
  { name: "BambooHR", category: "HR", logo: "https://logo.clearbit.com/bamboohr.com" },
  { name: "Expensify", category: "Expense", logo: "https://logo.clearbit.com/expensify.com" },
  { name: "Concur", category: "Travel", logo: "https://logo.clearbit.com/concur.com" },
  { name: "Bill.com", category: "AP", logo: "https://logo.clearbit.com/bill.com" },
  { name: "FreshBooks", category: "Accounting", logo: "https://logo.clearbit.com/freshbooks.com" },
  { name: "Wave", category: "Accounting", logo: "https://logo.clearbit.com/waveapps.com" },
  { name: "Zoho Books", category: "Accounting", logo: "https://logo.clearbit.com/zoho.com" },
  { name: "Sage", category: "Accounting", logo: "https://logo.clearbit.com/sage.com" },
  { name: "BlackLine", category: "Close", logo: "https://logo.clearbit.com/blackline.com" },
  { name: "FloQast", category: "Close", logo: "https://logo.clearbit.com/floqast.com" },
  { name: "Trintech", category: "Close", logo: "https://logo.clearbit.com/trintech.com" },
  { name: "Adaptive Insights", category: "Planning", logo: "https://logo.clearbit.com/adaptiveinsights.com" },
  { name: "Anaplan", category: "Planning", logo: "https://logo.clearbit.com/anaplan.com" },
  { name: "Host Analytics", category: "Planning", logo: "https://logo.clearbit.com/hostanalytics.com" },
  { name: "Coupa", category: "Procurement", logo: "https://logo.clearbit.com/coupa.com" },
  { name: "Ariba", category: "Procurement", logo: "https://logo.clearbit.com/ariba.com" },
  { name: "Procurify", category: "Procurement", logo: "https://logo.clearbit.com/procurify.com" },
  { name: "DocuSign", category: "E-Signature", logo: "https://logo.clearbit.com/docusign.com" }
];

const Finance = () => {
  const heroWorkflows = [
    { title: "Invoicing", icon: Receipt, color: "bg-green-500" },
    { title: "Payments", icon: CreditCard, color: "bg-blue-500" },
    { title: "Reporting", icon: BarChart3, color: "bg-purple-500" },
    { title: "Compliance", icon: Shield, color: "bg-orange-500" }
  ];

  const heroMetrics = [
    { value: "90%", label: "Time Saved", icon: Clock },
    { value: "99.9%", label: "Accuracy", icon: Zap },
    { value: "50%", label: "Cost Reduction", icon: TrendingUp }
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
                    <Sparkles className="w-4 h-4" />
                    Finance & Accounting Automation
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Streamline financial operations{" "}
                  <span className="gradient-text">with intelligent automation</span>
          </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From invoice processing to compliance reporting, automate complex financial workflows with AI agents that ensure accuracy, reduce costs, and accelerate decision-making.
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
                  icon={DollarSign}
                  workflows={heroWorkflows}
                  metrics={heroMetrics}
                />
              </motion.div>
              
        </div>
        </div>
      </div>
    </section>

      {/* Problem & Outcomes */}
      <section className="py-16 md:py-20 border-y border-border">
      <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Problem */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  The Finance Challenge
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Finance teams are drowning in manual processes. Invoice processing, expense management, and month-end close consume countless hours of valuable time.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Manual data entry leads to errors and delays</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Complex approval workflows create bottlenecks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Compliance requirements add overhead</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Limited visibility into financial performance</span>
                      </li>
                  </ul>
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Measurable Results
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">80%</div>
                    <div className="text-sm text-muted-foreground">Faster Reconciliation</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">60%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases & Playbooks */}
      <section className="py-16 md:py-20" id="workflows">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key{" "}
                <span className="gradient-text">Finance Workflows</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive automation solutions for every aspect of finance operations
              </p>
            </div>

            <div className="space-y-12">
              {/* Accounts Payable */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Receipt className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Accounts Payable Automation</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Streamline invoice processing and payment workflows with intelligent automation that handles everything from data extraction to approval routing.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated invoice data extraction and validation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Intelligent 3-way matching (PO, invoice, receipt)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated approval routing based on business rules</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Payment scheduling and execution</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expense Management */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Expense Management</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate expense reporting and reimbursement processes with intelligent categorization and policy compliance checking.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Receipt OCR and expense categorization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Policy compliance checking and violation alerts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated approval workflows</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Direct integration with accounting systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financial Reporting */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Financial Reporting</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Generate accurate financial reports automatically with real-time data processing and compliance-ready formatting.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated month-end and quarter-end close</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Real-time financial dashboard generation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Variance analysis and anomaly detection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Regulatory compliance reporting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accounts Receivable */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Accounts Receivable</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Optimize cash collection and reduce DSO with automated invoicing, payment reminders, and reconciliation processes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated invoice generation and delivery</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Payment reminder and follow-up automation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Cash application and reconciliation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Customer payment portal management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

      {/* Integration Focus */}
      <section className="py-16 md:py-20 bg-white border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Trusted by Leading Organizations
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Integrates with{" "}
                <span className="gradient-text">your finance stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with 30+ finance and accounting tools
              </p>
            </div>
            <AutoLogoCarousel apps={financeApps} rows={3} speed={40} />
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Enterprise-Grade{" "}
              <span className="gradient-text">Security & Compliance</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">SOC 2 Compliant</h3>
                <p className="text-muted-foreground">Certified security controls and regular audits</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">End-to-End Encryption</h3>
                <p className="text-muted-foreground">Bank-level security for all financial data</p>
                    </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Audit Trail</h3>
                <p className="text-muted-foreground">Complete transaction history and compliance reporting</p>
              </div>
          </div>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA
        badge="Get Started"
        title="Ready to Transform Your Finance Operations?"
        description="Discover how Langslide's AI agents can automate complex financial workflows across your organization. From reducing manual work to ensuring compliance, we help finance teams operate smarter and faster."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Schedule a Demo"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      {/* Footer */}
    <Footer />
  </div>
);
};

export default Finance;