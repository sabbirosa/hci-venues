import type { Venue } from "@/lib/venues/types"

/** ISS — summer-round deadline from https://iss.acm.org/2026/ */
export const venue: Venue = {
  id: "iss",
  acronym: "ISS",
  fullName: "ACM Interactive Surfaces and Spaces",
  publisher: "ACM",
  categories: [
    "HCI",
    "UI/UX",
    "VR/AR/XR",
    "Multimodal Interfaces",
    "Design",
    "CSCW & Social",
    "Methods & Tools",
    "Emerging Technologies",
  ],
  coreRank: "A",
  scopusIndexed: true,
  website: "https://iss.acm.org/",
  notes: "Summer-round papers; published in PACM HCI.",
  editions: [
    {
      year: 2026,
      startDate: "2026-11-23",
      endDate: "2026-11-26",
      location: "Turin, Italy",
      announced: true,
      paperDeadline: "2026-07-23",
      timezone: "AoE",
      website: "https://iss.acm.org/2026/",
    },
  ],
}
