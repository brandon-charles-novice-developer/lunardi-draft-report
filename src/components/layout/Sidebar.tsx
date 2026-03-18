interface NavItem {
  readonly id: string;
  readonly label: string;
  readonly rank?: number;
}

const NAV_ITEMS: readonly NavItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'my-roster', label: 'My Roster' },
  { id: 'manager-10', label: 'Manager #10', rank: 10 },
  { id: 'manager-9', label: 'Manager #9', rank: 9 },
  { id: 'manager-8', label: 'Manager #8', rank: 8 },
  { id: 'manager-7', label: 'Manager #7', rank: 7 },
  { id: 'manager-6', label: 'Manager #6', rank: 6 },
  { id: 'manager-5', label: 'Manager #5', rank: 5 },
  { id: 'manager-4', label: 'Manager #4', rank: 4 },
  { id: 'manager-3', label: 'Manager #3', rank: 3 },
  { id: 'manager-2', label: 'Manager #2', rank: 2 },
  { id: 'manager-1', label: 'Manager #1', rank: 1 },
  { id: 'final-four', label: 'Final Four' },
  { id: 'appendix', label: 'Appendix' },
];

interface SidebarProps {
  readonly activeSection: string;
  readonly onNavigate: (id: string) => void;
  readonly managerNames?: ReadonlyArray<{ readonly rank: number; readonly name: string }>;
}

function Sidebar({ activeSection, onNavigate, managerNames = [] }: SidebarProps) {
  const getLabel = (item: NavItem): string => {
    if (item.rank === undefined) return item.label;
    const manager = managerNames.find((m) => m.rank === item.rank);
    const shortName = manager ? manager.name.split(' ').slice(-1)[0] : `#${item.rank}`;
    return `#${item.rank} ${shortName}`;
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 glass-light z-40 hidden md:flex flex-col py-6 px-4 overflow-y-auto">
      <button
        onClick={() => onNavigate('overview')}
        className="gradient-text font-display text-xl font-bold tracking-wider mb-8 px-2 text-left"
      >
        HOMOE LUNARDI
      </button>

      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                text-left px-3 py-2 rounded-lg font-body text-sm transition-all duration-200
                ${isActive
                  ? 'glass-heavy border-l-[3px] border-l-accent-pink text-text-primary'
                  : 'text-text-secondary glass-hover hover:text-text-primary'
                }
              `}
            >
              {getLabel(item)}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
