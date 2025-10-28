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
  TrendingUp, 
  FileText, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Zap,
  Target,
  Phone,
  Mail,
  Calendar,
  Shield,
  Trophy
} from "lucide-react";

const salesApps = [
  { name: "Salesforce", category: "CRM Platform", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "HubSpot", category: "Revenue Operations", logo: "https://logo.clearbit.com/hubspot.com" },
  { name: "Pipedrive", category: "Sales CRM", logo: "https://logo.clearbit.com/pipedrive.com" },
  { name: "Outreach", category: "Sales Engagement", logo: "https://logo.clearbit.com/outreach.io" },
  { name: "SalesLoft", category: "Sales Engagement", logo: "https://logo.clearbit.com/salesloft.com" },
  { name: "LinkedIn", category: "Social Selling", logo: "https://logo.clearbit.com/linkedin.com" },
  { name: "Gong", category: "Revenue Intelligence", logo: "https://logo.clearbit.com/gong.io" },
  { name: "ZoomInfo", category: "Sales Intelligence", logo: "https://logo.clearbit.com/zoominfo.com" },
  { name: "Clearbit", category: "Data Enrichment", logo: "https://logo.clearbit.com/clearbit.com" },
  { name: "DocuSign", category: "E-Signature", logo: "https://logo.clearbit.com/docusign.com" },
  { name: "Calendly", category: "Meeting Scheduling", logo: "https://logo.clearbit.com/calendly.com" },
  { name: "Tableau", category: "Business Intelligence", logo: "https://logo.clearbit.com/tableau.com" },
  { name: "Snowflake", category: "Data Warehouse", logo: "https://logo.clearbit.com/snowflake.com" },
  { name: "Stripe", category: "Payment & Billing", logo: "https://logo.clearbit.com/stripe.com" },
  { name: "Zuora", category: "Subscription Management", logo: "https://logo.clearbit.com/zuora.com" },
  { name: "Apttus", category: "Quote-to-Cash", logo: "https://logo.clearbit.com/apttus.com" },
  { name: "CPQ", category: "Configure Price Quote", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "Chili Piper", category: "Lead Routing", logo: "https://logo.clearbit.com/chilipiper.com" },
  { name: "Demandbase", category: "ABM Platform", logo: "https://logo.clearbit.com/demandbase.com" },
  { name: "Terminus", category: "ABM Platform", logo: "https://logo.clearbit.com/terminus.com" },
  { name: "6sense", category: "Revenue AI", logo: "https://logo.clearbit.com/6sense.com" },
  { name: "Drift", category: "Conversational Marketing", logo: "https://logo.clearbit.com/drift.com" },
  { name: "Intercom", category: "Customer Messaging", logo: "https://logo.clearbit.com/intercom.com" },
  { name: "Zendesk", category: "Customer Support", logo: "https://logo.clearbit.com/zendesk.com" },
  { name: "Freshworks", category: "Customer Engagement", logo: "https://logo.clearbit.com/freshworks.com" },
  { name: "Mixmax", category: "Sales Email", logo: "https://logo.clearbit.com/mixmax.com" },
  { name: "Yesware", category: "Email Tracking", logo: "https://logo.clearbit.com/yesware.com" },
  { name: "Bombora", category: "Intent Data", logo: "https://logo.clearbit.com/bombora.com" },
  { name: "Zoom", category: "Video Conferencing", logo: "https://logo.clearbit.com/zoom.us" },
  { name: "Slack", category: "Team Communication", logo: "https://logo.clearbit.com/slack.com" }
];

const Sales = () => {
  const heroWorkflows = [
    { title: "Lead Gen", icon: Target, color: "bg-blue-500" },
    { title: "Follow-up", icon: Phone, color: "bg-green-500" },
    { title: "Pipeline", icon: BarChart3, color: "bg-purple-500" },
    { title: "Closing", icon: Trophy, color: "bg-orange-500" }
  ];

  const heroMetrics = [
    { value: "40%", label: "More Deals", icon: TrendingUp },
    { value: "65%", label: "Time Saved", icon: Clock },
    { value: "25%", label: "Higher Revenue", icon: Zap }
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
                    Sales Automation
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Boost sales performance{" "}
                  <span className="gradient-text">with intelligent automation</span>
          </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From lead qualification to deal closure, automate complex sales workflows with intelligent AI agents that boost productivity and drive revenue growth.
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
                  The Sales Challenge
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Sales teams are bogged down by administrative tasks, inconsistent processes, and data silos that prevent them from focusing on what matters most—closing deals.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Manual lead qualification wastes time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Inconsistent follow-up processes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Data scattered across multiple systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Forecasting accuracy is poor</span>
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
                    <div className="text-3xl font-bold gradient-text mb-2">2x</div>
                    <div className="text-sm text-muted-foreground">Pipeline Velocity</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">65%</div>
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">40%</div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">3x</div>
                    <div className="text-sm text-muted-foreground">Deal Size</div>
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
                <span className="gradient-text">Sales Workflows</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive automation solutions for every aspect of sales operations
              </p>
            </div>

            <div className="space-y-12">
              {/* Lead Qualification */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Lead Qualification</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate lead scoring, qualification, and routing with intelligent AI that identifies high-value prospects and assigns them to the right sales rep.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">AI-powered lead scoring and ranking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated qualification workflows</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Intelligent lead routing and assignment</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Real-time lead enrichment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales Outreach */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Sales Outreach</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Streamline prospecting and outreach with automated sequences, personalized messaging, and intelligent follow-up scheduling.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated prospecting and research</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Personalized email sequences</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Multi-channel outreach coordination</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Response tracking and optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Proposal Management */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Proposal Management</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate proposal creation, pricing, and contract management with intelligent templates and approval workflows.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated proposal generation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Dynamic pricing and configuration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Contract creation and e-signature</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Approval workflow automation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deal Management */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Deal Management</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Optimize deal progression with intelligent forecasting, risk assessment, and automated next-step recommendations.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated deal stage progression</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Intelligent forecasting and predictions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Risk assessment and alerts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Next-step recommendations</span>
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
                <span className="gradient-text">your sales stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with 30+ sales and CRM tools
              </p>
            </div>
            <AutoLogoCarousel apps={salesApps} rows={3} speed={40} />
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Enterprise-Grade{" "}
              <span className="gradient-text">Security & Compliance</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">SOC 2 Compliant</h3>
                <p className="text-muted-foreground">Certified security controls and regular audits</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">End-to-End Encryption</h3>
                <p className="text-muted-foreground">Bank-level security for all sales data</p>
                    </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Audit Trail</h3>
                <p className="text-muted-foreground">Complete activity tracking and compliance reporting</p>
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
        title="Ready to Transform Your Sales Operations?"
        description="Discover how Langslide's AI agents can automate complex sales workflows across your organization. From lead qualification to deal closure, we help sales teams achieve better results."
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

export default Sales;