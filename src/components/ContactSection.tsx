import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-6">
            Get in Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Let's build something
            <br />
            <span className="text-muted-foreground">together.</span>
          </h3>
          <p className="text-lg text-secondary-foreground leading-relaxed mb-10 max-w-lg">
            I'm open to collaborating on AI products, research-driven experiments, 
            and ambitious projects. If you're building something interesting — let's talk.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:sravan@example.com"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all duration-200 text-sm"
            >
              <Mail className="w-4 h-4" />
              Say Hello
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card hover:border-muted-foreground/30 transition-all duration-200 text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-card hover:border-muted-foreground/30 transition-all duration-200 text-sm"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
