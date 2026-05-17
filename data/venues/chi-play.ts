import type { Venue } from "@/lib/venues/types"

/**
 * CHI PLAY — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "chi-play",
  acronym: "CHI PLAY",
  fullName: "ACM SIGCHI Annual Symposium on Computer-Human Interaction in Play",
  publisher: "ACM",
  categories: [
    "Games & Play",
    "HCI",
    "UI/UX",
    "Engagement & Gamification",
    "VR/AR/XR",
    "Design",
    "Children",
    "CSCW & Social",
  ],
  coreRank: "B",
  scopusIndexed: true,
  website: "https://chiplay.acm.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-11-02",
      endDate: "2026-11-05",
      location: "York, UK",
      announced: true,
      abstractDeadline: "2026-02-18",
    }
  ],
}
