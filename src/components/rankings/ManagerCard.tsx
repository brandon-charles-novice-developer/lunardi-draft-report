import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Manager } from '../../types';
import GlassCard from '../ui/GlassCard';
import GradeBadge from '../ui/GradeBadge';
import RosterTable from './RosterTable';
import Commentary from './Commentary';

interface ManagerCardProps {
  readonly manager: Manager;
}

interface CollapsibleProps {
  readonly icon: string;
  readonly title: string;
  readonly content: string;
}

function Collapsible({ icon, title, content }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!content || content.trim().length === 0) return null;

  return (
    <div className="border-t border-white/10">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center gap-2 px-4 py-3 text-left font-body text-text-secondary hover:text-text-primary transition-colors duration-200"
      >
        <span>{icon}</span>
        <span className="font-display text-sm uppercase tracking-wider">
          {title}
        </span>
        <span className="ml-auto text-xs">{isOpen ? '\u25B2' : '\u25BC'}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 font-body text-text-secondary text-sm leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
}

function ManagerCard({ manager }: ManagerCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const rosterStatus = manager.rosterComplete
    ? '8/8 COMPLETE'
    : `${manager.roster.length}/8`;

  return (
    <motion.div
      ref={ref}
      id={manager.cardId}
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: 'blur(0px)' }
          : { opacity: 0, y: 30, filter: 'blur(8px)' }
      }
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <GlassCard
        level="medium"
        className="overflow-hidden"
      >
        <div
          className="border-l-[3px] p-4 md:p-6"
          style={{ borderLeftColor: manager.gradeColor }}
        >
          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
            <span
              className="font-display text-4xl md:text-6xl font-bold leading-none"
              style={{ color: manager.gradeColor }}
            >
              #{manager.rank}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary truncate">
                {manager.name}
              </h3>
              <p className="font-body text-text-secondary text-sm mt-1">
                Avg PPG: {manager.avgPpg.toFixed(1)} | Roster: {rosterStatus}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <GradeBadge grade={manager.grade} color={manager.gradeColor} />
              <span className="font-mono text-xl text-text-primary">
                {manager.ptp.toFixed(1)}
              </span>
            </div>
          </div>

          {/* Roster */}
          <div className="mb-4">
            <RosterTable roster={manager.roster} />
          </div>

          {/* Collapsible Sections */}
          <Collapsible
            icon={"\u{1F4CD}"}
            title="Path Analysis"
            content={manager.pathAnalysis}
          />
          <Collapsible
            icon={"\u2694\uFE0F"}
            title="Head-to-Head Conflicts"
            content={manager.headToHead}
          />
          <Collapsible
            icon={"\u{1F3E5}"}
            title="Injury Concerns"
            content={manager.injuryConcerns}
          />

          {/* Commentary */}
          {manager.commentary && (
            <div className="border-t border-white/10 pt-6 mt-2 px-2 md:px-4">
              <h4 className="font-display text-accent-pink text-sm uppercase tracking-wider mb-4">
                HOMOE LUNARDI'S TAKE
              </h4>
              <div className="max-w-3xl mx-auto">
                <Commentary text={manager.commentary} />
              </div>
            </div>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default ManagerCard;
