import { Lightbulb } from "lucide-react";

const items = [
  "Rapid AI prototyping",
  "AI product experimentation",
  "Backend system design",
  "AI-powered web applications",
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-foreground mb-6">Research & Experiments</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I focus on researching real problems and building working prototypes using AI
          tools — moving from idea to deployed product as quickly as possible.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-secondary hover:shadow-sm transition-shadow"
            >
              <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
