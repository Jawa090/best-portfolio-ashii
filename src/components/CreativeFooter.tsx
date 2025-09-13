import { Heart, Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CreativeFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Mail, href: 'mailto:ayesha@example.com', label: 'Email', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="relative py-16 bg-gradient-to-br from-muted/50 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, hsl(var(--secondary)) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold gradient-text-animated mb-2">
              Ayesha Zahid
            </h3>
            <p className="text-muted-foreground">
              Crafting digital experiences with passion & creativity
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className={`p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={social.label}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          {/* Quote */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <blockquote className="text-lg italic text-muted-foreground">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            <cite className="text-sm text-primary font-medium mt-2 block">- Steve Jobs</cite>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
            <div className="flex items-center gap-2 text-muted-foreground mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by Ayesha Zahid</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © 2024 All rights reserved
            </div>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 rounded-full w-12 h-12 p-0 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <div className="w-20 h-20 rounded-full bg-primary/30 animate-pulse" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="w-16 h-16 rounded-full bg-secondary/30 animate-bounce" />
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-10">
        <div className="w-12 h-12 rounded-full bg-accent/30 animate-ping" />
      </div>
    </footer>
  );
};

export default CreativeFooter;