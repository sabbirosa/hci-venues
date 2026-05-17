import type { Venue } from "@/lib/venues/types"

/** TrustBus @ ARES — https://www.ares-conference.eu/trustbus */
export const venue: Venue = {
  id: "trustbus",
  acronym: "TrustBus",
  fullName:
    "International Workshop on Trust, Privacy and Security in the Digital Society",
  publisher: "Other",
  categories: [
    "Security & Privacy",
    "HCI",
    "UI/UX",
    "AI & Ethics",
    "Ethics & Policy",
    "Misinformation & Trust",
    "Mobile & Ubiquitous",
    "Systems",
  ],
  coreRank: "Unranked",
  scopusIndexed: true,
  website: "https://www.ares-conference.eu/trustbus",
  notes: "ARES workshop; submission guidelines follow the main ARES conference.",
  subject: "SP",
  editions: [
    {
      year: 2026,
      startDate: "2026-08-24",
      endDate: "2026-08-27",
      location: "Linköping, Sweden",
      announced: true,
      paperDeadline: "2026-05-14",
      website: "https://www.ares-conference.eu/trustbus",
    },
  ],
}
