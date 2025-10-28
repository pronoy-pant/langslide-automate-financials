import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/ui/call-to-action";
import { FAQ } from "@/components/FAQ";
import AutoLogoCarousel from "@/components/AutoLogoCarousel";
import FunctionHeroDashboard from "@/components/FunctionHeroDashboard";
import { 
  Users, 
  UserPlus, 
  GraduationCap, 
  Calendar, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Heart,
  Zap,
  Briefcase,
  Award,
  FileText,
  Shield
} from "lucide-react";

const hrApps = [
  { name: "Workday", category: "HR Management", logo: "https://logo.clearbit.com/workday.com" },
  { name: "BambooHR", category: "HR Software", logo: "https://logo.clearbit.com/bamboohr.com" },
  { name: "ADP", category: "Payroll & HR", logo: "https://logo.clearbit.com/adp.com" },
  { name: "Greenhouse", category: "ATS", logo: "https://logo.clearbit.com/greenhouse.io" },
  { name: "Lever", category: "Recruiting", logo: "https://logo.clearbit.com/lever.co" },
  { name: "Zenefits", category: "HR Platform", logo: "https://logo.clearbit.com/zenefits.com" },
  { name: "Gusto", category: "Payroll", logo: "https://logo.clearbit.com/gusto.com" },
  { name: "Namely", category: "HR Platform", logo: "https://logo.clearbit.com/namely.com" },
  { name: "DocuSign", category: "Document Signing", logo: "https://logo.clearbit.com/docusign.com" },
  { name: "SAP SuccessFactors", category: "HR Management", logo: "https://logo.clearbit.com/sap.com" },
  { name: "Cornerstone", category: "Learning", logo: "https://logo.clearbit.com/cornerstoneondemand.com" },
  { name: "Degreed", category: "Learning", logo: "https://logo.clearbit.com/degreed.com" },
  { name: "LinkedIn Learning", category: "Learning", logo: "https://logo.clearbit.com/linkedin.com" },
  { name: "Slack", category: "Communication", logo: "https://logo.clearbit.com/slack.com" },
  { name: "Microsoft Teams", category: "Communication", logo: "https://logo.clearbit.com/teams.microsoft.com" },
  { name: "Zoom", category: "Video Conferencing", logo: "https://logo.clearbit.com/zoom.us" },
  { name: "Calendly", category: "Scheduling", logo: "https://logo.clearbit.com/calendly.com" },
  { name: "When I Work", category: "Scheduling", logo: "https://logo.clearbit.com/wheniwork.com" },
  { name: "15Five", category: "Performance", logo: "https://logo.clearbit.com/15five.com" },
  { name: "Culture Amp", category: "Engagement", logo: "https://logo.clearbit.com/cultureamp.com" },
  { name: "Glint", category: "Engagement", logo: "https://logo.clearbit.com/glint.com" },
  { name: "SurveyMonkey", category: "Surveys", logo: "https://logo.clearbit.com/surveymonkey.com" },
  { name: "Typeform", category: "Forms", logo: "https://logo.clearbit.com/typeform.com" },
  { name: "JotForm", category: "Forms", logo: "https://logo.clearbit.com/jotform.com" },
  { name: "Asana", category: "Project Management", logo: "https://logo.clearbit.com/asana.com" },
  { name: "Monday.com", category: "Project Management", logo: "https://logo.clearbit.com/monday.com" },
  { name: "Trello", category: "Project Management", logo: "https://logo.clearbit.com/trello.com" },
  { name: "Notion", category: "Documentation", logo: "https://logo.clearbit.com/notion.so" },
  { name: "Confluence", category: "Documentation", logo: "https://logo.clearbit.com/atlassian.com" },
  { name: "Google Workspace", category: "Productivity", logo: "https://logo.clearbit.com/google.com" }
];

