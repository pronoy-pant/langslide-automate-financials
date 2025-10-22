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

const functions = [
  { name: "IT", path: "/functions/it" },
  { name: "Finance", path: "/functions/finance" },
  { name: "Support", path: "/functions/support" },
  { name: "HR", path: "/functions/hr" },
  { name: "Marketing", path: "/functions/marketing" },
  { name: "Sales", path: "/functions/sales" },
  { name: "Revenue Operations", path: "/functions/revenue-operations" },
  { name: "Product (Embed)", path: "/functions/product" },
];

const industries = [
  { name: "Manufacturing", path: "/industries/manufacturing" },
  { name: "Financial Services", path: "/industries/financial-services" },
  { name: "Retail", path: "/industries/retail" },
  { name: "Logistics", path: "/industries/logistics" },
  { name: "Healthcare", path: "/industries/healthcare" },
  { name: "Insurance", path: "/industries/insurance" },
  { name: "Real Estate", path: "/industries/real-estate" },
];

const featuredUseCases = [
  { title: "Order-to-cash", description: "Automate the entire sales to payment cycle" },
  { title: "Employee onboarding", description: "Streamline new hire workflows" },
  { title: "Enterprise iPaaS", description: "Connect and orchestrate all your systems" },
  { title: "Product-led sales", description: "Convert users to customers automatically" },
  { title: "Embedded Integrations", description: "Offer integrations to your customers" },
];

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logoIcon} 
              alt="Langslide Icon" 
              className="h-14 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-none">Langslide</span>
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
                Solutions <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-border shadow-large rounded-2xl p-0 z-50" align="start">
                <div className="grid grid-cols-3 gap-0 w-[900px]">
                  {/* Left Column - By Function */}
                  <div className="p-6 border-r border-border">
                    <h3 className="text-sm font-bold text-foreground mb-4">BY FUNCTION</h3>
                    <div className="space-y-1">
                      {functions.map((func) => (
                        <Link
                          key={func.path}
                          to={func.path}
                          className="block px-3 py-2.5 rounded-xl hover:bg-secondary transition-all group"
                        >
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {func.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Middle Column - By Use Case */}
                  <div className="p-6 border-r border-border">
                    <h3 className="text-sm font-bold text-foreground mb-4">BY USE CASE</h3>
                    <div className="space-y-3">
                      {featuredUseCases.map((useCase, index) => (
                        <div 
                          key={index}
                          className="px-3 py-2.5 rounded-xl hover:bg-secondary transition-all cursor-pointer group"
                        >
                          <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {useCase.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                            {useCase.description}
                          </p>
                        </div>
                      ))}
                      <Link
                        to="#all"
                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary hover:underline"
                      >
                        View all <span className="text-xs">↗</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column - By Industry */}
                  <div className="p-6">
                    <h3 className="text-sm font-bold text-foreground mb-4">BY INDUSTRY</h3>
                    <div className="space-y-1">
                      {industries.map((industry) => (
                        <Link
                          key={industry.path}
                          to={industry.path}
                          className="block px-3 py-2.5 rounded-xl hover:bg-secondary transition-all group"
                        >
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {industry.name}
                          </span>
                        </Link>
                      ))}
                    </div>
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
