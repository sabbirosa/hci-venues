import type { Venue } from "@/lib/venues/types"

/**
 * SIGDOC — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "sigdoc",
  acronym: "SIGDOC",
  fullName:
    "ACM SIGDOC Conference (Special Interest Group on Design of Communication)",
  publisher: "ACM",
  categories: [
    "Communication",
    "Design",
    "HCI",
    "UI/UX",
    "Accessible & Inclusive Design",
    "AI & Ethics",
    "Systems",
  ],
  coreRank: "B",
  scopusIndexed: true,
  website: "https://sigdoc.acm.org",
  editions: [
    {
      year: 2026,
      startDate: "2026-10-23",
      endDate: "2026-10-24",
      location: "St. Paul, MN, USA",
      announced: true,
      abstractDeadline: "2026-01-16",
      paperDeadline: "2026-03-30",
      website: "https://sigdoc.acm.org/conference/2026",
    },
  ],
}
