import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "InoSharedToProject",
    category: "Revit Plugin",
    description: "A tool to convert shared parameters into project parameters seamlessly, enhancing BIM data management.",
    tags: ["C#", "Revit API", "WPF"],
  },
  {
    title: "InoMatrixRevit",
    category: "Data Export Tool",
    description: "Exports all parameters used in Inolares software for comprehensive data analysis and integration.",
    tags: ["C#", "LINQ", "Excel"],
  },
  {
    title: "InoBlockCreator",
    category: "Revit Plugin",
    description: "Creates detail items from element plan views, automating documentation workflows.",
    tags: ["Revit API", "WPF", "MVVM"],
  },
  {
    title: "InoDurchbrueche",
    category: "Clash Management",
    description: "Manages clashes from Navisworks HTML or Revit reports, streamlining coordination workflows.",
    tags: ["Navisworks", "C#", "HTML"],
  },
  {
    title: "InoTracker",
    category: "Analytics Tool",
    description: "Tracks time and actions in projects and documents for productivity analysis and reporting.",
    tags: ["C#", "SQL", "Analytics"],
  },
  {
    title: "CAD to Revit Converter",
    category: "Automation",
    description: "Converts 2D CAD drawings into 3D Revit models using intelligent automation algorithms.",
    tags: ["CAD API", "Revit API", "Automation"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of BIM automation tools and plugins I've developed to enhance AEC workflows
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-xl overflow-hidden hover-lift"
            >
              {/* Project Header */}
              <div className="h-40 bg-gradient-to-br from-primary/20 via-primary/10 to-primary-glow/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-50" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-heading font-bold text-primary">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.linkedin.com/in/mustafagomaa-95/" target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} />
              View More on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
