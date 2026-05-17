import type { Venue } from "@/lib/venues/types"

/**
 * WWW — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "www",
  acronym: "WWW",
  fullName: "The Web Conference (IW3C2 / ACM)",
  publisher: "IW3C2",
  categories: [
    "Web & Social Media"
  ],
  coreRank: "A*",
  scopusIndexed: true,
  website: "https://www2026.thewebconf.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-06-29",
      endDate: "2026-07-03",
      location: "Dubai, UAE",
      announced: true,
      abstractDeadline: "2026-01-12",
    }
  ],
}
