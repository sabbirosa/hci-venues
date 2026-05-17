import { Venue } from "@/lib/venues/types"

/**
 * ASONAM — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "asonam",
  acronym: "ASONAM",
  fullName:
    "IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining",
  publisher: "IEEE/ACM",
  categories: ["Web & Social Media", "CSCW & Social"],
  coreRank: "B",
  scopusIndexed: true,
  editions: [
    {
      year: 2026,
      startDate: "2026-08-24",
      endDate: "2026-08-27",
      announced: true,
      abstractDeadline: "2026-05-01",
    },
  ],
}
