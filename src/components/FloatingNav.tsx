import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Award, Code } from 'lucide-react';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
    }`}>
      <div className="bg-background/90 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-border">
        <div className="flex flex-col gap-2">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-item relative group focus-ring transition-all duration-300 hover-lift-subtle ${
                  isActive 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                } rounded-xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-container">
                  <IconComponent className="icon-md" />
                </div>
                
                {/* Tooltip */}
                <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap font-medium shadow-lg">
                    {item.label}
                  </div>
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-foreground"></div>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-primary rounded-full shadow-sm"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default FloatingNav;