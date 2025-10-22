import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  RefreshCw,
  Star,
  Truck,
  BarChart,
  Tag,
  Zap,
  CheckCircle,
  ShoppingBag,
  Repeat,
  Target,
  MessageSquare,
  CreditCard,
  Box,
  Warehouse,
  ArrowLeftRight,
  ShieldCheck
} from "lucide-react";

const workflows = [
  {
    title: "Inventory Management",
    description: "Optimize stock levels and automate replenishment with AI intelligence",
    icon: Package,
    items: [
      {
        title: "Dynamic Inventory Reordering",
        description: "AI predicts stock needs based on sales patterns, seasonality, and trends to auto-generate purchase orders",
        icon: RefreshCw,
        metrics: "80% stockout reduction"
      },
      {
        title: "Real-Time Inventory Sync",
        description: "Seamless synchronization across all channels—online, in-store, and warehouses",
        icon: ArrowLeftRight,
        metrics: "99% inventory accuracy"
      },
      {
        title: "Automated Stock Auditing",
        description: "AI-powered cycle counting and discrepancy detection with automated reconciliation",
        icon: CheckCircle,
        metrics: "90% time savings"
      },
      {
        title: "Supplier Performance Tracking",
        description: "Monitor supplier reliability, lead times, and quality metrics with automated alerts",
        icon: BarChart,
        metrics: "Real-time insights"
      }
    ]
  },
  {
    title: "Customer Experience",
    description: "Personalize shopping experiences and boost engagement with AI",
    icon: Users,
    items: [
      {
        title: "Personalized Product Recommendations",
        description: "Real-time AI-powered product suggestions based on browsing history, preferences, and behavior",
        icon: Star,
        metrics: "35% conversion increase"
      },
      {
        title: "AI Shopping Assistant",
        description: "24/7 intelligent chatbot for product discovery, sizing help, and purchase assistance",
        icon: MessageSquare,
        metrics: "24/7 availability"
      },
      {
        title: "Dynamic Pricing Optimization",
        description: "AI adjusts pricing in real-time based on demand, competition, and inventory levels",
        icon: Tag,
        metrics: "20% margin improvement"
      },
      {
        title: "Customer Segmentation & Targeting",
        description: "Automated customer clustering and personalized marketing campaign generation",
        icon: Target,
        metrics: "50% better engagement"
      }
    ]
  },
  {
    title: "Order Fulfillment",
    description: "Accelerate order processing and delivery with intelligent automation",
    icon: ShoppingBag,
    items: [
      {
        title: "Automated Order Processing",
        description: "Instant order validation, payment verification, and fulfillment routing",
        icon: Zap,
        metrics: "95% same-day processing"
      },
      {
        title: "Smart Warehouse Picking",
        description: "AI-optimized picking routes and batch processing for maximum efficiency",
        icon: Warehouse,
        metrics: "60% faster picking"
      },
      {
        title: "Shipping Optimization",
        description: "Intelligent carrier selection and route optimization to minimize costs and delivery time",
        icon: Truck,
        metrics: "30% cost reduction"
      },
      {
        title: "Order Status Automation",
        description: "Automated customer notifications for order confirmation, shipping, and delivery",
        icon: Package,
        metrics: "100% transparency"
      }
    ]
  },
  {
    title: "Merchandising & Planning",
    description: "Optimize product assortments and promotional strategies",
    icon: TrendingUp,
    items: [
      {
        title: "Demand Forecasting",
        description: "AI predicts future demand by product, location, and season for optimal planning",
        icon: BarChart,
        metrics: "85% forecast accuracy"
      },
      {
        title: "Assortment Optimization",
        description: "Automated analysis of product performance to optimize category mix and placement",
        icon: Box,
        metrics: "25% sales lift"
      },
      {
        title: "Promotional Campaign Automation",
        description: "AI designs and executes targeted promotions based on customer segments and inventory",
        icon: Tag,
        metrics: "40% ROI improvement"
      },
      {
        title: "Markdown Optimization",
        description: "Intelligent pricing strategies to clear slow-moving inventory while maximizing revenue",
        icon: CreditCard,
        metrics: "15% margin protection"
      }
    ]
  },
  {
    title: "Returns Processing",
    description: "Streamline returns and exchanges for better customer satisfaction",
    icon: Repeat,
    items: [
      {
        title: "Automated Returns Processing",
        description: "Instant return approvals, refund processing, and restocking automation",
        icon: CheckCircle,
        metrics: "80% faster processing"
      },
      {
        title: "Return Fraud Detection",
        description: "AI identifies suspicious return patterns and flags potential abuse",
        icon: ShieldCheck,
        metrics: "70% fraud reduction"
      },
      {
        title: "Warranty & Exchange Management",
        description: "Automated warranty validation and exchange processing across all channels",
        icon: RefreshCw,
        metrics: "Seamless exchanges"
      },
      {
        title: "Return Analytics & Insights",
        description: "AI analyzes return reasons to identify product quality issues and trends",
        icon: BarChart,
        metrics: "Actionable insights"
      }
    ]
  },
  {
    title: "Loyalty & Engagement",
    description: "Build lasting customer relationships with intelligent programs",
    icon: Star,
    items: [
      {
        title: "Loyalty Program Automation",
        description: "Automated points tracking, tier management, and personalized rewards",
        icon: Star,
        metrics: "45% participation rate"
      },
      {
        title: "Customer Feedback Analysis",
        description: "AI processes reviews, ratings, and feedback to identify improvement areas",
        icon: MessageSquare,
        metrics: "Real-time sentiment"
      },
      {
        title: "Win-Back Campaign Automation",
        description: "AI identifies at-risk customers and triggers personalized re-engagement campaigns",
        icon: Target,
        metrics: "30% win-back rate"
      },
      {
        title: "VIP Customer Management",
        description: "Automated identification and special treatment workflows for high-value customers",
        icon: Users,
        metrics: "Premium experience"
      }
    ]
  }
];

const Retail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
              <ShoppingCart className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Intelligent Workflow Automation for{" "}
              <span className="gradient-text">Retail & E-commerce</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              AI agents that personalize customer experiences, optimize inventory, and accelerate fulfillment—driving sales while reducing operational costs
            </p>
            <div className="inline-block px-8 py-4 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border">
              <p className="text-lg text-foreground">
                <span className="text-muted-foreground">Get in touch:</span>{" "}
                <a href="mailto:hello@langslide.com" className="gradient-text font-semibold hover:underline transition-all">
                  hello@langslide.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Modern retail demands exceptional customer experiences, flawless omnichannel operations, and razor-thin margins. Langslide's AI agents transform retail operations by automating inventory management, personalizing customer interactions, optimizing pricing, and streamlining fulfillment—helping retailers compete and win in today's fast-paced market.
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

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your retail operations?
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

export default Retail;
