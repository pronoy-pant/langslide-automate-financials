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
          <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <div className="h-2 w-24 bg-foreground/10 rounded mb-2" />
                <div className="h-2 w-16 bg-foreground/5 rounded" />
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
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-4 shadow-xl border-2 border-primary/50 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="h-2 w-28 bg-primary/30 rounded mb-2" />
                  <div className="h-2 w-20 bg-primary/20 rounded" />
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
          <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600">
                <ArrowRight className="w-5 h-5" />
              </div>
              <div>
                <div className="h-2 w-20 bg-foreground/10 rounded mb-2" />
                <div className="h-2 w-14 bg-foreground/5 rounded" />
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
          <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="h-2 w-20 bg-foreground/10 rounded mb-2" />
                <div className="h-2 w-14 bg-foreground/5 rounded" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Node 5 - Deliver (floating) */}
        <motion.div
          className="absolute top-[20%] left-[80%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 1], y: [20, 0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-4 shadow-xl border-2 border-primary/30 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="h-2 w-24 bg-foreground/10 rounded mb-2" />
                <div className="h-2 w-16 bg-foreground/5 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Floating Metrics */}
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
