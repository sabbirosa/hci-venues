import type { Venue } from "@/lib/venues/types"

/**
 * CSCW — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "cscw",
  acronym: "CSCW",
  fullName: "ACM Conference on Computer-Supported Cooperative Work & Social Computing",
  publisher: "ACM",
  categories: [
    "HCI",
    "CSCW & Social"
  ],
  coreRank: "A",
  scopusIndexed: true,
  website: "https://cscw.acm.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-10-10",
      endDate: "2026-10-14",
      location: "Salt Lake City, UT, USA",
      announced: true,
      abstractDeadline: "2025-05-13",
    }
  ],
}
