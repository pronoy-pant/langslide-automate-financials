import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/langslide-icon.png";
import { Home, Building2 } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoIcon} 
              alt="Langslide" 
              className="h-8 transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-bold gradient-text">Langslide</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                isHome 
                  ? 'text-primary font-semibold bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link 
              to="/bfsi" 
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                location.pathname === '/bfsi' 
                  ? 'text-primary font-semibold bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">BFSI</span>
            </Link>
            <a 
              href="mailto:hello@langslide.com"
              className="px-4 py-2 rounded-md bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-all border border-primary/20"
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
