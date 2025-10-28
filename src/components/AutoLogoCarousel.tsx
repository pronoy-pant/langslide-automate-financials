import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

interface App {
  name: string;
  category?: string;
  logo?: string;
}

interface AutoLogoCarouselProps {
  apps: App[];
  rows?: 1 | 2 | 3;
  speed?: number;
}

const AutoLogoCarousel = ({ apps, rows = 2, speed = 30 }: AutoLogoCarouselProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getRowCount = () => {
    if (typeof window === 'undefined') return rows;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return rows;
  };

  const [currentRows, setCurrentRows] = useState(getRowCount());

  useEffect(() => {
    const handleResize = () => setCurrentRows(getRowCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Build per-row sequences with offsets so each row shows different logos
  const perRowSequences = useMemo(() => {
    if (!apps || apps.length === 0) return Array.from({ length: currentRows }, () => [] as App[]);
    const baseLength = apps.length;
    const sequences: App[][] = [];
    for (let rowIndex = 0; rowIndex < currentRows; rowIndex++) {
      const offset = Math.floor((baseLength / currentRows) * rowIndex) % baseLength;
      const offsetSlice = [...apps.slice(offset), ...apps.slice(0, offset)];
      // duplicate enough times to ensure seamless scroll
      const repeated = [...offsetSlice, ...offsetSlice, ...offsetSlice];
      sequences.push(repeated);
    }
    return sequences;
  }, [apps, currentRows]);

  return (
    <div className="relative overflow-hidden py-8">
      <div className="space-y-6">
        {perRowSequences.map((sequence, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-8"
            animate={{
              x: mounted ? [0, -3200] : 0,
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: speed,
                ease: "linear",
              },
            }}
            style={{ width: "fit-content" }}
          >
            {sequence.map((app, index) => (
              <motion.div
                key={`${app.name}-${rowIndex}-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center px-6 hover:scale-110 transition-transform duration-300 group"
              >
                <div className="w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                  <div className="w-20 h-12 flex items-center justify-center">
                    {app.logo ? (
                      <img 
                        src={app.logo} 
                        alt={app.name} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className="w-full h-full rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"
                      style={{ display: app.logo ? 'none' : 'flex' }}
                    >
                      <span className="text-lg font-bold text-primary">
                        {app.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AutoLogoCarousel;
