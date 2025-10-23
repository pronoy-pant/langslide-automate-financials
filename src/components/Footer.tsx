import { Link } from "react-router-dom";

const functionSolutions = [
  { name: "Sales & Revenue Operations", path: "/functions/sales" },
  { name: "Marketing", path: "/functions/marketing" },
  { name: "Finance & Accounting", path: "/functions/finance" },
  { name: "HR", path: "/functions/hr" }
];

const industrySolutions = [
  { name: "Financial Services & Insurance", path: "/industries/financial-services" },
  { name: "Healthcare", path: "/industries/healthcare" }
];

const companySections = [
  {
    title: "COMPANY",
    links: [
      { name: "About Us", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Support", path: "mailto:hello@langslide.com" },
      { name: "Security", path: "/security" }
    ]
  },
  {
    title: "LEGAL",
    links: [
      { name: "Terms of Service", path: "/legal/terms" },
      { name: "Privacy Notice", path: "/legal/privacy" }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-16 md:py-20">
      <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Left Side - Branding + Contact */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent whitespace-nowrap">
                  Langslide
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                AI automation platform for modern workflows. © {new Date().getFullYear()} Langslide. All rights reserved.
              </p>
              <Link
                to="/contact-us"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact us
              </Link>
            </div>
            
            {/* Middle - Solutions */}
            <div>
              <h3 className="text-sm font-bold text-foreground mb-6 tracking-wider">
                SOLUTIONS
              </h3>
              <div className="space-y-6">
                {/* By Function */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-3">
                    BY FUNCTION
                  </h4>
                  <ul className="space-y-3">
                    {functionSolutions.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* By Industry */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-3">
                    BY INDUSTRY
                  </h4>
                  <ul className="space-y-3">
                    {industrySolutions.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right Side - Company + Legal */}
            <div>
              <div className="space-y-8">
                {companySections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-bold text-foreground mb-6 tracking-wider">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={link.path}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
