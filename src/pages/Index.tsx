import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/sravan-portrait.jpg";
import { FadeIn } from "@/components/portfolio/FadeIn";
import { SectionTitle } from "@/components/portfolio/SectionTitle";
import {
  capabilityGroups,
  featuredPlatform,
  heroStats,
  links,
  navigation,
  profile,
  storyBlocks,
  timeline,
  ventures,
} from "@/data/portfolio";

const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: links.linkedin, icon: Linkedin },
  { label: "GitHub", href: links.github, icon: Github },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="shell flex h-20 items-center justify-between gap-6">
          <a href="#top" className="min-w-0">
            <p className="truncate font-display text-lg font-semibold tracking-[-0.03em]">{profile.shortName}</p>
            <p className="truncate font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
              AI systems · ventures · product
            </p>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>

          <a href={links.novo} target="_blank" rel="noopener noreferrer" className="button-dark whitespace-nowrap">
            See live product
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="shell grid gap-12 pb-18 pt-12 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <FadeIn className="space-y-8">
            <span className="eyebrow">Founder-minded builder</span>

            <div className="space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">{profile.location}</p>
              <h1 className="max-w-4xl font-display text-[clamp(3.8rem,9vw,7.8rem)] leading-[0.92] tracking-[-0.06em]">
                I turn complex human problems into AI products people trust.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                {profile.intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#story" className="button-dark">
                Read the story
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="button-light">
                Write to me
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="panel p-5">
                  <p className="font-display text-3xl font-semibold tracking-[-0.04em]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:pl-4">
            <div className="panel-dark p-5 md:p-6">
              <img
                src={portrait}
                alt="Professional portrait of Sravan Kumar Kokkula"
                className="aspect-[4/5] w-full rounded-[26px] object-cover"
                width={1152}
                height={1536}
                loading="eager"
              />

              <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/60">{profile.name}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] md:text-[1.9rem]">
                    Product engineer depth with startup operator energy.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-background/72 md:text-base">
                    Built for high-trust products across wellbeing, communication, and healthcare — from research frameworks to system architecture to launch.
                  </p>
                </div>

                <div className="rounded-[22px] border border-background/10 bg-background/5 px-4 py-4 text-sm">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-background/60">Now building</p>
                  <p className="mt-2 font-semibold">Novo Wellness</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="story" className="bg-foreground py-24 text-background">
          <div className="shell">
            <FadeIn>
              <SectionTitle
                index="01"
                kicker="Story"
                title="Not a portfolio of experiments — a record of products built close to real users."
                body="My work starts with difficult human contexts and turns them into systems that can actually be deployed, trusted, and improved over time."
                invert
              />
            </FadeIn>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {storyBlocks.map((block, index) => (
                <FadeIn key={block.title} delay={index * 0.05}>
                  <article className="h-full rounded-[30px] border border-background/10 bg-background/5 p-7">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/50">Chapter 0{index + 1}</p>
                    <h3 className="mt-6 font-display text-2xl tracking-[-0.04em]">{block.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-background/72 md:text-base">{block.description}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="platform" className="shell py-24">
          <FadeIn>
            <SectionTitle
              index="02"
              kicker="Platform"
              title="One serious product, owned across research, architecture, AI, and rollout."
              body="Novo Wellness is the clearest expression of how I like to build: deep domain grounding, careful system design, and shipping velocity without losing trust."
            />
          </FadeIn>

          <FadeIn delay={0.06} className="mt-14">
            <article className="panel overflow-hidden">
              <div className="grid gap-10 p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">{featuredPlatform.eyebrow}</p>
                  <h3 className="mt-4 font-display text-4xl tracking-[-0.05em] md:text-5xl">{featuredPlatform.title}</h3>
                  <p className="mt-4 text-xl leading-8 text-foreground/80">{featuredPlatform.subtitle}</p>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">{featuredPlatform.summary}</p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {featuredPlatform.stack.map((item) => (
                      <span key={item} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href={featuredPlatform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-dark mt-8"
                  >
                    Visit Novo Wellness
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="space-y-6 rounded-[28px] bg-muted p-6 md:p-7">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {featuredPlatform.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-[22px] border border-border bg-card p-4">
                        <p className="text-sm text-muted-foreground">{metric.label}</p>
                        <p className="mt-2 font-display text-2xl tracking-[-0.04em]">{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-[24px] border border-border bg-card p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">What I owned</p>
                    <ul className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                      {featuredPlatform.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-foreground" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        </section>

        <section id="ventures" className="shell py-24">
          <FadeIn>
            <SectionTitle
              index="03"
              kicker="Ventures"
              title="A broader pattern: products around confidence, cognition, and human decision-making."
              body="I’m interested in products where AI can genuinely change behaviour, access, or outcomes — not just automate a workflow."
            />
          </FadeIn>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {ventures.map((venture, index) => (
              <FadeIn key={venture.name} delay={index * 0.05}>
                <article className="panel h-full p-7 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-3xl tracking-[-0.04em]">{venture.name}</h3>
                    <span className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      {venture.stage}
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-8 text-muted-foreground">{venture.description}</p>
                  <p className="mt-5 text-sm leading-7 text-foreground/78">{venture.detail}</p>
                  {venture.link ? (
                    <a href={venture.link} target="_blank" rel="noopener noreferrer" className="button-light mt-8">
                      View project
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="craft" className="shell py-24">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <FadeIn className="panel p-8 md:p-10">
              <SectionTitle
                index="04"
                kicker="Craft"
                title="What sits underneath the work."
                body="My edge is the mix: product sense, applied AI, backend ownership, and the willingness to carry a problem across disciplines until it becomes a real product."
              />

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {capabilityGroups.map((group) => (
                  <div key={group.title} className="rounded-[24px] border border-border bg-background p-5">
                    <h3 className="font-display text-2xl tracking-[-0.04em]">{group.title}</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground md:text-base">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-foreground" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.06} className="panel-dark p-8 md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/60">Timeline</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl tracking-[-0.05em] md:text-5xl">
                Built through real products, not mock case studies.
              </h2>

              <div className="mt-10 space-y-6">
                {timeline.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-[26px] border border-background/10 p-5 ${index === 0 ? "bg-background/8" : "bg-transparent"}`}
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/55">{item.year}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-background/72 md:text-base">{item.body}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="connect" className="shell pb-24 pt-6">
          <FadeIn>
            <div className="panel-dark px-8 py-10 text-center md:px-12 md:py-14">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-background/60">05 / Connect</p>
              <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-[0.95] tracking-[-0.05em] md:text-6xl">
                If you’re building something hard in AI, health, learning, or human communication, I’m interested in the real version of the problem.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-background/72 md:text-lg">
                Not chasing titles. Just drawn to ambitious products, thoughtful people, and problems worth carrying all the way to production.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  const external = !link.href.startsWith("mailto:");

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="inline-flex items-center gap-2 rounded-full border border-background/12 bg-background/5 px-5 py-3 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
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

      <footer className="border-t border-border/80 py-6">
        <div className="shell flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2025 {profile.name}</p>
          <p>Designed as a product story — minimal, sharp, and built to feel intentional.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
