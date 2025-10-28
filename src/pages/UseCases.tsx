import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/ui/call-to-action";
import { FAQ } from "@/components/FAQ";
import AutoLogoCarousel from "@/components/AutoLogoCarousel";
import { 
  FileText, 
  Database, 
  MessageSquare, 
  Shield, 
  CreditCard,
  Users,
  Zap,
  Link as LinkIcon,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  BarChart3,
  TrendingUp
} from "lucide-react";

const allUseCasesApps = [
  { name: "Salesforce", category: "CRM", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "HubSpot", category: "CRM", logo: "https://logo.clearbit.com/hubspot.com" },
  { name: "Microsoft Office", category: "Productivity", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Google Workspace", category: "Productivity", logo: "https://logo.clearbit.com/google.com" },
  { name: "Zendesk", category: "Support", logo: "https://logo.clearbit.com/zendesk.com" },
  { name: "Intercom", category: "Customer Platform", logo: "https://logo.clearbit.com/intercom.com" },
  { name: "ServiceNow", category: "ITSM", logo: "https://logo.clearbit.com/servicenow.com" },
  { name: "DocuSign", category: "E-Signature", logo: "https://logo.clearbit.com/docusign.com" },
  { name: "Adobe Acrobat", category: "PDF Tools", logo: "https://logo.clearbit.com/adobe.com" },
  { name: "Dropbox", category: "File Storage", logo: "https://logo.clearbit.com/dropbox.com" },
  { name: "Box", category: "File Storage", logo: "https://logo.clearbit.com/box.com" },
  { name: "OneDrive", category: "File Storage", logo: "https://logo.clearbit.com/onedrive.live.com" },
  { name: "SharePoint", category: "Collaboration", logo: "https://logo.clearbit.com/sharepoint.com" },
  { name: "Notion", category: "Documentation", logo: "https://logo.clearbit.com/notion.so" },
  { name: "Confluence", category: "Documentation", logo: "https://logo.clearbit.com/atlassian.com" },
  { name: "Slack", category: "Communication", logo: "https://logo.clearbit.com/slack.com" },
  { name: "Teams", category: "Communication", logo: "https://logo.clearbit.com/teams.microsoft.com" },
  { name: "Zoom", category: "Video Conferencing", logo: "https://logo.clearbit.com/zoom.us" },
  { name: "Webex", category: "Video Conferencing", logo: "https://logo.clearbit.com/webex.com" },
  { name: "Workday", category: "HR", logo: "https://logo.clearbit.com/workday.com" },
  { name: "BambooHR", category: "HR", logo: "https://logo.clearbit.com/bamboohr.com" },
  { name: "ADP", category: "Payroll", logo: "https://logo.clearbit.com/adp.com" },
  { name: "Paycom", category: "Payroll", logo: "https://logo.clearbit.com/paycom.com" },
  { name: "Oracle", category: "Database", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "MySQL", category: "Database", logo: "https://logo.clearbit.com/mysql.com" },
  { name: "PostgreSQL", category: "Database", logo: "https://logo.clearbit.com/postgresql.org" },
  { name: "MongoDB", category: "Database", logo: "https://logo.clearbit.com/mongodb.com" },
  { name: "Snowflake", category: "Data Warehouse", logo: "https://logo.clearbit.com/snowflake.com" },
  { name: "Databricks", category: "Data Platform", logo: "https://logo.clearbit.com/databricks.com" },
  { name: "BigQuery", category: "Data Warehouse", logo: "https://logo.clearbit.com/cloud.google.com" }
];

const useCases = [
  {
    id: "document-processing",
    icon: FileText,
    title: "Document Processing",
    description: "Automate document workflows with AI agents that extract, validate, and process information with 95% accuracy.",
    benefits: [
      "Automated data extraction from PDFs and images",
      "Three-way matching with PO and receipts",
      "Automated approval routing and notifications",
      "Integration with accounting systems"
    ],
    metrics: { value: "95%", label: "Accuracy" }
  },
  {
    id: "data-extraction",
    icon: Database,
    title: "Data Extraction",
    description: "Extract insights from data with intelligent automation that ensures accuracy, consistency, and real-time insights.",
    benefits: [
      "Automated SQL query generation and execution",
      "Real-time data synchronization",
      "Multi-database support and migration",
      "Data quality validation and cleansing"
    ],
    metrics: { value: "99.9%", label: "Accuracy" }
  },
  {
    id: "customer-support",
    icon: MessageSquare,
    title: "Customer Support",
    description: "Enhance customer experience with intelligent support that provides instant, accurate responses across all channels.",
    benefits: [
      "Instant response to common inquiries",
      "Context-aware conversation flow",
      "Intelligent escalation to human agents",
      "Multi-language support"
    ],
    metrics: { value: "85%", label: "Satisfaction" }
  },
  {
    id: "compliance-monitoring",
    icon: Shield,
    title: "Compliance Monitoring",
    description: "Ensure regulatory compliance with intelligent monitoring that detects and reports on requirements in real-time.",
    benefits: [
      "Automated risk identification",
      "Real-time risk scoring and alerts",
      "Anomaly detection and pattern analysis",
      "Risk mitigation recommendations"
    ],
    metrics: { value: "100%", label: "Compliance" }
  },
  {
    id: "order-to-cash",
    icon: CreditCard,
    title: "Order-to-Cash Automation",
    description: "Automate the entire sales to payment cycle with intelligent workflows that reduce errors and accelerate revenue.",
    benefits: [
      "Automated order processing and validation",
      "Intelligent credit checks and approvals",
      "Automated invoicing and payment reminders",
      "Real-time revenue recognition"
    ],
    metrics: { value: "70%", label: "Faster Processing" }
  },
  {
    id: "employee-onboarding",
    icon: Users,
    title: "Employee Onboarding",
    description: "Streamline new hire workflows with AI agents that automate paperwork, provisioning, and training coordination.",
    benefits: [
      "Automated paperwork collection and processing",
      "System access provisioning and setup",
      "Training schedule coordination",
      "Compliance verification and tracking"
    ],
    metrics: { value: "80%", label: "Time Saved" }
  },
  {
    id: "enterprise-ipaas",
    icon: Zap,
    title: "Enterprise iPaaS",
    description: "Connect and orchestrate all your systems with intelligent integration platform that adapts to your workflows.",
    benefits: [
      "Automated API endpoint discovery",
      "Schema mapping and transformation",
      "Rate limiting and error handling",
      "Incremental data updates"
    ],
    metrics: { value: "90%", label: "Integration Speed" }
  },
  {
    id: "product-led-sales",
    icon: ShoppingCart,
    title: "Product-Led Sales",
    description: "Convert users to customers automatically with AI agents that identify opportunities and guide conversion.",
    benefits: [
      "Automated user behavior analysis",
      "Intelligent opportunity identification",
      "Personalized conversion workflows",
      "Real-time sales pipeline updates"
    ],
    metrics: { value: "3x", label: "Conversion Rate" }
  },
  {
    id: "embedded-integrations",
    icon: LinkIcon,
    title: "Embedded Integrations",
    description: "Offer integrations to your customers with white-label solutions that enhance your platform's value.",
    benefits: [
      "White-label integration marketplace",
      "Automated customer onboarding",
      "Real-time sync and monitoring",
      "Custom integration development"
    ],
    metrics: { value: "5x", label: "Customer Retention" }
  }
];

const UseCases = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, hsl(220 20% 96%), hsl(210 25% 94%), hsl(200 20% 95%))' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-mesh py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 gradient-text text-sm font-semibold border border-primary/20">
                  <Sparkles className="w-4 h-4" />
                  Use Cases
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mt-6 mb-6">
                Comprehensive{" "}
                <span className="gradient-text">automation solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                From document processing to customer support, discover how AI agents can transform your business operations across every function and industry.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                  <a href="mailto:hello@langslide.com" className="flex items-center">
                    Get Started <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                  <a href="#use-cases">View All Use Cases</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-white border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Explore Our <span className="gradient-text">Use Cases</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <a
                    key={useCase.id}
                    href={`#${useCase.id}`}
                    className="group p-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:gradient-text transition-all">
                          {useCase.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {useCase.description.substring(0, 80)}...
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Use Cases */}
      <section className="py-16 md:py-20" id="use-cases">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={useCase.id} id={useCase.id} className="scroll-mt-20">
                    <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-4">{useCase.title}</h3>
                          <p className="text-lg text-muted-foreground mb-6">
                            {useCase.description}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {useCase.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span className="text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-center p-4 bg-primary/10 rounded-xl">
                              <div className="text-2xl font-bold gradient-text mb-1">{useCase.metrics.value}</div>
                              <div className="text-sm text-muted-foreground">{useCase.metrics.label}</div>
                            </div>
                            <Button asChild variant="outline" size="sm">
                              <a href="mailto:hello@langslide.com">Learn More</a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                <span className="gradient-text">your entire stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with 30+ platforms across CRM, productivity, support, and data management
              </p>
            </div>
            <AutoLogoCarousel apps={allUseCasesApps} rows={3} speed={40} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA 
        badge="Transform Operations"
        title="Ready to automate your workflows?"
        description="Discover how Langslide's AI agents can streamline operations across your organization. From document processing to customer support, we help teams work faster and more accurately."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Schedule a Demo"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      <Footer />
    </div>
  );
};

export default UseCases;
