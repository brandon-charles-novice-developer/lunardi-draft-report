import type { InjuryEntry } from '../../types';
import GlassCard from '../ui/GlassCard';

interface InjuryReportProps {
  readonly injuries: ReadonlyArray<InjuryEntry>;
}

const STATUS_STYLES: Record<string, { bg: string; text: string }> = {
  OUT: { bg: 'bg-red-500/20', text: 'text-red-400' },
  QUESTIONABLE: { bg: 'bg-grade-b-minus/20', text: 'text-grade-b-minus' },
  PROBABLE: { bg: 'bg-grade-a/20', text: 'text-grade-a' },
};

function StatusBadge({ status }: { readonly status: string }) {
  const normalized = status.toUpperCase();
  const style = STATUS_STYLES[normalized] ?? { bg: 'bg-white/10', text: 'text-text-secondary' };

  return (
    <span
      className={`${style.bg} ${style.text} text-xs font-bold px-2 py-0.5 rounded-full uppercase`}
    >
      {status}
    </span>
  );
}

function InjuryReport({ injuries }: InjuryReportProps) {
  return (
    <section id="injuries" className="px-4 md:px-8 py-12">
      <h2 className="gradient-text font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">
        INJURY REPORT
      </h2>

      <GlassCard level="medium" className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-4 py-3">
                Player
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-4 py-3">
                Team
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-4 py-3 text-center">
                Status
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-4 py-3">
                Impact
              </th>
            </tr>
          </thead>
          <tbody>
            {injuries.map((injury, index) => (
              <tr
                key={`${injury.player}-${index}`}
                className="border-b border-white/5"
              >
                <td className="px-4 py-3 font-body text-text-primary">
                  {injury.player}
                </td>
                <td className="px-4 py-3 font-body text-text-secondary">
                  {injury.team}
                </td>
                <td className="px-4 py-3 text-center">
                  <StatusBadge status={injury.status} />
                </td>
                <td className="px-4 py-3 font-body text-text-secondary text-xs">
                  {injury.impact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GlassCard>
    </section>
  );
}

export default InjuryReport;
