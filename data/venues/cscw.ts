import type { Venue } from "@/lib/venues/types"

/** Rolling PACM HCI submissions; accepted papers present at CSCW. No fixed deadlines. */
export const venue: Venue = {
  id: "cscw",
  acronym: "CSCW",
  fullName:
    "ACM Conference on Computer-Supported Cooperative Work & Social Computing",
  publisher: "ACM",
  categories: [
    "HCI",
    "CSCW & Social",
    "Web & Social Media",
    "Systems",
    "Design",
    "Methods & Tools",
    "Critical & Ethnographic",
    "Communication",
    "Domain Applications",
    "Ethics & Policy",
    "Sustainability & ICTD",
    "Mobile & Ubiquitous",
    "VR/AR/XR",
    "Games & Play",
    "Emerging Technologies",
    "Crossing Boundaries",
  ],
  coreRank: "A",
  scopusIndexed: true,
  website: "https://cscw.acm.org/",
  notes:
    "From 2027, papers submit continuously to PACM HCI; accepted work is invited to present at CSCW.",
  editions: [
    {
      year: 2027,
      location: "Salt Lake City, UT, USA",
      announced: false,
      rollingSubmissions: true,
      rollingSubmissionsUrl: "https://cscw.acm.org/rolling.html",
    },
    {
      year: 2026,
      startDate: "2026-10-10",
      endDate: "2026-10-14",
      location: "Salt Lake City, UT, USA",
      announced: true,
    },
  ],
}
