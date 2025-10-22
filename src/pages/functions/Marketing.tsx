import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Target, Mail, BarChart, Zap, CheckCircle } from "lucide-react";

const commonApps = [
  { name: "HubSpot", category: "Marketing Automation" },
  { name: "Marketo", category: "Marketing Automation" },
  { name: "Salesforce Marketing Cloud", category: "Marketing Automation" },
  { name: "Mailchimp", category: "Email Marketing" },
  { name: "ActiveCampaign", category: "Email Marketing" },
  { name: "Google Analytics", category: "Analytics" },
  { name: "Google Ads", category: "Advertising" },
  { name: "Facebook Ads", category: "Social Advertising" },
  { name: "LinkedIn Ads", category: "B2B Advertising" },
  { name: "Hootsuite", category: "Social Media Management" },
  { name: "Buffer", category: "Social Media Management" },
  { name: "Canva", category: "Design & Content Creation" },
  { name: "WordPress", category: "Content Management" },
  { name: "SEMrush", category: "SEO & Marketing Analytics" },
  { name: "Zapier", category: "Workflow Automation" },
];

const workflows = [
  {
    title: "Campaign Automation",
    description: "Orchestrate multi-channel marketing campaigns",
    icon: Target,
    capabilities: [
      "Automated campaign planning and scheduling",
      "Multi-channel content distribution",
      "Personalized messaging at scale",
      "A/B testing and optimization"
    ]
  },
  {
    title: "Lead Management",
    description: "Capture, nurture, and qualify leads automatically",
    icon: Mail,
    capabilities: [
      "Lead capture and enrichment automation",
      "Intelligent lead scoring and routing",
      "Automated nurture sequences",
      "Lead-to-opportunity conversion tracking"
    ]
  },
  {
    title: "Content Marketing",
    description: "Automate content creation and distribution",
    icon: Megaphone,
    capabilities: [
      "AI-assisted content generation",
      "SEO optimization recommendations",
      "Social media posting automation",
      "Content performance analytics"
    ]
  },
  {
    title: "Marketing Analytics",
    description: "Track performance and optimize ROI",
    icon: BarChart,
    capabilities: [
      "Real-time campaign performance dashboards",
      "Attribution modeling and tracking",
      "Automated reporting and insights",
      "Budget allocation optimization"
    ]
  },
];

const Marketing = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
            <Megaphone className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            AI-Powered Automation for{" "}
            <span className="gradient-text">Marketing Teams</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            Intelligent agents that automate campaigns, nurture leads, and optimize performance—enabling marketers to focus on strategy and creativity
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
            Marketing teams juggle multiple channels, campaigns, and tools while struggling to personalize at scale. Langslide's AI agents automate campaign orchestration, lead nurturing, and performance optimization—helping marketers drive more qualified leads and revenue.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Common Apps for Marketing Automation</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Langslide integrates with your existing marketing tools and platforms
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
          <p className="text-lg text-muted-foreground mb-6">Ready to automate your marketing operations?</p>
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

export default Marketing;
