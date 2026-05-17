import type { Venue } from "@/lib/venues/types"

/**
 * UbiComp — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "ubicomp",
  acronym: "UbiComp",
  fullName: "ACM International Joint Conference on Pervasive and Ubiquitous Computing",
  publisher: "ACM",
  categories: [
    "Mobile & Ubiquitous",
    "HCI"
  ],
  coreRank: "A",
  scopusIndexed: true,
  website: "https://ubicomp.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-10-11",
      endDate: "2026-10-15",
      location: "Shanghai, China",
      announced: true,
      abstractDeadline: "2026-05-01",
    }
  ],
  notes: "Often co-located with ISWC; papers in IMWUT / PACM.",
}
