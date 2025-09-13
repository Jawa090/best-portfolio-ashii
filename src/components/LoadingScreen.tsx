import { useState, useEffect } from 'react';
import { Sparkles, Star } from 'lucide-react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-all duration-800 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="text-6xl font-bold text-primary animate-pulse">
            AZ
          </div>
          <div className="absolute -top-2 -right-2">
            <Star size={20} className="text-accent animate-spin" />
          </div>
          <div className="absolute -bottom-2 -left-2">
            <Sparkles size={16} className="text-secondary animate-bounce" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Creating Magic...</h2>
          <p className="text-muted-foreground">Preparing your creative journey</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            >
              {i % 2 === 0 ? (
                <Star size={12 + i * 2} className="text-primary/30" />
              ) : (
                <Sparkles size={10 + i * 2} className="text-secondary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;