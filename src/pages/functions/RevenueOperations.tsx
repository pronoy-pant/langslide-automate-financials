import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Target, Database, Workflow, Zap, CheckCircle } from "lucide-react";

const commonApps = [
  { name: "Salesforce", category: "CRM Platform" },
  { name: "HubSpot", category: "Revenue Operations Platform" },
  { name: "Tableau", category: "Business Intelligence" },
  { name: "Looker", category: "Business Intelligence" },
  { name: "Clari", category: "Revenue Operations & Intelligence" },
  { name: "InsightSquared", category: "Revenue Intelligence" },
  { name: "LeanData", category: "Lead-to-Account Matching" },
  { name: "Segment", category: "Customer Data Platform" },
  { name: "Fivetran", category: "Data Pipeline Automation" },
  { name: "dbt", category: "Data Transformation" },
  { name: "Snowflake", category: "Data Warehouse" },
  { name: "ChartMogul", category: "Revenue Analytics" },
  { name: "Stripe", category: "Payment & Billing" },
  { name: "Zuora", category: "Subscription Management" },
  { name: "Zapier", category: "Workflow Automation" },
];

const workflows = [
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

const RevenueOperations = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
            <BarChart className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Intelligent Automation for{" "}
            <span className="gradient-text">Revenue Operations</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            AI agents that unify revenue data, automate workflows, and optimize operations—enabling RevOps teams to drive predictable, efficient growth
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
            Revenue Operations teams struggle with fragmented data, manual workflows, and cross-functional alignment. Langslide's AI agents automate data operations, streamline lead-to-cash processes, and provide unified revenue visibility—helping RevOps drive predictable growth.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Common Apps for RevOps Automation</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Langslide integrates with your existing revenue operations stack
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {commonApps.map((app, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/30 transition-all duration-300 text-center">
                <CardHeader className="pb-3">
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
          <p className="text-lg text-muted-foreground mb-6">Ready to optimize your revenue operations?</p>
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

export default RevenueOperations;
