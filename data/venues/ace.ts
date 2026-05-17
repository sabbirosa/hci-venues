import { Venue } from "@/lib/venues/types"

/**
 * ACE — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "ace",
  acronym: "ACE",
  fullName: "ACM Advances in Computer Entertainment",
  publisher: "ACM",
  type: "conference",
  categories: ["Games & Play"],
  coreRank: "C",
  scopusIndexed: true,
  editions: [
    {
      year: 2025,
      startDate: "2025-12-15",
      endDate: "2025-12-18",
      announced: true,
      abstractDeadline: "2025-07-01",
    },
  ],
}
