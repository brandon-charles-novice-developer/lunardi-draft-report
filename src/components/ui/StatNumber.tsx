import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';
import GlassCard from './GlassCard';

interface StatNumberProps {
  readonly value: number;
  readonly label: string;
  readonly suffix?: string;
  readonly decimals?: number;
}

function StatNumber({ value, label, suffix = '', decimals = 0 }: StatNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplayValue(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  const formatted = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toString();

  return (
    <GlassCard level="light" className="p-4 text-center">
      <div ref={ref}>
        <p className="font-mono text-3xl font-bold text-text-primary">
          {formatted}{suffix}
        </p>
        <p className="font-body text-sm text-text-secondary mt-1">
          {label}
        </p>
      </div>
    </GlassCard>
  );
}

export default StatNumber;
