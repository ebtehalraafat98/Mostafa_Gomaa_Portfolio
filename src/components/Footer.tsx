import { Linkedin, Mail, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="font-heading font-bold text-xl text-background tracking-wide">
            MOSTAFA<span className="text-primary">.</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/mustafagomaa-95/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center text-background/80 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:mostafa.gomaa.00000@gmail.com"
              className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center text-background/80 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-background/30 flex items-center justify-center text-background/80 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Github size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-background/60 text-sm flex items-center gap-1">
            © {currentYear} Made with <Heart size={14} className="text-primary fill-primary" /> by Mostafa Gomaa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
