import { useState, useEffect } from 'react';
import { Sun, Moon, Palette, Zap, Heart, Star, Sparkles, Rainbow } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ThemeType = 'light' | 'dark' | 'creative' | 'neon' | 'sunset' | 'ocean' | 'forest' | 'galaxy';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: ThemeType) => {
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('dark', 'creative', 'neon', 'sunset', 'ocean', 'forest', 'galaxy');
    
    // Reset custom properties
    const customProps = ['--background', '--foreground', '--primary', '--secondary', '--accent', '--muted', '--card'];
    customProps.forEach(prop => root.style.removeProperty(prop));
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else if (newTheme === 'creative') {
      root.classList.add('creative');
      root.style.setProperty('--background', '220 25% 5%');
      root.style.setProperty('--foreground', '300 100% 95%');
      root.style.setProperty('--primary', '300 100% 70%');
      root.style.setProperty('--secondary', '180 100% 60%');
      root.style.setProperty('--accent', '60 100% 70%');
    } else if (newTheme === 'neon') {
      root.classList.add('neon');
      root.style.setProperty('--background', '240 10% 8%');
      root.style.setProperty('--foreground', '0 0% 100%');
      root.style.setProperty('--primary', '315 100% 60%');
      root.style.setProperty('--secondary', '180 100% 50%');
      root.style.setProperty('--accent', '60 100% 50%');
      root.style.setProperty('--muted', '240 10% 15%');
      root.style.setProperty('--card', '240 10% 12%');
    } else if (newTheme === 'sunset') {
      root.classList.add('sunset');
      root.style.setProperty('--background', '25 50% 95%');
      root.style.setProperty('--foreground', '25 50% 10%');
      root.style.setProperty('--primary', '15 100% 60%');
      root.style.setProperty('--secondary', '35 100% 55%');
      root.style.setProperty('--accent', '350 100% 65%');
      root.style.setProperty('--muted', '25 30% 90%');
      root.style.setProperty('--card', '25 50% 98%');
    } else if (newTheme === 'ocean') {
      root.classList.add('ocean');
      root.style.setProperty('--background', '200 50% 95%');
      root.style.setProperty('--foreground', '200 50% 10%');
      root.style.setProperty('--primary', '200 100% 50%');
      root.style.setProperty('--secondary', '180 100% 40%');
      root.style.setProperty('--accent', '220 100% 60%');
      root.style.setProperty('--muted', '200 30% 90%');
      root.style.setProperty('--card', '200 50% 98%');
    } else if (newTheme === 'forest') {
      root.classList.add('forest');
      root.style.setProperty('--background', '120 30% 95%');
      root.style.setProperty('--foreground', '120 30% 10%');
      root.style.setProperty('--primary', '120 60% 40%');
      root.style.setProperty('--secondary', '80 60% 50%');
      root.style.setProperty('--accent', '160 60% 45%');
      root.style.setProperty('--muted', '120 20% 90%');
      root.style.setProperty('--card', '120 30% 98%');
    } else if (newTheme === 'galaxy') {
      root.classList.add('galaxy');
      root.style.setProperty('--background', '260 30% 8%');
      root.style.setProperty('--foreground', '260 30% 95%');
      root.style.setProperty('--primary', '280 100% 70%');
      root.style.setProperty('--secondary', '320 100% 60%');
      root.style.setProperty('--accent', '240 100% 65%');
      root.style.setProperty('--muted', '260 20% 15%');
      root.style.setProperty('--card', '260 30% 12%');
    }
  };

  const switchTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const themes = [
    { id: 'light', icon: Sun, label: 'Light', color: 'bg-yellow-400' },
    { id: 'dark', icon: Moon, label: 'Dark', color: 'bg-slate-800' },
    { id: 'creative', icon: Palette, label: 'Creative', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { id: 'neon', icon: Zap, label: 'Neon', color: 'bg-gradient-to-r from-pink-500 to-cyan-500' },
    { id: 'sunset', icon: Heart, label: 'Sunset', color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { id: 'ocean', icon: Star, label: 'Ocean', color: 'bg-gradient-to-r from-blue-500 to-teal-500' },
    { id: 'forest', icon: Sparkles, label: 'Forest', color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    { id: 'galaxy', icon: Rainbow, label: 'Galaxy', color: 'bg-gradient-to-r from-purple-600 to-indigo-600' },
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-md border-border/50 hover:bg-background/90"
        >
          {theme === 'light' && <Sun size={16} />}
          {theme === 'dark' && <Moon size={16} />}
          {theme === 'creative' && <Palette size={16} />}
          {theme === 'neon' && <Zap size={16} />}
          {theme === 'sunset' && <Heart size={16} />}
          {theme === 'ocean' && <Star size={16} />}
          {theme === 'forest' && <Sparkles size={16} />}
          {theme === 'galaxy' && <Rainbow size={16} />}
        </Button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-background/90 backdrop-blur-md rounded-lg border border-border/50 shadow-lg p-2 min-w-[140px] max-h-80 overflow-y-auto">
            <div className="grid grid-cols-2 gap-1">
              {themes.map((themeOption) => {
                const IconComponent = themeOption.icon;
                return (
                  <button
                    key={themeOption.id}
                    onClick={() => switchTheme(themeOption.id as ThemeType)}
                    className={`flex flex-col items-center gap-1 px-2 py-3 rounded-md text-xs transition-all hover:bg-muted hover:scale-105 ${
                      theme === themeOption.id ? 'bg-muted ring-2 ring-primary/50' : ''
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full ${themeOption.color} shadow-sm`} />
                    <IconComponent size={12} />
                    <span className="font-medium">{themeOption.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;