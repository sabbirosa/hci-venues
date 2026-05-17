import type { Venue } from "@/lib/venues/types"

/**
 * UIST — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "uist",
  acronym: "UIST",
  fullName: "ACM Symposium on User Interface Software and Technology",
  publisher: "ACM",
  categories: [
    "UI/UX",
    "HCI"
  ],
  coreRank: "A*",
  scopusIndexed: true,
  website: "https://uist.acm.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-11-02",
      endDate: "2026-11-05",
      location: "Detroit, MI, USA",
      announced: true,
      abstractDeadline: "2026-03-24",
    }
  ],
}
