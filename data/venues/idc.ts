import type { Venue } from "@/lib/venues/types"

/**
 * IDC — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "idc",
  acronym: "IDC",
  fullName: "ACM Interaction Design and Children",
  publisher: "ACM",
  categories: [
    "Children",
    "Design",
    "HCI"
  ],
  coreRank: "B",
  scopusIndexed: true,
  website: "https://idc.acm.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-06-22",
      endDate: "2026-06-25",
      location: "Brighton, UK",
      announced: true,
      abstractDeadline: "2026-02-05",
    }
  ],
}
