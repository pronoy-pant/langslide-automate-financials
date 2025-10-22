import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, Code, Plug, Zap, CheckCircle, Layers } from "lucide-react";

const commonApps = [
  { name: "Jira", category: "Product Management" },
  { name: "Linear", category: "Issue Tracking" },
  { name: "Productboard", category: "Product Management" },
  { name: "Aha!", category: "Roadmap Planning" },
  { name: "Notion", category: "Documentation" },
  { name: "Confluence", category: "Documentation" },
  { name: "Figma", category: "Design & Prototyping" },
  { name: "GitHub", category: "Version Control" },
  { name: "Stripe", category: "Payments" },
  { name: "Segment", category: "Customer Data" },
  { name: "Amplitude", category: "Product Analytics" },
  { name: "Mixpanel", category: "Product Analytics" },
  { name: "Intercom", category: "User Messaging" },
  { name: "Zapier", category: "Integration Platform" },
  { name: "Make (Integromat)", category: "Integration Platform" },
];

const workflows = [
  {
    title: "Embedded Integrations",
    description: "Offer native integrations to your customers",
    icon: Plug,
    capabilities: [
      "Pre-built integration marketplace",
      "Custom integration builder for your users",
      "Unified API for all customer tools",
      "Integration health monitoring"
    ]
  },
  {
    title: "Product-Led Automation",
    description: "Automate user onboarding and activation",
    icon: Layers,
    capabilities: [
      "Automated user provisioning",
      "Personalized onboarding flows",
      "Usage-based trigger automations",
      "In-app guidance and tooltips"
    ]
  },
  {
    title: "Feature Request Management",
    description: "Capture and prioritize customer feedback",
    icon: Box,
    capabilities: [
      "Automated feedback collection",
      "Intelligent feature request categorization",
      "Impact and effort scoring automation",
      "Customer communication automation"
    ]
  },
  {
    title: "API & Webhook Management",
    description: "Streamline developer experience",
    icon: Code,
    capabilities: [
      "Automated API documentation generation",
      "Webhook event orchestration",
      "Rate limiting and usage monitoring",
      "Developer portal automation"
    ]
  },
];

const Product = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
            <Box className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Intelligent Automation for{" "}
            <span className="gradient-text">Product Teams</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            AI agents that power embedded integrations, automate user workflows, and streamline product operations—enabling you to build products users love
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
            Product teams need to ship integrations quickly, automate user experiences, and scale developer operations. Langslide enables you to embed AI agents directly into your product—powering native integrations, intelligent automation, and seamless workflows for your customers.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Common Apps for Product Automation</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Langslide integrates with your product development and customer tools
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
          <p className="text-lg text-muted-foreground mb-6">Ready to embed AI agents into your product?</p>
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

export default Product;
