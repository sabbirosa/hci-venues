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
  categories: ["Graphics", "VR/AR/XR"],
  coreRank: "A*",
  scopusIndexed: true,
  website: "https://www.siggraph.org",
  editions: [
    {
      year: 2026,
      startDate: "2026-07-19",
      endDate: "2026-07-23",
      location: "Los Angeles, CA, USA",
      announced: true,
      paperDeadline: "2026-01-23",
      timezone: "GMT",
      website: "https://s2026.siggraph.org",
    },
    {
      year: 2027,
      startDate: "2027-08-08",
      endDate: "2027-08-12",
      location: "Anaheim, CA, USA",
      announced: true,
      website: "https://s2027.siggraph.org",
    },
  ],
}
