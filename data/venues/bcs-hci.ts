import type { Venue } from "@/lib/venues/types"

/**
 * BCS-HCI — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "bcs-hci",
  acronym: "BCS-HCI",
  fullName: "BCS Conference on Human-Computer Interaction (BritCHI)",
  publisher: "BCS",
  categories: [
    "HCI"
  ],
  coreRank: "Regional",
  scopusIndexed: true,
  website: "https://www.britchi.uk/",
  editions: [
    {
      year: 2026,
      startDate: "2026-11-01",
      endDate: "2026-11-03",
      location: "London, UK",
      announced: true,
      abstractDeadline: "2026-06-12",
    }
  ],
}
