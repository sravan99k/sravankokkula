import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "SQL", "TypeScript"],
  },
  {
    category: "AI & ML",
    skills: ["OpenAI API", "Machine Learning", "Pandas", "NumPy", "Computer Vision"],
  },
  {
    category: "Frontend",
    skills: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Infra",
    skills: ["Firebase", "Git", "API Design", "Deployment"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-12">
            Tech Stack
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-md bg-card border border-border text-secondary-foreground font-medium hover:border-primary/40 hover:text-foreground transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
