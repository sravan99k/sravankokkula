import { motion } from "framer-motion";
import { Zap, Brain, Server, Globe } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Rapid AI Prototyping",
    description: "From idea to working prototype in days, not months.",
  },
  {
    icon: Brain,
    title: "AI Product Experimentation",
    description: "Testing AI approaches against real-world problems.",
  },
  {
    icon: Server,
    title: "Backend System Design",
    description: "Architecting systems that scale with user growth.",
  },
  {
    icon: Globe,
    title: "AI-Powered Web Apps",
    description: "Full-stack applications with intelligent features.",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            I focus on the full loop — researching real problems, building working prototypes, 
            and shipping products that people actually use.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-300"
              >
                <item.icon className="w-5 h-5 text-primary mb-4" />
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
