import type { Venue } from "@/lib/venues/types"

/**
 * CHI EA — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "chi-ea",
  acronym: "CHI EA",
  fullName: "CHI Extended Abstracts",
  publisher: "ACM",
  categories: [
    "HCI"
  ],
  coreRank: "A*",
  scopusIndexed: true,
  website: "https://chi.acm.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-04-13",
      endDate: "2026-04-17",
      location: "Barcelona, Spain",
      announced: true,
      abstractDeadline: "2025-09-11",
    },
    {
      year: 2027,
      startDate: "2027-05-10",
      endDate: "2027-05-14",
      location: "Pittsburgh, PA, USA",
      announced: true,
      abstractDeadline: "2026-09-10",
    }
  ],
  notes: "Same dates and venue as CHI main conference.",
}
