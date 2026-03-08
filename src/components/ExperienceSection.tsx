import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "Saap Technologies",
    role: "Software Developer",
    period: "2025 — Present",
    description:
      "Building Novo Wellness — an AI-powered mental health platform for schools. Leading frontend engineering and AI integration.",
    highlights: [
      "Architected React + Tailwind frontend serving student mental health workflows",
      "Built an OpenAI-powered chatbot that conducts empathetic student conversations",
      "Engineered rule-based risk prediction system flagging at-risk students",
      "Shipped production MVPs in a lean 4-person engineering team",
    ],
    tech: ["React", "Tailwind", "OpenAI API", "Python"],
  },
  {
    company: "Novo Neuro Tech",
    role: "Software Developer",
    period: "Dec 2024 — May 2025",
    description:
      "Built an AI-assisted neurological disease risk prediction system. Doctor uploads a brain scan → system returns risk percentage.",
    highlights: [
      "Developed image-based ML models for epilepsy and Parkinson's risk prediction",
      "Built clean doctor-facing interface for scan uploads and result visualization",
      "Created end-to-end pipeline: image upload → model inference → risk output",
    ],
    tech: ["Python", "Machine Learning", "React", "Computer Vision"],
  },
  {
    company: "Lyric Video Makers",
    role: "Web Developer",
    period: "Freelance",
    description:
      "Designed and shipped a production landing page for a video production studio — featuring client testimonials, portfolio showcase, and pricing.",
    highlights: [],
    tech: ["React", "Tailwind", "Firebase"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-12">
            Experience
          </h2>

          <div className="space-y-2">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group grid md:grid-cols-[180px_1fr] gap-4 p-6 rounded-lg hover:bg-card transition-colors duration-300 cursor-default"
              >
                <div className="text-sm font-mono text-muted-foreground pt-1">
                  {exp.period}
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors duration-200 flex items-center gap-2">
                    {exp.role} · {exp.company}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </h3>
                  <p className="text-secondary-foreground mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
