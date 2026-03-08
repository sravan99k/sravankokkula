const tags = [
  "Python", "AI Engineering", "Backend Systems",
  "Product Prototyping", "Data Analysis", "AI Research",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-foreground mb-6">About</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Final-year Computer Science student focused on AI product engineering,
            backend development, and rapid prototyping. I thrive at the intersection of
            research and building — identifying real problems, designing solutions, and
            shipping working software.
          </p>
          <p>
            I research problems deeply, build MVPs quickly, integrate AI into real
            products, and deploy working solutions that create genuine impact.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs font-medium bg-muted text-foreground rounded-md border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
