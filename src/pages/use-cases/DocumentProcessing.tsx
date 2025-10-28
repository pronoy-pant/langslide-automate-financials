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
  FileText, 
  FileSearch, 
  FileCheck, 
  FileX, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Zap,
  Users,
  BarChart3,
  Shield,
  Database,
  Upload,
  Download
} from "lucide-react";

const documentProcessingApps = [
  { name: "Adobe Acrobat", category: "PDF Tools", logo: "https://logo.clearbit.com/adobe.com" },
  { name: "DocuSign", category: "E-Signature", logo: "https://logo.clearbit.com/docusign.com" },
  { name: "Microsoft Office", category: "Productivity", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Google Workspace", category: "Productivity", logo: "https://logo.clearbit.com/google.com" },
  { name: "Dropbox", category: "File Storage", logo: "https://logo.clearbit.com/dropbox.com" },
  { name: "Box", category: "File Storage", logo: "https://logo.clearbit.com/box.com" },
  { name: "OneDrive", category: "File Storage", logo: "https://logo.clearbit.com/onedrive.live.com" },
  { name: "SharePoint", category: "Collaboration", logo: "https://logo.clearbit.com/sharepoint.com" },
  { name: "Notion", category: "Documentation", logo: "https://logo.clearbit.com/notion.so" },
  { name: "Confluence", category: "Documentation", logo: "https://logo.clearbit.com/atlassian.com" },
  { name: "Slack", category: "Communication", logo: "https://logo.clearbit.com/slack.com" },
  { name: "Teams", category: "Communication", logo: "https://logo.clearbit.com/teams.microsoft.com" },
  { name: "Zoom", category: "Video Conferencing", logo: "https://logo.clearbit.com/zoom.us" },
  { name: "Webex", category: "Video Conferencing", logo: "https://logo.clearbit.com/webex.com" },
  { name: "Salesforce", category: "CRM", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "HubSpot", category: "CRM", logo: "https://logo.clearbit.com/hubspot.com" },
  { name: "ServiceNow", category: "ITSM", logo: "https://logo.clearbit.com/servicenow.com" },
  { name: "Jira", category: "Project Management", logo: "https://logo.clearbit.com/atlassian.com" },
  { name: "Asana", category: "Project Management", logo: "https://logo.clearbit.com/asana.com" },
  { name: "Trello", category: "Project Management", logo: "https://logo.clearbit.com/trello.com" },
  { name: "Monday.com", category: "Project Management", logo: "https://logo.clearbit.com/monday.com" },
  { name: "Smartsheet", category: "Spreadsheet", logo: "https://logo.clearbit.com/smartsheet.com" },
  { name: "Airtable", category: "Database", logo: "https://logo.clearbit.com/airtable.com" },
  { name: "Zapier", category: "Automation", logo: "https://logo.clearbit.com/zapier.com" },
  { name: "Make", category: "Automation", logo: "https://logo.clearbit.com/make.com" },
  { name: "IFTTT", category: "Automation", logo: "https://logo.clearbit.com/ifttt.com" },
  { name: "Microsoft Power Automate", category: "Automation", logo: "https://logo.clearbit.com/powerautomate.microsoft.com" },
  { name: "UiPath", category: "RPA", logo: "https://logo.clearbit.com/uipath.com" },
  { name: "Automation Anywhere", category: "RPA", logo: "https://logo.clearbit.com/automationanywhere.com" },
  { name: "Blue Prism", category: "RPA", logo: "https://logo.clearbit.com/blueprism.com" }
];

const DocumentProcessing = () => {
  const heroWorkflows = [
    { title: "Extract", icon: FileSearch, color: "bg-blue-500" },
    { title: "Process", icon: FileText, color: "bg-green-500" },
    { title: "Validate", icon: FileCheck, color: "bg-purple-500" },
    { title: "Store", icon: Database, color: "bg-orange-500" }
  ];

  const heroMetrics = [
    { value: "95%", label: "Accuracy", icon: Zap },
    { value: "80%", label: "Time Saved", icon: Clock },
    { value: "99%", label: "Success Rate", icon: BarChart3 }
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
                    Document Processing
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Automate document workflows{" "}
                  <span className="gradient-text">with intelligent processing</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From invoice processing to contract analysis, automate complex document workflows with AI agents that extract, validate, and process information with 95% accuracy.
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
                  icon={FileText}
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
                  The Document Challenge
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Organizations struggle with manual document processing, data extraction errors, and inconsistent workflows that slow down operations and increase costs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Manual data entry leads to errors and delays</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Inconsistent document formats across systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Time-consuming validation and approval processes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Difficulty extracting data from unstructured documents</span>
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
                    <div className="text-3xl font-bold gradient-text mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">80%</div>
                    <div className="text-sm text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">60%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
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
                <span className="gradient-text">Document Workflows</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive automation solutions for every document processing need
              </p>
            </div>

            <div className="space-y-12">
              {/* Invoice Processing */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Invoice Processing</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate invoice data extraction, validation, and approval workflows with intelligent AI agents that understand various invoice formats and business rules.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated data extraction from PDFs and images</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Three-way matching with PO and receipts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated approval routing and notifications</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Integration with accounting systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contract Analysis */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Contract Analysis</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Streamline contract review and analysis with AI agents that identify key terms, risks, and compliance requirements across various contract types.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated key term extraction and highlighting</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Risk assessment and compliance checking</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated contract summarization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Version comparison and change tracking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Classification */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <FileSearch className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Document Classification</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automatically categorize and route documents based on content, type, and business rules with intelligent classification algorithms.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automatic document type recognition</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Smart routing based on content analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Priority assignment and escalation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Metadata extraction and tagging</span>
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
                Trusted by Leading Organizations
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Integrates with{" "}
                <span className="gradient-text">your document stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with 30+ document management, storage, and productivity platforms
              </p>
            </div>
            <AutoLogoCarousel apps={documentProcessingApps} rows={3} speed={40} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA 
        badge="Transform Documents"
        title="Ready to automate your document workflows?"
        description="Discover how Langslide's AI agents can streamline document processing across your organization. From invoice processing to contract analysis, we help teams work faster and more accurately."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Schedule a Demo"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      <Footer />
    </div>
  );
};

export default DocumentProcessing;
