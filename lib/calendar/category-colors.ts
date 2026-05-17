import type { VenueCategory } from "@/lib/venues/types"

export const DEADLINE_COLOR = "#dc2626"

export const categoryColors: Record<VenueCategory, string> = {
  HCI: "#eab308",
  "UI/UX": "#3b82f6",
  "VR/AR/XR": "#1e3a8a",
  "Mobile & Ubiquitous": "#06b6d4",
  "CSCW & Social": "#0891b2",
  "Games & Play": "#f97316",
  Design: "#22c55e",
  "Security & Privacy": "#92400e",
  "AI & Ethics": "#2563eb",
  "Sustainability & ICTD": "#65a30d",
  "Web & Social Media": "#7c3aed",
  Communication: "#a855f7",
  Systems: "#64748b",
  Children: "#ec4899",
  Graphics: "#b45309",
  "IT & Service Management": "#475569",
}

export function colorForCategories(categories: VenueCategory[]): string {
  return categoryColors[categories[0] ?? "HCI"] ?? categoryColors.HCI
}

export const legendItems: { label: string; color: string }[] = [
  { label: "Deadlines", color: DEADLINE_COLOR },
  ...Object.entries(categoryColors).map(([label, color]) => ({ label, color })),
  { label: "Today", color: "var(--muted-foreground)" },
]
