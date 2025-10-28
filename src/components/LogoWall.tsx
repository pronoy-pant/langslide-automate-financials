import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface Logo {
  name: string;
  category: string;
  Icon?: IconType;
}

interface LogoWallProps {
  logos: Logo[];
}

const LogoWall = ({ logos }: LogoWallProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-12">
      <motion.div
        className="flex gap-8"
        animate={{
          x: mounted ? [0, -3200] : 0,
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        }}
        style={{ width: "fit-content" }}
      >
        {duplicatedLogos.map((logo, index) => {
          const Icon = logo.Icon;
          return (
            <motion.div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center px-6 hover:scale-110 transition-transform duration-300 group"
            >
              <div className="w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
                <div className="w-20 h-12 flex items-center justify-center">
                  {Icon && <Icon className="w-16 h-16 text-foreground" />}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default LogoWall;

