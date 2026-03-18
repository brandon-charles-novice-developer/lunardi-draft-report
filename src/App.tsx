import { useCallback } from 'react';
import HeroSection from './components/hero/HeroSection';
import MyRosterSpotlight from './components/roster/MyRosterSpotlight';
import LeaderboardTable from './components/rankings/LeaderboardTable';
import ManagerCard from './components/rankings/ManagerCard';
import ConflictMap from './components/bracket/ConflictMap';
import TeamProjections from './components/appendix/TeamProjections';
import InjuryReport from './components/appendix/InjuryReport';
import SectionDivider from './components/ui/SectionDivider';
import GlassCard from './components/ui/GlassCard';
import { managers } from './data/managers';
import { r64Conflicts, r2Conflicts } from './data/conflicts';
import { teamProjections } from './data/projections';
import { injuries } from './data/injuries';
import { fantasyFinalFour } from './data/finalFour';

function App() {
  const myRoster = managers.find((m) => m.rank === 1)!;
  const opponents = managers.filter((m) => m.rank !== 1);

  const handleNavigate = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary">
      <main>
        <HeroSection />

        {/* Brandon's Roster — THE CENTERPIECE */}
        <MyRosterSpotlight manager={myRoster} />

        <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-12">
          <SectionDivider />

          {/* Competition Section Header */}
          <div className="text-center">
            <h2 className="font-display text-3xl md:text-4xl gradient-text tracking-tight mb-2">
              THE COMPETITION
            </h2>
            <p className="text-text-secondary font-body italic">
              How the other 9 rosters stack up — ranked and roasted by Homoe
              Lunardi
            </p>
          </div>

          <LeaderboardTable
            managers={managers}
            onSelectManager={handleNavigate}
          />

          <SectionDivider />

          {/* Manager Cards — #10 through #1 */}
          <div className="space-y-10">
            {[...opponents]
              .sort((a, b) => b.rank - a.rank)
              .map((manager) => (
                <ManagerCard key={manager.cardId} manager={manager} />
              ))}
            {/* Brandon's card last — the #1 reveal */}
            <ManagerCard manager={myRoster} />
          </div>

          <SectionDivider />

          {/* Final Four of Fantasy */}
          <section id="final-four" className="space-y-6">
            <h2 className="font-display text-3xl md:text-4xl gradient-text tracking-tight">
              THE FINAL FOUR OF FANTASY
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fantasyFinalFour.map((tier) => (
                <GlassCard key={tier.tier} level="medium" className="p-6">
                  <h3 className="font-display text-xl text-accent-pink mb-3">
                    {tier.tier}
                  </h3>
                  <ul className="space-y-2">
                    {tier.managers.map((m) => (
                      <li key={m.name} className="text-sm">
                        <span className="text-text-primary font-semibold">
                          {m.name}
                        </span>
                        <span className="text-text-secondary">
                          {' '}
                          — {m.summary}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </section>

          <SectionDivider />

          {/* Appendix */}
          <section className="space-y-10">
            <h2 className="font-display text-3xl md:text-4xl gradient-text tracking-tight">
              APPENDIX
            </h2>
            <ConflictMap r64Conflicts={r64Conflicts} r2Conflicts={r2Conflicts} />
            <TeamProjections projections={teamProjections} />
            <InjuryReport injuries={injuries} />

            <GlassCard level="light" className="p-6">
              <h3 className="font-display text-xl text-accent-purple mb-3">
                METHODOLOGY
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-body">
                <strong className="text-text-primary">
                  PTP = PPG × Expected Games Played.
                </strong>{' '}
                Expected Games = Team Expected Wins + 1. Expected wins sourced
                from TeamRankings 10K-simulation composite blended with Nate
                Silver COOPER model and KenPom qualitative adjustments.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed font-body mt-3">
                <strong className="text-text-primary">Sources:</strong> KenPom,
                TeamRankings.com, Nate Silver COOPER/Silver Bulletin, ESPN BPI,
                Jay Bilas (ESPN), CBS SportsLine, Covers.com, DraftKings,
                FanDuel, RotoWire, SI.com, SportsBettingDime, FOX Sports,
                Bleacher Report, Yahoo Sports, NBC Sports, The Ringer, Neil
                Paine Substack.
              </p>
            </GlassCard>
          </section>

          {/* Footer */}
          <footer className="text-center py-12 text-text-secondary text-sm">
            <p className="gradient-text font-display text-lg mb-2">
              — Homoe Lunardi, Draft Analyst, Bracketologist, Icon
            </p>
            <p>March 17, 2026 — Tournament Eve</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
