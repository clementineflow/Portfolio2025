import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResearchProcessSection } from "@/components/research-process"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import type { Locale } from "@/lib/i18n/config"
import { prefixPathWithLocale } from "@/lib/i18n/routing"

type CaseStudyPageProps =
  | { params: { locale: Locale } }
  | { params: Promise<{ locale: Locale }> }

export default async function LoveDistanceCaseStudy(props: CaseStudyPageProps) {
  const resolvedParams = await props.params
  const { locale } = resolvedParams
  const homeHref = prefixPathWithLocale(locale)

  return (
    <>
      <main className="min-h-screen bg-[#FFF6EE]">
        {/* 頂部橫幅 (Hero Section) */}
        <section className="bg-[linear-gradient(to_bottom,_#ffffff_0%,_#ffffff_70%,_#FFF6EE_100%)] pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Badge className="mb-4 bg-[#F68E41] text-white px-4 py-1 text-sm">
              使用者經驗研究
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-800">
              LOVE DISTANCE
              <br />
              <span className="text-[#F68E41]">遠距情侶的情感設計實驗</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              如何透過設計，彌補地理距離帶來的情感斷層
            </p>
          </div>
        </section>

        {/* 背景 / 成果區塊 */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="grid md:grid-cols-3 gap-12 items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">背景</h3>
                  <div className="text-gray-600 leading-relaxed text-sm space-y-4">
                    <p className="text-justify">
                      疫情封鎖與社交隔離等外部壓力改變了情侶的日常連結方式，使伴侶關係品質因情感支持減少、共同經驗缺失而惡化。 我們發現這不只是疫情期間的特殊問題，一般遠距離情侶與疫情下被迫分隔的情侶，面臨著類似的困境。本專案透過系統性使用者研究，探索痛點並設計對應的解決方案。
                    </p>
                  </div>
                </div>
                <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">成果</h3>
                  <p className="text-gray-600 leading-relaxed text-sm text-justify">
                    透過系統性使用者研究（深度訪談、同理心地圖、Persona、使用者旅程地圖），我們定義核心痛點為「缺乏低成本維繫安全感的方式」，並針對特定 Persona 設計出低侵入感的三個主要產品功能。
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
                為什麼需要重新思考遠距戀愛的互動方式？
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">🏫</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">背景</h3>
                  <div className="text-gray-600 leading-relaxed text-sm space-y-3">
                    <p>疫情改變了情侶的相處模式</p>
                    <ul className="list-disc list-outside pl-5 space-y-1">
                      <li>隔離政策導致見面頻率大幅下降</li>
                      <li>情緒與感情關係品質下降</li>
                      <li>現有情侶 App 因新鮮感消退而被其他軟體替代</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">😕</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">機會點</h3>
                  <ul className="list-disc list-outside space-y-2 text-gray-600 pl-5 text-sm">
                    <li>根據文獻研究，科技產品的使用可調節、減緩隔離對關係的負面影響</li>
                    <li>在台灣約 3-5 成大學生有遠距戀愛經驗，市場規模廣泛</li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">研究目標</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    透過使用者研究，了解遠距情侶的核心痛點，並設計能真正解決問題的產品功能。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 關鍵發現區塊 (Key Findings) */}
        <div className="py-16 bg-[#FFF6EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-8">🔍 Key Insights</h2>
              <div className="space-y-10 text-gray-700 text-base leading-relaxed">
                <ol className="space-y-8 list-decimal list-outside ml-5">
                  <li>
                    <p className="font-bold text-gray-900 mb-3">存在感不足是安全感下降的主因</p>
                    <p>
                      當對方在日常生活的 <strong>存在感太低</strong> 時，容易產生不安全感。安全感不一定需要「時時刻刻黏在一起」，而是需要{" "}
                      <strong>在日常中感知到對方的存在</strong>。
                    </p>
                  </li>
                  <li>
                    <p className="font-bold text-gray-900 mb-3">需要降低日常維繫的認知負擔</p>
                    <div className="space-y-3">
                      <p>
                        訪談發現許多情侶依賴大量日常維繫來維持安全感，而許多情侶軟體也順應相似的產品設計邏輯，導致使用者負擔增加。然而在忙碌或有時差的情況下，這種模式難以維持。
                      </p>
                      <p>
                        可採用 <strong>低心智成本的互動方式</strong>，讓使用者即使在有限時間內，也能保持關聯。
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <ResearchProcessSection />
            </div>
          </div>
        </div>

        {/* 解決方案策略區塊 (Solution Strategy) */}
        <div className="relative bg-[#FFF6EE] pt-20 pb-32">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">💡 Solution Strategy</h2>
              <p className="text-lg text-gray-600 mb-10">
                基於研究發現，我定義了三大設計策略，並轉化為核心功能：
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white p-6 rounded-2xl border border-[#F68E41]/20 shadow-sm flex flex-col">
                  <div className="mb-4">
                    <p className="text-sm text-[#F68E41] font-normal tracking-wide mb-1">策略 1</p>
                    <h3 className="text-xl font-semibold text-gray-800">被動存在感建立</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    使用者旅程地圖顯示「對方存在感太低」是安全感下降的主因。因此設計桌面 Widget，讓使用者無需刻意操作，也能在日常中感受到對方的存在。
                  </p>
                  <div className="bg-[#FFF8F1] p-5 rounded-xl space-y-3">
                    <p className="text-sm font-semibold text-gray-900">功能 1: 桌面 Widget</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>📸 顯示兩人照片、對方所在地天氣、時間差</li>
                      <li>💡 電燈互動：點一下讓對方的 Widget 亮燈（類似 "thinking of you"）</li>
                    </ul>
                  </div>
                </Card>

                <Card className="bg-white p-6 rounded-2xl border border-[#F68E41]/20 shadow-sm flex flex-col">
                  <div className="mb-4">
                    <p className="text-sm text-[#F68E41] font-normal tracking-wide mb-1">策略 2</p>
                    <h3 className="text-xl font-semibold text-gray-800">非同步的微互動</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    忙碌型使用者一天聯絡次數少（&lt;5次），但仍需要感受「被記得」。透過非同步的狀態分享，讓使用者不需要立即對話，也能持續感受到連結。
                  </p>
                  <div className="bg-[#FFF8F1] p-5 rounded-xl space-y-3">
                    <p className="text-sm font-semibold text-gray-900">功能 2: 狀態分享牆</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>📍 快速分享當下狀態（「在開會」「吃午餐」「想你了」）</li>
                      <li>📷 照片牆：隨手拍的日常照片自動同步到對方的 Widget</li>
                      <li>⏰ 非即時壓力：不需要立即回應，但能看到對方的生活軌跡</li>
                    </ul>
                  </div>
                </Card>

                <Card className="bg-white p-6 rounded-2xl border border-[#F68E41]/20 shadow-sm flex flex-col">
                  <div className="mb-4">
                    <p className="text-sm text-[#F68E41] font-normal tracking-wide mb-1">策略 3</p>
                    <h3 className="text-xl font-semibold text-gray-800">儀式感建立</h3>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    訪談發現「安全感要靠日常維繫」，但忙碌時很難記得。透過固定的小儀式建立連結點，降低維繫感情的認知負擔。
                  </p>
                  <div className="bg-[#FFF8F1] p-5 rounded-xl space-y-3">
                    <p className="text-sm font-semibold text-gray-900">功能 3: 每日小儀式</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>🌙 睡前問候：「今天辛苦了，說聲晚安吧」</li>
                      <li>☀️ 早安訊息：推送提醒「記得跟他說早安」</li>
                      <li>🎁 紀念日提醒：「下週是你們在一起 3 個月」</li>
                      <li>⚙️ 可自訂：選擇想要的儀式類型與時間</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* 結果與後續行動區塊 (Results & Next Actions) */}
        <div className="relative bg-white pt-20 pb-16 -mt-24 z-0">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-800">Scenario Testing & Iteration</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">正向回饋</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>很喜歡桌面 Widget 的互動設計，而且對日常生活的侵入感很低，很方便</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Line Bot 可轉移話題來緩解負面情緒，覺得不錯</span>
                    </li>
                  </ul>
                </Card>
                <Card className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">改善建議</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>不太理解桌面 Widget 中的電燈用處為何</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>被通知到對方已許久沒回訊息會緊張，想關掉提示</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Line Bot 有種被外人干涉的感覺</span>
                    </li>
                  </ul>
                </Card>
              </div>
              <div className="mt-10">
                <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside">
                  <li>使用者之間回訊息的習慣差異大，功能需能做彈性調整</li>
                  <li>對於某些第一次接觸的新功能接受度較低，可以在使用者習慣 app 後再新增功能</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 心得與學習區塊 (Learnings Section) */}
        <div className="py-16 bg-[#FFF6EE]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-800 mb-8">Takeaways & Learnings</h2>
              <div className="space-y-8">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">忽略了「配對組合」</p>
                  <p className="text-muted-foreground leading-relaxed">
                    我們在收集回饋時順著 Persona 的思考結果，只以忙碌的人為測試對象，但忽略了情侶 App 應該會有兩個使用者，雙方的生活型態不一定相同。此類雙邊使用者產品的設計，要考慮「使用者組合」而非單一使用者。之後思考時要處理更細緻。
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">研究方法的靈活運用比完整流程更重要</p>
                  <p className="text-muted-foreground leading-relaxed">
                    這次經驗讓我體會到，UI/UX 的設計流程只是參考的依據。比起完整的研究流程，更重要的是定義好「需要研究的問題」之後，根據各種研究方法的適用背景與使用限制，靈活使用研究工具。不一定需要追求完整全面的研究方法。
                  </p>
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
