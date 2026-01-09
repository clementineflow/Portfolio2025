import type React from "react"

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="pt-36">{children}</div>
}