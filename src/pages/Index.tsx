import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail, Layout, Brain, Code, Cloud } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FadeIn } from "@/components/portfolio/FadeIn";
import {
  education,
  experience,
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((nav) => nav.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on header height
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-blue-400/40 bg-background/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(59,130,246,0.12)]">
        <div className="flex h-14 items-center justify-between px-5 sm:px-8">
          <a href="#top" className="font-display text-base font-bold tracking-tight text-foreground transition-all hover:text-blue-600 flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full overflow-hidden shadow-sm border border-blue-200">
              <img src="/images/sravan-avatar.webp" alt="" width="96" height="96" className="h-full w-full object-cover" />
            </div>
            {profile.name}
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-500 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] ${isActive ? "text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "text-muted-foreground"}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:-translate-y-0.5 sm:px-5"
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="max-w-[1400px] mx-auto w-full px-6 md:px-12 pb-10 pt-16 sm:pb-14 md:pt-28">
          <FadeIn className="w-full">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex-1 pt-8 md:pt-0 md:pr-10">
                <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground">
                  {profile.role}
                </span>
                <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.05] tracking-tight text-foreground">
                  I turn ideas into products that <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400 drop-shadow-sm">actually ship.</span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {profile.intro}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:shadow-blue-500/40 hover:bg-blue-600">
                    View My Work
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center rounded-full border-2 border-border/60 bg-transparent px-7 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted/50 hover:border-border">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    Let's Connect
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4 text-[0.65rem] font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Layout className="h-3.5 w-3.5 text-blue-500/70" /> Product Engineering</span>
                  <span className="hidden w-px h-3 bg-border sm:block"></span>
                  <span className="flex items-center gap-1.5"><Brain className="h-3.5 w-3.5 text-blue-500/70" /> AI / LLM</span>
                  <span className="hidden w-px h-3 bg-border sm:block"></span>
                  <span className="flex items-center gap-1.5"><Code className="h-3.5 w-3.5 text-blue-500/70" /> Full-Stack</span>
                  <span className="hidden w-px h-3 bg-border sm:block"></span>
                  <span className="flex items-center gap-1.5"><Cloud className="h-3.5 w-3.5 text-blue-500/70" /> Cloud</span>
                </div>
              </div>

              {profile.image && (
                <div className="relative mt-2 flex w-full min-w-0 justify-center overflow-hidden md:mt-0 md:w-[45%] md:justify-end lg:w-[45%]">
                  {/* Outer massive glow */}
                  <div className="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[100px] pointer-events-none"></div>
                  
                  {/* Inner intense core glow */}
                  <div className="absolute left-1/2 top-1/2 aspect-square w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/20 blur-[60px] mix-blend-screen pointer-events-none"></div>
                  
                  <div className="relative z-10 flex aspect-square w-full max-w-[32rem] items-end justify-center">
                    <picture className="block h-full w-full">
                      <source type="image/avif" srcSet={profile.image.avifSrcSet} sizes="(max-width: 767px) calc(100vw - 48px), 45vw" />
                      <source type="image/webp" srcSet={profile.image.webpSrcSet} sizes="(max-width: 767px) calc(100vw - 48px), 45vw" />
                      <img
                        src={profile.image.fallback}
                        alt={`Professional portrait of ${profile.name}`}
                        width={profile.image.width}
                        height={profile.image.height}
                        loading="eager"
                        fetchPriority="high"
                        decoding="sync"
                        className="h-full w-full object-contain object-bottom drop-shadow-[0_15px_35px_rgba(59,130,246,0.3)]"
                      />
                    </picture>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        </section>

        {/* SKILLS */}
        <section id="skills" className="max-w-[1000px] mx-auto w-full px-4 py-12 sm:px-6 sm:py-16">
          <FadeIn>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-blue-50 to-blue-100/30 p-6 sm:p-10 md:p-14 border border-blue-200/50 shadow-[0_8px_40px_rgba(59,130,246,0.06)] overflow-hidden min-h-[600px]">
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full max-w-sm aspect-square bg-blue-500/10 blur-[80px] rounded-full pointer-events-none z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-blue-600 shadow-sm border border-blue-200">
                  Skills & Expertise
                </span>
                
                <div className="mx-auto mt-6 flex h-40 w-40 sm:h-52 sm:w-52 items-center justify-center">
                  <DotLottieReact
                    src="/web-dev.lottie"
                    loop
                    autoplay
                  />
                </div>
                
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl font-display mb-10 sm:mb-14 max-w-lg mx-auto">
                  What I bring to the table.
                </h2>
                
                <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full">
                  {skills.map((group, index) => (
                    <FadeIn key={group.group} delay={index * 0.1}>
                      <div className="h-full group bg-white/70 backdrop-blur-md rounded-[1.5rem] p-6 sm:p-8 border border-white shadow-sm transition-all hover:shadow-lg hover:bg-white/90 hover:-translate-y-1 flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 shadow-sm border border-blue-200/60 mb-5">
                          {group.group === "Product Engineering" ? <Layout className="h-5 w-5" /> : group.group.includes("AI") ? <Brain className="h-5 w-5" /> : group.group === "Infrastructure" ? <Cloud className="h-5 w-5" /> : <Code className="h-5 w-5" />}
                        </div>
                        
                        <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-4">
                          {group.group}
                        </h3>
                        
                        <div className="flex flex-wrap items-center justify-center gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center rounded-full bg-slate-100/80 border border-slate-200/60 px-3 py-1.5 text-[0.7rem] font-semibold text-slate-700 shadow-sm transition-colors group-hover:border-blue-200 group-hover:bg-blue-50"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
                        


        {/* EXPERIENCE */}
        <section id="experience" className="max-w-[1000px] mx-auto w-full px-4 py-12 sm:px-6 sm:py-16">
          <FadeIn>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-blue-50 to-blue-100/30 p-6 sm:p-10 md:p-14 border border-blue-200/50 shadow-[0_8px_40px_rgba(59,130,246,0.06)] overflow-hidden">
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full max-w-sm aspect-square bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-blue-600 shadow-sm border border-blue-200">
                  Experience
                </span>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl font-display mb-10 sm:mb-14">
                  Where I've Worked.
                </h2>
                
                <div className="flex flex-col gap-6 sm:gap-8 w-full text-left">
                  {experience.map((job, i) => (
                    <FadeIn key={`${job.company}-${job.period}`} delay={i * 0.05}>
                      <article className="group bg-white/60 backdrop-blur-sm rounded-[1.5rem] p-6 sm:p-8 border border-white/80 shadow-sm transition-all hover:shadow-md hover:bg-white/80">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200/50">
                          <div>
                            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                              {job.role}
                            </h3>
                            <p className="mt-2 text-base md:text-lg font-bold text-blue-600">
                              {job.company} <span className="text-slate-300 font-normal mx-2">|</span> <span className="text-slate-500 text-sm font-semibold">{job.location}</span>
                            </p>
                          </div>
                          
                          <div className="shrink-0">
                            <span className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600 border border-slate-200/60 shadow-sm">
                              {job.period}
                            </span>
                          </div>
                        </div>

                         <p className="mb-5 text-sm font-bold text-blue-600">{job.focus}</p>
                         <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">{job.summary}</p>
                        
                        <ul className="space-y-4">
                          {job.bullets.map((b) => (
                            <li key={b} className="flex gap-4 text-sm sm:text-base leading-relaxed text-slate-700 font-medium">
                              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 shadow-sm shadow-blue-500/50" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                         <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-200/60 pt-6">
                           {job.tech.map((tech) => (
                             <span key={tech} className="rounded-lg border border-slate-200/60 bg-slate-100/80 px-2.5 py-1 text-xs font-semibold text-slate-600">
                               {tech}
                             </span>
                           ))}
                         </div>
                      </article>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-[1000px] mx-auto w-full px-4 py-12 sm:px-6 sm:py-16">
          <FadeIn>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-blue-50 to-blue-100/30 p-6 sm:p-10 md:p-14 border border-blue-200/50 shadow-[0_8px_40px_rgba(59,130,246,0.06)] overflow-hidden">
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full max-w-sm aspect-square bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-blue-600 shadow-sm border border-blue-200">
                  Projects
                </span>
                
                <div className="mx-auto mt-6 flex h-40 w-40 sm:h-52 sm:w-52 items-center justify-center">
                  <DotLottieReact
                    src="/rocket-launch.lottie"
                    loop
                    autoplay
                  />
                </div>
                
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl font-display mb-10 sm:mb-14">
                  Things I've Built.
                </h2>
                
                <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 text-left">
                  {projects.map((project, i) => (
                    <FadeIn key={project.name} delay={i * 0.1}>
                      <article className="h-full group bg-white/70 backdrop-blur-md rounded-[1.5rem] p-6 sm:p-8 border border-white shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-white/90 hover:-translate-y-2 flex flex-col">
                        <div className="relative h-48 sm:h-56 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-50 border border-slate-200/60 flex items-center justify-center p-6 mb-8 transition-transform duration-700 group-hover:shadow-inner">
                           <picture className="block h-full w-full">
                             <source type="image/avif" srcSet={project.image.avifSrcSet} sizes="(max-width: 767px) calc(100vw - 80px), 420px" />
                             <source type="image/webp" srcSet={project.image.webpSrcSet} sizes="(max-width: 767px) calc(100vw - 80px), 420px" />
                             <img
                               src={project.image.fallback}
                               alt={`${project.name} preview`}
                               width={project.image.width}
                               height={project.image.height}
                               loading="lazy"
                               decoding="async"
                               className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                             />
                           </picture>
                        </div>
                        
                        <div className="flex flex-col flex-1">
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <h3 className="font-display text-2xl md:text-3xl tracking-tight text-foreground font-extrabold">
                              {project.name}
                            </h3>
                            <span className="shrink-0 inline-flex items-center justify-center rounded-full bg-blue-50 px-3 py-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-blue-600 shadow-sm border border-blue-100">
                              {project.status}
                            </span>
                          </div>
                          
                          <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-widest text-blue-500">
                            {project.role}
                          </p>
                          
                          <p className="mb-8 text-sm leading-relaxed text-slate-600 font-medium line-clamp-3">
                            {project.summary}
                          </p>
                          
                          <div className="mt-auto flex flex-col gap-6">
                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="inline-flex items-center rounded-lg bg-slate-100/80 border border-slate-200/60 px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            {project.link && (
                              <div className="pt-2 border-t border-slate-100">
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700 group/btn"
                                >
                                  View Live Project
                                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      </article>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* EDUCATION */}
        <section id="education" className="max-w-[1000px] mx-auto w-full px-4 py-12 sm:px-6 sm:py-16">
          <FadeIn>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-blue-50 to-blue-100/30 p-6 sm:p-10 md:p-14 border border-blue-200/50 shadow-[0_8px_40px_rgba(59,130,246,0.06)] overflow-hidden">
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full max-w-sm aspect-square bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 px-3 py-1 sm:px-4 sm:py-1.5 text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-widest text-blue-600 shadow-sm border border-blue-200">
                  Education
                </span>
                
                <div className="mx-auto mt-6 flex h-40 w-40 sm:h-52 sm:w-52 items-center justify-center">
                  <DotLottieReact
                    src="/online-learning-platform.lottie"
                    loop
                    autoplay
                  />
                </div>
                
                <div className="flex flex-col justify-center bg-white/70 backdrop-blur-md rounded-[1.5rem] p-8 sm:p-10 border border-white shadow-sm transition-all hover:shadow-lg mt-6 w-full max-w-2xl mx-auto">
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground">
                    {education.school}
                  </h3>
                
                  <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg font-bold text-blue-600">
                    {education.degree}
                  </p>

                  <p className="mt-3 text-sm font-semibold text-slate-500 tracking-wide uppercase">
                    {education.period}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-[1000px] mx-auto w-full px-4 py-12 sm:px-6 sm:py-16">
          <FadeIn>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-blue-50 to-blue-100/30 p-6 sm:p-10 md:p-14 border border-blue-200/50 shadow-[0_8px_40px_rgba(59,130,246,0.06)] overflow-hidden">
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full max-w-sm aspect-square bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 px-3 py-1 sm:px-4 sm:py-1.5 text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-widest text-blue-600 shadow-sm border border-blue-200">
                  Contact
                </span>
                
                <div className="mx-auto mt-6 flex h-40 w-40 sm:h-52 sm:w-52 items-center justify-center transition-transform hover:scale-110 cursor-pointer group" title="Hover me!">
                  <DotLottieReact
                    src="/contact-us.lottie"
                    loop
                    autoplay
                  />
                </div>
                
                <h2 className="mx-auto mt-2 max-w-2xl font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground">
                  Let’s build something <span className="text-blue-500">good.</span>
                </h2>
                
                <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  I’m open to AI projects, product roles, and serious startup ideas. Email is the fastest way to reach me.
                </p>

                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 sm:px-8 sm:py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-500/40"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{profile.email}</span>
                  </a>
                  {socialLinks.slice(1).map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-5 py-3.5 sm:px-6 sm:py-4 text-sm font-semibold text-foreground shadow-sm border border-border/60 transition-all hover:-translate-y-1 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
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
