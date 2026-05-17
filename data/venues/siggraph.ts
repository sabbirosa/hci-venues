import type { Venue } from "@/lib/venues/types"

/**
 * SIGGRAPH — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "siggraph",
  acronym: "SIGGRAPH",
  fullName: "ACM SIGGRAPH Conference",
  publisher: "ACM",
  categories: [
    "Graphics",
    "VR/AR/XR"
  ],
  coreRank: "A*",
  scopusIndexed: true,
  website: "https://www.siggraph.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-07-19",
      endDate: "2026-07-23",
      location: "Los Angeles, CA, USA",
      announced: true,
      abstractDeadline: "2026-01-27",
    }
  ],
}
