import { Star, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Background */}
      <div className="geometric-bg"></div>
      
      {/* Enhanced Floating Decorations */}
      <div className="floating-element floating-shape top-20 left-10" style={{ animationDelay: '0s' }}>
        <div className="icon-container">
          <Star className="icon-xl icon-secondary icon-pulse" />
        </div>
      </div>
      <div className="floating-element floating-shape top-40 right-20" style={{ animationDelay: '1s' }}>
        <div className="icon-container">
          <Sparkles className="icon-lg icon-accent icon-rotate" />
        </div>
      </div>
      <div className="floating-element floating-shape bottom-32 left-20" style={{ animationDelay: '2s' }}>
        <div className="icon-container">
          <Star className="icon-md icon-primary icon-bounce" />
        </div>
      </div>
      <div className="floating-element star-decoration top-32 left-1/4" style={{ animationDelay: '0.5s' }}>
        <div className="icon-container">
          <Star className="icon-sm icon-muted" />
        </div>
      </div>
      <div className="floating-element star-decoration bottom-40 right-1/4" style={{ animationDelay: '1.5s' }}>
        <div className="icon-container">
          <Star className="icon-md icon-secondary" />
        </div>
      </div>
      <div className="floating-element star-decoration top-1/2 left-10" style={{ animationDelay: '2.5s' }}>
        <div className="icon-container">
          <Sparkles className="icon-sm icon-accent" />
        </div>
      </div>
      <div className="floating-element star-decoration top-1/3 right-10" style={{ animationDelay: '3s' }}>
        <div className="icon-container">
          <Star className="icon-md icon-primary" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Portfolio Title at Top */}
          <div className="text-center py-20">
            {/* Year Badge */}
            <div className="inline-block mb-8">
              <span className="text-bubble">2024/25</span>
            </div>

            {/* Main Title */}
            <h1 className="text-display relative mb-8" data-text="PORTFOLIO">
              PORTFOLIO
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-20">
            
            {/* Left Side - Image */}
            <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative z-10 group">
                <img 
                  src="/pic1.webp" 
                  alt="Ayesha Zahid - Creative Designer" 
                  className="w-full h-auto rounded-3xl shadow-creative transform hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => {
                    // Add a fun click interaction
                    const img = document.querySelector('img[alt="Ayesha Zahid - Creative Designer"]');
                    img?.classList.add('animate-bounce');
                    setTimeout(() => img?.classList.remove('animate-bounce'), 1000);
                  }}
                />
              </div>
              
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-3xl blur-2xl -z-10 scale-110 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-3xl blur-xl -z-10 scale-125"></div>
              
              {/* Floating Elements around Image */}
              <div className="floating-element absolute -top-6 -right-6 floating-shape" style={{ animationDelay: '1s' }}>
                <div className="icon-container">
                  <Star className="icon-xl icon-accent icon-rotate" />
                </div>
              </div>
              <div className="floating-element absolute -bottom-4 -left-4 floating-shape" style={{ animationDelay: '2s' }}>
                <div className="icon-container">
                  <Sparkles className="icon-lg icon-primary icon-pulse" />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className={`text-center lg:text-left order-1 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Subtitle */}
              <div className="mb-8">
                <h2 className="text-hero mb-6">Ayesha Zahid</h2>
                <p className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
                  Graphic & UI/UX Designer
                </p>
                <div className="text-lg md:text-xl text-muted-foreground">
                  Creating digital experiences that inspire and delight
                </div>
              </div>

              {/* Location */}
              <div className="inline-flex items-center gap-3 badge-professional badge-secondary text-base px-6 py-3 mb-8 bg-secondary/10 border-secondary/20">
                <span className="text-xl">📍</span>
                <span>Lahore, Pakistan</span>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-perfect bg-primary hover:bg-primary/90 text-primary-foreground">
                  View My Work
                </button>
                <button className="btn-perfect bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Get In Touch
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background via-secondary/10 to-accent/15 -z-20"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 via-transparent to-primary/10 -z-20"></div>
    </section>
  );
};

export default HeroSection;