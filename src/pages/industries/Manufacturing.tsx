import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/ui/call-to-action";
import {
  Factory,
  Cog,
  AlertTriangle,
  Package,
  BarChart,
  Shield,
  Zap,
  CheckCircle,
  Truck,
  FileCheck,
  Settings,
  Wrench,
  TrendingUp,
  Activity,
  Boxes,
  ClipboardCheck,
  Timer,
  Users,
  FileSearch,
  Gauge
} from "lucide-react";

const workflows = [
  {
    title: "Supply Chain Management",
    description: "Optimize procurement, logistics, and vendor relationships with AI",
    icon: Truck,
    items: [
      {
        title: "Smart Supplier Management",
        description: "Automated vendor evaluation, performance tracking, and intelligent purchase order generation",
        icon: Users,
        metrics: "40% cost reduction"
      },
      {
        title: "Material Requirements Planning",
        description: "AI-powered MRP that predicts material needs and automates procurement workflows",
        icon: Package,
        metrics: "90% accuracy"
      },
      {
        title: "Supply Chain Visibility",
        description: "Real-time tracking of materials and components across the entire supply chain",
        icon: Activity,
        metrics: "100% transparency"
      },
      {
        title: "Logistics Optimization",
        description: "AI optimizes shipping routes, carrier selection, and delivery schedules",
        icon: Truck,
        metrics: "35% faster delivery"
      }
    ]
  },
  {
    title: "Quality Control",
    description: "Ensure product excellence with automated inspection and testing",
    icon: ClipboardCheck,
    items: [
      {
        title: "Automated Quality Inspection",
        description: "Visual AI detects defects and quality issues in real-time during production",
        icon: CheckCircle,
        metrics: "99.5% defect detection"
      },
      {
        title: "Statistical Process Control",
        description: "AI monitors production metrics and alerts when processes drift out of tolerance",
        icon: BarChart,
        metrics: "Early issue detection"
      },
      {
        title: "Root Cause Analysis",
        description: "Automated investigation of quality issues with AI-powered pattern recognition",
        icon: FileSearch,
        metrics: "80% faster resolution"
      },
      {
        title: "Compliance Documentation",
        description: "Automated generation of quality certificates, test reports, and compliance records",
        icon: FileCheck,
        metrics: "100% documentation"
      }
    ]
  },
  {
    title: "Maintenance & Equipment",
    description: "Maximize uptime with intelligent maintenance strategies",
    icon: Wrench,
    items: [
      {
        title: "Predictive Maintenance Alerts",
        description: "AI monitors equipment sensors to predict failures before they occur",
        icon: AlertTriangle,
        metrics: "70% downtime reduction"
      },
      {
        title: "Automated Work Order Generation",
        description: "Intelligent creation and routing of maintenance requests based on priority and availability",
        icon: ClipboardCheck,
        metrics: "50% faster response"
      },
      {
        title: "Spare Parts Optimization",
        description: "AI predicts spare parts needs and automates inventory management",
        icon: Boxes,
        metrics: "30% inventory reduction"
      },
      {
        title: "Equipment Performance Tracking",
        description: "Real-time monitoring of OEE, utilization, and performance metrics",
        icon: Gauge,
        metrics: "Real-time insights"
      }
    ]
  },
  {
    title: "Production Planning",
    description: "Optimize manufacturing schedules and resource allocation",
    icon: Cog,
    items: [
      {
        title: "Intelligent Production Scheduling",
        description: "AI creates optimal production schedules considering constraints, priorities, and resources",
        icon: Timer,
        metrics: "25% efficiency gain"
      },
      {
        title: "Capacity Planning Automation",
        description: "Dynamic capacity modeling and automated resource allocation",
        icon: BarChart,
        metrics: "95% utilization"
      },
      {
        title: "Demand-Driven Production",
        description: "Real-time adjustment of production plans based on demand signals",
        icon: TrendingUp,
        metrics: "60% inventory reduction"
      },
      {
        title: "Changeover Optimization",
        description: "AI minimizes setup times and sequences jobs for maximum efficiency",
        icon: Settings,
        metrics: "40% time savings"
      }
    ]
  },
  {
    title: "Compliance & Safety",
    description: "Maintain regulatory compliance and workplace safety standards",
    icon: Shield,
    items: [
      {
        title: "Safety Incident Tracking",
        description: "Automated logging, investigation, and corrective action management for safety events",
        icon: AlertTriangle,
        metrics: "Complete traceability"
      },
      {
        title: "Regulatory Compliance Monitoring",
        description: "Continuous monitoring and automated reporting for ISO, FDA, and industry standards",
        icon: Shield,
        metrics: "100% compliance"
      },
      {
        title: "Environmental Compliance",
        description: "Automated tracking of emissions, waste, and environmental metrics with regulatory reporting",
        icon: Activity,
        metrics: "Automated reporting"
      },
      {
        title: "Training & Certification Management",
        description: "AI tracks employee certifications and automates training schedule assignments",
        icon: Users,
        metrics: "Zero gaps"
      }
    ]
  },
  {
    title: "Inventory & Warehouse",
    description: "Streamline inventory management and warehouse operations",
    icon: Package,
    items: [
      {
        title: "Smart Warehouse Operations",
        description: "AI-optimized picking routes, putaway strategies, and bin management",
        icon: Boxes,
        metrics: "55% faster picking"
      },
      {
        title: "Automated Cycle Counting",
        description: "AI-driven inventory audits with discrepancy detection and reconciliation",
        icon: CheckCircle,
        metrics: "99% accuracy"
      },
      {
        title: "Finished Goods Management",
        description: "Automated tracking and shipment coordination of completed products",
        icon: Package,
        metrics: "Same-day shipping"
      },
      {
        title: "Inventory Optimization",
        description: "AI balances raw materials, WIP, and finished goods to minimize carrying costs",
        icon: TrendingUp,
        metrics: "30% cost reduction"
      }
    ]
  }
];

const Manufacturing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
              <Factory className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Intelligent Workflow Automation for{" "}
              <span className="gradient-text">Manufacturing</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              AI agents that optimize supply chains, predict equipment failures, and automate quality control—increasing productivity while reducing downtime and defects
            </p>
            <Button asChild size="lg">
              <Link to="/request-demo">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Manufacturing excellence requires precision, efficiency, and continuous improvement. Langslide's AI agents transform manufacturing operations by automating supply chain management, enabling predictive maintenance, optimizing production schedules, and ensuring quality—helping manufacturers reduce costs, minimize downtime, and deliver superior products.
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

      {/* CTA Section */}
      <CTA 
        badge="Transform Manufacturing"
        title="Ready to optimize production and reduce downtime?"
        description="Let Langslide's AI agents streamline your manufacturing operations—from predictive maintenance and supply chain optimization to quality control and production scheduling. Reduce costs, minimize downtime, and deliver superior products with intelligent automation."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Request a Demo"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your manufacturing operations?
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

export default Manufacturing;
