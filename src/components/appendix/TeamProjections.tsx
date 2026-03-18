import { useMemo } from 'react';
import type { TeamProjection } from '../../types';
import GlassCard from '../ui/GlassCard';

interface TeamProjectionsProps {
  readonly projections: ReadonlyArray<TeamProjection>;
}

function TeamProjections({ projections }: TeamProjectionsProps) {
  const sorted = useMemo(
    () => [...projections].sort((a, b) => b.expWins - a.expWins),
    [projections],
  );

  return (
    <section id="projections" className="px-4 md:px-8 py-12">
      <h2 className="gradient-text font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">
        TEAM PROJECTIONS
      </h2>

      <GlassCard level="medium" className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-4 py-3">
                Team
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-4 py-3 text-center">
                Seed
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-4 py-3">
                Region
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-4 py-3 text-right">
                Exp Wins
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-4 py-3 text-right">
                Exp Games
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-4 py-3 text-right">
                S16%
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-4 py-3 text-right">
                F4%
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-4 py-3 text-right">
                Title%
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((team) => {
              const hasTitle = team.titlePct > 0;
              return (
                <tr
                  key={`${team.team}-${team.region}`}
                  className={`border-b border-white/5 ${
                    hasTitle ? 'bg-accent-purple/[0.08]' : ''
                  }`}
                >
                  <td className="px-4 py-2 font-body text-text-primary">
                    {team.team}
                  </td>
                  <td className="px-4 py-2 font-mono text-center text-text-primary">
                    {team.seed}
                  </td>
                  <td className="px-4 py-2 font-body text-text-secondary">
                    {team.region}
                  </td>
                  <td className="px-4 py-2 font-mono text-right text-text-primary">
                    {team.expWins.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 font-mono text-right text-text-primary">
                    {team.expGames.toFixed(1)}
                  </td>
                  <td className="px-4 py-2 font-mono text-right text-text-primary">
                    {team.s16Pct.toFixed(1)}%
                  </td>
                  <td className="px-4 py-2 font-mono text-right text-text-primary">
                    {team.f4Pct.toFixed(1)}%
                  </td>
                  <td className="px-4 py-2 font-mono text-right text-text-primary">
                    {team.titlePct.toFixed(1)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </GlassCard>
    </section>
  );
}

export default TeamProjections;
