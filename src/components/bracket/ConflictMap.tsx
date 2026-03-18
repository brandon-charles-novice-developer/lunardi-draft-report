import type { ConflictEntry } from '../../types';
import GlassCard from '../ui/GlassCard';

interface ConflictMapProps {
  readonly r64Conflicts: ReadonlyArray<ConflictEntry>;
  readonly r2Conflicts: ReadonlyArray<ConflictEntry>;
}

interface ConflictTableProps {
  readonly title: string;
  readonly conflicts: ReadonlyArray<ConflictEntry>;
}

function ConflictTable({ title, conflicts }: ConflictTableProps) {
  if (conflicts.length === 0) {
    return (
      <GlassCard level="medium" className="p-6">
        <h3 className="font-display text-xl font-bold text-text-primary mb-4">
          {title}
        </h3>
        <p className="font-body text-text-secondary text-sm italic">
          No conflicts identified for this round.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard level="medium" className="overflow-x-auto">
      <div className="p-6 pb-2">
        <h3 className="font-display text-xl font-bold text-text-primary">
          {title}
        </h3>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-6 py-2">
              Matchup
            </th>
            <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-6 py-2">
              Manager A
            </th>
            <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-6 py-2">
              Manager B
            </th>
            <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-6 py-2">
              Impact
            </th>
          </tr>
        </thead>
        <tbody>
          {conflicts.map((conflict, index) => (
            <tr
              key={`${conflict.matchup}-${index}`}
              className="border-b border-white/5"
            >
              <td className="px-6 py-3 font-body text-text-primary">
                {conflict.matchup}
              </td>
              <td className="px-6 py-3 font-body text-text-primary">
                {conflict.managerA}
              </td>
              <td className="px-6 py-3 font-body text-text-primary">
                {conflict.managerB}
              </td>
              <td className="px-6 py-3 font-body text-text-secondary italic text-xs">
                {conflict.impact}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </GlassCard>
  );
}

function ConflictMap({ r64Conflicts, r2Conflicts }: ConflictMapProps) {
  return (
    <section id="conflicts" className="px-4 md:px-8 py-12 space-y-8">
      <h2 className="gradient-text font-display text-3xl md:text-4xl font-bold tracking-tight">
        HEAD-TO-HEAD CONFLICTS
      </h2>
      <ConflictTable title="Round of 64 Conflicts" conflicts={r64Conflicts} />
      <ConflictTable title="Round of 32 Conflicts" conflicts={r2Conflicts} />
    </section>
  );
}

export default ConflictMap;
