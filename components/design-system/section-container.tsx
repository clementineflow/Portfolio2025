import type React from "react"
interface SectionContainerProps {
  children: React.ReactNode
  background?: "default" | "orange" | "white" | "gradient"
  className?: string
}

export function SectionContainer({ children, background = "default", className = "" }: SectionContainerProps) {
  const backgroundClasses = {
    default: "bg-[#FBF5EC]",
    orange: "bg-[#FBF5EC]",
    white: "bg-white",
    gradient: "bg-gradient-to-b from-white to-[#FBF5EC]",
  }

  return (
    <div className={`py-16 ${backgroundClasses[background]} ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </div>
  )
}
