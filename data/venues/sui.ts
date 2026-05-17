import type { Venue } from "@/lib/venues/types"

/** SUI — core topics from the symposium scope (spatial VR/AR/MR interaction). */
export const venue: Venue = {
  id: "sui",
  acronym: "SUI",
  fullName: "ACM Symposium on Spatial User Interaction",
  publisher: "ACM",
  categories: [
    "VR/AR/XR",
    "HCI",
    "UI/UX",
    "Multimodal Interfaces",
    "CSCW & Social",
    "Accessible & Inclusive Design",
    "Security & Privacy",
    "Ethics & Policy",
  ],
  coreRank: null,
  scopusIndexed: true,
  website: "https://sui.acm.org",
  editions: [
    {
      year: 2026,
      startDate: "2026-10-10",
      endDate: "2026-10-11",
      location: "Bari, Italy",
      announced: true,
      paperDeadline: "2026-05-30",
      website: "https://sui.acm.org/2026",
    },
  ],
}
