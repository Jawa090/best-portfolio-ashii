import { 
  Palette, 
  Smartphone, 
  Zap, 
  Package, 
  Type, 
  Monitor,
  Brush,
  Layers,
  PenTool,
  Camera,
  Code,
  Sparkles,
  Star,
  Award,
  TrendingUp
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const SkillsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('design');
  const [animatedValues, setAnimatedValues] = useState<{[key: string]: number}>({});

  // Core Skills with accurate proficiency levels
  const coreSkills = [
    { 
      name: "UI/UX Design", 
      icon: Smartphone, 
      level: 95, 
      experience: "5+ years",
      projects: "150+",
      color: "primary",
      description: "Creating intuitive and beautiful user interfaces"
    },
    { 
      name: "Graphic Design", 
      icon: Palette, 
      level: 98, 
      experience: "6+ years",
      projects: "200+",
      color: "secondary",
      description: "Visual communication through creative design"
    },
    { 
      name: "Branding", 
      icon: Award, 
      level: 92, 
      experience: "4+ years",
      projects: "80+",
      color: "accent",
      description: "Building memorable brand identities"
    },
    { 
      name: "Web Design", 
      icon: Monitor, 
      level: 88, 
      experience: "4+ years",
      projects: "120+",
      color: "primary",
      description: "Responsive and modern web experiences"
    },
    { 
      name: "Illustration", 
      icon: Brush, 
      level: 85, 
      experience: "3+ years",
      projects: "60+",
      color: "secondary",
      description: "Custom illustrations and digital art"
    },
    { 
      name: "Motion Graphics", 
      icon: Zap, 
      level: 78, 
      experience: "2+ years",
      projects: "40+",
      color: "accent",
      description: "Bringing designs to life with animation"
    }
  ];

  // Categorized Skills
  const skillCategories = {
    design: {
      title: "Design & Creative",
      icon: Palette,
      skills: [
        { name: "Adobe Photoshop", level: 98, years: 6 },
        { name: "Adobe Illustrator", level: 95, years: 5 },
        { name: "Adobe InDesign", level: 90, years: 4 },
        { name: "Figma", level: 92, years: 3 },
        { name: "Sketch", level: 85, years: 3 },
        { name: "Adobe XD", level: 88, years: 2 }
      ]
    },
    technical: {
      title: "Technical & Tools",
      icon: Code,
      skills: [
        { name: "Prototyping", level: 90, years: 4 },
        { name: "Wireframing", level: 95, years: 5 },
        { name: "User Research", level: 82, years: 3 },
        { name: "Design Systems", level: 88, years: 3 },
        { name: "Responsive Design", level: 92, years: 4 },
        { name: "Accessibility", level: 78, years: 2 }
      ]
    },
    creative: {
      title: "Creative & Art",
      icon: Brush,
      skills: [
        { name: "Digital Painting", level: 85, years: 4 },
        { name: "Typography", level: 92, years: 5 },
        { name: "Color Theory", level: 95, years: 6 },
        { name: "Layout Design", level: 90, years: 5 },
        { name: "Brand Identity", level: 88, years: 4 },
        { name: "Print Design", level: 82, years: 3 }
      ]
    }
  };

  // Animate skill levels when visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const newValues: {[key: string]: number} = {};
        coreSkills.forEach(skill => {
          newValues[skill.name] = skill.level;
        });
        Object.values(skillCategories).forEach(category => {
          category.skills.forEach(skill => {
            newValues[skill.name] = skill.level;
          });
        });
        setAnimatedValues(newValues);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-bubble mb-8">SKILLS</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What I'm Great At
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A diverse toolkit of creative and technical skills that bring ideas to life
            </p>
          </div>

          {/* Core Skills Compact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {coreSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              const animatedLevel = animatedValues[skill.name] || 0;
              
              return (
                <div 
                  key={skill.name}
                  className={`skills-compact-card ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${hoveredSkill === skill.name ? 'skills-compact-card-active' : ''}`}
                  style={{ 
                    transitionDelay: `${index * 0.1 + 0.2}s`
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Header with Icon and Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`skills-compact-icon icon-${skill.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate">{skill.name}</h3>
                      <div className="text-xs text-muted-foreground">{skill.experience} • {skill.projects} projects</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-primary">{animatedLevel}%</div>
                    </div>
                  </div>
                  
                  {/* Skill Progress Bar */}
                  <div className="skills-compact-progress">
                    <div 
                      className="skills-compact-fill"
                      style={{ 
                        width: `${animatedLevel}%`,
                        background: `linear-gradient(90deg, hsl(var(--${skill.color})), hsl(var(--${skill.color}) / 0.7))`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tools & Technologies Compact Grid */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-center mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
              {[
                { name: "Figma", icon: "🎨", level: 92 },
                { name: "Photoshop", icon: "📸", level: 98 },
                { name: "Illustrator", icon: "✏️", level: 95 },
                { name: "InDesign", icon: "📄", level: 90 },
                { name: "After Effects", icon: "🎬", level: 78 },
                { name: "Sketch", icon: "✨", level: 85 },
                { name: "Adobe XD", icon: "🔧", level: 88 },
                { name: "Principle", icon: "⚡", level: 82 },
                { name: "Canva", icon: "🎯", level: 90 },
                { name: "Procreate", icon: "🖌️", level: 85 },
                { name: "Blender", icon: "🎲", level: 75 },
                { name: "Cinema 4D", icon: "🎭", level: 70 }
              ].map((tool, index) => (
                <div 
                  key={tool.name}
                  className={`tools-compact-card transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  {/* Tool Icon and Name */}
                  <div className="text-center mb-2">
                    <div className="tools-compact-icon">
                      <span className="text-lg">{tool.icon}</span>
                    </div>
                    <h4 className="font-medium text-xs mt-1 truncate">{tool.name}</h4>
                  </div>

                  {/* Progress Bar */}
                  <div className="tools-compact-progress">
                    <div 
                      className="tools-compact-fill"
                      style={{ 
                        width: isVisible ? `${tool.level}%` : '0%',
                        transitionDelay: `${index * 0.1 + 0.5}s`
                      }}
                    />
                  </div>
                  
                  {/* Percentage */}
                  <div className="text-center mt-1">
                    <span className="text-xs font-bold text-primary">{tool.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Design Skills */}
            <div className="card-professional p-8 hover-lift-subtle">
              <h3 className="text-xl font-bold mb-6 text-primary">Design Excellence</h3>
              <div className="space-professional-sm">
                {["Visual Identity", "Logo Design", "Brand Guidelines", "Color Theory", "Layout Design"].map((skill) => (
                  <div key={skill} className="badge-professional badge-primary hover-lift-subtle">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="card-professional p-8 hover-lift-subtle">
              <h3 className="text-xl font-bold mb-6 text-secondary">Technical Mastery</h3>
              <div className="space-professional-sm">
                {["Adobe Creative Suite", "Figma", "Sketch", "Principle", "After Effects"].map((skill) => (
                  <div key={skill} className="badge-professional badge-secondary hover-lift-subtle">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* UX Skills */}
            <div className="card-professional p-8 hover-lift-subtle">
              <h3 className="text-xl font-bold mb-6 text-accent">UX Expertise</h3>
              <div className="space-professional-sm">
                {["User Research", "Wireframing", "Prototyping", "Usability Testing", "Information Architecture"].map((skill) => (
                  <div key={skill} className="badge-professional badge-accent hover-lift-subtle">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;