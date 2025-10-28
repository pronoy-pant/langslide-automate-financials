import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/ui/call-to-action";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import AutoLogoCarousel from "@/components/AutoLogoCarousel";
import FunctionHeroDashboard from "@/components/FunctionHeroDashboard";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Heart,
  FileText,
  Database,
  Stethoscope,
  DollarSign,
  UserCheck,
  Calendar,
  ShieldCheck,
  Pill,
  Activity,
  FileCheck,
  ClipboardList,
  Users,
  Zap,
  TrendingUp,
  CheckCircle,
  FileSearch,
  Clock,
  AlertCircle,
  Workflow,
  BarChart,
  ArrowRight,
  Sparkles
} from "lucide-react";

const workflows = [
  {
    title: "Patient Management",
    description: "Automate patient intake, registration, and record management with AI",
    icon: Users,
    items: [
      {
        title: "Automated Patient Intake & Registration",
        description: "AI extracts data from insurance cards, IDs, and forms for instant patient registration",
        icon: UserCheck,
        metrics: "75% time reduction"
      },
      {
        title: "EHR Data Migration & Sync",
        description: "Seamless synchronization and migration across multiple electronic health record systems",
        icon: Database,
        metrics: "99% data accuracy"
      },
      {
        title: "Patient Portal Automation",
        description: "AI-powered chatbot for appointment scheduling, prescription refills, and medical records access",
        icon: Calendar,
        metrics: "24/7 availability"
      },
      {
        title: "Medical Records Management",
        description: "Intelligent organization, retrieval, and archiving of patient medical records",
        icon: FileText,
        metrics: "90% faster retrieval"
      }
    ]
  },
  {
    title: "Claims Processing",
    description: "Accelerate insurance claims with intelligent automation and verification",
    icon: FileCheck,
    items: [
      {
        title: "Claims Adjudication Automation",
        description: "Real-time verification and processing of insurance claims with AI-powered decision making",
        icon: CheckCircle,
        metrics: "80% faster processing"
      },
      {
        title: "Pre-Authorization Workflow",
        description: "Automated prior authorization requests and approval tracking across multiple payers",
        icon: ShieldCheck,
        metrics: "70% approval rate improvement"
      },
      {
        title: "Claims Denial Management",
        description: "AI identifies denial patterns and automates resubmission with corrected information",
        icon: AlertCircle,
        metrics: "60% reduction in denials"
      },
      {
        title: "Insurance Verification",
        description: "Instant verification of patient insurance coverage and benefits eligibility",
        icon: FileSearch,
        metrics: "Real-time verification"
      }
    ]
  },
  {
    title: "Clinical Operations",
    description: "Streamline clinical workflows and improve care coordination",
    icon: Stethoscope,
    items: [
      {
        title: "Clinical Documentation Assistant",
        description: "AI-powered transcription and documentation during patient visits",
        icon: ClipboardList,
        metrics: "50% time savings"
      },
      {
        title: "Lab Results Processing",
        description: "Automated processing, interpretation, and notification of lab results to providers",
        icon: Activity,
        metrics: "95% accuracy"
      },
      {
        title: "Medication Management",
        description: "AI monitors prescriptions, drug interactions, and automated refill processing",
        icon: Pill,
        metrics: "Zero interaction errors"
      },
      {
        title: "Care Coordination Workflow",
        description: "Automated referrals, follow-ups, and communication between care team members",
        icon: Workflow,
        metrics: "40% better coordination"
      }
    ]
  },
  {
    title: "Billing & Revenue Cycle",
    description: "Optimize billing processes and maximize revenue collection",
    icon: DollarSign,
    items: [
      {
        title: "Medical Coding Automation",
        description: "AI-powered ICD-10 and CPT coding from clinical documentation",
        icon: FileCheck,
        metrics: "98% coding accuracy"
      },
      {
        title: "Payment Posting & Reconciliation",
        description: "Automated posting of payments and reconciliation with EOBs",
        icon: DollarSign,
        metrics: "85% faster posting"
      },
      {
        title: "Patient Billing & Collections",
        description: "Intelligent billing, payment plan management, and automated collection workflows",
        icon: TrendingUp,
        metrics: "30% collection improvement"
      },
      {
        title: "Charge Capture Optimization",
        description: "AI ensures all billable services are captured and properly documented",
        icon: BarChart,
        metrics: "25% revenue increase"
      }
    ]
  },
  {
    title: "Appointment Management",
    description: "Smart scheduling and patient engagement automation",
    icon: Calendar,
    items: [
      {
        title: "Intelligent Appointment Scheduling",
        description: "AI-optimized scheduling considering provider availability, patient preferences, and urgency",
        icon: Calendar,
        metrics: "50% reduction in no-shows"
      },
      {
        title: "Automated Reminders & Confirmations",
        description: "Multi-channel appointment reminders via SMS, email, and voice calls",
        icon: Clock,
        metrics: "70% confirmation rate"
      },
      {
        title: "Waitlist Management",
        description: "Automated waitlist monitoring and patient notification for cancellations",
        icon: Users,
        metrics: "95% fill rate"
      },
      {
        title: "Telehealth Coordination",
        description: "Automated setup and technical support for virtual appointments",
        icon: Activity,
        metrics: "Seamless virtual care"
      }
    ]
  },
  {
    title: "Compliance & Quality",
    description: "Ensure regulatory compliance and maintain quality standards",
    icon: ShieldCheck,
    items: [
      {
        title: "HIPAA Compliance Monitoring",
        description: "Continuous monitoring and automated reporting for HIPAA compliance",
        icon: ShieldCheck,
        metrics: "100% compliance rate"
      },
      {
        title: "Quality Metrics Tracking",
        description: "Automated collection and reporting of HEDIS, MIPS, and other quality measures",
        icon: BarChart,
        metrics: "Real-time reporting"
      },
      {
        title: "Audit Trail Management",
        description: "Comprehensive logging and audit trail generation for all system activities",
        icon: FileSearch,
        metrics: "Complete traceability"
      },
      {
        title: "Risk Assessment Automation",
        description: "AI-powered patient risk stratification and preventive care recommendations",
        icon: AlertCircle,
        metrics: "Early intervention alerts"
      }
    ]
  }
];

const FinancialServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 mb-8 glow-effect">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Intelligent Workflow Automation for{" "}
              <span className="gradient-text">Healthcare</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              AI agents that streamline patient care, accelerate claims processing, and optimize clinical operations—improving outcomes while reducing administrative burden
            </p>
            <Button asChild size="lg">
              <Link to="/request-demo">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Healthcare organizations face mounting pressure to deliver exceptional patient care while managing complex administrative workflows, regulatory compliance, and rising costs. Langslide's AI agents transform healthcare operations by automating patient intake, claims processing, clinical documentation, and revenue cycle management—allowing providers to focus on what matters most: patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Workflows Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {workflows.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {category.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mt-2">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card 
                      key={itemIndex}
                      className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:glow-effect group"
                    >
                      <CardHeader>
                        <div className="mb-3">
                          <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-primary">{item.metrics}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        badge="Transform Healthcare"
        title="Ready to revolutionize patient care?"
        description="Let Langslide's AI agents streamline your healthcare operations—from patient intake and claims processing to clinical documentation and revenue cycle management. Reduce administrative burden and focus on what matters most: exceptional patient care."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Schedule a Consultation"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      {/* Footer */}
      <footer className="py-12 md:py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to transform your healthcare operations?
            </p>
            <div className="inline-block px-8 py-4 rounded-lg bg-card border border-border">
              <p className="text-base text-foreground">
                <span className="text-muted-foreground">Contact us:</span>{" "}
                <a href="mailto:hello@langslide.com" className="gradient-text font-semibold hover:underline transition-all">
                  hello@langslide.com
                </a>
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Langslide. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const healthcareApps = [
  { name: "Epic", category: "EHR", logo: "https://logo.clearbit.com/epic.com" },
  { name: "Cerner", category: "EHR", logo: "https://logo.clearbit.com/cerner.com" },
  { name: "Allscripts", category: "EHR", logo: "https://logo.clearbit.com/allscripts.com" },
  { name: "NextGen", category: "EHR", logo: "https://logo.clearbit.com/nextgen.com" },
  { name: "Athenahealth", category: "EHR", logo: "https://logo.clearbit.com/athenahealth.com" },
  { name: "eClinicalWorks", category: "EHR", logo: "https://logo.clearbit.com/eclinicalworks.com" },
  { name: "Greenway Health", category: "EHR", logo: "https://logo.clearbit.com/greenwayhealth.com" },
  { name: "Meditech", category: "EHR", logo: "https://logo.clearbit.com/meditech.com" },
  { name: "CPSI", category: "EHR", logo: "https://logo.clearbit.com/cpsi.com" },
  { name: "Veracyte", category: "Diagnostics", logo: "https://logo.clearbit.com/veracyte.com" },
  { name: "Quest Diagnostics", category: "Diagnostics", logo: "https://logo.clearbit.com/questdiagnostics.com" },
  { name: "LabCorp", category: "Diagnostics", logo: "https://logo.clearbit.com/labcorp.com" },
  { name: "Anthem", category: "Insurance", logo: "https://logo.clearbit.com/anthem.com" },
  { name: "UnitedHealth", category: "Insurance", logo: "https://logo.clearbit.com/unitedhealthgroup.com" },
  { name: "Aetna", category: "Insurance", logo: "https://logo.clearbit.com/aetna.com" },
  { name: "Cigna", category: "Insurance", logo: "https://logo.clearbit.com/cigna.com" },
  { name: "Humana", category: "Insurance", logo: "https://logo.clearbit.com/humana.com" },
  { name: "Kaiser Permanente", category: "Healthcare", logo: "https://logo.clearbit.com/kp.org" },
  { name: "Mayo Clinic", category: "Healthcare", logo: "https://logo.clearbit.com/mayoclinic.org" },
  { name: "Cleveland Clinic", category: "Healthcare", logo: "https://logo.clearbit.com/clevelandclinic.org" },
  { name: "Johns Hopkins", category: "Healthcare", logo: "https://logo.clearbit.com/hopkinsmedicine.org" },
  { name: "Mount Sinai", category: "Healthcare", logo: "https://logo.clearbit.com/mountsinai.org" },
  { name: "UCLA Health", category: "Healthcare", logo: "https://logo.clearbit.com/uclahealth.org" },
  { name: "Stanford Health", category: "Healthcare", logo: "https://logo.clearbit.com/stanfordhealthcare.org" },
  { name: "Mass General", category: "Healthcare", logo: "https://logo.clearbit.com/massgeneral.org" },
  { name: "Cedars-Sinai", category: "Healthcare", logo: "https://logo.clearbit.com/cedars-sinai.org" },
  { name: "NYU Langone", category: "Healthcare", logo: "https://logo.clearbit.com/nyulangone.org" },
  { name: "Northwestern Medicine", category: "Healthcare", logo: "https://logo.clearbit.com/nm.org" },
  { name: "Rush University", category: "Healthcare", logo: "https://logo.clearbit.com/rush.edu" },
  { name: "UCSF Health", category: "Healthcare", logo: "https://logo.clearbit.com/ucsfhealth.org" }
];

