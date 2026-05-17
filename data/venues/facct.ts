import type { Venue } from "@/lib/venues/types"

/**
 * FAccT — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "facct",
  acronym: "FAccT",
  fullName: "ACM Conference on Fairness, Accountability, and Transparency",
  publisher: "ACM",
  categories: [
    "AI & Ethics",
    "Ethics & Policy",
    "HCI",
    "Politics & Civics",
    "Critical & Ethnographic",
    "Security & Privacy",
    "Misinformation & Trust",
    "Digital Health",
    "Methods & Tools",
  ],
  coreRank: "A",
  scopusIndexed: true,
  website: "https://facctconference.org",
  editions: [
    {
      year: 2026,
      startDate: "2026-06-25",
      endDate: "2026-06-28",
      location: "Montréal, Canada",
      announced: true,
      abstractDeadline: "2026-01-08",
      paperDeadline: "2026-01-13",
      website: "https://facctconference.org/2026",
    },
    {
      year: 2027,
      announced: false,
      location: "Date TBD",
      website: "https://facctconference.org/2027",
    },
  ],
}
