import { motion } from 'framer-motion';
import type { Manager } from '../../types';
import GlassCard from '../ui/GlassCard';
import GradeBadge from '../ui/GradeBadge';
import StatNumber from '../ui/StatNumber';

interface MyRosterSpotlightProps {
  readonly manager: Manager;
}

const FLAG_STYLES: Record<string, string> = {
  HOT: 'bg-accent-pink/20 text-accent-pink',
  CONSISTENT: 'bg-accent-blue/20 text-accent-blue',
  QUESTIONABLE: 'bg-grade-b-minus/20 text-grade-b-minus',
};

function MyRosterSpotlight({ manager }: MyRosterSpotlightProps) {
  const hotCount = manager.roster.filter((p) =>
    p.flags.includes('HOT')
  ).length;
  const teams = new Set(manager.roster.map((p) => p.team)).size;

  return (
    <section id="my-roster" className="py-16 px-4 md:px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl gradient-text tracking-tight mb-2">
            THE NYE PORTFOLIO
          </h2>
          <p className="text-text-secondary font-body italic text-lg">
            8 players. 8 teams. 0 overlap. All healthy. The investment thesis
            that won the draft.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          <StatNumber value={manager.ptp} label="Projected PTP" decimals={1} />
          <StatNumber value={manager.avgPpg} label="Avg PPG" decimals={1} />
          <StatNumber value={teams} label="Unique Teams" />
          <StatNumber value={hotCount} label="HOT Players" />
          <div className="col-span-2 md:col-span-1 flex items-center justify-center">
            <GlassCard level="light" className="px-4 py-3 text-center w-full">
              <GradeBadge grade={manager.grade} color={manager.gradeColor} />
              <p className="text-text-secondary text-xs mt-1 font-body">
                Overall Grade
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Player Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {manager.roster.map((player, i) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <GlassCard
                level="medium"
                className="p-5 hover:border-white/35 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl text-text-primary tracking-tight">
                      {player.name}
                    </h3>
                    <p className="text-text-secondary text-sm font-body">
                      {player.team}{' '}
                      <span className="text-accent-purple">
                        ({player.seed}-seed)
                      </span>{' '}
                      &middot; {player.region}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-2xl text-accent-pink font-bold">
                      {player.ppg}
                    </p>
                    <p className="text-text-secondary text-xs font-body">PPG</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <span className="text-text-secondary font-body">
                      Exp Games:{' '}
                    </span>
                    <span className="font-mono text-text-primary">
                      {player.expGames.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <span className="text-text-secondary font-body">
                      PTP:{' '}
                    </span>
                    <span className="font-mono text-accent-blue font-bold">
                      {player.ptp.toFixed(1)}
                    </span>
                  </div>
                  {player.flags.length > 0 && (
                    <div className="flex gap-1 ml-auto">
                      {player.flags.map((flag) => (
                        <span
                          key={flag}
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            FLAG_STYLES[flag] ?? 'bg-white/10 text-text-secondary'
                          }`}
                        >
                          {flag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Roster Architecture Summary */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <GlassCard level="heavy" className="p-6">
            <h3 className="font-display text-lg text-accent-purple mb-3">
              ROSTER ARCHITECTURE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-body">
              <div>
                <p className="text-accent-pink font-semibold mb-1">
                  Ceiling Plays (18+ PPG)
                </p>
                <p className="text-text-secondary">
                  Tanner (19.2), Blackwell (19.0), Johnson (20.1), Stirtz
                  (20.0), Wright III (18.2) — FIVE players at 18+
                </p>
              </div>
              <div>
                <p className="text-accent-blue font-semibold mb-1">
                  Floor Plays (Deep Run)
                </p>
                <p className="text-text-secondary">
                  Flemings (Houston 2-seed), Wagler (Illinois 3-seed) — guaranteed
                  multiple games on F4 contenders
                </p>
              </div>
              <div>
                <p className="text-accent-purple font-semibold mb-1">
                  Built-In Hedges
                </p>
                <p className="text-text-secondary">
                  Johnson (Akron 12) consensus upset pick. Wright III (BYU 6) alongside
                  Dybantsa. Hopkins on underseeded St Johns.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Ceiling / Floor Scenarios */}
        <motion.div
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <GlassCard level="light" className="p-5">
            <h4 className="font-display text-sm text-grade-a mb-2 uppercase tracking-wider">
              Ceiling Scenario
            </h4>
            <p className="font-mono text-3xl text-grade-a font-bold mb-1">
              425.3
            </p>
            <p className="text-text-secondary text-xs font-body">
              Houston F4 + Illinois E8 + Vandy S16 + Akron R2 + Iowa R2 + all
              others win R64
            </p>
          </GlassCard>
          <GlassCard level="light" className="p-5">
            <h4 className="font-display text-sm text-grade-c-plus mb-2 uppercase tracking-wider">
              Floor Scenario
            </h4>
            <p className="font-mono text-3xl text-grade-c-plus font-bold mb-1">
              178.6
            </p>
            <p className="text-text-secondary text-xs font-body">
              Requires 5 of 8 first-round upsets against Brandon's players —
              mathematically improbable
            </p>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default MyRosterSpotlight;
