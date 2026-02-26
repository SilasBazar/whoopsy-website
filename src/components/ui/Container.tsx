import { cn } from '@/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('max-w-[1200px] mx-auto px-5', className)}>
      {children}
    </div>
  );
}