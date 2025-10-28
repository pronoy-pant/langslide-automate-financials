import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/langslide-logo.png";
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
  { name: "Finance & Accounting", path: "/functions/finance" },
  { name: "HR", path: "/functions/hr" },
  { name: "Marketing", path: "/functions/marketing" },
  { name: "Sales & Revenue Operations", path: "/functions/sales" },
];

const industries = [
  { name: "Financial Services & Insurance", path: "/industries/financial-services" },
  { name: "Healthcare", path: "/industries/healthcare" },
];

const featuredUseCases = [
  { title: "Order-to-cash", description: "Automate the entire sales to payment cycle", anchor: "#order-to-cash" },
  { title: "Employee onboarding", description: "Streamline new hire workflows", anchor: "#employee-onboarding" },
  { title: "Enterprise iPaaS", description: "Connect and orchestrate all your systems", anchor: "#enterprise-ipaas" },
  { title: "Product-led sales", description: "Convert users to customers automatically", anchor: "#product-led-sales" },
  { title: "Embedded Integrations", description: "Offer integrations to your customers", anchor: "#embedded-integrations" },
];

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-xl shadow-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Langslide Logo" 
              className="h-16 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-5 py-2.5 rounded-full text-foreground hover:bg-secondary transition-all font-medium">
                Product <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass border-border shadow-xl rounded-2xl p-0 z-50" align="start">
                <div className="p-6 w-[300px]">
                  <h3 className="text-sm font-bold text-foreground mb-4">PRODUCT</h3>
                  <div className="space-y-1">
                    <div className="px-3 py-2.5 rounded-xl text-muted-foreground">
                      <span className="text-sm font-medium">Coming soon</span>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-5 py-2.5 rounded-full text-foreground hover:bg-secondary transition-all font-medium">
                Solutions <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass border-border shadow-xl rounded-2xl p-0 z-50" align="start">
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
                        <Link
                          key={index}
                          to={`/use-cases${useCase.anchor}`}
                          className="block px-3 py-2.5 rounded-xl hover:bg-secondary transition-all group"
                        >
                          <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {useCase.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                            {useCase.description}
                          </p>
                        </Link>
                      ))}
                      <Link
                        to="/use-cases"
                        className="flex items-center gap-1 px-3 py-2 text-sm font-medium gradient-text hover:underline"
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
              <DropdownMenuContent className="glass border-border shadow-xl rounded-2xl p-0 z-50" align="start">
                <div className="p-6 w-[300px]">
                  <h3 className="text-sm font-bold text-foreground mb-4">RESOURCES</h3>
                  <div className="space-y-1">
                    <div className="px-3 py-2.5 rounded-xl text-muted-foreground">
                      <span className="text-sm font-medium">Coming soon</span>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-5 py-2.5 rounded-full text-foreground hover:bg-secondary transition-all font-medium">
                Company <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="glass border-border shadow-xl rounded-2xl p-0 z-50" align="start">
                <div className="p-6 w-[300px]">
                  <h3 className="text-sm font-bold text-foreground mb-4">COMPANY</h3>
                  <div className="space-y-1">
                    <Link
                      to="/about"
                      className="block px-3 py-2.5 rounded-xl hover:bg-secondary transition-all group"
                    >
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        About Us
                      </span>
                    </Link>
                    <Link
                      to="/careers"
                      className="block px-3 py-2.5 rounded-xl hover:bg-secondary transition-all group"
                    >
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        Careers
                      </span>
                    </Link>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild size="default">
              <Link to="/contact-us">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
