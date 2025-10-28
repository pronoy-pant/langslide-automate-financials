import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/ui/call-to-action";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import AutoLogoCarousel from "@/components/AutoLogoCarousel";
import FunctionHeroDashboard from "@/components/FunctionHeroDashboard";
import { motion } from "framer-motion";
import {
  Target,
  Video,
  FileText,
  BarChart,
  Users,
  Megaphone,
  TrendingUp,
  Zap,
  Mail,
  Share2,
  Calendar,
  Image,
  MessageSquare,
  Globe,
  Search,
  DollarSign,
  CheckCircle,
  Sparkles,
  Eye,
  MousePointerClick,
  ArrowRight,
  Clock
} from "lucide-react";

const workflows = [
  {
    title: "Content Creation & Management",
    description: "Automate content production, editing, and distribution across channels",
    icon: FileText,
    items: [
      {
        title: "AI Content Generation",
        description: "Generate blog posts, social media content, and marketing copy with AI assistance",
        icon: Sparkles,
        metrics: "70% faster content creation"
      },
      {
        title: "Multi-Channel Publishing",
        description: "Automated content distribution across websites, social media, and email platforms",
        icon: Share2,
        metrics: "5x more channels"
      },
      {
        title: "Content Calendar Management",
        description: "AI-powered scheduling and optimization of content publication timing",
        icon: Calendar,
        metrics: "50% better engagement"
      },
      {
        title: "Asset Library Organization",
        description: "Intelligent tagging, search, and management of digital media assets",
        icon: Image,
        metrics: "90% faster asset retrieval"
      }
    ]
  },
  {
    title: "Campaign Management",
    description: "Streamline campaign planning, execution, and optimization",
    icon: Megaphone,
    items: [
      {
        title: "Campaign Planning Automation",
        description: "AI-driven campaign planning with budget allocation and timeline management",
        icon: Target,
        metrics: "60% faster campaign launch"
      },
      {
        title: "Ad Optimization & A/B Testing",
        description: "Automated testing and optimization of ad creative and targeting",
        icon: TrendingUp,
        metrics: "40% better ROI"
      },
      {
        title: "Email Marketing Automation",
        description: "Personalized email campaigns with AI-powered segmentation and send-time optimization",
        icon: Mail,
        metrics: "3x open rates"
      },
      {
        title: "Budget Tracking & Allocation",
        description: "Real-time monitoring and intelligent reallocation of marketing budgets",
        icon: DollarSign,
        metrics: "30% cost reduction"
      }
    ]
  },
  {
    title: "Audience Intelligence",
    description: "Deep insights into audience behavior and preferences",
    icon: Users,
    items: [
      {
        title: "Audience Segmentation",
        description: "AI-powered customer segmentation based on behavior, demographics, and engagement",
        icon: Users,
        metrics: "25 detailed segments"
      },
      {
        title: "Sentiment Analysis",
        description: "Real-time monitoring of brand sentiment across social media and review platforms",
        icon: MessageSquare,
        metrics: "Real-time insights"
      },
      {
        title: "Competitive Analysis",
        description: "Automated tracking and analysis of competitor marketing activities",
        icon: Eye,
        metrics: "24/7 monitoring"
      },
      {
        title: "Customer Journey Mapping",
        description: "AI visualization of customer touchpoints and conversion paths",
        icon: MousePointerClick,
        metrics: "15% conversion lift"
      }
    ]
  },
  {
    title: "Performance Analytics",
    description: "Comprehensive tracking and reporting of marketing metrics",
    icon: BarChart,
    items: [
      {
        title: "Cross-Channel Attribution",
        description: "AI-powered attribution modeling across all marketing channels",
        icon: BarChart,
        metrics: "Complete visibility"
      },
      {
        title: "ROI Tracking & Reporting",
        description: "Automated calculation and reporting of marketing ROI and KPIs",
        icon: DollarSign,
        metrics: "Real-time ROI"
      },
      {
        title: "Performance Dashboards",
        description: "Customizable dashboards with AI-generated insights and recommendations",
        icon: TrendingUp,
        metrics: "Actionable insights"
      },
      {
        title: "Predictive Analytics",
        description: "AI forecasting of campaign performance and trend predictions",
        icon: Sparkles,
        metrics: "85% accuracy"
      }
    ]
  },
  {
    title: "Social Media Management",
    description: "Automate social media posting, engagement, and monitoring",
    icon: Share2,
    items: [
      {
        title: "Social Listening & Monitoring",
        description: "AI-powered monitoring of brand mentions, hashtags, and trending topics",
        icon: MessageSquare,
        metrics: "Real-time alerts"
      },
      {
        title: "Automated Posting & Scheduling",
        description: "Optimal posting times and automated content scheduling across platforms",
        icon: Calendar,
        metrics: "3x engagement rate"
      },
      {
        title: "Influencer Identification",
        description: "AI-powered discovery and vetting of influencers for partnerships",
        icon: Users,
        metrics: "50+ qualified influencers"
      },
      {
        title: "Social Commerce Integration",
        description: "Automated product tagging and shoppable post creation",
        icon: Globe,
        metrics: "2x conversion rate"
      }
    ]
  },
  {
    title: "SEO & Search Marketing",
    description: "Optimize search visibility and paid search campaigns",
    icon: Search,
    items: [
      {
        title: "Keyword Research & Optimization",
        description: "AI-driven keyword discovery and content optimization recommendations",
        icon: Search,
        metrics: "40% traffic increase"
      },
      {
        title: "Technical SEO Monitoring",
        description: "Automated crawling and fixing of technical SEO issues",
        icon: CheckCircle,
        metrics: "99% site health"
      },
      {
        title: "PPC Campaign Management",
        description: "Automated bid management and ad copy optimization for search ads",
        icon: MousePointerClick,
        metrics: "35% lower CPC"
      },
      {
        title: "Backlink Analysis",
        description: "AI-powered backlink monitoring and outreach automation",
        icon: Globe,
        metrics: "50+ quality backlinks/month"
      }
    ]
  }
];

