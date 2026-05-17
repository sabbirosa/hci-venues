import type { Venue } from "@/lib/venues/types"

/**
 * CITSM — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "citsm",
  acronym: "CITSM",
  fullName: "IEEE International Conference on Cyber and IT Service Management",
  publisher: "IEEE",
  categories: [
    "IT & Service Management",
    "Systems"
  ],
  coreRank: "Unranked",
  scopusIndexed: true,
  editions: [
    {
      year: 2025,
      startDate: "2025-10-29",
      endDate: "2025-10-31",
      announced: true,
      abstractDeadline: "2025-06-30",
    }
  ],
}
