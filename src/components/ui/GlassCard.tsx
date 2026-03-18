import type { ReactNode, MouseEventHandler } from 'react';

interface GlassCardProps {
  readonly level?: 'light' | 'medium' | 'heavy';
  readonly className?: string;
  readonly children: ReactNode;
  readonly onClick?: MouseEventHandler<HTMLDivElement>;
}

const GLASS_CLASSES: Record<string, string> = {
  light: 'glass-light',
  medium: 'glass-medium',
  heavy: 'glass-heavy',
};

function GlassCard({ level = 'light', className = '', children, onClick }: GlassCardProps) {
  const glassClass = GLASS_CLASSES[level] ?? 'glass-light';

  return (
    <div className={`${glassClass} rounded-xl ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default GlassCard;
