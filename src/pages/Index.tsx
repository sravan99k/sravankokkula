import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/portfolio/FadeIn";
import {
  aboutPoints,
  education,
  experience,
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="shell flex h-16 items-center justify-between gap-6">
          <a href="#top" className="font-display text-base font-semibold tracking-[-0.02em]">
            {profile.shortName}
          </a>
          <nav className="hidden items-center gap-7 md:flex">
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
          <a href={`mailto:${profile.email}`} className="button-dark">
            Get in touch
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="shell pb-16 pt-20 md:pt-28">
          <FadeIn className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
              {profile.role}
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] tracking-[-0.04em]">
              Hi, I’m {profile.shortName}.
              <br />
              <span className="text-muted-foreground">{profile.tagline}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              {profile.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="button-dark">
                See my work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="button-light">
                Email me
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
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

          <FadeIn delay={0.1} className="mt-14 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="panel p-6">
                <p className="font-display text-3xl font-semibold tracking-[-0.03em]">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </FadeIn>
        </section>

        {/* ABOUT */}
        <section id="about" className="shell py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">About</p>
            </FadeIn>
            <FadeIn delay={0.05} className="space-y-5">
              {aboutPoints.map((point) => (
                <p key={point} className="text-lg leading-8 text-foreground/85">
                  {point}
                </p>
              ))}
            </FadeIn>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="shell py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">Work</p>
            </FadeIn>
            <div className="space-y-6">
              {experience.map((job, i) => (
                <FadeIn key={job.company} delay={i * 0.05}>
                  <article className="panel p-7 md:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-display text-2xl tracking-[-0.03em] md:text-3xl">
                        {job.role}{" "}
                        <span className="text-muted-foreground">· {job.company}</span>
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {job.period}
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
                    <ul className="mt-6 space-y-3">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-base leading-7 text-foreground/85">
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
        <section id="projects" className="shell py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">Projects</p>
            </FadeIn>
            <div className="grid gap-5">
              {projects.map((project, i) => (
                <FadeIn key={project.name} delay={i * 0.05}>
                  <article className="panel group p-7 transition-transform duration-300 hover:-translate-y-0.5 md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-2xl tracking-[-0.03em] md:text-3xl">{project.name}</h3>
                        <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                          {project.status}
                        </span>
                      </div>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-foreground/70"
                        >
                          Visit
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS + EDUCATION */}
        <section id="skills" className="shell py-20">
          <div className="grid gap-10 md:grid-cols-[200px_1fr]">
            <FadeIn>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">Skills</p>
            </FadeIn>
            <div className="space-y-10">
              <FadeIn className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((group) => (
                  <div key={group.group} className="panel p-6">
                    <p className="font-display text-lg font-semibold tracking-[-0.02em]">{group.group}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
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

              <FadeIn delay={0.05}>
                <div className="panel p-7 md:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">Education</p>
                  <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] md:text-3xl">
                    {education.school}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground md:text-lg">{education.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{education.period}</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="shell py-24">
          <FadeIn>
            <div className="panel-dark px-8 py-14 text-center md:px-12 md:py-20">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/60">Contact</p>
              <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1] tracking-[-0.04em] md:text-6xl">
                Let’s build something good.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-background/72 md:text-lg">
                I’m open to AI projects, product roles, and serious startup ideas. The fastest way to reach me is email.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
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

      <footer className="border-t border-border/70 py-6">
        <div className="shell flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2025 {profile.name}</p>
          <p>Built with React and Tailwind.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
