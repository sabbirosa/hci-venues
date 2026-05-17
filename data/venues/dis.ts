import type { Venue } from "@/lib/venues/types"

/**
 * DIS — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "dis",
  acronym: "DIS",
  fullName: "ACM Designing Interactive Systems Conference",
  publisher: "ACM",
  categories: [
    "HCI",
    "Design"
  ],
  coreRank: "A",
  scopusIndexed: true,
  website: "https://dis.acm.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-06-13",
      endDate: "2026-06-17",
      location: "Singapore",
      announced: true,
      abstractDeadline: "2026-01-09",
    }
  ],
}
