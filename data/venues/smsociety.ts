import type { Venue } from "@/lib/venues/types"

/**
 * SMSociety — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "smsociety",
  acronym: "SMSociety",
  fullName: "ACM International Conference on Social Media & Society",
  publisher: "ACM",
  categories: [
    "Web & Social Media",
    "CSCW & Social",
    "Politics & Civics",
    "Media Studies",
    "Misinformation & Trust",
    "Digital Humanities",
    "HCI",
    "Ethics & Policy",
  ],
  coreRank: "B",
  scopusIndexed: true,
  website: "https://socialmediaandsociety.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-07-13",
      endDate: "2026-07-15",
      location: "Glasgow, UK",
      announced: true,
      abstractDeadline: "2026-03-01",
    }
  ],
}