const HRFunction = () => {
  const heroWorkflows = [
    { title: "Recruiting", icon: UserPlus, color: "bg-blue-500" },
    { title: "Onboarding", icon: GraduationCap, color: "bg-green-500" },
    { title: "Performance", icon: Award, color: "bg-purple-500" },
    { title: "Payroll", icon: Calendar, color: "bg-orange-500" }
  ];

  const heroMetrics = [
    { value: "75%", label: "Time Saved", icon: Clock },
    { value: "95%", label: "Satisfaction", icon: Heart },
    { value: "60%", label: "Efficiency", icon: Zap }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, hsl(220 20% 96%), hsl(210 25% 94%), hsl(200 20% 95%))' }}>
    <Navigation />
    
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-mesh py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Content */}
              <motion.div 
                className="space-y-6 lg:space-y-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 gradient-text text-sm font-semibold border border-primary/20">
                    <Sparkles className="w-4 h-4" />
                    Human Resources Automation
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Empower HR teams{" "}
                  <span className="gradient-text">with intelligent automation</span>
          </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From recruitment to performance management, automate complex HR workflows with intelligent AI agents that enhance employee experience and reduce administrative burden.
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                    <a href="mailto:hello@langslide.com" className="flex items-center">
                      Get Started <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                    <a href="#workflows">View Workflows</a>
          </Button>
                </div>
              </motion.div>
              
              {/* Right Column - Interactive Dashboard */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FunctionHeroDashboard 
                  icon={Users}
                  workflows={heroWorkflows}
                  metrics={heroMetrics}
                />
              </motion.div>
              
        </div>
        </div>
      </div>
    </section>

      {/* Problem & Outcomes */}
      <section className="py-16 md:py-20 border-y border-border">
      <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Problem */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  The HR Challenge
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    HR teams are overwhelmed with administrative tasks, manual processes, and compliance requirements that prevent them from focusing on strategic initiatives.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Manual recruitment processes slow down hiring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Paper-based onboarding creates delays</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Compliance tracking is error-prone</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Employee data scattered across systems</span>
                      </li>
                  </ul>
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Measurable Results
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">75%</div>
                    <div className="text-sm text-muted-foreground">Faster Hiring</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">90%</div>
                    <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">50%</div>
                    <div className="text-sm text-muted-foreground">Reduced Admin Time</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases & Playbooks */}
      <section className="py-16 md:py-20" id="workflows">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key{" "}
                <span className="gradient-text">HR Workflows</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive automation solutions for every aspect of human resources
              </p>
            </div>

            <div className="space-y-12">
              {/* Recruitment */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <UserPlus className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Recruitment Automation</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Streamline the entire hiring process from job posting to offer acceptance with intelligent candidate screening and automated workflows.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated job posting across platforms</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">AI-powered resume screening and ranking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated interview scheduling</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Background check coordination</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Onboarding */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Employee Onboarding</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Create seamless onboarding experiences with automated workflows that ensure new hires are productive from day one.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated welcome email sequences</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Digital document collection and verification</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Equipment and access provisioning</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Training program assignment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Management */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Performance Management</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate performance reviews, goal tracking, and development planning with intelligent insights and recommendations.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated review cycle management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Goal setting and progress tracking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">360-degree feedback collection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Development plan recommendations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Employee Support */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Employee Support</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Provide 24/7 employee support with intelligent chatbots and automated ticket routing for common HR inquiries.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">AI-powered HR chatbot</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated ticket routing and escalation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Policy and procedure guidance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Benefits enrollment assistance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

      {/* Integration Focus */}
      <section className="py-16 md:py-20 bg-white border-y border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Trusted by Leading Organizations
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Integrates with{" "}
                <span className="gradient-text">your HR stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with 30+ HR and productivity tools
              </p>
            </div>
            <AutoLogoCarousel apps={hrApps} rows={3} speed={40} />
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Enterprise-Grade{" "}
              <span className="gradient-text">Security & Privacy</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">GDPR Compliant</h3>
                <p className="text-muted-foreground">Full compliance with data protection regulations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">SOC 2 Certified</h3>
                <p className="text-muted-foreground">Enterprise-grade security controls and audits</p>
                    </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Role-Based Access</h3>
                <p className="text-muted-foreground">Granular permissions and audit trails</p>
              </div>
          </div>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA
        badge="Get Started"
        title="Ready to Transform Your HR Operations?"
        description="Discover how Langslide's AI agents can automate complex HR workflows across your organization. From recruitment to performance management, we help HR teams focus on strategic initiatives."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Schedule a Demo"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      {/* Footer */}
    <Footer />
  </div>
);
};

export default HRFunction;