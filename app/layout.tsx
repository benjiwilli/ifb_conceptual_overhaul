import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import RouteTransition from "@/components/route-transition"
import CommandMenu from "@/components/command-menu"
import MobileDock from "@/components/mobile-dock"
import ScrollToTop from "@/components/scroll-to-top"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: var(--font-inter);
  --font-inter: ${inter.style.fontFamily};
  --font-space-grotesk: ${space.style.fontFamily};
}
        `}</style>
      </head>
      <body className={`${inter.variable} ${space.variable} bg-[oklch(21%_0.03_260)] text-[oklch(96%_0.01_260)]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteHeader />
          <RouteTransition>{children}</RouteTransition>
          <CommandMenu />
          <MobileDock />
          <ScrollToTop />
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
