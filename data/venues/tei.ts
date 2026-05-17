import type { Venue } from "@/lib/venues/types"

/**
 * TEI — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "tei",
  acronym: "TEI",
  fullName: "ACM Tangible, Embedded and Embodied Interaction",
  publisher: "ACM",
  categories: [
    "Design",
    "HCI"
  ],
  coreRank: "B",
  scopusIndexed: true,
  website: "https://tei.acm.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-03-08",
      endDate: "2026-03-11",
      location: "Chicago, IL, USA",
      announced: true,
      abstractDeadline: "2025-10-03",
    }
  ],
}
