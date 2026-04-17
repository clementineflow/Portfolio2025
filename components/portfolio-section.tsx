"use client"

import type React from "react"

import { toast } from "@/hooks/use-toast"
import { useLocale } from "next-intl"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import type { Locale } from "@/lib/i18n/config"
import { prefixPathWithLocale } from "@/lib/i18n/routing"
import { trackProjectClick } from "@/lib/analytics"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showTooltip, setShowTooltip] = useState(false)
  const locale = useLocale() as Locale
  const isEnglish = locale === "en"

  const projects = [
    {
      title: "學習平台的評價流程優化",
      titleEn: "Optimizing Review Process for Learning Platform",
      description: "透過重新定義評價機制，成功將高星評價中夾雜的負面評論分流，提升 2.9% 產品轉換率。",
      descriptionEn:
        "Redefined the review mechanism to filter negative feedback from high-rated reviews, increasing product conversion rate by 2.9%.",
      image: "/images/RO002.png",
      backgroundColor: "#FFF3EC",
      tags: ["功能規劃", "數據分析", "成長策略"],
      tagsEn: ["Feature Planning", "Data Analysis", "Growth Strategy"],
      categories: ["產品策略規劃"],
      year: "2024",
      readTime: "5 min read",
      link: "/case-studies/review-optimization",
    },
    {
      title: "flowie | 數位插花創作與分享網站",
      titleEn: "Flowie: A Digital Flower Arranging & Sharing Website",
      description:
        "一人快速完成產品定義與上線迭代，打造低門檻的數位插花體驗，讓使用者數位花藝創作取代文字，傳遞情感。",
      descriptionEn:
        "Independently built from product definition to live iteration: a low-barrier digital floral experience.",
      image: "/images/Frame 73.jpg",
      backgroundColor: "#F0FFF4",
      tags: ["Vibe Coding", "Indie Product", "產品策略"],
      tagsEn: ["Vibe Coding", "Indie Product", "Product Strategy"],
      categories: ["Playground"],
      year: "2026",
      readTime: "3 min read",
      link: "/case-studies/flowie",
    },
    {
      title: "價格方案介面改版優化",
      titleEn: "Pricing Plan Interface Optimization",
      description: "透過定義關鍵訊息並調整資訊層級，提升行銷素材效果，使促銷組合優惠轉換率成長 2%。",
      descriptionEn:
        "Defined key messages and refined information hierarchy to improve marketing clarity, resulting in a 2% increase in promotional bundle conversions.",
      image: "/images/PRICE003.png",
      backgroundColor: "#F0F4FF",
      tags: ["使用者體驗優化", "使用者研究", "數據分析"],
      tagsEn: ["UX Optimization", "User Research", "Data Analysis"],
      categories: [],
      year: "2025",
      readTime: "in development",
    },
    {
      title: "資安專案服務的產品化規劃",
      titleEn: "Productizing Security Service Engagements",
      description: "定義產品策略與定位，為弱點掃描服務打造可複用、可擴展的產品模式。",
      descriptionEn:
        "Defined product strategy and positioning to create a repeatable, scalable model for delivering vulnerability scanning services.",
      image: "/images/VM001.png",
      backgroundColor: "#F4F8FF",
      tags: ["0 到 1 產品開發", "市場研究", "產品策略"],
      tagsEn: ["0-to-1 Product Development", "Market Research", "Product Strategy"],
      categories: ["產品策略規劃", "B2B SaaS"],
      imagePadding: "p-4",
      year: "2024",
      readTime: "2 min read",
      link: "/case-studies/vulnerability-management",
    },
    {
      title: "重新設計遠距情侶的溝通體驗",
      titleEn: "Redesigning the Communication Experience for Long-distance Couples",
      description: "主導完整的使用者研究流程，並將分析結果轉換為產品策略和功能設計。",
      descriptionEn:
        "Led the full user research process and translated insights into product strategies and functional design.",
      image: "/images/LD00.png",
      backgroundColor: "#FFF3EC",
      tags: ["使用者研究", "設計思考", "UI/UX 設計"],
      tagsEn: ["User Research", "Design Thinking", "UI/UX Design"],
      categories: ["使用者研究與體驗優化"],
      imagePadding: "p-2",
      readTime: "5 min read",
      link: "/case-studies/love-distance",
      year: "2023",
    },
    {
      title: "AI 廣告管理產品 UI/UX 優化",
      titleEn: "AI Ad Management Product UI/UX Optimization",
      description: "解決資料欄位擴增造成的易用性問題，重新設計資訊架構提升操作效率。",
      descriptionEn:
        "Solved usability issues from expanding data fields by redesigning information architecture to improve operational efficiency.",
      image: "/images/AM00.png",
      backgroundColor: "#E1F4FF",
      tags: ["產品設計", "使用者體驗優化", "UI/UX 設計"],
      tagsEn: ["Product Design", "UX Optimization", "UI/UX Design"],
      categories: ["B2B SaaS", "使用者研究與體驗優化"],
      link: "/case-studies/ai-ad-management",
      year: "2023",
      readTime: "3 min read",
    },
  ]

  const handleWorkInProgressClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowTooltip(false)
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

  const filterCategories = [
    { id: "All", label: "All", labelEn: "All" },
    { id: "產品策略規劃", label: "產品策略規劃", labelEn: "Product Strategy & Planning" },
    { id: "B2B SaaS", label: "B2B SaaS", labelEn: "B2B SaaS" },
    { id: "使用者研究與體驗優化", label: "使用者研究與體驗優化", labelEn: "User Research & UX Optimization" },
    { id: "Playground", label: "Playground", labelEn: "Playground" },
  ]

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => (project.categories as string[] | undefined)?.includes(activeFilter))

  return (
    <section id="work" data-section="portfolio" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-4">My Projects</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${activeFilter === category.id
                ? "bg-foreground text-background"
                : "bg-background text-foreground hover:bg-muted border border-border/50"
                }`}
            >
              {isEnglish ? category.labelEn : category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => {
            const displayTitle = isEnglish && project.titleEn ? project.titleEn : project.title
            const displayDescription =
              isEnglish && project.descriptionEn ? project.descriptionEn : project.description

            const displayTags = isEnglish && project.tagsEn ? project.tagsEn : project.tags
            const categoryLabel = displayTags[0] ?? "Project"
            const additionalTags = displayTags.slice(1)
            const baseClasses =
              "bg-white rounded-xl shadow-[0_4px_10px_rgba(16,24,40,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(16,24,40,0.12)] transition-all duration-300 group overflow-hidden h-full flex flex-col"

            const card = (
              <article
                className={`${baseClasses} ${project.link ? "cursor-pointer" : "cursor-not-allowed opacity-80 hover:opacity-90"
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
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={displayTitle}
                      fill
                      className={project.imagePadding ? `object-contain ${project.imagePadding}` : "object-contain"}
                      sizes="(min-width: 1024px) 360px, 100vw"
                    />
                  )}
                </div>
                <div className="p-5 flex flex-col gap-4 flex-1">
                  {categoryLabel && (
                    <div className="flex flex-wrap gap-2">
                      {[categoryLabel, ...additionalTags].map((tag, tagIndex) => (
                        <span
                          key={`${tag}-${tagIndex}`}
                          className="inline-flex items-center bg-[#F5F7FA] text-[#4B5563] text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h3 className="font-semibold text-xl text-gray-900 leading-tight line-clamp-2">
                    {displayTitle}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{displayDescription}</p>
                  <div className="mt-auto text-xs text-[#6B7280] flex items-center gap-2">
                    <span>{project.year}</span>
                    <span aria-hidden="true">•</span>
                    <span>{project.readTime ?? "5 min read"}</span>
                  </div>
                </div>
              </article>
            )

            const projectHref = project.link ? prefixPathWithLocale(locale, project.link) : undefined

            return (
              <div key={index} className="relative h-full">
                {projectHref ? (
                  <Link
                    href={projectHref}
                    className="block h-full"
                    onClick={() => trackProjectClick(project.title, locale)}
                  >
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
