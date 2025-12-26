import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fegermeister | Ihr Schornsteinfeger-Meisterbetrieb",
  description:
    "Fegermeister - Ihr professioneller Schornsteinfegerbetrieb für Privat- und Gewerbekunden. Brandsicherheit, Feuerstättenprüfung, Energieberatung und Umweltschutz.",
  generator: "v0.app",
  keywords: [
    "Fegermeister",
    "Schornsteinfeger",
    "Kaminkehrer",
    "Brandsicherheit",
    "Feuerstättenprüfung",
    "Energieberatung",
  ],
  icons: {
    icon: "/images/schornsteinfeger-logo.jpg",
    apple: "/images/schornsteinfeger-logo.jpg",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
