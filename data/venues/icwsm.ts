import type { Venue } from "@/lib/venues/types"

/**
 * ICWSM — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "icwsm",
  acronym: "ICWSM",
  fullName: "AAAI International Conference on Web and Social Media",
  publisher: "Other",
  categories: [
    "Web & Social Media",
    "CSCW & Social"
  ],
  coreRank: "A",
  scopusIndexed: true,
  website: "https://www.icwsm.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-05-27",
      endDate: "2026-05-29",
      location: "Los Angeles, CA, USA",
      announced: true,
      abstractDeadline: "2026-01-15",
    }
  ],
}
