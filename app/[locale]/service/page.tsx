import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Card } from "@/components/ui/card"
import type { Locale } from "@/lib/i18n/config"
import { prefixPathWithLocale } from "@/lib/i18n/routing"

type ServicePageProps = {
  params: Promise<{ locale: Locale }>
}

const services = [
  {
    icon: "🔍",
    title: "使用者研究與訪談",
    description:
      "不只收集使用者意見，而是釐清其背後的動機與決策脈絡，找出「真正的需求」與關鍵痛點。透過結構化訪談與系統化分析，將質性資料轉化為可用於產品決策的洞察。",
    deliverables: [
      "訪談計畫（訪談指南、篩選問卷）",
      "5–8 場深度訪談執行",
      "訪談摘要與關鍵語句整理",
      "洞察報告",
    ],
    href: "/case-studies/love-distance",
  },
  {
    icon: "🧭",
    title: "產品探索與驗證",
    description:
      "在投入開發前，先確認「問題是否正確、方向是否可行」。結合用戶研究、競品分析與利害關係人對齊，建立清晰的產品假設，並規劃驗證路徑，降低決策風險。",
    deliverables: [
      "問題定義",
      "競品與市場分析",
      "MVP 範圍定義",
      "解決方案與驗證計畫",
    ],
    href: "/case-studies/vulnerability-management",
  },
  {
    icon: "🗺️",
    title: "產品規劃與策略",
    description:
      "將洞察與驗證結果，轉化為團隊可執行的細部產品方案。聚焦在「做什麼、為什麼做、先做哪個」，並建立清楚的優先級與衡量標準。",
    deliverables: [
      "產品規格文件 PRD",
      "功能優先排序",
      "3–6 個月產品路線圖",
      "OKR 與成功指標",
    ],
    href: "/case-studies/review-optimization",
  },
]

const processSteps = [
  {
    step: "01",
    title: "初次諮詢",
    description: "60 分鐘免費通話，快速了解你的背景、目標與挑戰，先判斷是否適合合作。",
  },
  {
    step: "02",
    title: "範疇與提案",
    description: "我會整理專案範疇、時程與交付物，並提供一份清楚、不繞彎的合作提案。",
  },
  {
    step: "03",
    title: "研究與執行",
    description: "過程中保持透明同步，定期對焦進度與發現，不讓專案變成黑箱。",
  },
  {
    step: "04",
    title: "交付與支援",
    description: "最終交付可實際使用的文件與說明，也可視需求安排後續支援。",
  },
]

const researchMethods = [
  {
    number: "01",
    title: "一對一深度訪談",
    subtitle: "In-depth Interviews",
    description:
      "適用於初期探索研究，深入理解使用者行為、動機與決策脈絡。涵蓋訪談目標定義、訪綱設計、受訪者招募、訪談執行與資料分析。",
  },
  {
    number: "02",
    title: "焦點團體",
    subtitle: "Focus Groups",
    description: "透過多人同步討論的形式，快速匯聚不同立場的使用者意見，有助於短時間內掌握多元視角。",
  },
  {
    number: "03",
    title: "問卷調查",
    subtitle: "Surveys",
    description: "快速搜集大量且多元背景使用者的意見與行為經驗，適合補強數據支撐、快速評估特定議題的普遍性。",
  },
  {
    number: "04",
    title: "桌面研究",
    subtitle: "Desk Research",
    description: "整合產業報告、競品資訊與市場趨勢資料，為一手研究補充宏觀視野，深化對產業環境與使用者行為脈絡的整體理解。",
  },
  {
    number: "05",
    title: "量化數據分析",
    subtitle: "Quantitative Analysis",
    description: "適用於已有服務或者產品 MVP，基於使用者數據或行為、紀錄，找出關鍵行為模式與轉換瓶頸。",
  },
]

const pastProjects = [
  {
    title: "flowie | 數位插花創作與分享網站",
    description:
      "一人快速完成產品定義與上線迭代，打造低門檻的數位插花體驗，讓使用者數位花藝創作取代文字，傳遞情感。",
    image: "/images/Frame 73.jpg",
    backgroundColor: "#F0FFF4",
    tags: ["Vibe Coding", "Indie Product", "產品策略"],
    year: "2026",
    readTime: "3 min read",
    href: "/case-studies/flowie",
  },
  {
    title: "學習平台的評價流程優化",
    description: "透過重新定義評價機制，成功將高星評價中夾雜的負面評論分流，提升 2.9% 產品轉換率。",
    image: "/images/RO002.png",
    backgroundColor: "#FFF3EC",
    tags: ["功能規劃", "數據分析", "成長策略"],
    year: "2024",
    readTime: "5 min read",
    href: "/case-studies/review-optimization",
  },
  {
    title: "資安專案服務的產品化規劃",
    description: "定義產品策略與定位，為弱點掃描服務打造可複用、可擴展的產品模式。",
    image: "/images/VM001.png",
    backgroundColor: "#F4F8FF",
    tags: ["0 到 1 產品開發", "市場研究", "產品策略"],
    year: "2024",
    readTime: "2 min read",
    imagePadding: "p-4",
    href: "/case-studies/vulnerability-management",
  },
  {
    title: "AI 廣告管理產品 UI/UX 優化",
    description: "解決資料欄位擴增造成的易用性問題，重新設計資訊架構提升操作效率。",
    image: "/images/AM00.png",
    backgroundColor: "#E1F4FF",
    tags: ["產品設計", "使用者體驗優化", "UI/UX 設計"],
    year: "2023",
    readTime: "3 min read",
    href: "/case-studies/ai-ad-management",
  },
]

