import type { Venue } from "@/lib/venues/types"

/**
 * HT — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "ht",
  acronym: "HT",
  fullName: "ACM Hypertext and Social Media",
  publisher: "ACM",
  categories: [
    "Web & Social Media",
    "HCI"
  ],
  coreRank: "B",
  scopusIndexed: true,
  editions: [
    {
      year: 2025,
      startDate: "2025-09-02",
      endDate: "2025-09-05",
      location: "Bonn, Germany",
      announced: true,
      abstractDeadline: "2025-04-25",
    }
  ],
}
