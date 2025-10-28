import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
  icon?: React.ReactNode;
}

interface AnimatedStatsProps {
  stats: Stat[];
}

const AnimatedStats = ({ stats }: AnimatedStatsProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          stat={stat}
          index={index}
          inView={inView}
        />
      ))}
    </div>
  );
};

const StatCard = ({ stat, index, inView }: { stat: Stat; index: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(stat.value);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        return next >= numericValue ? numericValue : next;
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, [inView, numericValue]);

  return (
    <motion.div
      className="relative bg-white rounded-2xl p-8 border-2 border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300" />
      
      <div className="relative">
        {stat.icon && (
          <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10">
            {stat.icon}
          </div>
        )}
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-4xl md:text-5xl font-bold text-foreground">
            {inView ? Math.round(count) : 0}
          </span>
          {stat.suffix && (
            <span className="text-2xl font-semibold text-primary">{stat.suffix}</span>
          )}
        </div>
        <p className="text-base text-muted-foreground">{stat.label}</p>
      </div>
    </motion.div>
  );
};

export default AnimatedStats;

