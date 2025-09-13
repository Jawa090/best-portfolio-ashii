import { ExternalLink, Eye, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Extended projects array with more content
  const projects = [
    {
      id: 1,
      title: "MoodBoard App",
      category: "UI/UX Design",
      description: "A mobile app for creative inspiration and mood boarding with intuitive user experience.",
      image: project1,
      tags: ["Mobile Design", "UX Research", "Prototyping"],
      color: "primary"
    },
    {
      id: 2,
      title: "Aurora Brand Identity",
      category: "Branding",
      description: "Complete brand identity system for a sustainable fashion startup.",
      image: project2,
      tags: ["Logo Design", "Brand Guidelines", "Print Design"],
      color: "secondary"
    },
    {
      id: 3,
      title: "Organic Food Packaging",
      category: "Packaging Design",
      description: "Sustainable packaging design for organic food products with playful illustrations.",
      image: project3,
      tags: ["Package Design", "Illustration", "Sustainability"],
      color: "accent"
    },
    {
      id: 4,
      title: "Digital Art Collection",
      category: "Illustration",
      description: "Series of digital illustrations exploring modern abstract character design.",
      image: project4,
      tags: ["Digital Art", "Character Design", "Abstract"],
      color: "primary"
    },
    {
      id: 5,
      title: "E-commerce Platform",
      category: "Web Design",
      description: "Modern e-commerce platform with seamless user experience and conversion optimization.",
      image: project1,
      tags: ["E-commerce", "UX/UI", "Conversion"],
      color: "secondary"
    },
    {
      id: 6,
      title: "Mobile Banking App",
      category: "Fintech",
      description: "Secure and intuitive mobile banking application with advanced financial features.",
      image: project2,
      tags: ["Fintech", "Security", "Mobile"],
      color: "accent"
    },
    {
      id: 7,
      title: "Restaurant Brand Kit",
      category: "Branding",
      description: "Complete brand identity for a premium restaurant chain including logo and packaging.",
      image: project3,
      tags: ["Restaurant", "Branding", "Packaging"],
      color: "primary"
    },
    {
      id: 8,
      title: "Fitness Tracker UI",
      category: "Health Tech",
      description: "Motivational fitness tracking app with gamification and social features.",
      image: project4,
      tags: ["Health", "Gamification", "Social"],
      color: "secondary"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 4000); // Change slide every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, projects.length]);

  // Scroll to current project
  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const cardWidth = scrollContainer.children[0]?.clientWidth || 0;
      const gap = 24; // 1.5rem gap
      const scrollPosition = currentIndex * (cardWidth + gap);
      
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-bubble mb-8">PROJECTS</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A curated selection of my best design projects across different disciplines
            </p>
            
            {/* Auto-play toggle */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="bg-background/50 backdrop-blur-sm"
              >
                {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span className="ml-2">{isAutoPlaying ? 'Pause' : 'Play'} Auto-preview</span>
              </Button>
            </div>
          </div>

          {/* Projects Carousel */}
          <div className="relative mb-16">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {projects.map((project, index) => (
                  <div 
                    key={project.id}
                    className={`project-card group transition-all duration-700 flex-shrink-0 w-80 h-auto min-h-[420px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${
                      index === currentIndex ? 'ring-2 ring-primary/50 scale-105' : ''
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transitionDelay: `${index * 0.05 + 0.3}s`
                    }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => goToProject(index)}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-t-3xl h-48">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          hoveredProject === project.id || index === currentIndex
                            ? 'scale-110 brightness-110' 
                            : 'scale-100'
                        }`}
                      />
                      
                      {/* Interactive Preview Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-primary/80 to-black/60 transition-all duration-300 flex items-center justify-center gap-3 ${
                        hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <Button 
                          size="sm" 
                          variant="secondary" 
                          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transform hover:scale-110 transition-transform text-xs px-3 py-2"
                        >
                          <Eye size={14} className="mr-1" />
                          Preview
                        </Button>
                        <Button 
                          size="sm" 
                          variant="secondary" 
                          className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transform hover:scale-110 transition-transform text-xs px-3 py-2"
                        >
                          <ExternalLink size={14} className="mr-1" />
                          Live
                        </Button>
                      </div>

                      {/* Project Number */}
                      <div className="absolute top-3 left-3">
                        <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shadow-lg">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/90 text-gray-800 backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold mb-3 leading-tight">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-height-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110 shadow-lg"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              View All Projects
              <ExternalLink size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;