import type { Venue } from "@/lib/venues/types"

/**
 * i-USEr — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "i-user",
  acronym: "i-USEr",
  fullName: "IEEE International Conference on User Science and Engineering",
  publisher: "IEEE",
  categories: [
    "HCI",
    "UI/UX",
    "Methods & Tools",
    "Social Psychology",
    "Digital Health",
    "Accessible & Inclusive Design",
    "Systems",
  ],
  coreRank: "C",
  scopusIndexed: true,
  website: "https://ieee-user.org/",
  editions: [
    {
      year: 2025,
      startDate: "2025-08-28",
      endDate: "2025-08-30",
      location: "Taipei, Taiwan",
      announced: true,
      abstractDeadline: "2025-05-15",
    }
  ],
  notes: "CORE rank varies by cycle; verify on CORE portal.",
}
