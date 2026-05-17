import type { Venue } from "@/lib/venues/types"

/**
 * IEEE VRW — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "ieee-vrw",
  acronym: "IEEE VRW",
  fullName: "IEEE Conference on Virtual Reality and 3D User Interfaces — Abstracts & Workshops",
  publisher: "IEEE",
  categories: [
    "VR/AR/XR",
    "HCI",
    "UI/UX",
    "Multimodal Interfaces",
    "Graphics",
    "Systems",
    "Emerging Technologies",
  ],
  coreRank: "A*",
  scopusIndexed: true,
  website: "https://ieeevr.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-03-21",
      endDate: "2026-03-25",
      location: "Daegu, South Korea",
      announced: true,
      abstractDeadline: "2025-09-02",
    }
  ],
  notes: "Co-located with IEEE VR (main track). CORE A* applies to IEEE VR.",
}
