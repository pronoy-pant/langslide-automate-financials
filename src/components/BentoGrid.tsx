import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface BentoCard {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

interface BentoGridProps {
  cards: BentoCard[];
}

const BentoGrid = ({ cards }: BentoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={index}
            className={`group relative overflow-hidden rounded-2xl border-2 border-border bg-white hover:border-primary/50 transition-all duration-300 ${card.className || ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: card.delay || index * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300" />
            
            <div className="relative p-6 h-full flex flex-col">
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {card.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BentoGrid;

