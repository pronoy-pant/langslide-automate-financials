import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, FileText, DollarSign, Zap, CheckCircle } from "lucide-react";

const commonApps = [
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot CRM", category: "CRM" },
  { name: "Pipedrive", category: "Sales CRM" },
  { name: "Outreach", category: "Sales Engagement" },
  { name: "SalesLoft", category: "Sales Engagement" },
  { name: "LinkedIn Sales Navigator", category: "Social Selling" },
  { name: "Gong", category: "Revenue Intelligence" },
  { name: "Chorus.ai", category: "Conversation Intelligence" },
  { name: "ZoomInfo", category: "Sales Intelligence" },
  { name: "Clearbit", category: "Data Enrichment" },
  { name: "DocuSign", category: "E-Signature" },
  { name: "PandaDoc", category: "Document Automation" },
  { name: "Calendly", category: "Meeting Scheduling" },
  { name: "Slack", category: "Team Collaboration" },
  { name: "Zoom", category: "Video Conferencing" },
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
            <span className="gradient-text">Sales Teams</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            AI agents that qualify leads, automate outreach, and accelerate deals—enabling sales teams to focus on building relationships and closing revenue
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
            Sales teams spend too much time on administrative tasks, manual data entry, and unqualified leads. Langslide's AI agents automate lead qualification, outreach sequences, and proposal generation—helping sales reps focus on high-value conversations and closing deals.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Common Apps for Sales Automation</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Langslide integrates with your existing sales tools and platforms
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
          <p className="text-lg text-muted-foreground mb-6">Ready to accelerate your sales pipeline?</p>
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

export default Sales;
