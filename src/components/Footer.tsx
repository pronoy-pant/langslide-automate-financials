import { Link } from "react-router-dom";

const solutionsData = {
  departments: [
    { name: "Sales", path: "/functions/sales" },
    { name: "Support", path: "/functions/support" },
    { name: "Marketing", path: "/functions/marketing" },
    { name: "Finance", path: "/functions/finance" },
    { name: "IT", path: "/functions/it" },
    { name: "HR", path: "/functions/hr" },
    { name: "Revenue Operations", path: "/functions/revenue-operations" },
    { name: "Product", path: "/functions/product" }
  ],
  industries: [
    { name: "Financial Services", path: "/industries/financial-services" },
    { name: "Insurance", path: "/industries/insurance" },
    { name: "Healthcare", path: "/industries/healthcare" },
    { name: "Manufacturing", path: "/industries/manufacturing" },
    { name: "Retail", path: "/industries/retail" },
    { name: "Logistics", path: "/industries/logistics" },
    { name: "Real Estate", path: "/industries/real-estate" }
  ]
};

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Left Side - Contact Us */}
            <div className="lg:col-span-2">
              <Link 
                to="/contact-us"
                className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
              >
                Contact us
              </Link>
            </div>
            
            {/* Middle - Solutions (Large Column) */}
            <div className="lg:col-span-7">
              <h3 className="text-sm font-bold text-foreground mb-6 tracking-wider">
                SOLUTIONS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Departments */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground mb-4 tracking-wider">
                    DEPARTMENTS
                  </h4>
                  <ul className="space-y-3">
                    {solutionsData.departments.map((link, index) => (
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
                
                {/* Industries */}
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground mb-4 tracking-wider">
                    INDUSTRIES
                  </h4>
                  <ul className="space-y-3">
                    {solutionsData.industries.map((link, index) => (
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
            <div className="lg:col-span-3">
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

          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Langslide
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Langslide. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
