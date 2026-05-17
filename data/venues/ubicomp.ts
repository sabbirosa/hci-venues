import type { Venue } from "@/lib/venues/types"

/** UbiComp / ISWC 2026 — IMWUT submission deadline for conference presentation. */
export const venue: Venue = {
  id: "ubicomp",
  acronym: "UbiComp",
  fullName:
    "ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp / ISWC)",
  publisher: "ACM",
  categories: [
    "Mobile & Ubiquitous",
    "HCI",
    "Systems",
    "Emerging Technologies",
    "Digital Health",
    "CSCW & Social",
    "Security & Privacy",
    "Sustainability & ICTD",
  ],
  coreRank: "A",
  scopusIndexed: true,
  website: "https://ubicomp.org/",
  notes: "Full papers via IMWUT (PACM) for presentation at UbiComp / ISWC.",
  editions: [
    {
      year: 2026,
      startDate: "2026-10-13",
      endDate: "2026-10-15",
      location: "Shanghai, China",
      announced: true,
      paperDeadline: "2026-08-02",
      timezone: "AoE",
      website: "https://ubicomp.org/ubicomp2026",
    },
  ],
}
