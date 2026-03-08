import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sravan@example.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <header className="pt-32 pb-20 md:pt-40 md:pb-28" id="home">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">
          {/* Left — Sticky intro */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground tracking-tight leading-[1.05] mb-6">
                Sravan
                <br />
                Kumar
              </h1>
              <p className="text-xl font-semibold text-primary mb-4">
                AI Product Engineer & Builder
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-10">
                I build AI-powered products from zero to one. I research problems, 
                prototype fast, and ship systems that work in the real world.
              </p>

              {/* Nav links */}
              <nav className="hidden lg:flex flex-col gap-3 mb-12">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-200" />
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Socials */}
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label={s.label}
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — About / intro content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-secondary-foreground leading-relaxed">
              I'm an <span className="text-foreground font-medium">AI product engineer</span> and{" "}
              <span className="text-foreground font-medium">startup builder</span> who lives at the 
              intersection of research and shipping. I don't just write code — I identify real problems, 
              design solutions, and build working products.
            </p>
            <p className="text-lg text-secondary-foreground leading-relaxed">
              Currently building AI-powered systems at{" "}
              <a href="#experience" className="text-foreground font-medium border-b border-muted-foreground/30 hover:border-primary transition-colors">
                Saap Technologies
              </a>
              , where I'm working on mental health platforms that use AI to predict and prevent student crises.
            </p>
            <p className="text-lg text-secondary-foreground leading-relaxed">
              My approach: <span className="text-foreground font-medium">research deeply</span>,{" "}
              <span className="text-foreground font-medium">prototype rapidly</span>,{" "}
              <span className="text-foreground font-medium">ship relentlessly</span>. Whether it's 
              an AI chatbot, a risk prediction engine, or a full product launch — I move fast and build things 
              that create real impact.
            </p>
            <p className="text-lg text-secondary-foreground leading-relaxed">
              When I'm not building, I'm experimenting with new AI tools, exploring startup ideas, and 
              pushing the boundaries of what's possible with code and machine intelligence.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">3+</p>
                <p className="text-sm text-muted-foreground mt-1">Products shipped</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">AI</p>
                <p className="text-sm text-muted-foreground mt-1">Core focus</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">0→1</p>
                <p className="text-sm text-muted-foreground mt-1">Builder mindset</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
