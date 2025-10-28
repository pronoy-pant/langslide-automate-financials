import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface InteractiveFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  metrics?: string;
  expandedContent?: React.ReactNode;
}

const InteractiveFeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  metrics,
  expandedContent 
}: InteractiveFeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl border-2 border-border bg-white hover:border-primary/50 transition-all duration-300 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ y: -4, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-sm" />
      </div>

      <div className="relative p-6">
        {/* Icon with animation */}
        <div className="mb-4 relative">
          <motion.div
            className="inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors"
            animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:gradient-text transition-all">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {/* Metrics badge */}
        {metrics && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 gradient-text font-semibold text-xs mb-4">
            {metrics}
          </div>
        )}

        {/* Expandable content */}
        {expandedContent && (
          <motion.div
            initial={false}
            animate={isExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-border mt-4">
              {expandedContent}
            </div>
          </motion.div>
        )}

        {/* Expand indicator */}
        {expandedContent && (
          <motion.div
            className="flex items-center gap-2 gradient-text text-sm font-medium mt-4"
            animate={isExpanded ? { opacity: 1 } : { opacity: 0.7 }}
          >
            <span>{isExpanded ? "Show Less" : "Learn More"}</span>
            <svg
              className="w-4 h-4 transition-transform duration-300"
              style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default InteractiveFeatureCard;


