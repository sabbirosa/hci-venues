import type { Venue } from "@/lib/venues/types"

/** VRST — deadlines from https://vrst.acm.org/vrst2026/ */
export const venue: Venue = {
  id: "vrst",
  acronym: "VRST",
  fullName: "ACM Symposium on Virtual Reality Software and Technology",
  publisher: "ACM",
  categories: ["VR/AR/XR", "HCI"],
  coreRank: "B",
  scopusIndexed: true,
  website: "https://vrst.acm.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-11-16",
      endDate: "2026-11-18",
      location: "Sendai, Japan",
      announced: true,
      abstractDeadline: "2026-06-09",
      paperDeadline: "2026-06-16",
      timezone: "AoE",
      website: "https://vrst.acm.org/vrst2026/",
    },
  ],
}
