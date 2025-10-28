import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/ui/call-to-action";
import { FAQ } from "@/components/FAQ";
import AutoLogoCarousel from "@/components/AutoLogoCarousel";
import FunctionHeroDashboard from "@/components/FunctionHeroDashboard";
import { 
  Database, 
  BarChart3, 
  TrendingUp, 
  FileText, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Zap,
  Users,
  Shield,
  Search,
  Download,
  Upload,
  Filter
} from "lucide-react";

const dataExtractionApps = [
  { name: "Salesforce", category: "CRM", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "HubSpot", category: "CRM", logo: "https://logo.clearbit.com/hubspot.com" },
  { name: "Microsoft SQL Server", category: "Database", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Oracle", category: "Database", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "MySQL", category: "Database", logo: "https://logo.clearbit.com/mysql.com" },
  { name: "PostgreSQL", category: "Database", logo: "https://logo.clearbit.com/postgresql.org" },
  { name: "MongoDB", category: "Database", logo: "https://logo.clearbit.com/mongodb.com" },
  { name: "Snowflake", category: "Data Warehouse", logo: "https://logo.clearbit.com/snowflake.com" },
  { name: "Databricks", category: "Data Platform", logo: "https://logo.clearbit.com/databricks.com" },
  { name: "BigQuery", category: "Data Warehouse", logo: "https://logo.clearbit.com/cloud.google.com" },
  { name: "Redshift", category: "Data Warehouse", logo: "https://logo.clearbit.com/aws.amazon.com" },
  { name: "Tableau", category: "Analytics", logo: "https://logo.clearbit.com/tableau.com" },
  { name: "Power BI", category: "Analytics", logo: "https://logo.clearbit.com/powerbi.microsoft.com" },
  { name: "Looker", category: "Analytics", logo: "https://logo.clearbit.com/looker.com" },
  { name: "Qlik", category: "Analytics", logo: "https://logo.clearbit.com/qlik.com" },
  { name: "Sisense", category: "Analytics", logo: "https://logo.clearbit.com/sisense.com" },
  { name: "Alteryx", category: "Data Prep", logo: "https://logo.clearbit.com/alteryx.com" },
  { name: "Talend", category: "Data Integration", logo: "https://logo.clearbit.com/talend.com" },
  { name: "Informatica", category: "Data Integration", logo: "https://logo.clearbit.com/informatica.com" },
  { name: "Fivetran", category: "Data Pipeline", logo: "https://logo.clearbit.com/fivetran.com" },
  { name: "Stitch", category: "Data Pipeline", logo: "https://logo.clearbit.com/stitchdata.com" },
  { name: "Segment", category: "Customer Data", logo: "https://logo.clearbit.com/segment.com" },
  { name: "Mixpanel", category: "Analytics", logo: "https://logo.clearbit.com/mixpanel.com" },
  { name: "Amplitude", category: "Analytics", logo: "https://logo.clearbit.com/amplitude.com" },
  { name: "Google Analytics", category: "Web Analytics", logo: "https://logo.clearbit.com/analytics.google.com" },
  { name: "Adobe Analytics", category: "Web Analytics", logo: "https://logo.clearbit.com/adobe.com" },
  { name: "Hotjar", category: "User Analytics", logo: "https://logo.clearbit.com/hotjar.com" },
  { name: "FullStory", category: "User Analytics", logo: "https://logo.clearbit.com/fullstory.com" },
  { name: "LogRocket", category: "User Analytics", logo: "https://logo.clearbit.com/logrocket.com" },
  { name: "Splunk", category: "Log Analytics", logo: "https://logo.clearbit.com/splunk.com" }
];

const DataExtraction = () => {
  const heroWorkflows = [
    { title: "Extract", icon: Download, color: "bg-blue-500" },
    { title: "Transform", icon: Filter, color: "bg-green-500" },
    { title: "Load", icon: Upload, color: "bg-purple-500" },
    { title: "Analyze", icon: BarChart3, color: "bg-orange-500" }
  ];

  const heroMetrics = [
    { value: "99.9%", label: "Accuracy", icon: Zap },
    { value: "90%", label: "Time Saved", icon: Clock },
    { value: "5x", label: "Speed", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, hsl(220 20% 96%), hsl(210 25% 94%), hsl(200 20% 95%))' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-mesh py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column - Content */}
              <motion.div 
                className="space-y-6 lg:space-y-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 gradient-text text-sm font-semibold border border-primary/20">
                    <Sparkles className="w-4 h-4" />
                    Data Extraction
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Extract insights from data{" "}
                  <span className="gradient-text">with intelligent automation</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From database queries to API integrations, automate complex data extraction workflows with AI agents that ensure accuracy, consistency, and real-time insights.
                </p>
                
                <div className="pt-4 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                    <a href="mailto:hello@langslide.com" className="flex items-center">
                      Get Started <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
                    <a href="#workflows">View Workflows</a>
                  </Button>
                </div>
              </motion.div>
              
              {/* Right Column - Interactive Dashboard */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FunctionHeroDashboard 
                  icon={Database}
                  workflows={heroWorkflows}
                  metrics={heroMetrics}
                />
              </motion.div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Outcomes */}
      <section className="py-16 md:py-20 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Problem */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  The Data Challenge
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Organizations struggle with manual data extraction, inconsistent data formats, and complex integration requirements that slow down decision-making and increase operational costs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Manual data extraction is time-consuming and error-prone</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Data silos prevent comprehensive analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Inconsistent data formats across systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Real-time data access is limited</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Measurable Results
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">90%</div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">5x</div>
                    <div className="text-sm text-muted-foreground">Faster Processing</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Real-time Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases & Workflows */}
      <section className="py-16 md:py-20" id="workflows">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Key{" "}
                <span className="gradient-text">Data Extraction Workflows</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive automation solutions for every data extraction need
              </p>
            </div>

            <div className="space-y-12">
              {/* Database Integration */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Database className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Database Integration</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate data extraction from multiple database sources with intelligent query optimization and real-time synchronization across systems.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated SQL query generation and execution</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Real-time data synchronization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Multi-database support and migration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Data quality validation and cleansing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* API Data Extraction */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Search className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">API Data Extraction</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Streamline API integrations with intelligent data extraction, transformation, and loading workflows that adapt to changing API schemas.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated API endpoint discovery</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Schema mapping and transformation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Rate limiting and error handling</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Incremental data updates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Web Scraping & Monitoring */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Web Scraping & Monitoring</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate web data extraction and monitoring with intelligent agents that adapt to website changes and extract structured data efficiently.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Dynamic content extraction</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Change detection and alerts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Anti-bot detection bypass</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Data validation and deduplication</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Focus */}
      <section className="py-16 md:py-20 bg-white border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Trusted by Leading Data Teams
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Integrates with{" "}
                <span className="gradient-text">your data stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with 30+ databases, analytics, and data integration platforms
              </p>
            </div>
            <AutoLogoCarousel apps={dataExtractionApps} rows={3} speed={40} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA 
        badge="Transform Data"
        title="Ready to automate your data extraction?"
        description="Discover how Langslide's AI agents can streamline data extraction across your organization. From database integration to API automation, we help teams access insights faster and more accurately."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Schedule a Demo"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      <Footer />
    </div>
  );
};

export default DataExtraction;
