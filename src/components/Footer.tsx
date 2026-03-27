import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Boddiga Sai Krishna. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com/in/boddiga-sai-krishna-8b98472b6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="mailto:bsaikrishnasai48@gmail.com,2300039074cse3@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
          title="Email Me"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
