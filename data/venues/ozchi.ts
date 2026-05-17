import type { Venue } from "@/lib/venues/types"

/**
 * OzCHI — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "ozchi",
  acronym: "OzCHI",
  fullName: "Australian Conference on Human-Computer Interaction",
  publisher: "ACM",
  categories: ["HCI"],
  coreRank: "Regional",
  scopusIndexed: true,
  website: "https://www.ozchi.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-11-21",
      endDate: "2026-11-25",
      location: "Adelaide, Australia",
      announced: true,
      abstractDeadline: "2026-06-02",
      website: "https://www.ozchi.org/2026",
    },
  ],
  notes: "CORE Australasian B.",
}
