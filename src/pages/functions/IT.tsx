import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Shield, Cpu, HardDrive, Network, Zap, CheckCircle } from "lucide-react";

const commonApps = [
  { name: "ServiceNow", category: "IT Service Management" },
  { name: "Jira", category: "Issue Tracking & Project Management" },
  { name: "Slack", category: "Communication & Collaboration" },
  { name: "Okta", category: "Identity & Access Management" },
  { name: "AWS", category: "Cloud Infrastructure" },
  { name: "Datadog", category: "Monitoring & Analytics" },
  { name: "GitHub", category: "Version Control & CI/CD" },
  { name: "Splunk", category: "Security & Log Management" }
];

const IT = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">IT Automation</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">AI agents that automate IT operations, infrastructure management, and technical support workflows</p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">Common Apps for IT Workflows</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {commonApps.map((app, index) => (
              <Card key={index} className="p-6 hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{app.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-foreground mb-1">{app.name}</h3>
                <p className="text-sm text-muted-foreground">{app.category}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">Key Workflows</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:border-primary/50 transition-all">
              <Server className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4 text-foreground">Incident Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Automated ticket triage</span></li>
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Real-time incident response</span></li>
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Root cause analysis</span></li>
              </ul>
            </Card>

            <Card className="p-8 hover:border-primary/50 transition-all">
              <Shield className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4 text-foreground">Security Operations</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Threat detection</span></li>
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Access management</span></li>
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Compliance monitoring</span></li>
              </ul>
            </Card>

            <Card className="p-8 hover:border-primary/50 transition-all">
              <Cpu className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4 text-foreground">Infrastructure Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Cloud resource provisioning</span></li>
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Performance monitoring</span></li>
                <li className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" /><span>Automated backups</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default IT;
