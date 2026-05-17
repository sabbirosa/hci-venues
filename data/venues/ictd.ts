import type { Venue } from "@/lib/venues/types"

/**
 * ICTD — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "ictd",
  acronym: "ICTD",
  fullName: "International Conference on Information & Communication Technologies and Development",
  publisher: "ACM",
  categories: [
    "Sustainability & ICTD",
    "HCI"
  ],
  coreRank: "B",
  scopusIndexed: true,
  website: "https://ictd.org/",
  editions: [
    {
      year: 2025,
      startDate: "2025-06-23",
      endDate: "2025-06-26",
      location: "Boulder, CO, USA",
      announced: true,
      abstractDeadline: "2025-02-01",
    }
  ],
}
