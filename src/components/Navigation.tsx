import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/langslide-icon.png";
import { 
  ChevronDown, 
  BookOpen, 
  TrendingUp, 
  Headphones, 
  Settings, 
  DollarSign, 
  Users, 
  Shield,
  Grid
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const industries = [
  { name: "Financial Services & Banking", path: "/industries/financial-services" },
  { name: "Healthcare", path: "/industries/healthcare" },
  { name: "Retail & E-commerce", path: "/industries/retail" },
  { name: "Manufacturing", path: "/industries/manufacturing" },
  { name: "Insurance", path: "/industries/insurance" },
  { name: "Real Estate", path: "/industries/real-estate" },
  { name: "Logistics & Supply Chain", path: "/industries/logistics" },
  { name: "Human Resources", path: "/industries/hr" },
];

const useCaseCategories = [
  { name: "All use cases", icon: "grid", path: "#all" },
  { name: "Sales Enablement", icon: "trending-up", path: "#sales" },
  { name: "Customer Support", icon: "headphones", path: "#support" },
  { name: "Operations", icon: "settings", path: "#operations" },
  { name: "Finance & Billing", icon: "dollar-sign", path: "#finance" },
  { name: "HR & People", icon: "users", path: "#hr" },
  { name: "Compliance", icon: "shield", path: "#compliance" },
];

const featuredUseCases = [
  {
    title: "Auto-fill RFPs",
    description: "Speed up proposals with AI-generated answers",
    category: "Sales Enablement"
  },
  {
    title: "Instant answers for sales & support",
    description: "Empower reps with real-time knowledge",
    category: "Customer Support"
  },
  {
    title: "Draft email & ticket replies",
    description: "Write accurate, on-brand responses in seconds",
    category: "Customer Support"
  },
  {
    title: "Loan Application Automation",
    description: "Verify documents and create unified customer profiles",
    category: "Finance & Billing"
  },
  {
    title: "Claims Processing Automation",
    description: "Real-time verification and processing of claims",
    category: "Operations"
  },
  {
    title: "Employee Query Chatbot",
    description: "24/7 AI-powered HR support for common questions",
    category: "HR & People"
  },
];

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoIcon} 
              alt="Langslide Icon" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Langslide</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-5 py-2.5 rounded-full text-foreground hover:bg-secondary transition-all font-medium">
                Product <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-border shadow-large rounded-2xl">
                <DropdownMenuItem className="text-muted-foreground">Coming soon</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-5 py-2.5 rounded-full text-foreground hover:bg-secondary transition-all font-medium">
                Use Cases <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-border shadow-large rounded-2xl p-0" align="start">
                <div className="grid md:grid-cols-2 gap-0 w-[700px]">
                  {/* Left Column - Featured Use Cases */}
                  <div className="p-6 border-r border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <h3 className="text-sm font-bold text-foreground">Explore our use cases</h3>
                    </div>
                    <div className="space-y-3">
                      {featuredUseCases.map((useCase, index) => (
                        <div 
                          key={index}
                          className="p-3 rounded-xl hover:bg-secondary transition-all cursor-pointer group"
                        >
                          <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {useCase.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {useCase.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Categories */}
                  <div className="p-6">
                    <h3 className="text-sm font-bold text-foreground mb-4">By category</h3>
                    <div className="space-y-1">
                      {useCaseCategories.map((category, index) => {
                        const IconComponent = 
                          category.icon === "grid" ? Grid :
                          category.icon === "trending-up" ? TrendingUp :
                          category.icon === "headphones" ? Headphones :
                          category.icon === "settings" ? Settings :
                          category.icon === "dollar-sign" ? DollarSign :
                          category.icon === "users" ? Users :
                          Shield;
                        
                        return (
                          <Link
                            key={index}
                            to={category.path}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-secondary transition-all group"
                          >
                            <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {category.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-5 py-2.5 rounded-full text-foreground hover:bg-secondary transition-all font-medium">
                Solutions <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-border w-80 shadow-large rounded-2xl">
                <div className="p-3">
                  <div className="text-xs font-bold text-muted-foreground mb-3 px-3">INDUSTRIES</div>
                  <div className="grid gap-1">
                    {industries.map((industry) => (
                      <DropdownMenuItem key={industry.path} asChild>
                        <Link 
                          to={industry.path}
                          className="cursor-pointer hover:bg-secondary rounded-xl px-3 py-3 font-medium"
                        >
                          {industry.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-5 py-2.5 rounded-full text-foreground hover:bg-secondary transition-all font-medium">
                Resources <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-border shadow-large rounded-2xl">
                <DropdownMenuItem className="text-muted-foreground">Coming soon</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-5 py-2.5 rounded-full text-foreground hover:bg-secondary transition-all font-medium">
                Company <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-border shadow-large rounded-2xl">
                <DropdownMenuItem className="text-muted-foreground">About</DropdownMenuItem>
                <DropdownMenuItem className="text-muted-foreground">Careers</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/pricing" 
              className="px-5 py-2.5 rounded-full text-foreground hover:bg-secondary transition-all font-medium"
            >
              Pricing
            </Link>

            <Button asChild size="default" className="ml-3">
              <Link to="/request-demo">
                Request a Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
