import type { Manager } from '../../types';
import GlassCard from '../ui/GlassCard';
import GradeBadge from '../ui/GradeBadge';

interface LeaderboardTableProps {
  readonly managers: ReadonlyArray<Manager>;
  readonly onSelectManager: (id: string) => void;
}

function LeaderboardTable({ managers, onSelectManager }: LeaderboardTableProps) {
  return (
    <section id="leaderboard" className="px-4 md:px-8 py-12">
      <h2 className="gradient-text font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">
        POWER RANKINGS
      </h2>

      <GlassCard level="medium" className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10">
              <th className="font-display text-text-secondary text-sm uppercase tracking-wider px-4 py-3">
                Rank
              </th>
              <th className="font-display text-text-secondary text-sm uppercase tracking-wider px-4 py-3">
                Manager
              </th>
              <th className="font-display text-text-secondary text-sm uppercase tracking-wider px-4 py-3 text-right">
                PTP
              </th>
              <th className="font-display text-text-secondary text-sm uppercase tracking-wider px-4 py-3 text-right">
                Avg PPG
              </th>
              <th className="font-display text-text-secondary text-sm uppercase tracking-wider px-4 py-3 text-center">
                Grade
              </th>
              <th className="font-display text-text-secondary text-sm uppercase tracking-wider px-4 py-3 text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {managers.map((manager) => (
              <tr
                key={manager.cardId}
                onClick={() => onSelectManager(manager.cardId)}
                className="border-b border-white/5 glass-hover cursor-pointer transition-all duration-200"
              >
                <td className="px-4 py-3">
                  <span className="font-display text-2xl font-bold text-text-primary">
                    {manager.rank}
                  </span>
                </td>
                <td className="px-4 py-3 font-body text-text-primary">
                  {manager.name}
                </td>
                <td className="px-4 py-3 font-mono text-right text-text-primary">
                  {manager.ptp.toFixed(1)}
                </td>
                <td className="px-4 py-3 font-mono text-right text-text-primary">
                  {manager.avgPpg.toFixed(1)}
                </td>
                <td className="px-4 py-3 text-center">
                  <GradeBadge grade={manager.grade} color={manager.gradeColor} />
                </td>
                <td className="px-4 py-3 text-center font-body text-sm">
                  {manager.rosterComplete ? (
                    <span className="text-grade-a">COMPLETE \u2705</span>
                  ) : (
                    <span className="text-text-secondary">
                      {manager.roster.length}/8
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>
    </section>
  );
}

export default LeaderboardTable;
