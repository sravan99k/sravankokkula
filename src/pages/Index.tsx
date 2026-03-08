import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Terminal, Zap, ExternalLink } from "lucide-react";

const techStack = ["Python", "React", "AI/ML", "OpenAI", "Tailwind", "Firebase", "SQL", "NumPy", "Pandas", "Git"];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

const stagger = (i: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay: i * 0.08 },
});

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* ===== HERO ===== */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Decorative grid dots */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        
        <div className="container relative z-10 py-20">
          <motion.div {...stagger(0)} className="mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              building in public
            </div>
          </motion.div>

          <motion.h1
            {...stagger(1)}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tighter leading-[0.9] mb-8"
          >
            Sravan
            <br />
            Kumar<span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            {...stagger(2)}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12"
          >
            AI Product Engineer — I research problems, prototype fast, and ship AI systems that actually work.
          </motion.p>

          <motion.div {...stagger(3)} className="flex items-center gap-6">
            <a
              href="mailto:sravan@example.com"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:brightness-110 transition-all text-sm"
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="flex items-center gap-1">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:sravan@example.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200"
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== BENTO SECTION ===== */}
      <section className="container pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Current Focus */}
          <motion.div {...stagger(0)} viewport={{ once: true }} whileInView="animate" initial="initial"
            className="bg-card border border-border rounded-3xl p-8 flex flex-col justify-between min-h-[200px] hover:border-primary/30 transition-colors duration-300"
          >
            <Terminal className="w-6 h-6 text-primary" />
            <div className="mt-auto">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Now building</p>
              <p className="text-xl font-semibold text-foreground">AI mental health platform</p>
              <p className="text-sm text-muted-foreground mt-1">at Saap Technologies</p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div {...stagger(1)} viewport={{ once: true }} whileInView="animate" initial="initial"
            className="bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-colors duration-300"
          >
            <div className="grid grid-cols-3 gap-6 h-full items-center">
              {[
                { num: "3+", label: "Products shipped" },
                { num: "AI", label: "Core focus" },
                { num: "0→1", label: "Builder" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-bold text-foreground mb-1">{s.num}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Approach */}
          <motion.div {...stagger(2)} viewport={{ once: true }} whileInView="animate" initial="initial"
            className="bg-card border border-border rounded-3xl p-8 hover:border-primary/30 transition-colors duration-300"
          >
            <div className="flex flex-col justify-between h-full">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-6">My approach</p>
              <div className="space-y-3">
                {["Research deeply", "Prototype in days", "Ship relentlessly"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TECH MARQUEE ===== */}
      <section className="border-y border-border py-5 overflow-hidden mb-24">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="mx-6 text-sm font-mono text-muted-foreground/60 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section className="container pb-32">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-xs font-mono text-primary uppercase tracking-[0.25em] mb-10">Experience</h2>
        </motion.div>

        <div className="space-y-5">
          {[
            {
              company: "Saap Technologies",
              role: "Software Developer",
              period: "2025 — Present",
              desc: "Building Novo Wellness — an AI-powered student mental health platform. Shipped an OpenAI chatbot, risk prediction engine, and student-facing tools in a lean team.",
              tech: ["React", "Tailwind", "OpenAI API", "Python"],
            },
            {
              company: "Novo Neuro Tech",
              role: "Software Developer",
              period: "Dec 2024 — May 2025",
              desc: "Built an AI neurological risk prediction system. Doctor uploads a brain scan → system returns disease risk percentage using ML models.",
              tech: ["Python", "Machine Learning", "React", "Computer Vision"],
            },
            {
              company: "Lyric Video Makers",
              role: "Web Developer",
              period: "Freelance",
              desc: "Designed and shipped a production landing page for a video production studio — featuring testimonials, portfolio, and pricing.",
              tech: ["React", "Tailwind", "Firebase"],
            },
          ].map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-7 md:p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-primary text-sm font-medium mt-0.5">{exp.role}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1.5 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">{exp.desc}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-primary/8 text-primary border border-primary/15">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="container pb-32">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-xs font-mono text-primary uppercase tracking-[0.25em] mb-3">Projects</h2>
          <p className="text-muted-foreground text-lg mb-10">Things I've built from scratch.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Featured project — full width */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 group bg-card border border-border rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all duration-300 relative"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-xs font-mono text-primary font-medium">Featured · Live</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight">
              Novo Wellness
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Full-stack AI mental health platform for schools. Students chat with an empathetic AI chatbot → system predicts risk scores and alerts counselors in real-time.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {["AI Chatbot", "Risk Prediction", "Admin Dashboard", "Real-time Alerts"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                  <Zap className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind", "OpenAI", "Python", "Firebase"].map((t) => (
                <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-muted-foreground">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="group bg-card border border-border rounded-2xl p-7 md:p-8 hover:border-primary/30 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-mono text-primary">Shipped</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Novo Neuro Tech
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
              Upload a brain scan → get a risk percentage for neurological disorders. AI-powered diagnostic tool built for doctors.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "ML", "React", "Computer Vision"].map((t) => (
                <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-muted-foreground">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="group bg-card border border-border rounded-2xl p-7 md:p-8 hover:border-primary/30 transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-mono text-primary">Live</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              Lyric Video Makers
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
              High-converting landing page for a creative video production studio with testimonials, portfolio, and pricing.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Tailwind", "Firebase"].map((t) => (
                <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-muted-foreground">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="container pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/5 rounded-full blur-[100px]" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight relative">
            Let's build something<span className="text-primary">.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
            Open to AI products, research experiments, and ambitious ideas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:sravan@example.com"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:brightness-110 transition-all text-sm"
            >
              <Mail className="w-4 h-4" />
              Say Hello
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-secondary transition-all text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-full hover:bg-secondary transition-all text-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="container pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 <span className="text-foreground font-medium">Sravan Kumar</span>
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            Designed & coded with care
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
