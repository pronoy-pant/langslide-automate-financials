import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FunctionHeroDashboardProps {
  icon: LucideIcon;
  workflows: Array<{
    title: string;
    icon: LucideIcon;
    color: string;
  }>;
  metrics: Array<{
    value: string;
    label: string;
    icon: LucideIcon;
  }>;
}

const FunctionHeroDashboard = ({ icon: MainIcon, workflows, metrics }: FunctionHeroDashboardProps) => {
  return (
    <div className="relative w-full h-[400px] lg:h-[500px]">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 rounded-3xl" />
      
      <div className="relative h-full glass rounded-3xl shadow-xl border overflow-hidden p-6 flex flex-col gap-4">
        
        {/* Main Function Icon */}
        <motion.div
          className="absolute top-[8%] left-[8%]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
              <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <MainIcon className="w-6 h-6" />
                  </div>
              <div>
                <div className="text-sm font-semibold text-foreground">AI Agents</div>
                <div className="text-xs text-muted-foreground">Processing</div>
                <div className="text-xs text-primary/60 mt-1">Active</div>
              </div>
                </div>
              </div>
        </motion.div>

        {/* AI Agent Processing */}
        <motion.div
          className="absolute top-[8%] left-[45%]"
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
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-md">
                  <MainIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">Active</div>
                  <div className="text-xs text-primary/70">Processing</div>
                  <div className="text-xs text-primary/50 mt-1">Real-time</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Workflow Nodes */}
        {workflows.map((workflow, index) => {
          const WorkflowIcon = workflow.icon;
          const positions = [
            { top: "45%", left: "8%" },
            { top: "45%", left: "42%" },
            { top: "75%", left: "8%" },
            { top: "75%", left: "42%" }
          ];
          const position = positions[index % positions.length];

          return (
            <motion.div
              key={workflow.title}
              className="absolute"
              style={{ top: position.top, left: position.left }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-3 shadow-lg border-2 border-border hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${workflow.color}`}>
                    <WorkflowIcon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">{workflow.title}</div>
                    <div className="text-xs text-muted-foreground">Workflow</div>
                    <div className="text-xs text-primary/60 mt-1">Automated</div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {/* Line from AI Agents to Active Processing */}
          <motion.path
            d="M 15% 20% Q 30% 15% 50% 20%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          {/* Line from Active Processing to Workflow 1 */}
          <motion.path
            d="M 50% 30% Q 30% 50% 15% 50%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          
          {/* Line from Active Processing to Workflow 2 */}
          <motion.path
            d="M 50% 30% Q 45% 50% 50% 50%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
          
          {/* Line from Workflow 1 to Workflow 3 */}
          <motion.path
            d="M 15% 60% Q 15% 80% 15% 80%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
          
          {/* Line from Workflow 2 to Workflow 4 */}
          <motion.path
            d="M 50% 60% Q 50% 80% 50% 80%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.7 }}
          />
        </svg>

        {/* Metrics Cards */}
        {metrics.map((metric, index) => {
          const MetricIcon = metric.icon;
          const positions = [
            { top: "15%", right: "8%" },
            { top: "50%", right: "8%" },
            { top: "80%", right: "8%" }
          ];
          const position = positions[index % positions.length];

          return (
            <motion.div
              key={metric.label}
              className="absolute"
              style={{ top: position.top, right: position.right }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className="bg-white rounded-xl p-3 shadow-lg border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <MetricIcon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold gradient-text">{metric.value}</span>
                </div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            </motion.div>
          );
        })}

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M 120 100 Q 200 150 280 100"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.path
            d="M 120 200 Q 200 250 280 200"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </svg>
      </div>
    </div>
  );
};

export default FunctionHeroDashboard;