const mediaMarketingApps = [
  { name: "Google", category: "Advertising", logo: "https://logo.clearbit.com/google.com" },
  { name: "Facebook", category: "Social Media", logo: "https://logo.clearbit.com/facebook.com" },
  { name: "Instagram", category: "Social Media", logo: "https://logo.clearbit.com/instagram.com" },
  { name: "Twitter", category: "Social Media", logo: "https://logo.clearbit.com/twitter.com" },
  { name: "LinkedIn", category: "Professional", logo: "https://logo.clearbit.com/linkedin.com" },
  { name: "TikTok", category: "Social Media", logo: "https://logo.clearbit.com/tiktok.com" },
  { name: "YouTube", category: "Video Platform", logo: "https://logo.clearbit.com/youtube.com" },
  { name: "Snapchat", category: "Social Media", logo: "https://logo.clearbit.com/snapchat.com" },
  { name: "Pinterest", category: "Visual Discovery", logo: "https://logo.clearbit.com/pinterest.com" },
  { name: "Reddit", category: "Community", logo: "https://logo.clearbit.com/reddit.com" },
  { name: "HubSpot", category: "Marketing Automation", logo: "https://logo.clearbit.com/hubspot.com" },
  { name: "Salesforce", category: "CRM", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "Mailchimp", category: "Email Marketing", logo: "https://logo.clearbit.com/mailchimp.com" },
  { name: "Constant Contact", category: "Email Marketing", logo: "https://logo.clearbit.com/constantcontact.com" },
  { name: "SendGrid", category: "Email Delivery", logo: "https://logo.clearbit.com/sendgrid.com" },
  { name: "Hootsuite", category: "Social Management", logo: "https://logo.clearbit.com/hootsuite.com" },
  { name: "Buffer", category: "Social Media", logo: "https://logo.clearbit.com/buffer.com" },
  { name: "Sprout Social", category: "Social Media", logo: "https://logo.clearbit.com/sproutsocial.com" },
  { name: "Canva", category: "Design", logo: "https://logo.clearbit.com/canva.com" },
  { name: "Adobe Creative Cloud", category: "Design", logo: "https://logo.clearbit.com/adobe.com" },
  { name: "Figma", category: "Design", logo: "https://logo.clearbit.com/figma.com" },
  { name: "Sketch", category: "Design", logo: "https://logo.clearbit.com/sketch.com" },
  { name: "WordPress", category: "CMS", logo: "https://logo.clearbit.com/wordpress.com" },
  { name: "Squarespace", category: "Website Builder", logo: "https://logo.clearbit.com/squarespace.com" },
  { name: "Wix", category: "Website Builder", logo: "https://logo.clearbit.com/wix.com" },
  { name: "Shopify", category: "E-commerce", logo: "https://logo.clearbit.com/shopify.com" },
  { name: "WooCommerce", category: "E-commerce", logo: "https://logo.clearbit.com/woocommerce.com" },
  { name: "Magento", category: "E-commerce", logo: "https://logo.clearbit.com/magento.com" },
  { name: "BigCommerce", category: "E-commerce", logo: "https://logo.clearbit.com/bigcommerce.com" },
  { name: "SEMrush", category: "SEO", logo: "https://logo.clearbit.com/semrush.com" }
];

const MediaMarketing = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, hsl(220 20% 96%), hsl(210 25% 94%), hsl(200 20% 95%))' }}>
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
              <Target className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Intelligent Workflow Automation for{" "}
              <span className="gradient-text">Media & Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              AI agents that streamline content creation, optimize campaigns, and deliver data-driven insights—helping marketing teams scale their impact while reducing manual work
            </p>
            <Button asChild size="lg">
              <Link to="/contact-us">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Modern marketing teams are expected to produce more content, manage more channels, and deliver better results—all with limited resources. Langslide's AI agents transform marketing operations by automating content creation, campaign management, audience analytics, and performance tracking—enabling teams to focus on strategy and creative excellence while AI handles the repetitive tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Workflows Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {workflows.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mt-2">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card 
                      key={itemIndex}
                      className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:glow-effect group"
                    >
                      <CardHeader>
                        <div className="mb-3">
                          <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-primary">{item.metrics}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Focus */}
      <section className="py-16 md:py-20 bg-white border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Trusted by Leading Marketing Teams
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Integrates with{" "}
                <span className="gradient-text">your marketing stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with 30+ social media, advertising, and design platforms
              </p>
            </div>
            <AutoLogoCarousel apps={mediaMarketingApps} rows={3} speed={40} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA 
        badge="Transform Marketing"
        title="Ready to scale your marketing operations?"
        description="Let Langslide's AI agents streamline your marketing workflows—from content creation and campaign management to audience intelligence and performance analytics. Reduce manual work and amplify your team's creative impact."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Schedule a Consultation"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your marketing operations?
            </p>
            <div className="inline-block px-8 py-4 rounded-lg bg-card border border-border">
              <p className="text-base text-foreground">
                <span className="text-muted-foreground">Contact us:</span>{" "}
                <a href="mailto:hello@langslide.com" className="gradient-text font-semibold hover:underline transition-all">
                  hello@langslide.com
                </a>
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Langslide. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MediaMarketing;