const quickStats = [
  {
    value: "4+",
    label: "跨產業經驗",
    description: "涵蓋教育、資安、消費產品與新創情境。",
  },
  {
    value: "B2B + B2C",
    label: "多元商業模式",
    description: "能釐清不同商業目標與用戶需求。",
  },
]

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center rounded-full bg-[#F6AD55] px-4 py-1.5 text-sm font-medium text-white">
        {eyebrow}
      </div>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-800 md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-gray-600">{description}</p>
    </div>
  )
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale } = await params

  return (
    <main className="min-h-screen bg-[#FBF5EC] text-gray-800">
      <section className="bg-[linear-gradient(to_bottom,_#ffffff_0%,_#ffffff_55%,_#FBF5EC_100%)] pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl bg-[#FBF5EC] p-8 md:p-12 lg:p-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to freelance projects
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-gray-800 md:text-5xl">
                從模糊的想法到
                <br />
                <span className="text-[#F6AD55]">清晰可執行的產品方向</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                我幫助新創和產品團隊從不確定走向明確，透過結構化的用戶研究、產品探索和策略規劃，
                找出真正該做的下一步。
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2">
              {quickStats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-semibold text-[#F6AD55]">{stat.value}</div>
                  <div className="mt-3 text-base font-medium text-gray-800">{stat.label}</div>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="我的服務"
            title="服務項目"
            description="三個聚焦的服務領域，各自對應不同階段的產品問題，目標都是讓你更快走到可執行的方向。"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(16,24,40,0.12)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF3E2] text-3xl">
                  {service.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">{service.description}</p>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">交付物</div>
                  <ul className="mt-4 space-y-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-gray-600">
                        <Check className="mt-1 size-4 shrink-0 text-[#F6AD55]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="研究方法"
            title="研究方法"
            description="依產品類型、專案需求彈性搭配使用。"
          />

          <div className="mt-12 divide-y divide-gray-200 border-t border-gray-200">
            {researchMethods.map((method) => (
              <div
                key={method.number}
                className="grid gap-4 py-6 md:grid-cols-[80px_minmax(0,1fr)_minmax(0,2fr)] md:items-start md:gap-10 md:py-8"
              >
                <div className="text-4xl font-semibold tracking-[-0.04em] text-[#F6AD55]/60">
                  {method.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{method.title}</h3>
                  <div className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-gray-500">
                    {method.subtitle}
                  </div>
                </div>
                <p className="text-sm leading-7 text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="工作流程"
            title="合作方式"
            description="合作期間全程開放溝通，保持合作彈性。隨時溝通與修正以確保成果符合彼此期待 ☺️"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <Card key={step.step} className="rounded-2xl border-0 bg-white p-6 shadow-sm">
                <div className="text-5xl font-semibold tracking-[-0.06em] text-[#F6AD55]/30">{step.step}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-800 md:text-5xl">過去經驗</h2>
        </div>

        <div className="mt-8 overflow-x-auto py-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-max max-w-none gap-6 px-6 md:gap-8">
            {pastProjects.map((project) => (
              <Link
                key={project.title}
                href={prefixPathWithLocale(locale, project.href)}
                className="group flex h-full w-[300px] shrink-0 flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_10px_rgba(16,24,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(16,24,40,0.12)] md:w-[320px]"
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden"
                  style={{ backgroundColor: project.backgroundColor }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={project.imagePadding ? `object-contain ${project.imagePadding}` : "object-contain"}
                    sizes="320px"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-[#F5F7FA] px-3 py-1 text-xs font-medium text-[#4B5563]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="line-clamp-2 text-xl font-semibold leading-tight text-gray-900">{project.title}</h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">{project.description}</p>
                  <div className="mt-auto flex items-center gap-2 text-xs text-[#6B7280]">
                    <span>{project.year}</span>
                    <span aria-hidden="true">•</span>
                    <span>{project.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}

            <Link
              href={`${prefixPathWithLocale(locale, "/")}#work`}
              className="group flex w-[200px] shrink-0 flex-col items-center justify-center gap-4 text-center"
            >
              <ArrowRight className="size-8 text-[#F6AD55] transition-transform group-hover:translate-x-1" />
              <p className="text-sm leading-6 text-gray-600">查看所有專案</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
