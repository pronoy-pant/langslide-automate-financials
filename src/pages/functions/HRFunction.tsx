import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, GraduationCap, Calendar, Zap, CheckCircle } from "lucide-react";

const commonApps = [
  { name: "Workday", category: "HR Management System" },
  { name: "BambooHR", category: "HR Software" },
  { name: "ADP", category: "Payroll & HR" },
  { name: "Greenhouse", category: "Applicant Tracking System" },
  { name: "Lever", category: "Recruiting Software" },
  { name: "Zenefits", category: "HR Platform" },
  { name: "Gusto", category: "Payroll & Benefits" },
  { name: "Namely", category: "HR Platform" },
  { name: "15Five", category: "Performance Management" },
  { name: "Lattice", category: "Performance Management" },
  { name: "Culture Amp", category: "Employee Engagement" },
  { name: "DocuSign", category: "Document Signing" },
  { name: "SAP SuccessFactors", category: "HR Management" },
  { name: "Oracle HCM", category: "HR Management" },
  { name: "Rippling", category: "HR & IT Management" },
];

const workflows = [
  {
    title: "Recruitment Automation",
    description: "Streamline hiring from sourcing to offer acceptance",
    icon: UserPlus,
    capabilities: [
      "AI-powered resume screening and ranking",
      "Automated interview scheduling",
      "Candidate communication automation",
      "Offer letter generation and tracking"
    ]
  },
  {
    title: "Onboarding Workflows",
    description: "Create seamless new hire experiences",
    icon: GraduationCap,
    capabilities: [
      "Automated document collection",
      "System provisioning and access setup",
      "Training schedule coordination",
      "90-day check-in automation"
    ]
  },
  {
    title: "Employee Support",
    description: "Provide 24/7 HR assistance",
    icon: Users,
    capabilities: [
      "HR chatbot for policy questions",
      "PTO request and approval automation",
      "Benefits enrollment assistance",
      "Employee data self-service updates"
    ]
  },
  {
    title: "Performance Management",
    description: "Automate reviews and goal tracking",
    icon: Calendar,
    capabilities: [
      "Performance review cycle automation",
      "Goal setting and progress tracking",
      "360-degree feedback collection",
      "Development plan recommendations"
    ]
  },
];

const HRFunction = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
            <Users className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Intelligent Automation for{" "}
            <span className="gradient-text">Human Resources</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            AI agents that streamline recruitment, automate onboarding, and enhance employee support—empowering HR teams to focus on people, not paperwork
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
            HR teams are overwhelmed with administrative tasks that pull focus from strategic initiatives. Langslide's AI agents transform HR operations by automating recruitment, onboarding, employee support, and performance management—enabling HR professionals to create better employee experiences.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Common Apps for HR Automation</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Langslide integrates with your existing HR systems and tools
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
          <p className="text-lg text-muted-foreground mb-6">Ready to transform your HR operations?</p>
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

export default HRFunction;
