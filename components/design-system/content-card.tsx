import type React from "react"
import { Card } from "@/components/ui/card"

interface ContentCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "gradient-purple" | "gradient-orange"
}

export function ContentCard({ children, className = "", variant = "default" }: ContentCardProps) {
  const variantClasses = {
    default: "bg-white shadow",
    "gradient-purple": "bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg",
    "gradient-orange": "bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg",
  }

  return <Card className={`rounded-2xl p-8 border-0 ${variantClasses[variant]} ${className}`}>{children}</Card>
}
