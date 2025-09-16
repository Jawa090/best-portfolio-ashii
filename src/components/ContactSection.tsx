import { Mail, Linkedin, Globe, Instagram, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:ayesha.zahid@email.com",
      color: "text-primary",
      bg: "bg-primary/20"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ayesha-zahid-96a0a7324/",
      color: "text-secondary",
      bg: "bg-secondary/20"
    },
    {
      name: "Behance",
      icon: Globe,
      href: "https://behance.net/ayeshazahid",
      color: "text-accent",
      bg: "bg-accent/20"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/ayeshazahid_design",
      color: "text-primary",
      bg: "bg-primary/20"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Section Header */}
          <div className="mb-16">
            <span className="text-bubble mb-8">CONTACT</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Work Together!
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'd love to hear about your project 
              and explore how we can create something amazing together.
            </p>
          </div>

          {/* Main CTA */}
          <div className="mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl rounded-full shadow-creative hover:shadow-glow transition-all duration-300"
            >
              <Mail size={24} className="mr-3" />
              Start a Project
            </Button>
          </div>

          {/* Contact Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {contactLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-creative group text-center hover:scale-105 transition-transform"
                >
                  <div className={`inline-flex p-4 rounded-full ${link.bg} mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent size={28} className={link.color} />
                  </div>
                  <h3 className="font-semibold text-sm">{link.name}</h3>
                </a>
              );
            })}
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-muted-foreground">Lahore, Pakistan</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold mb-1">Response Time</h3>
              <p className="text-muted-foreground">Within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💼</div>
              <h3 className="font-semibold mb-1">Availability</h3>
              <p className="text-muted-foreground">Open for projects</p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-primary fill-primary" /> by Ayesha Zahid
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;