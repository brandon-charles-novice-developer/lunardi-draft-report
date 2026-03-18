export interface Player {
  readonly name: string;
  readonly team: string;
  readonly seed: number;
  readonly region: string;
  readonly ppg: number;
  readonly expGames: number;
  readonly ptp: number;
  readonly flags: ReadonlyArray<string>;
}

export interface Manager {
  readonly rank: number;
  readonly name: string;
  readonly grade: string;
  readonly gradeColor: string;
  readonly ptp: number;
  readonly avgPpg: number;
  readonly rosterComplete: boolean;
  readonly roster: ReadonlyArray<Player>;
  readonly pathAnalysis: string;
  readonly headToHead: string;
  readonly injuryConcerns: string;
  readonly commentary: string;
  readonly cardId: string;
}

export interface ConflictEntry {
  readonly round: string;
  readonly matchup: string;
  readonly managerA: string;
  readonly managerB: string;
  readonly impact: string;
}

export interface TeamProjection {
  readonly team: string;
  readonly seed: number;
  readonly region: string;
  readonly expWins: number;
  readonly expGames: number;
  readonly s16Pct: number;
  readonly f4Pct: number;
  readonly titlePct: number;
}

export interface InjuryEntry {
  readonly player: string;
  readonly team: string;
  readonly status: string;
  readonly impact: string;
}

export interface FinalFourTier {
  readonly tier: string;
  readonly managers: ReadonlyArray<{
    readonly name: string;
    readonly summary: string;
  }>;
}
