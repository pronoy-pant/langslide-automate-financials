import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, UserPlus, GraduationCap, MessageSquare, BarChart, DollarSign, Zap, TrendingUp, CheckCircle, FileText, Calendar, Target, Award, ClipboardCheck, UserCheck, Settings, Clock, Shield } from "lucide-react";

const workflows = [
  {
    title: "Recruitment",
    description: "Accelerate hiring with AI-powered candidate screening and matching",
    icon: UserPlus,
    items: [
      { title: "AI Resume Screening", description: "Intelligent candidate matching and ranking based on job requirements", icon: FileText, metrics: "70% time savings" },
      { title: "Automated Interview Scheduling", description: "AI coordinates schedules and sends calendar invites to candidates and interviewers", icon: Calendar, metrics: "Zero scheduling conflicts" },
      { title: "Candidate Communication Automation", description: "Automated status updates and personalized outreach throughout hiring process", icon: MessageSquare, metrics: "Better candidate experience" },
      { title: "Offer Management", description: "Automated offer letter generation, approval workflows, and acceptance tracking", icon: FileText, metrics: "Same-day offers" }
    ]
  },
  {
    title: "Onboarding",
    description: "Deliver seamless new hire experiences with intelligent automation",
    icon: GraduationCap,
    items: [
      { title: "Automated Onboarding Workflows", description: "Document collection, system provisioning, and training scheduling", icon: ClipboardCheck, metrics: "80% faster onboarding" },
      { title: "Benefits Enrollment Automation", description: "AI guides new hires through benefits selection with personalized recommendations", icon: Shield, metrics: "100% enrollment completion" },
      { title: "Equipment & Access Provisioning", description: "Automated requests for laptops, software licenses, and building access", icon: Settings, metrics: "Day 1 readiness" },
      { title: "New Hire Portal", description: "Self-service platform for paperwork, training, and onboarding tasks", icon: UserCheck, metrics: "24/7 access" }
    ]
  },
  {
    title: "Employee Support",
    description: "Provide instant HR assistance with AI-powered self-service",
    icon: MessageSquare,
    items: [
      { title: "Employee Query Chatbot", description: "24/7 AI-powered HR support for common questions about policies, benefits, and payroll", icon: MessageSquare, metrics: "24/7 availability" },
      { title: "Time-Off Request Automation", description: "Automated PTO requests, approvals, and calendar synchronization", icon: Calendar, metrics: "Instant approvals" },
      { title: "Document Management", description: "Self-service access to pay stubs, tax forms, and HR documents", icon: FileText, metrics: "Instant access" },
      { title: "Employee Data Updates", description: "Automated processing of address changes, emergency contacts, and personal information", icon: UserCheck, metrics: "Real-time updates" }
    ]
  },
  {
    title: "Payroll Processing",
    description: "Streamline payroll with automated calculations and compliance",
    icon: DollarSign,
    items: [
      { title: "Automated Payroll Processing", description: "AI calculates wages, deductions, and taxes with zero errors", icon: DollarSign, metrics: "100% accuracy" },
      { title: "Time & Attendance Integration", description: "Automated sync of timesheets, overtime, and leave data into payroll", icon: Clock, metrics: "Seamless integration" },
      { title: "Expense Reimbursement", description: "Automated expense report review, approval, and reimbursement processing", icon: BarChart, metrics: "48-hour turnaround" },
      { title: "Payroll Compliance", description: "Automated tax filing, wage garnishments, and regulatory reporting", icon: Shield, metrics: "Full compliance" }
    ]
  },
  {
    title: "Performance Management",
    description: "Drive employee growth with intelligent performance tracking",
    icon: Target,
    items: [
      { title: "Goal Setting & Tracking", description: "AI helps managers and employees set SMART goals and tracks progress automatically", icon: Target, metrics: "Continuous alignment" },
      { title: "Performance Review Automation", description: "Automated review scheduling, reminder notifications, and form management", icon: ClipboardCheck, metrics: "100% completion rate" },
      { title: "360-Degree Feedback", description: "AI collects and analyzes multi-source feedback for comprehensive reviews", icon: Users, metrics: "Holistic insights" },
      { title: "Development Planning", description: "Personalized career development recommendations based on performance and skills", icon: TrendingUp, metrics: "Career growth" }
    ]
  },
  {
    title: "Analytics & Insights",
    description: "Make data-driven HR decisions with intelligent analytics",
    icon: BarChart,
    items: [
      { title: "Workforce Analytics", description: "Real-time dashboards for headcount, turnover, diversity, and engagement metrics", icon: BarChart, metrics: "Real-time insights" },
      { title: "Attrition Prediction", description: "AI identifies at-risk employees and recommends retention strategies", icon: TrendingUp, metrics: "Proactive retention" },
      { title: "Skills Gap Analysis", description: "Automated identification of skills gaps and training recommendations", icon: GraduationCap, metrics: "Strategic planning" },
      { title: "Compensation Analysis", description: "AI ensures pay equity and provides market benchmarking insights", icon: Award, metrics: "Fair compensation" }
    ]
  }
];

const HR = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect"><Users className="w-12 h-12 text-primary" /></div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Intelligent Workflow Automation for{" "}<span className="gradient-text">Human Resources</span></h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">AI agents that streamline recruitment, automate onboarding, and enhance employee support—empowering HR teams to focus on people, not paperwork</p>
          <div className="inline-block px-8 py-4 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border">
            <p className="text-lg text-foreground"><span className="text-muted-foreground">Get in touch:</span> <a href="mailto:hello@langslide.com" className="gradient-text font-semibold hover:underline transition-all">hello@langslide.com</a></p>
          </div>
        </div>
      </div>
    </header>
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">HR teams are overwhelmed with administrative tasks that pull focus from strategic initiatives. Langslide's AI agents transform HR operations by automating recruitment, onboarding, payroll, performance management, and employee support—enabling HR professionals to create better employee experiences and drive business outcomes.</p>
        </div>
      </div>
    </section>
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {workflows.map((cat, i) => (
            <div key={i} className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20"><cat.icon className="w-8 h-8 text-primary" /></div>
                <div><h2 className="text-3xl md:text-4xl font-bold text-foreground">{cat.title}</h2><p className="text-lg text-muted-foreground mt-2">{cat.description}</p></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, j) => (
                  <Card key={j} className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:glow-effect group">
                    <CardHeader>
                      <div className="mb-3"><div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors"><item.icon className="w-6 h-6 text-primary" /></div></div>
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent><div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20"><Zap className="w-4 h-4 text-primary" /><span className="text-sm font-semibold text-primary">{item.metrics}</span></div></CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <footer className="py-12 md:py-16 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-6">Ready to transform your HR operations?</p>
          <div className="inline-block px-8 py-4 rounded-lg bg-card border border-border">
            <p className="text-base text-foreground"><span className="text-muted-foreground">Contact us:</span> <a href="mailto:hello@langslide.com" className="gradient-text font-semibold hover:underline transition-all">hello@langslide.com</a></p>
          </div>
          <div className="mt-8 pt-8 border-t border-border"><p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Langslide. All rights reserved.</p></div>
        </div>
      </div>
    </footer>
  </div>
);

export default HR;
