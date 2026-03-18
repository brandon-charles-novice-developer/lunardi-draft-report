import { motion } from 'framer-motion';
import StatNumber from '../ui/StatNumber';

const HERO_STATS = [
  { value: 10, label: 'Managers', suffix: '' },
  { value: 72, label: 'Picks', suffix: '' },
  { value: 8, label: 'Rounds', suffix: '' },
  { value: 18, label: 'Sources', suffix: '' },
] as const;

function HeroSection() {
  return (
    <section
      id="overview"
      className="animated-gradient-bg min-h-screen flex flex-col items-center justify-center px-6 py-20 relative"
    >
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="font-body text-text-secondary text-sm md:text-base tracking-widest uppercase mb-4">
          Published March 17, 2026 — Tournament Eve
        </p>

        <h1 className="gradient-text font-display text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-none mb-2">
          THE OFFICIAL HOMOE LUNARDI
        </h1>
        <h2 className="gradient-text font-display text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          2026 DRAFT POOL POWER RANKINGS
        </h2>

        <motion.p
          className="font-body text-text-secondary text-lg md:text-2xl italic max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Because someone needs to tell the truth around here and it might as
          well be the prettiest one in the room.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {HERO_STATS.map((stat) => (
            <StatNumber
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>

        <motion.p
          className="font-body text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed md:leading-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          This draft was — and I say this with absolute sincerity, which is the
          most destabilizing thing I can offer any of you — genuinely
          interesting. Ten managers. Eighty picks. Eight rounds of ego,
          strategy, and profoundly questionable decision-making. What follows is
          the definitive analysis of every roster in this pool, ranked from
          hopeless to flawless, delivered with the rigor of a quant and the
          warmth of someone who has been thinking about Mark Weiner's arms for
          longer than is professionally appropriate.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-secondary"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </section>
  );
}

export default HeroSection;
