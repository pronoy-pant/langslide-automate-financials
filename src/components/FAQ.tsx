import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are AI agents and how do they work?",
    answer: "AI agents are intelligent systems that can autonomously execute multi-step workflows on your behalf. Unlike simple chatbots, Langslide's AI agents understand context, make decisions, interact with your tools and data, and complete complex tasks from start to finish—such as processing documents, extracting insights, and updating systems—all without human intervention."
  },
  {
    question: "Do I need coding skills to build AI agents?",
    answer: "No coding required. Langslide is designed for both technical and non-technical users. You can build powerful AI agents through our intuitive interface by simply describing your workflow. For developers who want more control, we also offer advanced APIs and SDKs to create highly customized, stateful agents with sophisticated logic."
  },
  {
    question: "What can I automate with Langslide?",
    answer: "Langslide can automate a wide range of enterprise workflows including document processing, data extraction, customer service, claims processing, compliance monitoring, content generation, and more. Our AI agents handle complex, multi-step processes across industries like financial services, healthcare, and media & marketing."
  },
  {
    question: "What tools does Langslide connect to?",
    answer: "Langslide integrates with popular enterprise tools including Salesforce, SAP, ServiceNow, Slack, Microsoft Office, Google Workspace, and many more. We offer pre-built connectors for common systems and can create custom integrations for your specific technology stack through our flexible API."
  },
  {
    question: "What kinds of companies use Langslide?",
    answer: "Langslide serves enterprises across industries including financial services, healthcare, insurance, media & marketing, and more. Our customers range from mid-sized companies to Fortune 500 organizations looking to automate complex workflows and scale their operations with AI."
  },
  {
    question: "How is Langslide different from other AI tools?",
    answer: "Unlike generic AI tools, Langslide specializes in end-to-end workflow automation. Our AI agents don't just answer questions—they execute complex, multi-step processes autonomously. We focus on enterprise-grade reliability, compliance, and seamless integration with existing systems, making us the trusted choice for mission-critical automation."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            
            {/* Left Column - Title & Description */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                FAQ
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Have a question? Here are the answers to our most frequently asked questions. If you don't find what you're looking for make sure to{" "}
                <Link to="/contact-us" className="text-primary font-semibold hover:underline">
                  contact us
                </Link>
                .
              </p>
            </div>
            
            {/* Right Column - Accordion */}
            <div className="lg:col-span-3">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 bg-white hover:border-primary/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
