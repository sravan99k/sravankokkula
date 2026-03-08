import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Saap Technologies",
    role: "Software Developer",
    period: "2025 – Present",
    description: "Worked on Novo Wellness, an AI-powered student mental health platform.",
    highlights: [
      "Built frontend using React and Tailwind",
      "Implemented OpenAI-based chatbot for student interaction",
      "Developed rule-based mental health risk prediction",
      "Collaborated in a small engineering team to ship working MVPs",
    ],
  },
  {
    company: "Novo Neuro Tech",
    role: "Software Developer",
    period: "Dec 2024 – May 2025",
    description: "Developed an AI-assisted neurological disease risk prediction system.",
    highlights: [
      "Image-based risk prediction for epilepsy and Parkinson's",
      "Built doctor interface for scan uploads",
      "Created system returning risk percentage predictions",
    ],
  },
  {
    company: "Lyric Video Makers",
    role: "Web Developer",
    period: "",
    description: "Built a landing page for a video production business featuring testimonials, portfolio videos, and pricing information.",
    highlights: [],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-foreground mb-10">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-border bg-secondary hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-muted text-primary">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                    {exp.period && (
                      <span className="text-xs font-medium text-muted-foreground">{exp.period}</span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-primary mb-2">{exp.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                  {exp.highlights.length > 0 && (
                    <ul className="space-y-1">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
