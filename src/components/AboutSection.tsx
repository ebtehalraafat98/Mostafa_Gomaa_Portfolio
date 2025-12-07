import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const skills = [
  { name: "Revit API Development", percentage: 95 },
  { name: "C# / WPF / MVVM", percentage: 90 },
  { name: "BIM Coordination", percentage: 92 },
  { name: "Dynamo Scripting", percentage: 85 },
  { name: "Navisworks API", percentage: 80 },
  { name: "React / Web Development", percentage: 75 },
];

const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(percentage);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={barRef} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-semibold">{percentage}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image & Stats */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary-glow/20 p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                      <span className="text-5xl font-heading font-bold text-primary-foreground">MG</span>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mt-8">
                      <div className="text-center">
                        <p className="text-4xl font-heading font-bold text-primary">+7</p>
                        <p className="text-muted-foreground text-sm">Years Experience</p>
                      </div>
                      <div className="text-center">
                        <p className="text-4xl font-heading font-bold text-primary">+15</p>
                        <p className="text-muted-foreground text-sm">Plugins Developed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-0 hidden lg:block" />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-primary font-medium mb-4">BIM Developer & Automation Specialist</p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm <span className="text-foreground font-semibold">Mostafa Gomaa</span>, a goal-oriented BIM Developer 
              with over 7 years of experience in BIM technology. Currently based in Berlin, Germany, I specialize in 
              developing custom Revit plugins using C#, WPF, MVVM, and Revit API to optimize project outcomes through 
              innovative BIM processes and automation solutions.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My expertise spans from mechanical BIM design to full-stack BIM automation, allowing me to bridge the gap 
              between engineering knowledge and software development in the AEC industry.
            </p>

            {/* Skills */}
            <div className="mb-8">
              {skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="lg" asChild>
                <a href="/Mostafa_Gomaa_CV_EN.pdf" download>
                  <Download size={18} />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  <Mail size={18} />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
