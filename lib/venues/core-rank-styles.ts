import type { CoreRank } from "@/lib/venues/types"

/**
 * Badge colors by CORE precedence (best → lowest): dark green → light green.
 * Matches {@link CORE_RANK_PRECEDENCE} in sort-venues.ts.
 */
export const coreRankBadgeStyles: Record<CoreRank, string> = {
  "A*": "bg-green-900 text-green-50",
  A: "bg-green-800 text-green-50",
  B: "bg-green-700 text-white",
  C: "bg-green-600 text-white",
  Regional: "bg-green-500 text-green-950",
  Unranked: "bg-green-200 text-green-950",
}
