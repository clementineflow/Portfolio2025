import type React from "react"
import { ContentCard } from "./content-card"

interface IconCardProps {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
  className?: string
}

export function IconCard({ icon, title, children, className = "" }: IconCardProps) {
  return (
    <ContentCard className={className}>
      <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">{title}</h3>
      <div className="text-gray-600 leading-relaxed text-sm">{children}</div>
    </ContentCard>
  )
}
