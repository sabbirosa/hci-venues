import type { Venue } from "@/lib/venues/types"

/**
 * GoodIT — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "goodit",
  acronym: "GoodIT",
  fullName: "ACM Conference on Information Technology for Social Good",
  publisher: "ACM",
  categories: [
    "Sustainability & ICTD",
    "HCI"
  ],
  coreRank: "C",
  scopusIndexed: true,
  editions: [
    {
      year: 2026,
      startDate: "2026-09-02",
      endDate: "2026-09-04",
      location: "Pisa, Italy",
      announced: true,
      abstractDeadline: "2026-04-15",
    }
  ],
}
