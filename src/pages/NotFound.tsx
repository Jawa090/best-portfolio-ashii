import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex items-center justify-center relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {i % 2 === 0 ? (
              <Star size={12 + Math.random() * 20} className="text-primary" />
            ) : (
              <Sparkles size={10 + Math.random() * 15} className="text-secondary" />
            )}
          </div>
        ))}
      </div>

      {/* Interactive cursor follower */}
      <div
        className="fixed pointer-events-none z-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl transition-all duration-300"
        style={{
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
        }}
      />

      <div className="text-center z-20 relative">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-primary/10 blur-sm">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-animated">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Looks like you've wandered into uncharted creative territory. 
            Let's get you back to the main portfolio!
          </p>
        </div>

        {/* Fun Animation */}
        <div className="mb-8">
          <div className="inline-block animate-bounce">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
              ?
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            <Link to="/">
              <Home size={20} className="mr-2" />
              Back to Portfolio
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.history.back()}
            className="px-8"
          >
            Go Back
          </Button>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-4 rounded-lg bg-muted/50 backdrop-blur-sm border border-border/50 max-w-md mx-auto">
          <p className="text-sm text-muted-foreground">
            <strong>Fun Fact:</strong> This 404 page has more animations than most websites! 
            That's the creative touch you get with Ayesha's work. ✨
          </p>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-20 h-20 border-4 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-secondary/20 rotate-45 animate-pulse" />
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-accent/30 rounded-full animate-bounce" />
    </div>
  );
};

export default NotFound;
