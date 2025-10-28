import { motion } from "framer-motion";
import { Database, Sparkles, CheckCircle, Zap, ArrowRight } from "lucide-react";

const HeroDashboard = () => {
  return (
    <div className="relative w-full h-[400px] lg:h-[500px]">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-3xl" />
      
      <div className="relative h-full glass rounded-3xl shadow-xl border overflow-hidden p-6 flex flex-col gap-4">
        
        {/* Node 1 - Data Source */}
        <motion.div
          className="absolute top-[10%] left-[5%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl p-3 shadow-lg border-2 border-border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Data Sources</div>
                <div className="text-xs text-muted-foreground">APIs & Systems</div>
                <div className="text-xs text-primary/60 mt-1">30+ Integrations</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Node 2 - AI Agent (with pulse) */}
        <motion.div
          className="absolute top-[10%] left-[38%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-2xl bg-primary/20"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-3 shadow-xl border-2 border-primary/50 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">AI Agents</div>
                  <div className="text-xs text-primary/70">Processing</div>
                  <div className="text-xs text-primary/50 mt-1">Real-time</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Node 3 - Process */}
        <motion.div
          className="absolute top-[45%] left-[5%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-3 shadow-lg border-2 border-border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600">
                <ArrowRight className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Workflow</div>
                <div className="text-xs text-muted-foreground">Execution</div>
                <div className="text-xs text-teal-600/70 mt-1">Automated</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Node 4 - Complete */}
        <motion.div
          className="absolute top-[45%] left-[35%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-3 shadow-lg border-2 border-border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Complete</div>
                <div className="text-xs text-muted-foreground">Success</div>
                <div className="text-xs text-green-600/70 mt-1">Verified</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Node 5 - Deliver (floating) */}
        <motion.div
          className="absolute top-[20%] left-[72%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 1], y: [20, 0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-3 shadow-xl border-2 border-primary/30 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Deliver</div>
                <div className="text-xs text-muted-foreground">Results</div>
                <div className="text-xs text-orange-600/70 mt-1">Instant</div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {/* Line from Data Sources to AI Agents */}
          <motion.path
            d="M 15% 25% Q 25% 15% 35% 25%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          {/* Line from AI Agents to Workflow */}
          <motion.path
            d="M 35% 35% Q 20% 40% 15% 50%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          
          {/* Line from Workflow to Complete */}
          <motion.path
            d="M 20% 55% Q 25% 50% 40% 55%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
          
          {/* Line from Complete to Deliver */}
          <motion.path
            d="M 40% 50% Q 60% 30% 75% 35%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2 }}
          />
        </svg>
        <div className="absolute bottom-4 left-4 right-4 flex gap-3">
          <motion.div
            className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-md border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Time Saved</div>
            <div className="text-lg font-bold text-foreground">80%</div>
          </motion.div>
          <motion.div
            className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-md border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="text-xs text-muted-foreground mb-1">Accuracy</div>
            <div className="text-lg font-bold text-foreground">99.9%</div>
          </motion.div>
          <motion.div
            className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-md border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="text-xs text-muted-foreground mb-1">ROI</div>
            <div className="text-lg font-bold text-foreground">10x</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;
