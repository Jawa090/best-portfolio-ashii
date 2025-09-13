import { useMousePosition } from '@/hooks/useMousePosition';
import { useState, useEffect } from 'react';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('button, a, .cursor-pointer, .project-card, .card-creative')) {
        setIsHovering(true);
        setCursorVariant('hover');
      } else if (target.matches('h1, h2, h3, .text-display, .text-hero')) {
        setIsHovering(true);
        setCursorVariant('text');
      } else {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  const cursorStyles = {
    default: 'w-4 h-4 bg-primary/60',
    hover: 'w-12 h-12 bg-primary/20 border-2 border-primary',
    text: 'w-8 h-8 bg-secondary/40 border border-secondary'
  };

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full transition-all duration-300 ease-out ${cursorStyles[cursorVariant as keyof typeof cursorStyles]}`}
        style={{
          left: x - (isHovering ? (cursorVariant === 'hover' ? 24 : 16) : 8),
          top: y - (isHovering ? (cursorVariant === 'hover' ? 24 : 16) : 8),
          transform: isHovering ? 'scale(1)' : 'scale(1)',
        }}
      />
      
      {/* Trailing cursor */}
      <div
        className="fixed pointer-events-none z-40 w-2 h-2 bg-accent/40 rounded-full transition-all duration-500 ease-out"
        style={{
          left: x - 4,
          top: y - 4,
          transform: `scale(${isHovering ? 0.5 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;