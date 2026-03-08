import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, ExternalLink } from "lucide-react";

/* ─── Data (single source of truth — no repetition) ─── */
const NAV = ["about", "experience", "projects"] as const;

const EXPERIENCE = [
  {
    period: "2025 — Present",
    title: "Software Developer",
    company: "Saap Technologies",
    companyUrl: "#",
    desc: "Building Novo Wellness — an AI student mental health platform. Shipped an OpenAI chatbot, risk‑prediction engine, and counselor dashboard in a lean team of three.",
    tech: ["React", "Tailwind", "OpenAI API", "Python", "Firebase"],
  },
  {
    period: "Dec 2024 — May 2025",
    title: "Software Developer",
    company: "Novo Neuro Tech",
    companyUrl: "#",
    desc: "Built an AI neurological risk prediction system — doctor uploads a brain scan and gets a disease risk percentage using custom ML models and computer vision.",
    tech: ["Python", "Machine Learning", "Computer Vision", "React"],
  },
  {
    period: "2024",
    title: "Web Developer",
    company: "Lyric Video Makers",
    companyUrl: "#",
    desc: "Designed and shipped a production landing page for a video production studio with portfolio showcase, testimonials, and pricing integration.",
    tech: ["React", "Tailwind", "Firebase"],
  },
];

const PROJECTS = [
  {
    title: "Novo Wellness",
    desc: "Full‑stack AI mental health platform for schools. Students chat with an empathetic AI → system predicts risk scores and alerts counselors in real‑time.",
    tech: ["React", "OpenAI", "Python", "Firebase"],
    link: "#",
    status: "Live",
    featured: true,
  },
  {
    title: "Neuro Risk Engine",
    desc: "Upload a brain scan → get a risk percentage for neurological disorders. AI‑powered diagnostic assistant built for doctors.",
    tech: ["Python", "ML", "Computer Vision"],
    link: "#",
    status: "Shipped",
  },
  {
    title: "Lyric Video Makers",
    desc: "High-converting landing page for a creative video studio with motion graphics showcase and client portal.",
    tech: ["React", "Tailwind", "Firebase"],
    link: "#",
    status: "Live",
  },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sravan@example.com", label: "Email" },
];

/* ─── Cursor Spotlight Hook ─── */
function useSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (ref.current) {
      ref.current.style.setProperty("--spotlight-x", `${e.clientX}px`);
      ref.current.style.setProperty("--spotlight-y", `${e.clientY}px`);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return ref;
}

/* ─── Active Section Hook ─── */
function useActiveSection() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    NAV.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

/* ─── Main Component ─── */
const Index = () => {
  const spotlightRef = useSpotlight();
  const activeSection = useActiveSection();

  return (
    <div
      ref={spotlightRef}
      className="relative min-h-screen bg-background"
      style={{
        backgroundImage: `radial-gradient(600px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), hsl(var(--primary) / 0.06), transparent 60%)`,
      }}
    >
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-4">
        
        {/* ===== LEFT — Sticky Sidebar ===== */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl"
            >
              Sravan Kumar<span className="text-gradient">.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-lg font-medium text-muted-foreground"
            >
              AI Product Engineer & Startup Builder
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground"
            >
              I research hard problems, prototype fast, and ship AI systems that people actually use.
            </motion.p>

            {/* Nav */}
            <nav className="hidden lg:block mt-16">
              <ul className="space-y-1">
                {NAV.map((id, i) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  >
                    <a
                      href={`#${id}`}
                      className={`group flex items-center gap-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                        activeSection === id
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span
                        className={`h-px transition-all duration-200 ${
                          activeSection === id
                            ? "w-16 bg-foreground"
                            : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                        }`}
                      />
                      {id}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Socials */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center gap-5 lg:mt-0"
          >
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              </li>
            ))}
          </motion.ul>
        </header>

        {/* ===== RIGHT — Scrollable Content ===== */}
        <main className="pt-24 lg:w-1/2 lg:py-24">
          
          {/* About */}
          <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
            <SectionLabel>About</SectionLabel>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                I'm an AI product engineer who lives at the intersection of{" "}
                <Highlight>research and shipping</Highlight>. I don't just build features — I dig into the problem space, 
                prototype ideas in days, and push them to production.
              </p>
              <p>
                Currently at <Highlight>Saap Technologies</Highlight>, I'm building an AI‑powered mental health platform 
                for schools — from an empathetic chatbot to real‑time risk prediction for counselors. Before that, I built 
                a neurological risk assessment tool using brain scans and ML at Novo Neuro Tech.
              </p>
              <p>
                I'm not looking for a job — I'm building the future. My toolkit spans{" "}
                <Highlight>Python, React, OpenAI, ML/CV, and Firebase</Highlight>. I think in systems, 
                ship in sprints, and believe the best products come from obsessing over problems nobody else notices.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
            <SectionLabel>Experience</SectionLabel>
            <div className="space-y-2">
              {EXPERIENCE.map((exp, i) => (
                <motion.a
                  key={i}
                  href={exp.companyUrl}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 rounded-lg p-4 -mx-4 hover:bg-card/80 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.08)] hover:drop-shadow-lg cursor-pointer"
                >
                  <header className="text-xs font-mono uppercase tracking-wide text-muted-foreground sm:col-span-2 mt-1 mb-2 sm:mb-0 whitespace-nowrap">
                    {exp.period}
                  </header>
                  <div className="sm:col-span-6">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug flex items-center gap-1">
                      {exp.title} · {exp.company}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200 text-primary" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exp.desc}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <li key={t}>
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
            <SectionLabel>Projects</SectionLabel>
            <div className="space-y-2">
              {PROJECTS.map((proj, i) => (
                <motion.a
                  key={i}
                  href={proj.link}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 rounded-lg p-4 -mx-4 hover:bg-card/80 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.08)] hover:drop-shadow-lg cursor-pointer"
                >
                  <div className="sm:col-span-2 mt-1 mb-2 sm:mb-0">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wide ${
                      proj.status === "Live" ? "text-primary" : "text-muted-foreground"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${proj.status === "Live" ? "bg-primary animate-pulse" : "bg-muted-foreground"}`} />
                      {proj.status}
                    </span>
                  </div>
                  <div className="sm:col-span-6">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors leading-snug flex items-center gap-1">
                      {proj.title}
                      {proj.featured && (
                        <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">Featured</span>
                      )}
                      <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{proj.desc}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {proj.tech.map((t) => (
                        <li key={t}>
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="pb-16 text-sm text-muted-foreground max-w-md">
            <p>
              Built with <Highlight>React</Highlight>, <Highlight>Tailwind CSS</Highlight>, and <Highlight>Framer Motion</Highlight>. 
              Inspired by <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">Brittany Chiang</a>'s design philosophy.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

/* ─── Tiny helper components ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
      {children}
    </h2>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground font-medium">{children}</span>;
}

export default Index;
