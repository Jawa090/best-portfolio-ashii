import { Heart, Coffee, Palette } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-bubble mb-8">HI!</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let me introduce myself
            </h2>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-lg leading-relaxed">
                I'm <strong className="text-primary">Ayesha Zahid</strong>, a passionate 
                <span className="text-secondary font-semibold"> Graphic & UI/UX Designer</span> based 
                in the vibrant city of Lahore. I specialize in creating digital experiences that are 
                not just visually stunning, but also intuitive and user-centered.
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey in design is driven by a love for <strong>creativity</strong>, 
                <strong> modern aesthetics</strong>, and the endless possibilities of 
                digital storytelling. I believe great design should evoke emotion, solve problems, 
                and create memorable experiences.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="align-icon-text text-primary">
                  <div className="icon-container">
                    <Heart className="icon-md icon-bounce" />
                  </div>
                  <span className="font-medium">Passionate Designer</span>
                </div>
                <div className="align-icon-text text-secondary">
                  <div className="icon-container">
                    <Palette className="icon-md icon-rotate" />
                  </div>
                  <span className="font-medium">Creative Thinker</span>
                </div>
                <div className="align-icon-text text-accent">
                  <div className="icon-container">
                    <Coffee className="icon-md icon-pulse" />
                  </div>
                  <span className="font-medium">Detail Oriented</span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="card-creative text-center hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl font-bold text-primary mb-2 animate-pulse">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
                <div className="text-xs text-muted-foreground/70 mt-1">Since 2019</div>
              </div>
              <div className="card-creative text-center hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl font-bold text-secondary mb-2 animate-pulse">150+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
                <div className="text-xs text-muted-foreground/70 mt-1">Across Industries</div>
              </div>
              <div className="card-creative text-center hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl font-bold text-accent mb-2 animate-pulse">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
                <div className="text-xs text-muted-foreground/70 mt-1">Worldwide</div>
              </div>
              <div className="card-creative text-center hover:scale-105 transition-transform cursor-pointer">
                <div className="text-3xl font-bold text-primary mb-2 animate-pulse">15+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
                <div className="text-xs text-muted-foreground/70 mt-1">Design Excellence</div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className={`mt-8 grid md:grid-cols-3 gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="card-creative text-center p-4">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-semibold text-sm">Creative Process</div>
                <div className="text-xs text-muted-foreground mt-1">Research → Design → Test → Iterate</div>
              </div>
              <div className="card-creative text-center p-4">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-sm">Fast Delivery</div>
                <div className="text-xs text-muted-foreground mt-1">Quality work in record time</div>
              </div>
              <div className="card-creative text-center p-4">
                <div className="text-2xl mb-2">🌟</div>
                <div className="font-semibold text-sm">Client Satisfaction</div>
                <div className="text-xs text-muted-foreground mt-1">98% positive feedback</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;