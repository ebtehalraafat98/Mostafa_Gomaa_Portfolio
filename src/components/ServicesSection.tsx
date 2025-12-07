import { Code, Boxes, Workflow, Database, Settings, Layers } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Revit Plugin Development",
    description: "Custom Revit plugins using C#, WPF, and MVVM architecture to automate repetitive tasks and enhance productivity.",
  },
  {
    icon: Boxes,
    title: "BIM Coordination",
    description: "Comprehensive BIM coordination including model health checks, clash detection, and automated reporting solutions.",
  },
  {
    icon: Workflow,
    title: "BIM Automation",
    description: "Streamline BIM workflows with Dynamo scripting and custom automation tools to reduce manual work and errors.",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Parameter management, shared-to-project parameter conversion, and data export tools for seamless integration.",
  },
  {
    icon: Settings,
    title: "CAD to BIM Conversion",
    description: "Automated conversion of 2D CAD drawings into 3D Revit models using custom plugin development.",
  },
  {
    icon: Layers,
    title: "Family Creation",
    description: "Custom Revit family creation and standardization for consistent modeling across projects.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Specialized in BIM development and automation solutions that transform how AEC professionals work
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 hover-lift cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
