import { useEffect, useRef, useCallback, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, ArrowDown } from "lucide-react";

/* ─────────────────── Data ─────────────────── */
const PROJECTS = [
  {
    title: "Novo Wellness",
    tagline: "AI mental health for schools",
    desc: "Students chat with an empathetic AI chatbot. The system predicts risk scores in real-time and alerts school counselors before it's too late.",
    tech: ["React", "OpenAI", "Python", "Firebase"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    status: "Live",
    role: "Full-Stack · AI Engineer",
  },
  {
    title: "Neuro Risk Engine",
    tagline: "Brain scan → disease probability",
    desc: "Doctor uploads a brain scan. ML model returns a risk percentage for neurological disorders. Built for speed and accuracy in clinical settings.",
    tech: ["Python", "ML", "Computer Vision", "React"],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    status: "Shipped",
    role: "ML Engineer",
  },
  {
    title: "Lyric Video Makers",
    tagline: "Creative studio landing page",
    desc: "High-converting production website with motion graphics showcase, client testimonials, and an integrated booking system.",
    tech: ["React", "Tailwind", "Firebase"],
    gradient: "from-orange-500/20 via-rose-500/10 to-transparent",
    status: "Live",
    role: "Web Developer",
  },
];

const TIMELINE = [
  { year: "2025", label: "Saap Technologies", desc: "Building Novo Wellness — AI mental health platform" },
  { year: "2024", label: "Novo Neuro Tech", desc: "AI neurological risk prediction system" },
  { year: "2024", label: "Freelance", desc: "Shipped production websites for creative studios" },
];

const STACK = ["Python", "React", "TypeScript", "OpenAI", "Tailwind", "Firebase", "SQL", "NumPy", "Pandas", "Git", "ML", "Computer Vision", "Framer Motion", "Figma"];

/* ─────────────────── Hooks ─────────────────── */
function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return pos;
}

/* ─────────────────── Animated Text ─────────────────── */
function AnimatedWords({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: delay + i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ─────────────────── Section Reveal ─────────────────── */
function RevealOnScroll({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─────────────────── Main Page ─────────────────── */
const Index = () => {
  const mouse = useMousePosition();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <div className="noise relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Cursor glow */}
      <div
        className="fixed pointer-events-none z-40 w-[500px] h-[500px] rounded-full opacity-[0.07] transition-all duration-300 ease-out"
        style={{
          left: mouse.x - 250,
          top: mouse.y - 250,
          background: `radial-gradient(circle, hsl(var(--primary)), transparent 70%)`,
        }}
      />

      {/* ═══════ HERO ═══════ */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-6"
      >
        {/* Background orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/3 rounded-full blur-[100px]" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 text-primary text-xs font-mono tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for projects
            </span>
          </motion.div>

          {/* Giant name */}
          <h1 className="font-display font-black text-foreground leading-[0.85] tracking-[-0.04em]">
            <AnimatedWords
              text="Sravan"
              className="block text-[clamp(3.5rem,12vw,10rem)]"
              delay={0.3}
            />
            <AnimatedWords
              text="Kumar."
              className="block text-[clamp(3.5rem,12vw,10rem)] text-gradient"
              delay={0.5}
            />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed"
          >
            I build AI systems that solve real problems.
            <br />
            <span className="text-foreground font-medium">Engineer. Builder. Startup founder.</span>
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a
              href="mailto:sravan@example.com"
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full text-sm overflow-hidden transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in touch
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground/80 font-medium rounded-full text-sm hover:bg-card hover:text-foreground transition-all"
            >
              See my work
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ═══════ STORY INTRO ═══════ */}
      <section className="relative py-32 md:py-40 px-6">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-[1.2] tracking-tight">
              I don't just write code —{" "}
              <span className="text-gradient">I find problems worth solving</span>,
              prototype obsessively, and ship products that people actually depend on.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Currently engineering AI systems at Saap Technologies, where I'm building 
              a mental health platform that serves real students in real schools. 
              Previously built ML-powered diagnostic tools for neurologists.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════ PROJECTS ═══════ */}
      <section id="work" className="relative py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <div className="flex items-center gap-4 mb-16">
              <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Selected work</span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs font-mono text-muted-foreground">{PROJECTS.length} projects</span>
            </div>
          </RevealOnScroll>

          <div className="space-y-8">
            {PROJECTS.map((project, i) => (
              <RevealOnScroll key={i}>
                <div className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.15)]`}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <div className="relative p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="flex-1">
                        {/* Status + Role */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider ${project.status === "Live" ? "text-primary" : "text-muted-foreground"}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${project.status === "Live" ? "bg-primary animate-pulse" : "bg-muted-foreground"}`} />
                            {project.status}
                          </span>
                          <span className="text-xs text-muted-foreground">·</span>
                          <span className="text-xs text-muted-foreground font-mono">{project.role}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground font-medium">{project.tagline}</p>

                        {/* Description */}
                        <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl text-sm md:text-base">
                          {project.desc}
                        </p>

                        {/* Tech */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span key={t} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/10">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project number */}
                      <span className="hidden md:block text-8xl font-display font-black text-foreground/[0.03] group-hover:text-primary/[0.08] transition-colors duration-500 leading-none">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ JOURNEY TIMELINE ═══════ */}
      <section className="relative py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <div className="flex items-center gap-4 mb-16">
              <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">Journey</span>
              <div className="flex-1 h-px bg-border" />
            </div>
          </RevealOnScroll>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

            {TIMELINE.map((item, i) => (
              <RevealOnScroll key={i}>
                <div className={`relative flex items-start gap-8 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-primary border-2 border-background z-10 mt-1.5" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <span className="text-xs font-mono text-primary tracking-wider">{item.year}</span>
                    <h4 className="text-xl font-display font-bold text-foreground mt-1">{item.label}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TECH MARQUEE ═══════ */}
      <section className="relative py-16 border-y border-border overflow-hidden">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...STACK, ...STACK, ...STACK].map((tech, i) => (
            <span key={i} className="mx-8 text-2xl md:text-4xl font-display font-bold text-foreground/[0.06] hover:text-primary/20 transition-colors duration-300 cursor-default select-none">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════ CONTACT ═══════ */}
      <section className="relative py-32 md:py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <span className="text-xs font-mono text-primary uppercase tracking-[0.3em] mb-8 block">What's next?</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-foreground tracking-tight leading-[0.9]">
              Let's build
              <br />
              <span className="text-gradient">something great.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-md mx-auto">
              Open to ambitious AI projects, research collaborations, and startup ideas that matter.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:sravan@example.com"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full text-sm hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all"
              >
                <Mail className="w-4 h-4" />
                sravan@example.com
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                  <span>{s.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="border-t border-border px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Sravan Kumar
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Designed & built with obsessive attention to detail
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
