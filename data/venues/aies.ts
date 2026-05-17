import type { Venue } from "@/lib/venues/types"

/**
 * AIES — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "aies",
  acronym: "AIES",
  fullName: "AAAI/ACM Conference on AI, Ethics, and Society",
  publisher: "AAAI/ACM",
  categories: [
    "AI & Ethics",
    "HCI"
  ],
  coreRank: "B",
  scopusIndexed: true,
  website: "https://www.aies-conference.com/",
  editions: [
    {
      year: 2025,
      startDate: "2025-10-27",
      endDate: "2025-10-30",
      location: "Madrid, Spain",
      announced: true,
      abstractDeadline: "2025-10-01",
    }
  ],
}
