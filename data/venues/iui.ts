import type { Venue } from "@/lib/venues/types"

/** IUI — deadlines from https://iui.acm.org/2027/call-for-papers/ */
export const venue: Venue = {
  id: "iui",
  acronym: "IUI",
  fullName: "ACM Conference on Intelligent User Interfaces",
  publisher: "ACM",
  categories: [
    "HCI",
    "UI/UX",
    "AI & Ethics",
    "Human-AI Collaboration",
    "Explainable AI & Trust",
    "Generative UI",
    "NLP in UX",
    "Learning UX",
    "Digital Health",
  ],
  coreRank: "B",
  scopusIndexed: true,
  website: "https://iui.acm.org/",
  editions: [
    {
      year: 2027,
      startDate: "2027-02-08",
      endDate: "2027-02-11",
      location: "Helsinki, Finland",
      announced: true,
      abstractDeadline: "2026-08-14",
      paperDeadline: "2026-08-21",
      timezone: "AoE",
      website: "https://iui.acm.org/2027/",
    },
  ],
}
