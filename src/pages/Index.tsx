import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Terminal, Sparkles, Zap, Brain } from "lucide-react";

const techMarquee = ["Python", "React", "AI/ML", "OpenAI", "Tailwind", "Firebase", "SQL", "NumPy", "Pandas", "Git"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      {/* ===== BENTO GRID ===== */}
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-auto">

        {/* ── HERO CARD (spans 4 cols) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4 bg-card border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden group"
        >
          <div className="absolute top-6 right-6 flex gap-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:sravan@example.com" className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            building in public
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-4">
            Sravan Kumar
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            AI Product Engineer. I research problems, build prototypes fast, and ship AI systems that work in the real world.
          </p>
        </motion.div>

        {/* ── STATUS CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 bg-card border border-border rounded-2xl p-6 flex flex-col justify-between"
        >
          <Terminal className="w-5 h-5 text-primary mb-4" />
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-1">current focus</p>
            <p className="text-foreground font-semibold">Building AI products</p>
            <p className="text-sm text-muted-foreground mt-1">at Saap Technologies</p>
          </div>
        </motion.div>

        {/* ── STATS ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-2 bg-card border border-border rounded-2xl p-6 grid grid-cols-3 gap-4"
        >
          {[
            { num: "3+", label: "Products" },
            { num: "AI", label: "Core" },
            { num: "0→1", label: "Builder" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-foreground">{s.num}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 bg-card border border-border rounded-2xl p-6 flex flex-col justify-between"
        >
          <Sparkles className="w-5 h-5 text-primary mb-4" />
          <div>
            <p className="text-xs font-mono text-muted-foreground mb-1">approach</p>
            <p className="text-foreground font-semibold text-sm leading-relaxed">
              Research deeply → Prototype fast → Ship relentlessly
            </p>
          </div>
        </motion.div>

        {/* ── TECH MARQUEE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="md:col-span-6 bg-card border border-border rounded-2xl py-4 overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span
                key={i}
                className="mx-4 text-sm font-mono text-muted-foreground flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-primary" />
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── EXPERIENCE SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-6 pt-4"
        >
          <h2 className="text-xs font-mono text-primary uppercase tracking-[0.2em]">Experience</h2>
        </motion.div>

        {/* ── EXPERIENCE CARDS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="md:col-span-3 bg-card border border-border rounded-2xl p-6 group hover:border-primary/30 transition-colors duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-foreground font-semibold text-lg">Saap Technologies</h3>
              <p className="text-primary text-sm font-medium">Software Developer</p>
            </div>
            <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">2025–Now</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Building Novo Wellness — an AI mental health platform. Shipped OpenAI chatbot, risk prediction engine, and student-facing tools.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["React", "Tailwind", "OpenAI", "Python"].map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="md:col-span-3 bg-card border border-border rounded-2xl p-6 group hover:border-primary/30 transition-colors duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-foreground font-semibold text-lg">Novo Neuro Tech</h3>
              <p className="text-primary text-sm font-medium">Software Developer</p>
            </div>
            <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">2024–2025</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Built AI neurological risk prediction — doctor uploads scan, system returns disease risk percentage using ML models.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["Python", "ML", "React", "Computer Vision"].map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* ── PROJECTS HEADER ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-6 pt-4"
        >
          <h2 className="text-xs font-mono text-primary uppercase tracking-[0.2em]">Projects</h2>
        </motion.div>

        {/* ── PROJECT: Novo Wellness (large) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="md:col-span-4 bg-card border border-border rounded-2xl p-6 md:p-8 group hover:border-primary/30 transition-colors duration-300 relative"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-mono text-primary">Live</span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            Novo Wellness
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-5 max-w-lg">
            Full-stack AI mental health platform for schools. Students chat with an empathetic AI → system predicts risk and alerts counselors in real-time.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            {["AI Chatbot", "Risk Prediction", "Admin Dashboard", "Real-time Alerts"].map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                <Zap className="w-3 h-3 text-primary flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["React", "Tailwind", "OpenAI", "Python", "Firebase"].map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground font-medium">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* ── PROJECT: Novo Neuro (small) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="md:col-span-2 bg-card border border-border rounded-2xl p-6 group hover:border-primary/30 transition-colors duration-300 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-mono text-primary">Shipped</span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            Novo Neuro Tech
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
            Upload brain scan → get neurological risk %. AI-powered diagnostic tool for doctors.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["Python", "ML", "React"].map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground font-medium">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* ── PROJECT: Lyric Video ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="md:col-span-2 bg-card border border-border rounded-2xl p-6 group hover:border-primary/30 transition-colors duration-300 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-mono text-primary">Live</span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            Lyric Video Makers
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
            High-converting production studio landing page with testimonials and pricing.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {["React", "Tailwind", "Firebase"].map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground font-medium">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* ── WHAT I DO (code block style) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="md:col-span-4 bg-card border border-border rounded-2xl p-6 overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-destructive/60" />
            <span className="w-3 h-3 rounded-full bg-primary/60" />
            <span className="w-3 h-3 rounded-full bg-muted-foreground/30" />
          </div>
          <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
            <code>
              <span className="text-primary">const</span>{" "}
              <span className="text-foreground">sravan</span> = {`{`}{"\n"}
              {"  "}role: <span className="text-primary">"AI Product Engineer"</span>,{"\n"}
              {"  "}does: [{"\n"}
              {"    "}<span className="text-primary">"Research problems deeply"</span>,{"\n"}
              {"    "}<span className="text-primary">"Prototype in days, not months"</span>,{"\n"}
              {"    "}<span className="text-primary">"Ship AI systems that work"</span>,{"\n"}
              {"    "}<span className="text-primary">"Build 0→1 products"</span>,{"\n"}
              {"  "}],{"\n"}
              {"  "}status: <span className="text-primary">"shipping"</span>{"\n"}
              {`}`};
            </code>
          </pre>
        </motion.div>

        {/* ── CTA / CONTACT ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="md:col-span-6 bg-card border border-border rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Let's build something together.
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Open to collaborating on AI products, research experiments, and ambitious ideas.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="mailto:sravan@example.com"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all text-sm"
            >
              <Mail className="w-4 h-4" />
              Say Hello
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-all text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.div>

        {/* ── FOOTER ── */}
        <div className="md:col-span-6 py-4 flex items-center justify-between">
          <p className="text-xs font-mono text-muted-foreground">
            © 2025 Sravan Kumar
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            Designed & coded with care
          </p>
        </div>

      </div>
    </div>
  );
};

export default Index;
