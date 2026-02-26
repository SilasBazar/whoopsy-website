import { useState } from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  variant?: '3d' | 'flat';
  className?: string;
  onClick?: () => void;
}

export function Button({ children, href, target, variant = '3d', className, onClick }: ButtonProps) {
  const [isPopping, setIsPopping] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopping(true);
    
    // Reset after animation completes
    setTimeout(() => {
      setIsPopping(false);
    }, 400);

    // Delay action to let spark animation play
    setTimeout(() => {
      if (onClick) onClick();
      
      // Handle internal vs external links
      if (href) {
        if (href.startsWith('#')) {
          // Internal link - scroll to section
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // External link - open in new tab
          window.open(href, target || '_blank');
        }
      }
    }, 300); // Wait 300ms before executing action
  };

  const baseClasses = cn(
    'bg-whoopsy-white text-whoopsy-black',
    'font-mono font-bold uppercase tracking-wider',
    'px-12 py-5 rounded-whoopsy',
    'relative',
    'cursor-pointer',
    'outline-none border-none',
    'select-none',
    'inline-block',
    variant === '3d' && 'btn-3d',
    variant === 'flat' && 'btn-flat',
    className
  );

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        className={baseClasses}
        onClick={handleClick}
      >
        {children}
      </button>
      
      {variant === '3d' && (
        <>
          {/* Spark 1 */}
          <div 
            className={cn(
              'absolute bottom-[calc(100%-16px)] right-[13px]',
              'bg-whoopsy-white w-[6px] h-3 rounded-full',
              'pointer-events-none',
              'origin-bottom',
              isPopping ? 'animate-spark-1' : 'opacity-0'
            )}
          />
          {/* Spark 2 */}
          <div 
            className={cn(
              'absolute bottom-[calc(100%-16px)] right-[13px]',
              'bg-whoopsy-white w-[6px] h-[18px] rounded-full',
              'pointer-events-none',
              'origin-bottom',
              isPopping ? 'animate-spark-2' : 'opacity-0'
            )}
          />
          {/* Spark 3 */}
          <div 
            className={cn(
              'absolute bottom-[calc(100%-16px)] right-[13px]',
              'bg-whoopsy-white w-[6px] h-2.5 rounded-full',
              'pointer-events-none',
              'origin-bottom',
              isPopping ? 'animate-spark-3' : 'opacity-0'
            )}
          />
        </>
      )}
    </div>
  );
}