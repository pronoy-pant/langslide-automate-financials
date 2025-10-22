import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/langslide-icon.png";
import { ChevronDown } from "lucide-react";
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
              <a href="mailto:hello@langslide.com">
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
