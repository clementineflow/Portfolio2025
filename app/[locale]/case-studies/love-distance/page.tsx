import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResearchProcessSection } from "@/components/research-process"
import { SolutionStrategySection } from "@/components/solution-strategy"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import type { Locale } from "@/lib/i18n/config"
import { prefixPathWithLocale } from "@/lib/i18n/routing"

type CaseStudyPageProps = {
  params: Promise<{ locale: Locale }>
}

const CONTENT = {
  zh: {
    hero: {
      badge: "使用者經驗研究",
      title: "重新設計遠距情侶的溝通體驗",
      subtitle: "",
      description:
        "一場關於如何透過「低打擾互動」提升遠距離情侶情感連結的設計實驗。",
    },
    background_outcome: {
      background_title: "背景",
      background_text:
        "疫情封鎖與社交隔離等外部壓力改變了情侶的日常連結方式，使伴侶關係品質因情感支持減少、共同經驗缺失而惡化。 我們發現這不只是疫情期間的特殊問題，一般遠距離情侶與疫情下被迫分隔的情侶，面臨著類似的困境。本專案透過系統性使用者研究，探索痛點並設計對應的解決方案。",
      outcome_title: "成果",
      outcome_text:
        "透過系統性使用者研究（深度訪談、同理心地圖、Persona、使用者旅程地圖），我們定義核心痛點為「缺乏低成本維繫安全感的方式」，並針對特定 Persona 設計出低侵入感的三個主要產品功能。",
    },
    why_rethink: {
      title: "為什麼需要重新思考遠距戀愛的互動方式？",
      cards: [
        {
          title: "背景",
          icon: "🏫",
          content: (
            <div className="text-gray-600 leading-relaxed text-sm space-y-3">
              <p>疫情改變了情侶的相處模式</p>
              <ul className="list-disc list-outside pl-5 space-y-1">
                <li>隔離政策導致見面頻率大幅下降</li>
                <li>情緒與感情關係品質下降</li>
                <li>現有情侶 App 因新鮮感消退而被其他軟體替代</li>
              </ul>
            </div>
          ),
        },
        {
          title: "機會點",
          icon: "😕",
          content: (
            <ul className="list-disc list-outside space-y-2 text-gray-600 pl-5 text-sm">
              <li>根據文獻研究，科技產品的使用可調節、減緩隔離對關係的負面影響</li>
              <li>在台灣約 3-5 成大學生有遠距戀愛經驗，市場規模廣泛</li>
            </ul>
          ),
        },
        {
          title: "研究目標",
          icon: "🎯",
          content: (
            <p className="text-gray-600 leading-relaxed text-sm">
              透過使用者研究，了解遠距情侶的核心痛點，並設計能真正解決問題的產品功能。
            </p>
          ),
        },
      ],
    },
    key_insights: {
      title: "🔍 Key Insights",
      points: [
        {
          title: "存在感不足是安全感下降的主因",
          text: (
            <>
              當對方在日常生活的 <strong>存在感太低</strong> 時，容易產生不安全感。安全感不一定需要「時時刻刻黏在一起」，而是需要{" "}
              <strong>在日常中感知到對方的存在</strong>。
            </>
          ),
        },
        {
          title: "需要降低日常維繫的認知負擔",
          text: (
            <div className="space-y-3">
              <p>
                訪談發現許多情侶依賴大量日常維繫來維持安全感，而許多情侶軟體也順應相似的產品設計邏輯，導致使用者負擔增加。然而在忙碌或有時差的情況下，這種模式難以維持。
              </p>
              <p>
                可採用 <strong>低心智成本的互動方式</strong>，讓使用者即使在有限時間內，也能保持關聯。
              </p>
            </div>
          ),
        },
      ],
    },
    scenario_testing: {
      title: "Scenario Testing & Iteration",
      positive_feedback: {
        title: "正向回饋",
        list: ["很喜歡桌面 Widget 的互動設計，而且對日常生活的侵入感很低，很方便", "Line Bot 可轉移話題來緩解負面情緒，覺得不錯"],
      },
      improvement_suggestions: {
        title: "改善建議",
        list: ["不太理解桌面 Widget 中的電燈用處為何", "被通知到對方已許久沒回訊息會緊張，想關掉提示", "Line Bot 有種被外人干涉的感覺"],
      },
      key_findings: {
        list: ["使用者之間回訊息的習慣差異大，功能需能做彈性調整", "對於某些第一次接觸的新功能接受度較低，可以在使用者習慣 app 後再新增功能"],
      },
    },
    learnings: {
      title: "Takeaways & Learnings",
      points: [
        {
          title: "研究方法的靈活運用比完整流程更重要",
          text: "這次經驗讓我體會到，UI/UX 的設計流程只是參考的依據。比起完整的研究流程，更重要的是定義好「需要研究的問題」之後，根據各種研究方法的適用背景與使用限制，靈活使用研究工具。不一定需要追求完整全面的研究方法。",
        },
        {
          title: "忽略了「配對組合」",
          text: "我們在收集回饋時順著 Persona 的思考結果，只以忙碌的人為測試對象，但忽略了情侶 App 應該會有兩個使用者，雙方的生活型態不一定相同。此類雙邊使用者產品的設計，要考慮「使用者組合」而非單一使用者。之後思考時要處理更細緻。",
        },
      ],
    },
  },
  en: {
    hero: {
      badge: "User Experience Research",
      title: "Redesigning Communication Experience",
      subtitle: "for Long-Distance Couples",
      description: "A product design experiment focusing on emotional connection, reducing the cognitive load of relationship maintenance through low-intrusive interaction.",
    },
    background_outcome: {
      background_title: "Background",
      background_text: "Pandemic lockdowns disrupted how couples stay connected, reducing emotional support and shared experiences. Through user research, we found long-distance and pandemic-separated couples faced similar challenges. This project explores pain points and designs corresponding solutions through systematic user research.",
      outcome_title: "Outcome",
      outcome_text: "Through systematic user research (in-depth interviews, empathy maps, personas, user journey maps), we defined the core pain point as \"lacking a low-cost way to maintain security\" and designed three main low-intrusion product features for a specific persona.",
    },
    why_rethink: {
      title: "Why Rethink Long-Distance Relationship Interactions?",
      cards: [
        {
          title: "Background",
          icon: "🏫",
          content: (
            <div className="text-gray-600 leading-relaxed text-sm space-y-3">
              <p>The pandemic changed how couples interact</p>
              <ul className="list-disc list-outside pl-5 space-y-1">
                <li>Isolation policies drastically reduced meeting frequency</li>
                <li>Emotional and relationship quality declined</li>
                <li>Existing couple apps were replaced by other software as novelty wore off</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Opportunity",
          icon: "😕",
          content: (
            <ul className="list-disc list-outside space-y-2 text-gray-600 pl-5 text-sm">
              <li>According to literature, technology product usage can moderate and reduce isolation's negative impact on relationships</li>
              <li>In Taiwan, approximately 30-50% of college students have long-distance relationship experience—a broad market</li>
            </ul>
          ),
        },
        {
          title: "Research Goal",
          icon: "🎯",
          content: (
            <p className="text-gray-600 leading-relaxed text-sm">
              Through user research, understand core pain points of long-distance couples and design product features that truly solve problems.
            </p>
          ),
        },
      ],
    },
    key_insights: {
      title: "🔍 Key Insights",
      points: [
        {
          title: "Lack of Presence is the Main Cause of Decreased Security",
          text: (
            <>
              When the partner's <strong>presence in daily life is too low</strong>, it easily creates insecurity. Sense of security doesn't necessarily require "being together all the time," but rather <strong>sensing the partner's existence in daily life</strong>.
            </>
          ),
        },
        {
          title: "Need to Reduce Cognitive Load of Daily Maintenance",
          text: (
            <div className="space-y-3">
              <p>
                Interviews found many couples rely on extensive daily maintenance to sustain sense of security, and many couple apps follow similar product design logic, increasing user burden. However, this model is difficult to maintain when busy or across time zones.
              </p>
              <p>
                We can adopt <strong>low cognitive-cost interaction methods</strong>, allowing users to maintain connection even with limited time.
              </p>
            </div>
          ),
        },
      ],
    },
    scenario_testing: {
      title: "Scenario Testing & Iteration",
      positive_feedback: {
        title: "Positive Feedback",
        list: ["Really like desktop widget interaction design, and very low intrusion on daily life, very convenient", "Line Bot can shift topics to ease negative emotions, thought it was good"],
      },
      improvement_suggestions: {
        title: "Improvement Suggestions",
        list: ["Don't quite understand the purpose of the light in desktop widget", "Get nervous when notified partner hasn't replied in a long time, want to turn off notification", "Line Bot feels like outside interference"],
      },
      key_findings: {
        list: ["Users have vastly different messaging habits; features need flexible adjustment", "Lower acceptance of certain first-time new features; can add features after users get used to the app"],
      },
    },
    learnings: {
      title: "Takeaways & Learnings",
      points: [
        {
          title: "Flexible Use of Research Methods More Important Than Complete Process",
          text: "This experience made me realize that UI/UX design processes are just reference frameworks. More important than complete research processes is defining \"the problem that needs research,\" then flexibly using research tools based on each method's applicable background and limitations. Don't necessarily need to pursue comprehensive research methods.",
        },
        {
          title: "Overlooked \"Pairing Combinations\"",
          text: "When collecting feedback, we followed persona thinking and only tested with busy people, but overlooked that couple apps should have two users whose lifestyles may not be the same. Design of such two-sided user products must consider \"user combinations,\" not individual users. Need to think more carefully in the future.",
        },
      ],
    },
  },
}

export default async function LoveDistanceCaseStudy({ params }: CaseStudyPageProps) {
  const { locale } = await params
  const homeHref = prefixPathWithLocale(locale)
  const t = CONTENT[locale as "zh" | "en"] || CONTENT.zh

  return (
    <>
      <main className="min-h-screen bg-[#FFF6EE]">
        {/* 頂部橫幅 (Hero Section) */}
        <section className="bg-[linear-gradient(to_bottom,_#ffffff_0%,_#ffffff_70%,_#FFF6EE_100%)] pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Badge className="mb-4 bg-[#F68E41] text-white px-4 py-1 text-sm">
              {t.hero.badge}
            </Badge>
            <h1 className="text-2xl md:text-5xl font-bold mb-6 leading-tight text-gray-800">
              {t.hero.title}
              {t.hero.subtitle && (
                <>
                  <br />
                  <span className="text-[#F68E41]">{t.hero.subtitle}</span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
          </div>
        </section>

        {/* 背景 / 成果區塊 */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="grid md:grid-cols-3 gap-12 items-center">
                {/* 背景 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    {t.background_outcome.background_title}
                  </h3>
                  <div className="text-gray-600 leading-relaxed text-sm space-y-4">
                    <p>
                      {t.background_outcome.background_text}
                    </p>
                  </div>
                </div>

                {/* 成果 */}
                <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
                    {t.background_outcome.outcome_title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {t.background_outcome.outcome_text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 問題背景區塊 (Background Section) */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center md:text-left">
                {t.why_rethink.title}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">{t.why_rethink.cards[0].icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">{t.why_rethink.cards[0].title}</h3>
                  {t.why_rethink.cards[0].content}
                </div>
                <div className="bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">{t.why_rethink.cards[1].icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">{t.why_rethink.cards[1].title}</h3>
                  {t.why_rethink.cards[1].content}
                </div>
                <div className="bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">{t.why_rethink.cards[2].icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">{t.why_rethink.cards[2].title}</h3>
                  {t.why_rethink.cards[2].content}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 關鍵發現區塊 (Key Findings) */}
        <div className="py-16 bg-[#FFF6EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-8">{t.key_insights.title}</h2>
              <div className="space-y-10 text-gray-700 text-base leading-relaxed">
                <ol className="space-y-8 list-decimal list-outside ml-5">
                  <li>
                    <p className="font-bold text-gray-900 mb-3">{t.key_insights.points[0].title}</p>
                    {t.key_insights.points[0].text}
                  </li>
                  <li>
                    <p className="font-bold text-gray-900 mb-3">{t.key_insights.points[1].title}</p>
                    {t.key_insights.points[1].text}
                  </li>
                </ol>
              </div>
              <ResearchProcessSection locale={locale} />
            </div>
          </div>
        </div>

        {/* 解決方案策略區塊 (Solution Strategy) */}
        <SolutionStrategySection locale={locale} />

        {/* 結果與後續行動區塊 (Results & Next Actions) */}
        <div className="relative bg-white pt-20 pb-16 -mt-10 z-0">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">{t.scenario_testing.title}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{t.scenario_testing.positive_feedback.title}</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{t.scenario_testing.positive_feedback.list[0]}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{t.scenario_testing.positive_feedback.list[1]}</span>
                    </li>
                  </ul>
                </Card>
                <Card className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{t.scenario_testing.improvement_suggestions.title}</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{t.scenario_testing.improvement_suggestions.list[0]}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{t.scenario_testing.improvement_suggestions.list[1]}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{t.scenario_testing.improvement_suggestions.list[2]}</span>
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="mt-10">
                <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
                  <li>{t.scenario_testing.key_findings.list[0]}</li>
                  <li>{t.scenario_testing.key_findings.list[1]}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 心得與學習區塊 (Learnings Section) */}
        <div className="py-16 bg-[#FFF6EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-8">{t.learnings.title}</h2>
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">{t.learnings.points[0].title}</p>
                  <p className="text-muted-foreground leading-relaxed">{t.learnings.points[0].text}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">{t.learnings.points[1].title}</p>
                  <p className="text-muted-foreground leading-relaxed">{t.learnings.points[1].text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 頁尾區塊 (Footer Section) */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
              <Link href={homeHref} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
              <Button asChild>
                <Link href={`${homeHref}#work`}>View More Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
