import type { Venue } from "@/lib/venues/types"

/**
 * NordiCHI — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "nordichi",
  acronym: "NordiCHI",
  fullName: "ACM SIGCHI Nordic Conference on Human-Computer Interaction",
  publisher: "ACM",
  categories: [
    "HCI"
  ],
  coreRank: "Regional",
  scopusIndexed: true,
  website: "https://nordichi.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-10-05",
      endDate: "2026-10-07",
      location: "Vaasa, Finland",
      announced: true,
      abstractDeadline: "2026-04-15",
    }
  ],
}
