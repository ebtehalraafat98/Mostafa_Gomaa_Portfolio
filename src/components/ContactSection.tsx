import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mostafa.gomaa.00000@gmail.com",
    href: "mailto:mostafa.gomaa.00000@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+49 176 8757 3661",
    href: "tel:+4917687573661",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Berlin, Germany",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "mustafagomaa-95",
    href: "https://www.linkedin.com/in/mustafagomaa-95/",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:mostafa.gomaa.00000@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client should open shortly.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    // 1. إضافة overflow-hidden لمنع أي تمدد غير مرغوب
    <section id="contact" className="py-12 lg:py-24 bg-background overflow-hidden">
      
      {/* 2. استبدال container-custom بـ container mx-auto px-4 لضبط الحواف */}
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-2">
            Have a project in mind? Let's discuss how I can help automate your BIM workflows
          </p>
        </div>

        {/* 3. تعديل Grid Gap ليكون أصغر في الموبايل */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 4. تعديل Padding الكارت ليكون p-6 في الموبايل و p-8 في الديسكتوب */}
            <div className="glass-card p-6 md:p-8 border border-border/50 rounded-xl bg-card/30 backdrop-blur-sm">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1"> {/* min-w-0 مهم جداً داخل الفليكس لمنع التمدد */}
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          // 5. أهم تعديل: break-all للإيميل الطويل
                          className="text-foreground font-medium hover:text-primary transition-colors break-all sm:break-normal block leading-tight"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card p-6 md:p-8 border border-border/50 rounded-xl bg-card/30 backdrop-blur-sm">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
                  Arabic (Native)
                </span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
                  English (Fluent)
                </span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
                  German (B2)
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 border border-border/50 rounded-xl bg-card/30 backdrop-blur-sm space-y-5 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background/50 w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background/50 w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="bg-background/50 w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-background/50 resize-none w-full"
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto gap-2">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;