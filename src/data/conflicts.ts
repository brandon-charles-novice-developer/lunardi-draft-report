import type { ConflictEntry } from "../types";

export const r64Conflicts: ReadonlyArray<ConflictEntry> = [
  {
    round: "R64",
    matchup: "TTU (5) vs Akron (12)",
    managerA: "Jake Pollack (Anderson)",
    managerB: "Brandon Nye (Johnson) + Nick Reskin (Lyles)",
    impact: "Consensus upset \u2014 if Akron wins, Jake loses, Brandon/Nick gain",
  },
  {
    round: "R64",
    matchup: "Miami FL (7) vs Missouri (10)",
    managerA: "Mark Weiner (Reneau)",
    managerB: "AJ Spile (Mitchell)",
    impact: "Upset risk for Mark",
  },
  {
    round: "R64",
    matchup: "BYU (6) vs NC State/Texas (11)",
    managerA: "Brandon Nye (Wright) + AJ Spile (Dybantsa)",
    managerB: "Alex Magged (Swain, if Texas)",
    impact: "BYU loss kills both Brandon and AJ",
  },
  {
    round: "R64",
    matchup: "Kentucky (7) vs Santa Clara (10)",
    managerA: "Jordan Mackler (Oweh)",
    managerB: "\u2014",
    impact: "Kentucky vulnerable per experts",
  },
];

export const r2Conflicts: ReadonlyArray<ConflictEntry> = [
  {
    round: "R2",
    matchup: "Wisconsin vs Arkansas",
    managerA: "Brandon Nye (Blackwell) + Jake Pollack (Boyd)",
    managerB: "Jordan Mackler (Acuff) + Josh Ehrlich (Brazile) + Mark Weiner (M. Thomas)",
    impact: "Only one team advances \u2014 multi-manager conflict",
  },
  {
    round: "R2",
    matchup: "St Johns vs Kansas",
    managerA: "Brandon Nye (Hopkins) + Mike Haughey (Ejiofor/Sellers)",
    managerB: "Schaf Chulay (Peterson) + Jake Pollack (White)",
    impact: "St Johns underseeded, Kansas overseeded",
  },
  {
    round: "R2",
    matchup: "Louisville vs Michigan St",
    managerA: "AJ Spile (Conwell)",
    managerB: "Jordan Mackler (Fears) + Nick Reskin (Kohler) + Jake Pollack (Carr)",
    impact: "Multiple managers at stake",
  },
  {
    round: "R2",
    matchup: "Iowa State vs Kentucky",
    managerA: "AJ Spile (Momcilovic) + Jordan Mackler (Jefferson) + Schaf Chulay (Lipsey)",
    managerB: "Jordan Mackler (Oweh)",
    impact: "Jordan's SELF-CANNIBALIZATION",
  },
];
