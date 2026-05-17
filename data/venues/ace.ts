import type { Venue } from "@/lib/venues/types"

/** ACE (Australasian Computing Education Conference), in cooperation with SIGCSE. */
export const venue: Venue = {
  id: "ace",
  acronym: "ACE",
  fullName: "Australasian Computing Education Conference",
  publisher: "ACM",
  categories: [
    "HCI",
    "Learning UX",
    "Methods & Tools",
    "Design",
    "Systems",
    "Mobile & Ubiquitous",
    "Communication",
    "Games & Play",
  ],
  coreRank: "Regional",
  scopusIndexed: true,
  website: "https://acsw.core.edu.au/",
  notes:
    "Held with Australasian Computer Science Week (ACSW). In cooperation with SIGCSE.",
  editions: [
    {
      year: 2026,
      startDate: "2026-02-09",
      endDate: "2026-02-13",
      location: "Melbourne, Australia",
      announced: true,
      paperDeadline: "2025-11-03",
      timezone: "AoE",
      website: "https://aceconference2026.github.io/",
      programLink: "https://acsw.core.edu.au/2026-program",
    },
    {
      year: 2027,
      announced: false,
    },
  ],
}
