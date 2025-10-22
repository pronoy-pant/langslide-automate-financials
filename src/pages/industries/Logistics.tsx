import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Truck, Package, Warehouse, BarChart, MapPin, Zap, TrendingUp, CheckCircle, Clock, Shield, Users, FileText, Activity, Box, Route, AlertTriangle, Boxes, Settings } from "lucide-react";

const workflows = [
  {
    title: "Route Optimization",
    description: "Maximize efficiency with AI-powered route planning and fleet management",
    icon: Route,
    items: [
      { title: "Intelligent Route Planning", description: "AI optimizes delivery routes in real-time based on traffic, weather, and priority", icon: MapPin, metrics: "30% fuel savings" },
      { title: "Dynamic Route Adjustments", description: "Real-time rerouting based on delays, cancellations, and new orders", icon: Activity, metrics: "95% on-time delivery" },
      { title: "Fleet Utilization Optimization", description: "AI maximizes vehicle capacity and minimizes empty miles", icon: Truck, metrics: "40% better utilization" },
      { title: "Driver Assignment Automation", description: "Intelligent matching of drivers to routes based on skills, location, and availability", icon: Users, metrics: "Optimal assignments" }
    ]
  },
  {
    title: "Shipment Tracking",
    description: "End-to-end visibility across all shipments and carriers",
    icon: Package,
    items: [
      { title: "Automated Shipment Tracking", description: "Multi-carrier tracking with real-time updates and customer notifications", icon: Package, metrics: "100% visibility" },
      { title: "Exception Management", description: "AI detects delays and issues, triggering automated alerts and resolution workflows", icon: AlertTriangle, metrics: "Proactive resolution" },
      { title: "ETA Prediction", description: "Machine learning predicts accurate delivery times based on historical data", icon: Clock, metrics: "98% accuracy" },
      { title: "Proof of Delivery Automation", description: "Digital POD capture with automated confirmation and archiving", icon: CheckCircle, metrics: "Instant confirmation" }
    ]
  },
  {
    title: "Warehouse Management",
    description: "Streamline warehouse operations with intelligent automation",
    icon: Warehouse,
    items: [
      { title: "Smart Warehouse Operations", description: "AI-powered picking, packing, and inventory management", icon: Boxes, metrics: "55% productivity gain" },
      { title: "Inventory Optimization", description: "Automated replenishment and stock level management across locations", icon: Box, metrics: "30% cost reduction" },
      { title: "Receiving & Putaway Automation", description: "AI directs optimal storage locations and automates check-in processes", icon: Package, metrics: "70% faster receiving" },
      { title: "Cross-Docking Coordination", description: "Intelligent routing of incoming shipments directly to outbound trucks", icon: Truck, metrics: "Zero storage time" }
    ]
  },
  {
    title: "Carrier Management",
    description: "Optimize carrier relationships and freight procurement",
    icon: Truck,
    items: [
      { title: "Automated Carrier Selection", description: "AI chooses optimal carriers based on cost, performance, and service level", icon: TrendingUp, metrics: "25% cost savings" },
      { title: "Freight Audit & Payment", description: "Automated invoice verification and payment processing", icon: FileText, metrics: "99% accuracy" },
      { title: "Carrier Performance Tracking", description: "Real-time monitoring of on-time delivery, damage rates, and service quality", icon: BarChart, metrics: "Data-driven decisions" },
      { title: "Contract Management", description: "AI tracks carrier contracts, rates, and service level agreements", icon: Shield, metrics: "Full compliance" }
    ]
  },
  {
    title: "Customs & Compliance",
    description: "Navigate international shipping with automated compliance",
    icon: Shield,
    items: [
      { title: "Automated Customs Documentation", description: "AI generates and files customs declarations and required paperwork", icon: FileText, metrics: "Zero errors" },
      { title: "Duty & Tax Calculation", description: "Automated calculation of tariffs, duties, and taxes for international shipments", icon: BarChart, metrics: "Instant calculations" },
      { title: "Compliance Monitoring", description: "Continuous tracking of trade regulations and restricted party screening", icon: Shield, metrics: "100% compliance" },
      { title: "Hazmat Handling Automation", description: "AI ensures proper documentation and handling of dangerous goods", icon: AlertTriangle, metrics: "Safety first" }
    ]
  },
  {
    title: "Analytics & Optimization",
    description: "Drive continuous improvement with data-driven insights",
    icon: BarChart,
    items: [
      { title: "Performance Dashboards", description: "Real-time visibility into KPIs, costs, and service levels", icon: Activity, metrics: "Real-time insights" },
      { title: "Predictive Analytics", description: "AI forecasts demand, capacity needs, and potential disruptions", icon: TrendingUp, metrics: "Proactive planning" },
      { title: "Cost Optimization", description: "Automated analysis identifies cost-saving opportunities across operations", icon: Zap, metrics: "20% cost reduction" },
      { title: "Network Design Optimization", description: "AI recommends optimal warehouse locations and distribution strategies", icon: MapPin, metrics: "Strategic planning" }
    ]
  }
];

const Logistics = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
            <Truck className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Intelligent Workflow Automation for{" "}
            <span className="gradient-text">Logistics & Supply Chain</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
            AI agents that optimize routes, track shipments, and manage warehouses—improving delivery speed while reducing costs
          </p>
          <div className="inline-block px-8 py-4 rounded-lg bg-secondary/50 backdrop-blur-sm border border-border">
            <p className="text-lg text-foreground">
              <span className="text-muted-foreground">Get in touch:</span>{" "}
              <a href="mailto:hello@langslide.com" className="gradient-text font-semibold hover:underline transition-all">hello@langslide.com</a>
            </p>
          </div>
        </div>
      </div>
    </header>
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Logistics operations demand precision, speed, and adaptability. Langslide's AI agents transform supply chain operations by optimizing routes, providing real-time shipment visibility, automating warehouse workflows, and ensuring compliance—helping logistics providers deliver faster while controlling costs.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {workflows.map((category, i) => (
            <div key={i} className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20"><category.icon className="w-8 h-8 text-primary" /></div>
                <div><h2 className="text-3xl md:text-4xl font-bold text-foreground">{category.title}</h2><p className="text-lg text-muted-foreground mt-2">{category.description}</p></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, j) => (
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
          <p className="text-lg text-muted-foreground mb-6">Ready to transform your logistics operations?</p>
          <div className="inline-block px-8 py-4 rounded-lg bg-card border border-border">
            <p className="text-base text-foreground"><span className="text-muted-foreground">Contact us:</span> <a href="mailto:hello@langslide.com" className="gradient-text font-semibold hover:underline transition-all">hello@langslide.com</a></p>
          </div>
          <div className="mt-8 pt-8 border-t border-border"><p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Langslide. All rights reserved.</p></div>
        </div>
      </div>
    </footer>
  </div>
);

export default Logistics;
