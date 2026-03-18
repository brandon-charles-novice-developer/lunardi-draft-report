import type { Player } from '../../types';

interface RosterTableProps {
  readonly roster: ReadonlyArray<Player>;
}

const FLAG_STYLES: Record<string, { bg: string; text: string }> = {
  HOT: { bg: 'bg-accent-pink/20', text: 'text-accent-pink' },
  CONSISTENT: { bg: 'bg-accent-blue/20', text: 'text-accent-blue' },
  QUESTIONABLE: { bg: 'bg-grade-b-minus/20', text: 'text-grade-b-minus' },
};

function FlagBadge({ flag }: { readonly flag: string }) {
  const style = FLAG_STYLES[flag] ?? { bg: 'bg-white/10', text: 'text-text-secondary' };

  return (
    <span
      className={`${style.bg} ${style.text} text-xs font-bold px-2 py-0.5 rounded-full uppercase`}
    >
      {flag}
    </span>
  );
}

function RosterTable({ roster }: RosterTableProps) {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-3 py-2">
                Player
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-3 py-2">
                Team (Seed)
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-3 py-2 text-right">
                PPG
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-3 py-2 text-right">
                Exp Games
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-3 py-2 text-right">
                PTP
              </th>
              <th className="font-display text-text-secondary text-xs uppercase tracking-wider px-3 py-2">
                Flags
              </th>
            </tr>
          </thead>
          <tbody>
            {roster.map((player, index) => (
              <tr
                key={`${player.name}-${player.team}`}
                className={`border-b border-white/5 ${
                  index % 2 === 0 ? 'bg-white/[0.02]' : 'bg-white/[0.05]'
                }`}
              >
                <td className="px-3 py-2 font-body text-text-primary">
                  {player.name}
                </td>
                <td className="px-3 py-2 font-body text-text-secondary">
                  {player.team} ({player.seed})
                </td>
                <td className="px-3 py-2 font-mono text-right text-text-primary">
                  {player.ppg.toFixed(1)}
                </td>
                <td className="px-3 py-2 font-mono text-right text-text-primary">
                  {player.expGames.toFixed(1)}
                </td>
                <td className="px-3 py-2 font-mono text-right text-text-primary">
                  {player.ptp.toFixed(1)}
                </td>
                <td className="px-3 py-2">
                  <div className="flex gap-1 flex-wrap">
                    {player.flags.map((flag) => (
                      <FlagBadge key={flag} flag={flag} />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-2">
        {roster.map((player, index) => (
          <div
            key={`${player.name}-${player.team}`}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${
              index % 2 === 0 ? 'bg-white/[0.02]' : 'bg-white/[0.05]'
            }`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-body text-text-primary text-sm font-semibold truncate">
                  {player.name}
                </p>
                {player.flags.length > 0 && (
                  <div className="flex gap-1 shrink-0">
                    {player.flags.map((flag) => (
                      <FlagBadge key={flag} flag={flag} />
                    ))}
                  </div>
                )}
              </div>
              <p className="font-body text-text-secondary text-xs">
                {player.team} ({player.seed})
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0 text-right">
              <div>
                <p className="font-mono text-sm text-text-primary font-semibold">
                  {player.ppg.toFixed(1)}
                </p>
                <p className="text-text-secondary text-[10px] font-body">PPG</p>
              </div>
              <div>
                <p className="font-mono text-sm text-accent-blue font-semibold">
                  {player.ptp.toFixed(1)}
                </p>
                <p className="text-text-secondary text-[10px] font-body">PTP</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RosterTable;
