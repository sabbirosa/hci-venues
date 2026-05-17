import type { Venue } from "@/lib/venues/types"

/** OzCHI — scope themes from the official conference description. */
export const venue: Venue = {
  id: "ozchi",
  acronym: "OzCHI",
  fullName: "Australian Conference on Human-Computer Interaction",
  publisher: "ACM",
  categories: [
    "HCI",
    "UI/UX",
    "Methods & Tools",
    "Emerging Technologies",
    "AI & Ethics",
    "Human-Robot Interaction",
    "Generative UI",
    "Mobile & Ubiquitous",
    "Accessible & Inclusive Design",
    "Design",
    "Digital Health",
    "CSCW & Social",
  ],
  coreRank: "Regional",
  scopusIndexed: true,
  website: "https://www.ozchi.org/",
  notes:
    "CORE Australasian B. Welcoming, diverse community with strong emphasis on mentorship and research development.",
  editions: [
    {
      year: 2026,
      startDate: "2026-11-21",
      endDate: "2026-11-25",
      location: "Adelaide, Australia",
      announced: true,
      paperDeadline: "2026-06-02",
      website: "https://www.ozchi.org/2026",
    },
  ],
}
