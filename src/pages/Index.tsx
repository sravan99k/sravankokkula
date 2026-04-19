import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/portfolio/FadeIn";
import {
  aboutPoints,
  education,
  experience,
  founderHighlights,
  heroStats,
  links,
  navigation,
  profile,
  projects,
  skills,
} from "@/data/portfolio";

const socialLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: links.linkedin, icon: Linkedin },
  { label: "GitHub", href: links.github, icon: Github },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground sm:text-xs">
    {children}
  </p>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="shell flex h-14 items-center justify-between gap-4 sm:h-16">
          <a href="#top" className="font-display text-sm font-semibold tracking-[-0.02em] sm:text-base">
            {profile.shortName}
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex sm:px-4 sm:text-sm"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="button-dark px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="shell pb-10 pt-10 sm:pb-14 sm:pt-16 md:pt-24">
          <FadeIn className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground sm:text-[0.65rem]">
              <Sparkles className="h-3 w-3" />
              Early-stage founder · Open to build
            </span>
            <h1 className="mt-4 font-display text-[clamp(2.1rem,7vw,4.8rem)] leading-[1.02] tracking-[-0.04em]">
              Hi, I’m {profile.shortName}.
              <br />
              <span className="text-muted-foreground">{profile.tagline}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              {profile.intro}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#projects" className="button-dark">
                See my work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={profile.resumeUrl} download className="button-light">
                <Download className="h-4 w-4" />
                Download resume
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span>{profile.location}</span>
              <span className="hidden h-1 w-1 rounded-full bg-border md:inline-block" />
              {socialLinks.map((link, i) => {
                const external = !link.href.startsWith("mailto:");
                return (
                  <span key={link.label} className="flex items-center gap-2">
                    {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-border md:inline-block" />}
                    <a
                      href={link.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </span>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="panel p-4 sm:p-5">
                <p className="font-display text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </FadeIn>
        </section>

        {/* ABOUT */}
        <section id="about" className="shell py-10 sm:py-14">
          <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
            <FadeIn>
              <SectionLabel>About</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05} className="space-y-4">
              {aboutPoints.map((point) => (
                <p key={point} className="text-base leading-7 text-foreground/85 md:text-lg md:leading-8">
                  {point}
                </p>
              ))}

              <div className="grid gap-3 pt-2 sm:grid-cols-3 sm:gap-4">
                {founderHighlights.map((h) => (
                  <div key={h.title} className="panel p-4 sm:p-5">
                    <p className="font-display text-base font-semibold tracking-[-0.02em] sm:text-lg">
                      {h.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{h.body}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="shell py-10 sm:py-14">
          <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
            <FadeIn>
              <SectionLabel>Skills</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05} className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {skills.map((group) => (
                <div key={group.group} className="panel p-4 sm:p-5">
                  <p className="font-display text-base font-semibold tracking-[-0.02em] sm:text-lg">
                    {group.group}
                  </p>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </FadeIn>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="shell py-10 sm:py-14">
          <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
            <FadeIn>
              <SectionLabel>Experience</SectionLabel>
            </FadeIn>
            <div className="space-y-4">
              {experience.map((job, i) => (
                <FadeIn key={`${job.company}-${job.period}`} delay={i * 0.05}>
                  <article className="panel p-5 sm:p-6 md:p-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl tracking-[-0.03em] sm:text-2xl md:text-3xl">
                        {job.role}{" "}
                        <span className="text-muted-foreground">· {job.company}</span>
                      </h3>
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                        {job.period}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
                    <ul className="mt-4 space-y-2.5">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm leading-7 text-foreground/85 sm:text-base">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="shell py-10 sm:py-14">
          <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
            <FadeIn>
              <SectionLabel>Projects</SectionLabel>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project, i) => (
                <FadeIn key={project.name} delay={i * 0.05}>
                  <article className="panel group flex h-full flex-col overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-0.5">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={`${project.name} preview`}
                        loading="lazy"
                        width={1024}
                        height={640}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute left-3 top-3 rounded-full border border-border bg-background/90 px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                        {project.status}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-lg tracking-[-0.03em] sm:text-xl md:text-2xl">
                          {project.name}
                        </h3>
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-foreground transition-colors hover:text-foreground/70 sm:text-sm"
                          >
                            Visit
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        ) : null}
                      </div>
                      <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                        {project.role}
                      </p>
                      <p className="mt-2.5 text-sm leading-6 text-muted-foreground">
                        {project.summary}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[0.7rem] text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="shell py-10 sm:py-14">
          <div className="grid gap-5 md:grid-cols-[180px_1fr] md:gap-8">
            <FadeIn>
              <SectionLabel>Education</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="panel p-5 sm:p-6 md:p-7">
                <h3 className="font-display text-xl tracking-[-0.03em] sm:text-2xl md:text-3xl">
                  {education.school}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground sm:text-base md:text-lg">
                  {education.degree}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{education.period}</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="shell py-12 sm:py-16">
          <FadeIn>
            <div className="panel-dark px-6 py-12 text-center sm:px-8 sm:py-14 md:px-12 md:py-16">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-background/60 sm:text-xs">
                Contact
              </p>
              <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                Let’s build something good.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-background/72 sm:text-base">
                I’m open to AI projects, product roles, and serious startup ideas. Email is the fastest way to reach me.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 sm:px-6"
                >
                  <Mail className="h-4 w-4" />
                  <span className="break-all">{profile.email}</span>
                </a>
                {socialLinks.slice(1).map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-5 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-border/70 py-5">
        <div className="shell flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2025 {profile.name}</p>
          <p>Built with React and Tailwind.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
