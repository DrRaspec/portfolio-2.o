import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yong Bunleng – Full-Stack Software Developer",
  description:
    "Portfolio of Yong Bunleng – Full-Stack Software Developer specializing in Flutter, Swift, Kotlin, Next.js, React, Angular, Spring Boot, and Python.",
  authors: [{ name: "Yong Bunleng" }],
  openGraph: {
    title: "Yong Bunleng – Full-Stack Software Developer",
    description: "Showcasing mobile apps, web apps, backend services, and development workflow of Yong Bunleng.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