const Healthcare = () => {
  const heroWorkflows = [
    { title: "Patient Mgmt", icon: Users, color: "bg-blue-500" },
    { title: "Claims", icon: FileText, color: "bg-green-500" },
    { title: "Clinical", icon: Stethoscope, color: "bg-purple-500" },
    { title: "Revenue", icon: DollarSign, color: "bg-orange-500" }
  ];

  const heroMetrics = [
    { value: "80%", label: "Time Saved", icon: Clock },
    { value: "95%", label: "Accuracy", icon: Zap },
    { value: "60%", label: "Cost Reduction", icon: TrendingUp }
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
                    Healthcare & Life Sciences
                  </span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  Enhance patient care{" "}
                  <span className="gradient-text">with intelligent automation</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From patient management to clinical documentation, automate complex healthcare workflows with AI agents that improve accuracy, reduce administrative burden, and enhance patient outcomes.
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
                  icon={Heart}
                  workflows={heroWorkflows}
                  metrics={heroMetrics}
                />
              </motion.div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Categories - Tabbed */}
      <section className="py-20 md:py-32 bg-white" id="workflows">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Workflow <span className="gradient-text">Automation</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Streamline operations across all areas
              </p>
            </div>

            {/* Workflow Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflows.map((workflow, index) => (
                <div key={index} className="space-y-6">
                  <div className="text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                      <workflow.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{workflow.title}</h3>
                    <p className="text-muted-foreground">{workflow.description}</p>
                  </div>
                  <div className="space-y-4">
                    {workflow.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <item.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-base mb-1">{item.title}</CardTitle>
                              <CardDescription className="text-sm">
                                {item.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                            <Zap className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">{item.metrics}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
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
                Trusted by Leading Healthcare Organizations
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Integrates with{" "}
                <span className="gradient-text">your healthcare stack</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect seamlessly with 30+ EHR, diagnostic, and insurance platforms
              </p>
            </div>
            <AutoLogoCarousel apps={healthcareApps} rows={3} speed={40} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTA 
        badge="Transform Healthcare"
        title="Ready to revolutionize patient care?"
        description="Let Langslide's AI agents streamline your healthcare operations—from patient intake and claims processing to clinical documentation and revenue cycle management. Reduce administrative burden and focus on what matters most: exceptional patient care."
        primaryButtonText="Contact Us"
        primaryButtonHref="mailto:hello@langslide.com"
        secondaryButtonText="Schedule a Consultation"
        secondaryButtonHref="mailto:hello@langslide.com"
      />

      <Footer />
    </div>
  );
};

export default Healthcare;
