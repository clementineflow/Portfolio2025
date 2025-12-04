"use client"

import type React from "react"

import { toast } from "@/hooks/use-toast"
import { useLocale } from "next-intl"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import type { Locale } from "@/lib/i18n/config"
import { prefixPathWithLocale } from "@/lib/i18n/routing"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showTooltip, setShowTooltip] = useState(false)
  const locale = useLocale() as Locale

  const projects = [
    {
      title: "評論流程優化",
      description: "透過重新定義評價機制，成功將高星評價中夾雜的負面評論分流，有效提升產品轉換率。",
      image: "/analytics-dashboard.png",
      backgroundColor: "#FFF3EC",
      tags: ["#產品規劃", "#功能優化", "#2C Product"],
      year: "2024",
      link: "/case-studies/review-optimization",
    },
    {
      title: "弱點管理平台",
      description:
        "從 0 到 1 的全新產品規劃，負責資安 SaaS 產品的市場研究、競品分析與產品定位，並規劃產品路線圖，為產品奠定扎實的發展基礎。",
      image: "/images/VM000.png",
      backgroundColor: "#FFFFFF",
      tags: ["#產品策略", "#產品規劃", "#B2B SaaS"],
      year: "2025",
      link: "/case-studies/vulnerability-management",
    },
    {
      title: "遠距情侶 App",
      description:
        "從使用者研究到產品原型，透過使用者訪談與旅程地圖，識別遠距情侶的核心痛點「缺乏安全感」，並以此為核心設計產品原型與功能。",
      image: "/images/LD00.png",
      backgroundColor: "#FFF3EC",
      tags: ["#Research", "#2C Product"],
      link: "/case-studies/love-distance",
      year: "2023",
    },
    {
      title: "AI 廣告管理 Web 產品優化",
      description: "針對 B2B SaaS 廣告管理平台進行全面性的使用者體驗優化，提升操作效率與用戶滿意度。",
      image: "/images/AM00.png",
      backgroundColor: "#E1F4FF",
      tags: ["#功能優化", "#B2B SaaS"],
      link: "/case-studies/ai-ad-management",
      year: "2024",
    },
  ]

  const handleWorkInProgressClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("[v0] Work in progress card clicked")
    toast({
      title: "Still Cooking! 🍳",
      description: "This project is in development and will be available soon.",
      duration: 3000,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseEnter = () => {
    console.log("[v0] Mouse entered work in progress card")
    setShowTooltip(true)
  }

  const handleMouseLeave = () => {
    console.log("[v0] Mouse left work in progress card")
    setShowTooltip(false)
  }

  const filterCategories = ["All", "#產品策略", "#產品規劃", "#功能優化", "#Research", "#B2B SaaS", "#2C Product"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.tags.includes(activeFilter))

  return (
    <section id="work" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-4">My Projects</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground hover:bg-muted border border-border/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => {
            const categoryLabel = project.tags[0] ?? "Project"
            const additionalTags = project.tags.slice(1)
            const baseClasses =
              "bg-white rounded-xl shadow-[0_4px_10px_rgba(16,24,40,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(16,24,40,0.12)] transition-all duration-300 group overflow-hidden h-full flex flex-col"

            const card = (
              <article
                className={`${baseClasses} ${
                  project.link ? "cursor-pointer" : "cursor-not-allowed opacity-80 hover:opacity-90"
                }`}
                onClick={project.link ? undefined : handleWorkInProgressClick}
                onMouseMove={project.link ? undefined : handleMouseMove}
                onMouseEnter={project.link ? undefined : handleMouseEnter}
                onMouseLeave={project.link ? undefined : handleMouseLeave}
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{ backgroundColor: project.backgroundColor ?? "#FBF5EC" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                    sizes="(min-width: 1024px) 360px, 100vw"
                  />
                </div>
                <div className="p-5 flex flex-col gap-4 flex-1">
                  {categoryLabel && (
                    <div className="flex flex-wrap gap-2">
                      {[categoryLabel, ...additionalTags].map((tag, tagIndex) => (
                        <span
                          key={`${tag}-${tagIndex}`}
                          className="inline-flex items-center bg-[#E6F9EE] text-[#14744A] text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="font-semibold text-xl text-gray-900 leading-tight line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="mt-auto text-xs text-[#6B7280] flex items-center gap-2">
                    <span>{project.year}</span>
                    <span aria-hidden="true">•</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </article>
            )

            const projectHref = project.link ? prefixPathWithLocale(locale, project.link) : undefined

            return (
              <div key={index} className="relative h-full">
                {projectHref ? (
                  <Link href={projectHref} className="block h-full">
                    {card}
                  </Link>
                ) : (
                  <>
                    {card}
                    {showTooltip && (
                      <div
                        className="fixed bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none z-50"
                        style={{
                          left: mousePosition.x + 15,
                          top: mousePosition.y + 15,
                        }}
                      >
                        This project is in development. Coming soon!
                      </div>
                    )}
                  </>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
