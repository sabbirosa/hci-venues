import type { CoreRank } from "@/lib/venues/types"

/**
 * Badge colors by CORE precedence (best → lowest): green-500 at 80% opacity,
 * stepping down 10 opacity points per rank.
 * Matches {@link CORE_RANK_PRECEDENCE} in sort-venues.ts.
 */
export const coreRankBadgeStyles: Record<CoreRank, string> = {
  "A*": "bg-green-800/80 text-green-50",
  A: "bg-green-800/70 text-green-50",
  B: "bg-green-800/60 text-green-50",
  C: "bg-green-800/50 text-green-50",
  Regional: "bg-green-800/40 text-green-50",
  Unranked: "bg-green-800/30 text-green-50",
}
