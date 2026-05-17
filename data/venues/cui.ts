import type { Venue } from "@/lib/venues/types"

/**
 * CUI — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "cui",
  acronym: "CUI",
  fullName: "ACM Conference on Conversational User Interfaces",
  publisher: "ACM",
  categories: [
    "UI/UX",
    "HCI"
  ],
  coreRank: "B",
  scopusIndexed: true,
  website: "https://www.conversationaluserinterfaces.org/",
  editions: [
    {
      year: 2026,
      startDate: "2026-07-21",
      endDate: "2026-07-24",
      location: "Bremen, Germany",
      announced: true,
      abstractDeadline: "2026-04-01",
    }
  ],
}
