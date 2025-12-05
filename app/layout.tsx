import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dr Raspec – Mobile App & Back-end Developer",
  description:
    "Portfolio of Dr Raspec – Mobile App & Back-end Developer specializing in Flutter, Spring Boot, Laravel, and scalable API systems.",
  authors: [{ name: "Dr Raspec" }],
  openGraph: {
    title: "Dr Raspec – Mobile App & Back-end Developer",
    description: "Showcasing mobile apps, backend services, and development workflow of Dr Raspec.",
  },
    generator: 'v0.app'
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
