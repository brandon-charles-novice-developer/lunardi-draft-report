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
        <h1 className="gradient-text font-display text-5xl md:text-7xl font-bold tracking-tight leading-none mb-2">
          THE OFFICIAL HOMOE LUNARDI
        </h1>
        <h2 className="gradient-text font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          2026 DRAFT POOL POWER RANKINGS
        </h2>

        <motion.p
          className="font-body text-text-secondary text-lg md:text-xl italic max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Because someone needs to tell the truth around here and it might as
          well be the prettiest one in the room.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
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
