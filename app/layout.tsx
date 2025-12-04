import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ting An - Product Manager Portfolio",
  description:
    "Senior Product Manager skilled in turning user insights and data into effective product strategies and design.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
