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
  Shield, 
  FileCheck, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Zap,
  Users,
  BarChart3,
  Database,
  FileText,
  Eye,
  Lock
} from "lucide-react";

const complianceMonitoringApps = [
  { name: "ServiceNow", category: "ITSM", logo: "https://logo.clearbit.com/servicenow.com" },
  { name: "Salesforce", category: "CRM", logo: "https://logo.clearbit.com/salesforce.com" },
  { name: "Microsoft Compliance", category: "Compliance", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "IBM OpenPages", category: "GRC", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "SAP GRC", category: "GRC", logo: "https://logo.clearbit.com/sap.com" },
  { name: "Oracle GRC", category: "GRC", logo: "https://logo.clearbit.com/oracle.com" },
  { name: "MetricStream", category: "GRC", logo: "https://logo.clearbit.com/metricstream.com" },
  { name: "RSA Archer", category: "GRC", logo: "https://logo.clearbit.com/rsa.com" },
  { name: "Galvanize", category: "Audit", logo: "https://logo.clearbit.com/galvanize.com" },
  { name: "Workiva", category: "Reporting", logo: "https://logo.clearbit.com/workiva.com" },
  { name: "AuditBoard", category: "Audit", logo: "https://logo.clearbit.com/auditboard.com" },
  { name: "LogicGate", category: "GRC", logo: "https://logo.clearbit.com/logicgate.com" },
  { name: "OneTrust", category: "Privacy", logo: "https://logo.clearbit.com/onetrust.com" },
  { name: "TrustArc", category: "Privacy", logo: "https://logo.clearbit.com/trustarc.com" },
  { name: "BigID", category: "Data Privacy", logo: "https://logo.clearbit.com/bigid.com" },
  { name: "Collibra", category: "Data Governance", logo: "https://logo.clearbit.com/collibra.com" },
  { name: "Informatica Data Governance", category: "Data Governance", logo: "https://logo.clearbit.com/informatica.com" },
  { name: "Alteryx", category: "Data Prep", logo: "https://logo.clearbit.com/alteryx.com" },
  { name: "Tableau", category: "Analytics", logo: "https://logo.clearbit.com/tableau.com" },
  { name: "Power BI", category: "Analytics", logo: "https://logo.clearbit.com/powerbi.microsoft.com" },
  { name: "Qlik", category: "Analytics", logo: "https://logo.clearbit.com/qlik.com" },
  { name: "Looker", category: "Analytics", logo: "https://logo.clearbit.com/looker.com" },
  { name: "Splunk", category: "Log Analytics", logo: "https://logo.clearbit.com/splunk.com" },
  { name: "Elastic", category: "Search & Analytics", logo: "https://logo.clearbit.com/elastic.co" },
  { name: "Datadog", category: "Monitoring", logo: "https://logo.clearbit.com/datadoghq.com" },
  { name: "New Relic", category: "Monitoring", logo: "https://logo.clearbit.com/newrelic.com" },
  { name: "AppDynamics", category: "APM", logo: "https://logo.clearbit.com/appdynamics.com" },
  { name: "Dynatrace", category: "APM", logo: "https://logo.clearbit.com/dynatrace.com" },
  { name: "Sumo Logic", category: "Log Analytics", logo: "https://logo.clearbit.com/sumologic.com" },
  { name: "LogRhythm", category: "SIEM", logo: "https://logo.clearbit.com/logrhythm.com" }
];

const ComplianceMonitoring = () => {
  const heroWorkflows = [
    { title: "Monitor", icon: Eye, color: "bg-blue-500" },
    { title: "Detect", icon: AlertTriangle, color: "bg-green-500" },
    { title: "Report", icon: FileText, color: "bg-purple-500" },
    { title: "Audit", icon: FileCheck, color: "bg-orange-500" }
  ];

  const heroMetrics = [
    { value: "99.9%", label: "Accuracy", icon: Zap },
    { value: "90%", label: "Time Saved", icon: Clock },
    { value: "100%", label: "Compliance", icon: Shield }
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
                    Compliance Monitoring
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Ensure regulatory compliance{" "}
                  <span className="gradient-text">with intelligent monitoring</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From risk assessment to audit preparation, automate complex compliance workflows with AI agents that monitor, detect, and report on regulatory requirements in real-time.
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
                  icon={Shield}
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
                  The Compliance Challenge
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Organizations face increasing regulatory requirements, complex audit processes, and the need to maintain continuous compliance across multiple frameworks and jurisdictions.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Complex regulatory requirements across jurisdictions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Manual compliance monitoring is error-prone</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Time-consuming audit preparation and reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span>Difficulty tracking compliance across systems</span>
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
                    <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Compliance</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-border">
                    <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
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
                <span className="gradient-text">Compliance Workflows</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive automation solutions for every compliance monitoring need
              </p>
            </div>

            <div className="space-y-12">
              {/* Risk Assessment */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Risk Assessment</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate risk identification and assessment with AI agents that analyze data patterns, detect anomalies, and provide real-time risk scoring across all business processes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated risk identification</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Real-time risk scoring and alerts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Anomaly detection and pattern analysis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Risk mitigation recommendations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Audit Preparation */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Audit Preparation</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Streamline audit preparation with AI agents that automatically gather evidence, validate controls, and generate comprehensive audit reports.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated evidence collection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Control validation and testing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated report generation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Compliance gap analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regulatory Reporting */}
              <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Regulatory Reporting</h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Automate regulatory reporting with AI agents that collect data, validate accuracy, and generate reports that meet specific regulatory requirements.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated data collection and validation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Regulatory format compliance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Automated submission workflows</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-muted-foreground">Deadline tracking and alerts</span>
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
                Trusted by Leading Compliance Teams
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Integrates with{" "}
                <span className="gradient-text">your compliance stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with 30+ GRC, audit, and monitoring platforms
              </p>
            </div>
            <AutoLogoCarousel apps={complianceMonitoringApps} rows={3} speed={40} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA 
        badge="Transform Compliance"
        title="Ready to automate your compliance monitoring?"
        description="Discover how Langslide's AI agents can streamline compliance monitoring across your organization. From risk assessment to audit preparation, we help teams maintain regulatory compliance efficiently."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Schedule a Demo"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      <Footer />
    </div>
  );
};

export default ComplianceMonitoring;
