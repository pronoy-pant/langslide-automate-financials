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
  Target, 
  Mail, 
  TrendingUp, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Zap,
  Users,
  Megaphone,
  Palette,
  Globe,
  Shield
} from "lucide-react";

const marketingApps = [
  { name: "HubSpot", category: "Marketing Automation", logo: "https://logo.clearbit.com/hubspot.com" },
  { name: "Marketo", category: "Marketing Automation", logo: "https://logo.clearbit.com/marketo.com" },
  { name: "Salesforce", category: "Marketing Cloud", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "Mailchimp", category: "Email Marketing", logo: "https://logo.clearbit.com/mailchimp.com" },
  { name: "Google Analytics", category: "Analytics", logo: "https://logo.clearbit.com/analytics.google.com" },
  { name: "Google Ads", category: "Advertising", logo: "https://logo.clearbit.com/ads.google.com" },
  { name: "Facebook Ads", category: "Social Advertising", logo: "https://logo.clearbit.com/facebook.com" },
  { name: "LinkedIn Ads", category: "B2B Advertising", logo: "https://logo.clearbit.com/linkedin.com" },
  { name: "Hootsuite", category: "Social Media", logo: "https://logo.clearbit.com/hootsuite.com" },
  { name: "Buffer", category: "Social Media", logo: "https://logo.clearbit.com/buffer.com" },
  { name: "Canva", category: "Design", logo: "https://logo.clearbit.com/canva.com" },
  { name: "WordPress", category: "CMS", logo: "https://logo.clearbit.com/wordpress.com" },
  { name: "SEMrush", category: "SEO", logo: "https://logo.clearbit.com/semrush.com" },
  { name: "Zapier", category: "Automation", logo: "https://logo.clearbit.com/zapier.com" },
  { name: "ActiveCampaign", category: "Email Marketing", logo: "https://logo.clearbit.com/activecampaign.com" },
  { name: "Pardot", category: "Marketing Automation", logo: "https://logo.clearbit.com/pardot.com" },
  { name: "Eloqua", category: "Marketing Automation", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "Adobe Campaign", category: "Marketing Automation", logo: "https://logo.clearbit.com/adobe.com" },
  { name: "Klaviyo", category: "Email Marketing", logo: "https://logo.clearbit.com/klaviyo.com" },
  { name: "ConvertKit", category: "Email Marketing", logo: "https://logo.clearbit.com/convertkit.com" },
  { name: "Unbounce", category: "Landing Pages", logo: "https://logo.clearbit.com/unbounce.com" },
  { name: "Leadpages", category: "Landing Pages", logo: "https://logo.clearbit.com/leadpages.com" },
  { name: "Instapage", category: "Landing Pages", logo: "https://logo.clearbit.com/instapage.com" },
  { name: "Hotjar", category: "Analytics", logo: "https://logo.clearbit.com/hotjar.com" },
  { name: "Mixpanel", category: "Analytics", logo: "https://logo.clearbit.com/mixpanel.com" },
  { name: "Amplitude", category: "Analytics", logo: "https://logo.clearbit.com/amplitude.com" },
  { name: "Segment", category: "Data Platform", logo: "https://logo.clearbit.com/segment.com" },
  { name: "Optimizely", category: "Testing", logo: "https://logo.clearbit.com/optimizely.com" },
  { name: "VWO", category: "Testing", logo: "https://logo.clearbit.com/vwo.com" },
  { name: "Figma", category: "Design", logo: "https://logo.clearbit.com/figma.com" }
];

const Marketing = () => {
  const heroWorkflows = [
    { title: "Campaigns", icon: Target, color: "bg-blue-500" },
    { title: "Lead Mgmt", icon: Mail, color: "bg-green-500" },
    { title: "Content", icon: Palette, color: "bg-purple-500" },
    { title: "Analytics", icon: BarChart3, color: "bg-orange-500" }
  ];

  const heroMetrics = [
    { value: "3x", label: "Velocity", icon: Clock },
    { value: "85%", label: "Lead Quality", icon: Zap },
    { value: "40%", label: "Cost Savings", icon: TrendingUp }
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
                    Marketing Automation
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Accelerate marketing campaigns{" "}
                  <span className="gradient-text">and drive growth</span>
          </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From lead generation to campaign optimization, automate complex marketing workflows with intelligent AI agents that drive engagement and maximize ROI.
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
                  icon={Target}
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
                  The Marketing Challenge
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Marketing teams struggle with fragmented tools, manual processes, and data silos that prevent them from delivering personalized experiences at scale.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Manual campaign setup wastes valuable time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Data scattered across multiple platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Lead qualification is inconsistent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>ROI measurement is complex and delayed</span>
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
                    <div className="text-3xl font-bold gradient-text mb-2">3x</div>
                    <div className="text-sm text-muted-foreground">Campaign Velocity</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">85%</div>
                    <div className="text-sm text-muted-foreground">Lead Quality</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">40%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">2.5x</div>
                    <div className="text-sm text-muted-foreground">Conversion Rate</div>
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
                <span className="gradient-text">Marketing Workflows</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive automation solutions for every aspect of marketing operations
              </p>
            </div>

            <div className="space-y-12">
              {/* Campaign Management */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Campaign Management</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate end-to-end campaign execution from planning to optimization with intelligent audience targeting and performance monitoring.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated campaign setup and scheduling</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Dynamic audience segmentation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Cross-channel campaign orchestration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Real-time performance optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Management */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Lead Management</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Streamline lead capture, qualification, and nurturing with intelligent scoring and automated follow-up sequences.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated lead capture and enrichment</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">AI-powered lead scoring and qualification</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Personalized nurture sequences</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Sales handoff automation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Marketing */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Palette className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Content Marketing</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate content creation, distribution, and optimization across all channels with intelligent scheduling and performance tracking.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated content calendar management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Multi-channel content distribution</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">SEO optimization and keyword tracking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Content performance analytics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics & Reporting */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Analytics & Reporting</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Get real-time insights into marketing performance with automated reporting and predictive analytics for data-driven decision making.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Real-time campaign performance tracking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated ROI and attribution reporting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Predictive analytics and forecasting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Custom dashboard generation</span>
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
                <span className="gradient-text">your marketing stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with 30+ marketing and analytics tools
              </p>
            </div>
            <AutoLogoCarousel apps={marketingApps} rows={3} speed={40} />
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
                <h3 className="text-xl font-semibold text-foreground mb-2">Data Privacy</h3>
                <p className="text-muted-foreground">Customer data protection and consent management</p>
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
        title="Ready to Transform Your Marketing Operations?"
        description="Discover how Langslide's AI agents can automate complex marketing workflows across your organization. From campaign management to lead optimization, we help marketing teams drive better results."
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

export default Marketing;