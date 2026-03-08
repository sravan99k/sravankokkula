import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Let's Build Something</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          Open to collaborating on AI products, research-driven projects, and backend systems.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:sravan@example.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-secondary text-foreground font-medium rounded-lg hover:bg-muted transition-colors text-sm"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-secondary text-foreground font-medium rounded-lg hover:bg-muted transition-colors text-sm"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
