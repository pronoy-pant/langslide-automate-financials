import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, FileText, DollarSign, BarChart, Target, Database, Workflow, CheckCircle } from "lucide-react";

interface App {
  name: string;
  category: string;
  logo?: string;
}

const commonApps: App[] = [
  { name: "Salesforce", category: "CRM Platform", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "HubSpot", category: "Revenue Operations Platform", logo: "https://logo.clearbit.com/hubspot.com" },
  { name: "Pipedrive", category: "Sales CRM", logo: "https://logo.clearbit.com/pipedrive.com" },
  { name: "Outreach", category: "Sales Engagement", logo: "https://logo.clearbit.com/outreach.io" },
  { name: "SalesLoft", category: "Sales Engagement", logo: "https://logo.clearbit.com/salesloft.com" },
  { name: "LinkedIn", category: "Social Selling", logo: "https://logo.clearbit.com/linkedin.com" },
  { name: "Gong", category: "Revenue Intelligence", logo: "https://logo.clearbit.com/gong.io" },
  { name: "ZoomInfo", category: "Sales Intelligence", logo: "https://logo.clearbit.com/zoominfo.com" },
  { name: "Clearbit", category: "Data Enrichment", logo: "https://logo.clearbit.com/clearbit.com" },
  { name: "DocuSign", category: "E-Signature", logo: "https://logo.clearbit.com/docusign.com" },
  { name: "Calendly", category: "Meeting Scheduling", logo: "https://logo.clearbit.com/calendly.com" },
  { name: "Tableau", category: "Business Intelligence", logo: "https://logo.clearbit.com/tableau.com" },
  { name: "Snowflake", category: "Data Warehouse", logo: "https://logo.clearbit.com/snowflake.com" },
  { name: "Stripe", category: "Payment & Billing", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "Zuora", category: "Subscription Management", logo: "https://logo.clearbit.com/zuora.com" },
];

const workflows = [
  {
    title: "Lead Qualification",
    description: "Automatically qualify and prioritize sales leads",
    icon: Users,
    capabilities: [
      "Intelligent lead scoring and prioritization",
      "Automated lead enrichment with company data",
      "Qualification criteria matching",
      "Automatic routing to sales reps"
    ]
  },
  {
    title: "Sales Outreach",
    description: "Personalized outreach at scale",
    icon: TrendingUp,
    capabilities: [
      "AI-generated personalized emails",
      "Multi-channel sequence automation",
      "Follow-up reminders and automation",
      "Response detection and tracking"
    ]
  },
  {
    title: "Proposal Generation",
    description: "Create winning proposals automatically",
    icon: FileText,
    capabilities: [
      "Auto-fill RFPs with knowledge base",
      "Proposal template customization",
      "Pricing configuration automation",
      "Approval workflow management"
    ]
  },
  {
    title: "Deal Management",
    description: "Accelerate deals through the pipeline",
    icon: DollarSign,
    capabilities: [
      "Deal health scoring and risk alerts",
      "Next best action recommendations",
      "Automated CRM data entry",
      "Contract generation and e-signature"
    ]
  },
  {
    title: "Revenue Analytics",
    description: "Unified visibility into revenue performance",
    icon: BarChart,
    capabilities: [
      "Real-time revenue dashboards and reporting",
      "Pipeline coverage and forecast accuracy",
      "Win/loss analysis automation",
      "Customer health and retention metrics"
    ]
  },
  {
    title: "Lead-to-Cash Automation",
    description: "Streamline the entire revenue cycle",
    icon: Workflow,
    capabilities: [
      "Lead routing and account matching",
      "Opportunity progression automation",
      "Quote-to-cash workflow orchestration",
      "Revenue recognition automation"
    ]
  },
  {
    title: "Data Operations",
    description: "Clean, enrich, and unify revenue data",
    icon: Database,
    capabilities: [
      "Automated data cleansing and deduplication",
      "CRM data enrichment and hygiene",
      "Cross-system data synchronization",
      "Data quality monitoring and alerts"
    ]
  },
  {
    title: "Territory & Quota Management",
    description: "Optimize sales capacity and planning",
    icon: Target,
    capabilities: [
      "Territory design and assignment automation",
      "Quota setting and allocation",
      "Capacity planning and forecasting",
      "Commission calculation automation"
    ]
  },
];

const Sales = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
            <TrendingUp className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Intelligent Automation for{" "}
            <span className="gradient-text">Sales & Revenue Operations</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            AI agents that qualify leads, automate outreach, accelerate deals, and optimize revenue operations—enabling teams to drive predictable, efficient growth
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
            Sales and Revenue Operations teams face challenges with administrative tasks, fragmented data, and manual workflows. Langslide's AI agents automate lead qualification, outreach sequences, data operations, and revenue analytics—helping teams focus on high-value activities and driving predictable growth.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Common Apps for Sales & RevOps Automation</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Langslide integrates with your existing sales and revenue operations stack
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

export default Sales;
