import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Novo Wellness",
    description: "AI-powered mental health platform for school students.",
    features: ["AI chatbot", "Risk prediction system", "Student support tools"],
    stack: ["React", "Tailwind", "OpenAI", "Python"],
  },
  {
    title: "Novo Neuro Tech",
    description: "AI risk prediction system for neurological disorders. Doctor uploads scan → system predicts risk percentage.",
    features: ["Image-based prediction", "Doctor interface", "Risk analysis"],
    stack: ["Python", "Machine Learning", "React"],
  },
  {
    title: "Lyric Video Makers",
    description: "Landing page for a creative video production studio.",
    features: ["Testimonials", "Portfolio showcase", "Pricing section"],
    stack: ["React", "Tailwind", "Firebase"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-foreground mb-10">Selected Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-border bg-card hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
              <ul className="space-y-1 mb-4">
                {project.features.map((f, j) => (
                  <li key={j} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.stack.map((s) => (
                  <span key={s} className="text-xs px-2 py-0.5 rounded bg-muted border border-border text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
              <button className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                View Details <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
