import type { InjuryEntry } from '../types';

export const injuries: readonly InjuryEntry[] = [
  { player: 'Caleb Foster', team: 'Duke (1)', status: 'OUT', impact: 'Boosts Cam Boozer usage → benefits Nick' },
  { player: 'Braden Huff', team: 'Gonzaga (3)', status: 'OUT (R64/R32)', impact: 'Boosts Graham Ike usage → benefits Mike' },
  { player: 'JT Toppin', team: 'Texas Tech (5)', status: 'OUT (season)', impact: 'Weakens TTU → benefits Brandon (Akron upset), hurts Jake' },
  { player: 'Darryn Peterson', team: 'Kansas (4)', status: 'QUESTIONABLE', impact: 'If limited, hurts Schaf significantly' },
  { player: 'Tyler Bilodeau', team: 'UCLA (7)', status: 'PROBABLE (knee)', impact: 'If compromised, hurts Josh' },
  { player: 'Nolan Winter', team: 'Wisconsin (5)', status: 'PROBABLE (ankle)', impact: 'If compromised, hurts Schaf' },
  { player: 'Richie Saunders', team: 'BYU (6)', status: 'OUT (season)', impact: 'BYU weakened → hurts Brandon (Wright) and AJ (Dybantsa)' },
  { player: 'Dawson Baker', team: 'BYU (6)', status: 'OUT (season)', impact: 'BYU weakened further' },
  { player: 'Caleb Wilson', team: 'UNC (6)', status: 'OUT (season)', impact: "Weakens UNC → clears path for Illinois (Brandon's Wagler)" },
];
