import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Novo Wellness",
    tagline: "AI mental health platform for schools",
    description:
      "Full-stack AI platform that helps schools identify and support students struggling with mental health. Features an empathetic AI chatbot and predictive risk scoring.",
    features: ["AI-powered student chatbot", "Risk prediction engine", "School admin dashboard", "Real-time alerts"],
    stack: ["React", "Tailwind", "OpenAI", "Python", "Firebase"],
    status: "Live",
  },
  {
    title: "Novo Neuro Tech",
    tagline: "AI neurological risk prediction",
    description:
      "Upload a brain scan → get a risk percentage for neurological disorders. Built for doctors who need fast, AI-assisted diagnostic support.",
    features: ["Image-based ML prediction", "Doctor interface", "Epilepsy & Parkinson's detection"],
    stack: ["Python", "Machine Learning", "React", "Computer Vision"],
    status: "Shipped",
  },
  {
    title: "Lyric Video Makers",
    tagline: "Production studio landing page",
    description:
      "High-converting landing page for a creative video production business. Clean design with social proof and clear pricing.",
    features: ["Client testimonials", "Video portfolio", "Pricing tiers"],
    stack: ["React", "Tailwind", "Firebase"],
    status: "Live",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Products I've built from scratch — from problem research to deployed solution.
          </p>

          <div className="space-y-2">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group p-6 rounded-lg hover:bg-card transition-colors duration-300 cursor-default"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-foreground font-semibold text-xl group-hover:text-primary transition-colors duration-200 flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200" />
                    </h3>
                    <p className="text-sm text-primary font-medium mt-0.5">{project.tagline}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1 flex-shrink-0">
                    {project.status}
                  </span>
                </div>

                <p className="text-secondary-foreground leading-relaxed mb-4 max-w-2xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-4">
                  {project.features.map((f, j) => (
                    <span
                      key={j}
                      className="text-sm text-muted-foreground flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {s}
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

export default ProjectsSection;
