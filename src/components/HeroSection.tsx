import { ArrowRight, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Available for opportunities
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
              AI Product Engineer building real-world AI systems.
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-lg leading-relaxed">
              I research problems, build prototypes quickly, and ship AI-powered products.
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Focused on AI engineering, product prototyping, backend systems, and
              research-driven building — turning ideas into working software fast.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-secondary text-foreground font-semibold rounded-lg hover:bg-muted transition-colors text-sm"
              >
                <Mail className="w-4 h-4" /> Contact Me
              </a>
            </div>
          </div>

          {/* Right side — minimal workspace illustration */}
          <div className="hidden md:flex justify-center">
            <div className="w-80 h-80 rounded-2xl border border-border bg-secondary p-6 flex flex-col gap-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-border" />
                <span className="w-3 h-3 rounded-full bg-border" />
                <span className="w-3 h-3 rounded-full bg-border" />
              </div>
              <div className="flex-1 rounded-lg bg-muted p-4 font-mono text-xs text-muted-foreground space-y-2 overflow-hidden">
                <p><span className="text-primary">const</span> engineer = {"{"}</p>
                <p className="pl-4">name: <span className="text-foreground">"Sravan Kumar"</span>,</p>
                <p className="pl-4">role: <span className="text-foreground">"AI Product Engineer"</span>,</p>
                <p className="pl-4">stack: [<span className="text-foreground">"Python"</span>, <span className="text-foreground">"React"</span>, <span className="text-foreground">"AI"</span>],</p>
                <p className="pl-4">building: <span className="text-primary">true</span>,</p>
                <p>{"}"};</p>
                <p className="mt-2"><span className="text-primary">ship</span>(engineer);</p>
                <p className="text-primary animate-pulse">▊</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
