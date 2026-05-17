import type { Venue } from "@/lib/venues/types"

/**
 * MobiSys — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "mobisys",
  acronym: "MobiSys",
  fullName:
    "ACM International Conference on Mobile Systems, Applications and Services",
  publisher: "ACM",
  categories: ["Mobile & Ubiquitous", "Systems"],
  coreRank: "A",
  scopusIndexed: true,
  website: "https://www.sigmobile.org/mobisys/",
  editions: [
    {
      year: 2027,
      location: "Ho Chi Minh City, Vietnam",
      announced: false,
    },
    {
      year: 2026,
      startDate: "2026-06-21",
      endDate: "2026-06-25",
      location: "Cambridge, UK",
      announced: true,
      abstractDeadline: "2025-11-28",
      paperDeadline: "2025-12-05",
    },
  ],
}
