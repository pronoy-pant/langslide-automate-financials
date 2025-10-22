import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, MessageSquare, Bot, Users, Zap, CheckCircle } from "lucide-react";

const commonApps = [
  { name: "Zendesk", category: "Customer Support Platform" },
  { name: "Intercom", category: "Customer Messaging" },
  { name: "Freshdesk", category: "Customer Support Platform" },
  { name: "ServiceNow", category: "IT Service Management" },
  { name: "Salesforce Service Cloud", category: "Customer Service" },
  { name: "HubSpot Service Hub", category: "Customer Service" },
  { name: "Gorgias", category: "E-commerce Support" },
  { name: "Help Scout", category: "Customer Support Platform" },
  { name: "Front", category: "Shared Inbox" },
  { name: "Kustomer", category: "Customer Service CRM" },
  { name: "Drift", category: "Conversational Marketing" },
  { name: "LiveChat", category: "Live Chat Software" },
  { name: "Zoho Desk", category: "Customer Support Platform" },
  { name: "Jira Service Management", category: "IT Service Management" },
  { name: "Guru", category: "Knowledge Management" },
];

const workflows = [
  {
    title: "Automated Ticket Triage",
    description: "Intelligently categorize and route support tickets",
    icon: MessageSquare,
    capabilities: [
      "Automatic ticket categorization and tagging",
      "Priority assignment based on urgency and impact",
      "Smart routing to appropriate support teams",
      "SLA tracking and escalation automation"
    ]
  },
  {
    title: "AI-Powered Support Chatbot",
    description: "Provide instant 24/7 customer support",
    icon: Bot,
    capabilities: [
      "Answer common questions instantly",
      "Access knowledge base and documentation",
      "Escalate complex issues to human agents",
      "Multi-language support capabilities"
    ]
  },
  {
    title: "Response Automation",
    description: "Draft and send accurate support responses",
    icon: Headphones,
    capabilities: [
      "AI-generated response suggestions",
      "Auto-fill based on previous similar tickets",
      "Brand voice and tone consistency",
      "Automated follow-ups and status updates"
    ]
  },
  {
    title: "Knowledge Management",
    description: "Maintain and leverage your knowledge base",
    icon: Users,
    capabilities: [
      "Automatic knowledge article suggestions",
      "Gap identification for missing documentation",
      "Content freshness monitoring and updates",
      "Usage analytics and optimization"
    ]
  },
];

const Support = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
            <Headphones className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            AI-Powered Automation for{" "}
            <span className="gradient-text">Customer Support</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            Intelligent agents that handle tickets, provide instant answers, and automate responses—enabling support teams to deliver exceptional customer experiences
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
            Support teams are overwhelmed with ticket volume, repetitive questions, and manual routing. Langslide's AI agents automate ticket triage, provide instant answers, and draft accurate responses—reducing response times and improving customer satisfaction.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Common Apps for Support Automation</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Langslide integrates with your existing support tools and platforms
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

    <Footer />
  </div>
);

export default Support;
