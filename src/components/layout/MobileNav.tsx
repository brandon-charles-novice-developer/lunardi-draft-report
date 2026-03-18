interface TabItem {
  readonly id: string;
  readonly label: string;
  readonly icon: string;
}

const TABS: readonly TabItem[] = [
  { id: 'overview', label: 'Overview', icon: '\u{1F3C0}' },
  { id: 'leaderboard', label: 'Rankings', icon: '\u{1F4CA}' },
  { id: 'final-four', label: 'Final Four', icon: '\u{1F3C6}' },
  { id: 'conflicts', label: 'Bracket', icon: '\u{2694}\u{FE0F}' },
  { id: 'projections', label: 'Data', icon: '\u{1F4CB}' },
];

interface MobileNavProps {
  readonly activeSection: string;
  readonly onNavigate: (id: string) => void;
}

function MobileNav({ activeSection, onNavigate }: MobileNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-heavy z-50 md:hidden">
      <div className="flex items-center justify-around py-2">
        {TABS.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`
                flex flex-col items-center gap-0.5 px-3 py-1 text-xs font-body transition-colors duration-200
                ${isActive
                  ? 'text-accent-pink border-t-2 border-t-accent-pink -mt-px'
                  : 'text-text-secondary'
                }
              `}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileNav;
