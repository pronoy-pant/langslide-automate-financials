import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HelpCircle, Sparkles, Shield, Plug, Building2, Zap } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const icons = [Sparkles, Shield, Zap, Plug, Building2, Zap];

const faqs = [
  {
    question: "What are AI agents and how do they work?",
    answer: "AI agents are intelligent systems that autonomously execute multi-step workflows. They understand context, make decisions, and complete complex tasks like document processing and data extraction without human intervention."
  },
  {
    question: "Do I need coding skills to build AI agents?",
    answer: "No coding required. Build powerful AI agents through our intuitive interface. Advanced APIs available for developers who need more control."
  },
  {
    question: "What can I automate with Langslide?",
    answer: "Automate document processing, data extraction, customer service, claims processing, compliance monitoring, and more across industries."
  },
  {
    question: "What tools does Langslide connect to?",
    answer: "Langslide integrates with 500+ enterprise tools including Salesforce, SAP, ServiceNow, Slack, Microsoft Office, and Google Workspace."
  },
  {
    question: "What kinds of companies use Langslide?",
    answer: "Langslide serves enterprises across financial services, healthcare, insurance, media & marketing—from mid-sized companies to Fortune 500 organizations."
  },
  {
    question: "How is Langslide different from other AI tools?",
    answer: "We specialize in end-to-end workflow automation. Our AI agents execute complex, multi-step processes autonomously with enterprise-grade reliability and compliance."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Title & Description */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-primary/10">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                Questions?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Common questions answered. Can't find what you're looking for?{" "}
                <Link to="/contact-us" className="text-primary font-semibold hover:underline">
                  Contact us
                </Link>
                .
              </p>
            </motion.div>
            
            {/* Right Column - Accordion */}
            <div className="lg:col-span-3">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqs.map((faq, index) => {
                  const Icon = icons[index] || HelpCircle;
                  return (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-border rounded-xl px-6 bg-white hover:border-primary/50 transition-all duration-300 group"
                    >
                      <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-6 group-hover:text-primary transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="flex-1">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-6 pl-14">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
