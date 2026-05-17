import type { Publisher, VenueCategory } from "@/lib/venues/types"

export const allPublishers: Publisher[] = [
  "ACM",
  "IEEE",
  "IEEE/ACM",
  "AAAI/ACM",
  "USENIX",
  "BCS",
  "IW3C2",
  "Other",
]

/** ICORE 2026 conference rank distribution (825 ranked venues). */
export const icore2026Summary = [
  { rank: "A*", detail: "7.52% of 825 ranked venues" },
  { rank: "A", detail: "13.09% of 825 ranked venues" },
  { rank: "B", detail: "30.18% of 825 ranked venues" },
  { rank: "Australasian B", detail: "0.73% of 825 ranked venues" },
  { rank: "C", detail: "46.18% of 825 ranked venues" },
  { rank: "Australasian C", detail: "2.3% of 825 ranked venues" },
  { rank: "Other", detail: "162 total" },
] as const

const PINNED_TOPIC_CATEGORIES: VenueCategory[] = ["HCI", "CSCW & Social"]

export const allCategories: VenueCategory[] = [
  "HCI",
  "UI/UX",
  "VR/AR/XR",
  "Mobile & Ubiquitous",
  "CSCW & Social",
  "Games & Play",
  "Design",
  "Security & Privacy",
  "AI & Ethics",
  "Sustainability & ICTD",
  "Web & Social Media",
  "Communication",
  "Systems",
  "Children",
  "Graphics",
  "IT & Service Management",
  "SNA & Communities",
  "Diffusion & Virality",
  "Sentiment & Opinions",
  "Misinformation & Trust",
  "Web Mining & IR",
  "Digital Humanities",
  "Politics & Civics",
  "Digital Health",
  "Text & Demographics",
  "Trends & Forecasting",
  "Media Studies",
  "Platform Studies",
  "Web Linguistics",
  "Social Psychology",
  "Engagement & Gamification",
  "Social Innovation",
  "Organizational Social",
  "Methods & Tools",
  "Critical & Ethnographic",
  "Domain Applications",
  "Ethics & Policy",
  "Emerging Technologies",
  "Crossing Boundaries",
  "Explainable AI & Trust",
  "Conversational UX",
  "AI UX Personalization",
  "AI-Augmented Design",
  "Human-AI Collaboration",
  "Generative UI",
  "NLP in UX",
  "Accessible & Inclusive Design",
  "Human-Robot Interaction",
  "Cross-Cultural UX",
  "Learning UX",
  "Affective Computing",
  "Persuasive Technology",
  "Multimodal Interfaces",
  "Computational Interaction",
  "Novel Devices & Fabrication",
]

/** Topic filter dropdown: HCI and CSCW & Social first, then A–Z. */
export const topicFilterCategories: VenueCategory[] = [
  ...PINNED_TOPIC_CATEGORIES,
  ...allCategories
    .filter((c) => !PINNED_TOPIC_CATEGORIES.includes(c))
    .sort((a, b) => a.localeCompare(b)),
]
