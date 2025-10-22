import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Shield, Cpu, HardDrive, Network, Zap, CheckCircle } from "lucide-react";

const commonApps = [
  { name: "ServiceNow", category: "IT Service Management" },
  { name: "Jira", category: "Issue Tracking & Project Management" },
  { name: "Slack", category: "Communication & Collaboration" },
  { name: "Microsoft Teams", category: "Communication & Collaboration" },
  { name: "GitHub", category: "Version Control & DevOps" },
  { name: "GitLab", category: "Version Control & DevOps" },
  { name: "AWS", category: "Cloud Infrastructure" },
  { name: "Azure", category: "Cloud Infrastructure" },
  { name: "Google Cloud", category: "Cloud Infrastructure" },
  { name: "Terraform", category: "Infrastructure as Code" },
  { name: "Ansible", category: "Configuration Management" },
  { name: "Datadog", category: "Monitoring & Observability" },
  { name: "PagerDuty", category: "Incident Management" },
  { name: "Okta", category: "Identity & Access Management" },
  { name: "1Password", category: "Password Management" },
];

const workflows = [
  {
    title: "Incident Management",
    description: "Automatically detect, triage, and resolve IT incidents",
    icon: Shield,
    capabilities: [
      "Automated incident detection and alerting",
      "Intelligent routing to appropriate teams",
      "Root cause analysis and remediation suggestions",
      "Post-incident report generation"
    ]
  },
  {
    title: "Service Desk Automation",
    description: "Handle routine IT support requests instantly",
    icon: Server,
    capabilities: [
      "Password resets and account unlocks",
      "Software access provisioning",
      "Hardware and equipment requests",
      "24/7 self-service IT support chatbot"
    ]
  },
  {
    title: "Infrastructure Monitoring",
    description: "Proactive monitoring and maintenance of IT systems",
    icon: Cpu,
    capabilities: [
      "Real-time infrastructure health monitoring",
      "Automated scaling and resource optimization",
      "Predictive maintenance and failure prevention",
      "Performance anomaly detection"
    ]
  },
  {
    title: "Security & Compliance",
    description: "Automated security monitoring and compliance checks",
    icon: Shield,
    capabilities: [
      "Continuous security vulnerability scanning",
      "Automated compliance reporting",
      "Access review and certification workflows",
      "Threat detection and response automation"
    ]
  },
];

const IT = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
            <Server className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            AI-Powered Automation for{" "}
            <span className="gradient-text">IT Operations</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            Intelligent agents that handle incidents, automate support, and maintain infrastructure—freeing IT teams to focus on innovation
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
            IT teams are stretched thin managing incidents, support tickets, and infrastructure maintenance. Langslide's AI agents automate routine tasks, detect and resolve issues proactively, and provide 24/7 support—enabling IT teams to focus on strategic initiatives.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Common Apps for IT Automation</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Langslide integrates with your existing IT tools and workflows
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
          <p className="text-lg text-muted-foreground mb-6">Ready to automate your IT operations?</p>
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

export default IT;
