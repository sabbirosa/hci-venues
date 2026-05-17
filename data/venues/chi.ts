import type { Venue } from "@/lib/venues/types"

/**
 * CHI — update main-track abstractDeadline per edition (YYYY-MM-DD).
 * Placeholder deadlines marked 2026-12-31 are DUMMY; replace from the official CFP.
 */
export const venue: Venue = {
  id: "chi",
  acronym: "CHI",
  fullName: "ACM Conference on Human Factors in Computing Systems",
  publisher: "ACM",
  type: "conference",
  categories: ["HCI"],
  coreRank: "A*",
  scopusIndexed: true,
  featured: true,
  website: "https://chi.acm.org",
  editions: [
    {
      year: 2026,
      startDate: "2026-04-13",
      endDate: "2026-04-17",
      location: "Barcelona, Spain",
      announced: true,
      abstractDeadline: "2025-09-11",
      website: "https://chi2026.acm.org",
      programLink: "https://programs.sigchi.org/chi/2026",
      proceedingsLink: "https://dl.acm.org/doi/proceedings/10.1145/3772318",
    },
    {
      year: 2027,
      startDate: "2027-05-10",
      endDate: "2027-05-14",
      location: "Pittsburgh, PA, USA",
      announced: true,
      paperDeadline: "2026-09-10",
      website: "https://chi2027.acm.org",
    },
  ],
}
