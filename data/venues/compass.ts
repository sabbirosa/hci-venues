import type { Venue } from "@/lib/venues/types"

/**
 * COMPASS — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "compass",
  acronym: "COMPASS",
  fullName: "ACM SIGCAS Conference on Computing and Sustainable Societies",
  publisher: "ACM",
  categories: [
    "Sustainability & ICTD",
    "HCI"
  ],
  coreRank: "B",
  scopusIndexed: true,
  editions: [
    {
      year: 2026,
      startDate: "2026-07-27",
      endDate: "2026-07-31",
      location: "Online",
      announced: true,
      abstractDeadline: "2026-04-01",
    }
  ],
}
