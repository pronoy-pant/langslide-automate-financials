import { Link, useLocation } from "react-router-dom";
import logoFull from "@/assets/langslide-logo.png";
import { ChevronDown } from "lucide-react";
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
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logoFull} 
              alt="Langslide" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all">
                Product <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="text-muted-foreground">Coming soon</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all">
                Solutions <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border w-72">
                <div className="p-2">
                  <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">INDUSTRIES</div>
                  <div className="grid gap-1">
                    {industries.map((industry) => (
                      <DropdownMenuItem key={industry.path} asChild>
                        <Link 
                          to={industry.path}
                          className="cursor-pointer hover:bg-secondary/50 rounded-md px-2 py-2"
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
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all">
                Resources <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="text-muted-foreground">Coming soon</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all">
                Company <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem className="text-muted-foreground">About</DropdownMenuItem>
                <DropdownMenuItem className="text-muted-foreground">Careers</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/pricing" 
              className="px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
            >
              Pricing
            </Link>

            <a 
              href="mailto:hello@langslide.com"
              className="ml-2 px-4 py-2 rounded-md bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-all border border-primary/20"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
