import { Geist_Mono, Source_Sans_3 } from "next/font/google"

import { SiteContainer } from "@/components/site-container"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import "./globals.css"

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "HCI Venues Tracker",
  description:
    "HCI conference rankings, categories, Scopus indexing, and countdowns to submission deadlines.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "light antialiased",
        fontMono.variable,
        "font-sans",
        sourceSans3.variable,
      )}
    >
      <body className="bg-background text-foreground">
        <TooltipProvider>
          <SiteContainer>{children}</SiteContainer>
        </TooltipProvider>
      </body>
    </html>
  )
}
