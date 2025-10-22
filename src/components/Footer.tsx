import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "PRODUCT",
    links: [
      { name: "Product", path: "#" },
      { name: "Security", path: "#" }
    ]
  },
  {
    title: "SOLUTIONS",
    subsections: [
      {
        subtitle: "DEPARTMENTS",
        links: [
          { name: "Sales", path: "/functions/sales" },
          { name: "Support", path: "/functions/support" },
          { name: "Marketing", path: "/functions/marketing" },
          { name: "Finance", path: "/functions/finance" },
          { name: "IT", path: "/functions/it" },
          { name: "HR", path: "/functions/hr" },
          { name: "Revenue Operations", path: "/functions/revenue-operations" },
          { name: "Product", path: "/functions/product" }
        ]
      },
      {
        subtitle: "INDUSTRIES",
        links: [
          { name: "Financial Services", path: "/industries/financial-services" },
          { name: "Insurance", path: "/industries/insurance" },
          { name: "Healthcare", path: "/industries/healthcare" },
          { name: "Manufacturing", path: "/industries/manufacturing" },
          { name: "Retail", path: "/industries/retail" },
          { name: "Logistics", path: "/industries/logistics" },
          { name: "Real Estate", path: "/industries/real-estate" }
        ]
      }
    ]
  },
  {
    title: "DEVELOPERS",
    links: [
      { name: "Developer Platform", path: "#" },
      { name: "Platform Documentation", path: "#" },
      { name: "Github Repo", path: "#" }
    ]
  },
  {
    title: "COMPANY",
    links: [
      { name: "About Us", path: "#" },
      { name: "Careers", path: "#" },
      { name: "Support", path: "mailto:hello@langslide.com" },
      { name: "Contact", path: "mailto:hello@langslide.com" }
    ]
  },
  {
    title: "CONNECT",
    links: [
      { name: "LinkedIn", path: "#" },
      { name: "X (Twitter)", path: "#" },
      { name: "YouTube", path: "#" }
    ]
  },
  {
    title: "LEGAL",
    links: [
      { name: "Terms & Policies", path: "/legal/terms" },
      { name: "Privacy Policy", path: "/legal/privacy" }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-sm font-bold text-foreground mb-6 tracking-wider">
                  {section.title}
                </h3>
                {section.links ? (
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
                ) : section.subsections ? (
                  <div className="space-y-6">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h4 className="text-xs font-semibold text-muted-foreground mb-3 tracking-wider">
                          {subsection.subtitle}
                        </h4>
                        <ul className="space-y-3">
                          {subsection.links.map((link, linkIndex) => (
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
                ) : null}
              </div>
            ))}
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
