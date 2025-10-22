import React from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const customerStories = [
  {
    company: "TechCorp",
    logo: "TC",
    title: "How TechCorp is powering 4x team growth with Langslide",
    description: "TechCorp uses Langslide AI agents to scale their operations team 4x while maintaining service velocity and achieving 100% adoption across their growing organization.",
    metric: "4x team growth",
    bgColor: "from-blue-500/10 to-cyan-500/10"
  },
  {
    company: "HealthPlus",
    logo: "HP",
    title: "HealthPlus uses Langslide for AI adoption of 3,000 employees",
    description: "HealthPlus achieved 70% weekly usage across 3,000 employees by treating AI transformation as a cultural imperative, not just tool deployment.",
    metric: "70% weekly usage",
    bgColor: "from-green-500/10 to-emerald-500/10"
  },
  {
    company: "RetailMax",
    logo: "RM",
    title: "RetailMax partners with Langslide to upgrade its customer experience",
    description: "RetailMax streamlines operations with Langslide's AI agents, saving 50,000 hours yearly and transforming customer service efficiency.",
    metric: "50,000 hours saved",
    bgColor: "from-purple-500/10 to-pink-500/10"
  },
  {
    company: "FinanceFlow",
    logo: "FF",
    title: "FinanceFlow automates 90% of compliance reporting with Langslide",
    description: "FinanceFlow leverages Langslide AI agents to automate regulatory reporting and compliance monitoring, reducing manual effort by 90%.",
    metric: "90% automation achieved",
    bgColor: "from-orange-500/10 to-amber-500/10"
  },
  {
    company: "LogisticsPro",
    logo: "LP",
    title: "LogisticsPro cuts delivery times by 35% using Langslide",
    description: "LogisticsPro optimizes routing and warehouse operations with Langslide's intelligent automation, achieving 35% faster deliveries and reducing costs.",
    metric: "35% faster delivery",
    bgColor: "from-indigo-500/10 to-violet-500/10"
  }
];

export const CustomerStories = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % (customerStories.length - 2));
  };
  
  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + (customerStories.length - 2)) % (customerStories.length - 2));
  };
  
  const visibleStories = customerStories.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Customer Stories
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Leading enterprises are already transforming their operations with Langslide.
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full" onClick={prevStory}>
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={nextStory}>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visibleStories.map((story, index) => (
              <Card 
                key={index}
                className="p-8 bg-white border border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:scale-105"
              >
                <div className={`w-full aspect-video rounded-xl bg-gradient-to-br ${story.bgColor} mb-6 flex items-center justify-center`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{story.logo}</span>
                    </div>
                    <span className="text-2xl font-bold text-foreground">{story.company}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs">
                    {story.metric}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {story.title}
                </h3>

                <p className="text-base text-muted-foreground leading-relaxed">
                  {story.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
