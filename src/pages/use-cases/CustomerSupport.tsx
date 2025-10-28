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
  MessageSquare, 
  Phone, 
  Mail, 
  Headphones, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Zap,
  Users,
  BarChart3,
  Shield,
  Bot,
  Smile,
  ThumbsUp
} from "lucide-react";

const customerSupportApps = [
  { name: "Zendesk", category: "Support Platform", logo: "https://logo.clearbit.com/zendesk.com" },
  { name: "Freshdesk", category: "Support Platform", logo: "https://logo.clearbit.com/freshworks.com" },
  { name: "Intercom", category: "Customer Platform", logo: "https://logo.clearbit.com/intercom.com" },
  { name: "Help Scout", category: "Support Platform", logo: "https://logo.clearbit.com/helpscout.com" },
  { name: "ServiceNow", category: "ITSM", logo: "https://logo.clearbit.com/servicenow.com" },
  { name: "Salesforce Service Cloud", category: "CRM", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "HubSpot Service Hub", category: "CRM", logo: "https://logo.clearbit.com/hubspot.com" },
  { name: "LiveChat", category: "Live Chat", logo: "https://logo.clearbit.com/livechat.com" },
  { name: "Drift", category: "Conversational Marketing", logo: "https://logo.clearbit.com/drift.com" },
  { name: "Crisp", category: "Live Chat", logo: "https://logo.clearbit.com/crisp.chat" },
  { name: "Tawk.to", category: "Live Chat", logo: "https://logo.clearbit.com/tawk.to" },
  { name: "Olark", category: "Live Chat", logo: "https://logo.clearbit.com/olark.com" },
  { name: "Slack", category: "Team Communication", logo: "https://logo.clearbit.com/slack.com" },
  { name: "Microsoft Teams", category: "Team Communication", logo: "https://logo.clearbit.com/teams.microsoft.com" },
  { name: "Discord", category: "Community", logo: "https://logo.clearbit.com/discord.com" },
  { name: "WhatsApp Business", category: "Messaging", logo: "https://logo.clearbit.com/whatsapp.com" },
  { name: "Telegram", category: "Messaging", logo: "https://logo.clearbit.com/telegram.org" },
  { name: "Facebook Messenger", category: "Messaging", logo: "https://logo.clearbit.com/messenger.com" },
  { name: "Twitter", category: "Social Media", logo: "https://logo.clearbit.com/twitter.com" },
  { name: "Instagram", category: "Social Media", logo: "https://logo.clearbit.com/instagram.com" },
  { name: "TikTok", category: "Social Media", logo: "https://logo.clearbit.com/tiktok.com" },
  { name: "YouTube", category: "Video Platform", logo: "https://logo.clearbit.com/youtube.com" },
  { name: "Twilio", category: "Communication API", logo: "https://logo.clearbit.com/twilio.com" },
  { name: "SendGrid", category: "Email Delivery", logo: "https://logo.clearbit.com/sendgrid.com" },
  { name: "Mailchimp", category: "Email Marketing", logo: "https://logo.clearbit.com/mailchimp.com" },
  { name: "Constant Contact", category: "Email Marketing", logo: "https://logo.clearbit.com/constantcontact.com" },
  { name: "AWeber", category: "Email Marketing", logo: "https://logo.clearbit.com/aweber.com" },
  { name: "GetResponse", category: "Email Marketing", logo: "https://logo.clearbit.com/getresponse.com" },
  { name: "ConvertKit", category: "Email Marketing", logo: "https://logo.clearbit.com/convertkit.com" },
  { name: "Klaviyo", category: "Email Marketing", logo: "https://logo.clearbit.com/klaviyo.com" }
];

const CustomerSupport = () => {
  const heroWorkflows = [
    { title: "Chat", icon: MessageSquare, color: "bg-blue-500" },
    { title: "Email", icon: Mail, color: "bg-green-500" },
    { title: "Phone", icon: Phone, color: "bg-purple-500" },
    { title: "Social", icon: Users, color: "bg-orange-500" }
  ];

  const heroMetrics = [
    { value: "85%", label: "Satisfaction", icon: ThumbsUp },
    { value: "70%", label: "Time Saved", icon: Clock },
    { value: "3x", label: "Response Speed", icon: Zap }
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
                    Customer Support
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Enhance customer experience{" "}
                  <span className="gradient-text">with intelligent support</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From chat automation to ticket routing, automate complex customer support workflows with AI agents that provide instant, accurate responses across all channels.
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
                  icon={Headphones}
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
                  The Support Challenge
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Customer support teams struggle with high ticket volumes, repetitive inquiries, and the need to provide consistent, high-quality service across multiple channels.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>High ticket volumes overwhelm support teams</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Repetitive inquiries consume valuable time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Inconsistent responses across channels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Difficulty scaling support operations</span>
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
                    <div className="text-3xl font-bold gradient-text mb-2">85%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">70%</div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">3x</div>
                    <div className="text-sm text-muted-foreground">Response Speed</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases & Workflows */}
      <section className="py-16 md:py-20" id="workflows">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key{" "}
                <span className="gradient-text">Support Workflows</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive automation solutions for every customer support need
              </p>
            </div>

            <div className="space-y-12">
              {/* Chat Automation */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Chat Automation</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate live chat interactions with intelligent AI agents that understand context, provide instant responses, and escalate complex issues to human agents.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Instant response to common inquiries</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Context-aware conversation flow</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Intelligent escalation to human agents</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Multi-language support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ticket Management */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Ticket Management</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Streamline ticket processing with AI agents that automatically categorize, prioritize, and route tickets to the right team members.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automatic ticket categorization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Priority assignment based on content</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Smart routing to specialists</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated follow-up and reminders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Knowledge Base Automation */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Knowledge Base Automation</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate knowledge base management with AI agents that create, update, and suggest relevant articles based on customer inquiries and support patterns.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automatic article suggestions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Content optimization recommendations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Search result ranking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Usage analytics and insights</span>
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
                Trusted by Leading Support Teams
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Integrates with{" "}
                <span className="gradient-text">your support stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with 30+ support platforms, communication tools, and messaging services
              </p>
            </div>
            <AutoLogoCarousel apps={customerSupportApps} rows={3} speed={40} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA 
        badge="Transform Support"
        title="Ready to enhance your customer support?"
        description="Discover how Langslide's AI agents can streamline customer support across your organization. From chat automation to ticket management, we help teams deliver exceptional customer experiences."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Schedule a Demo"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      <Footer />
    </div>
  );
};

export default CustomerSupport;
