import type { Venue } from "@/lib/venues/types"

/**
 * FAccT — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "facct",
  acronym: "FAccT",
  fullName: "ACM Conference on Fairness, Accountability, and Transparency",
  publisher: "ACM",
  categories: [
    "AI & Ethics",
    "HCI"
  ],
  coreRank: "A",
  scopusIndexed: true,
  website: "https://facctconference.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-06-25",
      endDate: "2026-06-28",
      location: "Montréal, Canada",
      announced: true,
      abstractDeadline: "2026-01-15",
    }
  ],
}
