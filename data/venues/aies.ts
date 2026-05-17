import type { Venue } from "@/lib/venues/types"

/** AIES — dates from https://www.aies-conference.com/2026/call-for-papers/ */
export const venue: Venue = {
  id: "aies",
  acronym: "AIES",
  fullName: "AAAI/ACM Conference on AI, Ethics, and Society",
  publisher: "AAAI/ACM",
  categories: [
    "AI & Ethics",
    "Ethics & Policy",
    "HCI",
    "Human-AI Collaboration",
    "Politics & Civics",
    "Security & Privacy",
    "Misinformation & Trust",
    "Digital Health",
  ],
  coreRank: "B",
  scopusIndexed: true,
  website: "https://www.aies-conference.com/",
  editions: [
    {
      year: 2026,
      startDate: "2026-10-12",
      endDate: "2026-10-14",
      location: "Malmö, Sweden",
      announced: true,
      abstractDeadline: "2026-05-14",
      paperDeadline: "2026-05-21",
      timezone: "AoE",
      website: "https://www.aies-conference.com/2026/",
    },
    {
      year: 2027,
      announced: false,
    },
  ],
}
