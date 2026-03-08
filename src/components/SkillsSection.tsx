const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    category: "AI & Data",
    skills: ["Pandas", "NumPy", "Machine Learning", "AI APIs"],
  },
  {
    category: "Web",
    skills: ["React", "TailwindCSS", "Firebase"],
  },
  {
    category: "Engineering Tools",
    skills: ["Git", "API Integration", "Deployment Platforms"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-foreground mb-10">Tech Stack</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="p-5 rounded-xl border border-border bg-card">
              <h3 className="text-sm font-semibold text-foreground mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-md bg-muted border border-border text-muted-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
