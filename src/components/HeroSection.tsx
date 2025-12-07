import { ChevronDown, Linkedin, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useState, useEffect } from "react";

const roles = [
  "BIM Developer",
  "BIM Automation Specialist",
  "Revit API Expert",
  "AEC Technology Consultant"
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(prev => 
        isDeleting 
          ? prev.slice(0, -1) 
          : currentRole.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="BIM Architecture Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-xl md:text-2xl text-primary-foreground/80 font-light mb-2 animate-fade-in-up">
          Hello, I'm
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in-up-delay-1">
          <span className="gradient-text">Mostafa Gomaa</span>
        </h1>
        
        <div className="mb-8 animate-fade-in-up-delay-2">
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-light h-8">
            <span className="text-primary">{displayText}</span>
            <span className="animate-pulse text-primary">|</span>
          </p>
          <p className="text-primary-foreground/60 mt-2">
            +7 Years of Experience in BIM Technology
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-10 animate-fade-in-up-delay-3">
          <a
            href="https://www.linkedin.com/in/mustafagomaa-95/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/80 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:mostafa.gomaa.00000@gmail.com"
            className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/80 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/80 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300"
          >
            <Github size={20} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
