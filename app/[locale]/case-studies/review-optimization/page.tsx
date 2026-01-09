import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, MessageSquare, Bot } from "lucide-react"
import Link from "next/link"

import type { Locale } from "@/lib/i18n/config"
import { prefixPathWithLocale } from "@/lib/i18n/routing"

type CaseStudyPageProps = {
  params: Promise<{ locale: Locale }>
}

export default async function FinalCaseStudy({ params }: CaseStudyPageProps) {
  const { locale } = await params
  const isZh = locale === "zh"
  const homeHref = prefixPathWithLocale(locale)

  if (isZh) {
    return (
    <>
      <main className="min-h-screen bg-[#FBF5EC]">
        {/* 頂部橫幅 (Hero Section) */}
        <section className="bg-[linear-gradient(to_bottom,_#ffffff_0%,_#ffffff_55%,_#FBF5EC_100%)] pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Badge className="mb-4 bg-[#F6AD55] text-white px-4 py-1 text-sm">
              產品經理案例研究
            </Badge>
            <h1 className="text-2xl md:text-5xl font-bold mb-0 md:mb-6 leading-tight text-gray-800">
              B2B2C 學習平台
              <br />
              <span className="text-[#F6AD55]">評價流程優化</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              透過數據洞察與流程分析，改善用戶體驗並提升產品銷售轉換率 2.9%
            </p>
          </div>
        </section>

        {/* 關鍵指標區塊 (Key Metrics Section) */}
<div className="bg-[#FBF5EC] py-16">  
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto items-stretch">
      
      <Card className="p-8 text-center border border-[#F6AD55]/20 bg-white rounded-3xl shadow-lg flex-shrink-0 w-full md:w-80 flex flex-col justify-center">
        
        <div>
          <div className="text-xl font-Regular text-gray-800 mb-4 ">+2.9%</div>
          <div className="text-base text-gray-800 font-Regular ">產品轉換率提升</div>
        </div>

      </Card>

      <Card className="p-8 border-0 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl shadow-lg flex-1">
        <div className="flex items-start mb-2">
          <div className="text-3xl text-orange-400 mr-4 font-serif">"</div>
        </div>
        <p className="text-gray-700 leading-relaxed text-lg">
          透過重新定義評價流程，提升評論內容的品質、減少軟體抱怨，有效提升產品轉換率。
        </p>
      </Card>
    </div>
  </div>
</div>

        {/* 問題背景區塊 (Background Section) */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-700 mb-12 text-center md:text-left">
                為什麼想優化評價流程？
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">🏫</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">原始背景</h3>
                  <div className="text-gray-600 leading-relaxed text-sm space-y-2">
                    <p>為了提升某一產品的銷售表現，過去採用多種方式來增加產品評價的分數與數量。</p>
                    <p>當時正考慮新增「用戶評價引導機制」，提升自然評價總數，以增加產品轉換率。</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">😕</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">問題</h3>
                  <div className="text-gray-600 leading-relaxed text-sm space-y-2">
                  <ul className="list-disc list-outside space-y-2 text-gray-600 pl-5">
                    <li>欲提升某特定產品的轉換率。</li>
                    <li>同時間，合作品牌夥伴反映：產品頁面上出現一些情緒化或不合理的評論，影響使用者對品牌的信任。希望平台能支援品牌介入處理，例如回覆評論、隱藏或設定必填文字內容。</li></ul>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">挑戰</h3>
                  <div className="text-gray-600 leading-relaxed text-sm space-y-2">
                    <p>作為 B2B2C 的線上學習平台產品，我需要同時顧及學生的學習體驗、老師的教學需求和品牌方的意見，以及課程銷售成效。</p>
                    <p>在三方利害關係人中取得平衡的同時，也要提前預判其他成本和潛在影響。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 關鍵發現區塊 (Key Findings) */}
        <div className="py-16 bg-[#FBF5EC]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-700 mb-8">🔍 Key Findings</h2>
              <div className="text-gray-600 text-base leading-relaxed mb-10">
                <p>
                  <strong>規劃過程中我發現，過去嘗試過衝高評價分數與數量，但帶來的產品銷售量增加幅度越來越少。</strong> 於是 PM 團隊開始思考：是否有除了原本的方向「請用戶多留評價」之外的處理方式？觀察 Clarity 流量並實際查看產品評價後，我們發現：
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-10">
                <div className="text-gray-600 space-y-3 text-base leading-relaxed">
                  <ol className="space-y-3 list-decimal list-outside ml-5">
                    <li>除了評價的「分數」與「數量」，「評價內容質量」是過去長期忽略的面向。</li>
                    <li>
                      評價分數高 ≠ 滿意度高。雖然產品獲得許多高星評價，但評論中仍夾雜著使用者的困惑或抱怨。例如：
                      <ul className="mt-2 ml-4 space-y-1 list-disc list-outside">
                        <li>用戶因功能誤解導致操作錯誤</li>
                        <li>軟體系統 bug</li>
                        <li>其他情緒性的反饋</li>
                      </ul></li>
                    </ol>
                    <p>➡️ 這些負面評價內容應該要由軟體客服或老師介入處理，而非直接公開於產品頁上。</p>
                </div>
                <div className="flex flex-col items-center gap-8">
                  <img src="/images/Frame 182 (4).png" alt="User feedback cards" className="w-full h-auto object-cover rounded-lg" />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-x-20 gap-y-8 text-center mb-10">
                <div className="flex flex-col items-center" style={{ width: "140px" }}>
                  <div className="text-3xl font-bold text-[#F6AD55]">#1</div>
                  <p className="text-sm text-gray-600 mt-2">評價分數是該產品頁中最常點擊的元素</p>
                </div>
                <div className="flex flex-col items-center" style={{ width: "140px" }}>
                  <div className="text-3xl font-bold text-[#F6AD55]">32%</div>
                  <p className="text-sm text-gray-600 mt-2">高星評價中關於軟體功能抱怨的比例達三成</p>
                </div>
              </div>
              <div className="mt-16 p-10 rounded-2xl bg-white shadow border-0">
                <h3 className="text-xl font-bold mb-3">📍 Problem Definition</h3>
                <p className="leading-relaxed text-gray-700">
                  目前缺乏流程讓適當角色適時發現、回應不同類別的負面評論，造成以下情況：
                </p>
                <ul className="mt-4 list-disc list-outside space-y-3 text-gray-600 ml-5 text-base leading-relaxed">
                  <li>一般產品評價裡混雜軟體功能抱怨，降低使用者的好感度且影響產品銷售</li>
                  <li>情緒性、不合理的評論直接出現在產品頁上，導致品牌與老師方無法即時處理</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 解決方案策略區塊 (Solution Strategy) */}
        <div className="relative bg-gradient-to-b from-[#FBF5EC] to-white pt-20 pb-32">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-700 mb-3">Solution Strategy</h2>
              <p className="text-lg text-gray-600 mb-8">設計三個流程方案，以即時辨識負面評論，並引導適當角色介入處理</p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white p-6 rounded-2xl shadow-sm flex flex-col border-0">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-foreground mb-2">👩‍💻 客服人工手動回覆</h3>
                  </div>
                  <ol className="space-y-3 text-sm text-muted-foreground mb-6 list-decimal list-inside">
                    <li>所有新留言都 trigger slack noti</li>
                    <li>
                      客服人員確認是否需要回覆，且標記屬於何種類型
                      <ol className="mt-2 ml-4 space-y-1 text-xs list-[lower-alpha] list-inside">
                        <li>軟體功能 → 直接回覆</li>
                        <li>課程品質負評 → 轉交請老師回覆</li>
                      </ol>
                    </li>
                  </ol>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">內部人員處理，最能準確分流</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">產品增多時，客服可能無法及時處理</span>
                    </div>
                  </div>
                </Card>
                <Card className="bg-white p-6 rounded-2xl shadow-sm flex flex-col border-0">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-foreground mb-2">💬 兩階段評論流程</h3>
                  </div>
                  <ol className="space-y-3 text-sm text-muted-foreground mb-6 list-decimal list-inside">
                    <li>用戶先幫忙分類意圖，減少人工判斷成本</li>
                    <li>若用戶選擇不滿意，詢問原因類型</li>
                    <li>
                      根據分類結果處理
                      <ol className="mt-2 ml-4 space-y-1 text-xs list-[lower-alpha] list-inside">
                        <li>軟體功能 → 引導至客服系統回報，不顯示於商城評論區</li>
                        <li>課程品質負評 → 直接顯示於商城，同時通知老師回應</li>
                      </ol>
                    </li>
                  </ol>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">由用戶分類意圖，減輕客服壓力</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">軟體相關負評不再顯示於商城</span>
                    </div>
                  </div>
                </Card>
                <Card className="bg-white p-6 rounded-2xl shadow-sm flex flex-col border-0">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Bot className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-foreground mb-2">🤖 AI 評論分析</h3>
                  </div>
                  <ol className="space-y-3 text-sm text-muted-foreground mb-6 list-decimal list-inside">
                    <li>收到評價後，後端串接 API，請 ChatGPT 協助分類留言意圖</li>
                    <li>
                      根據 AI 分類結果處理
                      <ol className="mt-2 ml-4 space-y-1 text-xs list-[lower-alpha] list-inside">
                        <li>軟體功能 → 通知客服回覆（AI 自動分類準確率約 85%）</li>
                        <li>課程品質負評 → 通知老師回應，保持評論可見性</li>
                      </ol>
                    </li>
                  </ol>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">持續性成本：估算一月約需 700 台幣</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">分類準確率受限於 AI 表現</span>
                    </div>
                  </div>
                </Card>
              </div>
              <p className="mt-8 text-base text-gray-600 leading-relaxed">
                綜合考量營運成本、可擴展性、使用者體驗與技術複雜度後，最終採用第二套流程。
              </p>
            </div>
          </div>
        </div>

        {/* 結果與後續行動區塊 (Results & Next Actions) */}
        <div className="relative bg-white pt-20 pb-16 -mt-24 z-0">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-700 mb-8">Results & Next Actions</h2>
              <div className="grid md:grid-cols-2 gap-16 mb-12 py-12">
                <div className="text-center">
                  <div className="text-[#F6AD55] mb-4 text-2xl font-semibold">-57%</div>
                  <div className="text-[#F6AD55] mb-2 font-semibold">Leading Metric</div>
                  <div className="text-gray-600 mb-1">軟體相關負面評論的下降比例</div>
                  <div className="text-sm text-gray-500 font-light">（上線前三個月/後三個月後比較）</div>
                </div>
                <div className="text-center">
                  <div className="text-[#F6AD55] mb-4 text-2xl font-semibold">+2.9%</div>
                  <div className="text-[#F6AD55] mb-2 font-semibold">Goal Metric</div>
                  <div className="text-gray-600 mb-1">該產品轉換率提升比例</div>
                  <div className="text-gray-500 font-light text-xs">（上線一個月前/四個月後比較）</div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">💡 功能迭代：更準確落實評論分流</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    我發現部分「功能抱怨」仍未被成功分流。推測主因是實作時，工程端將「不滿意原因」的選項設置了預設值，
                    導致許多使用者因慣性或未注意而直接送出。後續可移除預設選項，同時 A/B 測試不同引導文案的效果。
                    亦可根據後續效益，評估是否對舊評論資料做 Backfill 處理。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">💭 除了評論之外的方式</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    針對評論區的「數量」、「分數」、「質量」完成優化後，仍然對轉換率沒有顯著增長，
                    或許可以考慮從其他地方著手。例如，原本發現評論分頁是該產品頁點擊最多的元素，
                    但觀察其他產品，用戶最在乎的通常是「目錄與內容」。可考慮在該產品增加此分頁。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 心得與學習區塊 (Learnings Section) */}
        <div className="py-16 bg-[#FBF5EC]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-700 mb-8">Learnings</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                這是我在該團隊前期的任務，它本身並不複雜。但過程中的意外發現，讓我學會了規劃成熟複雜產品的思維。
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">➊ 成熟產品裡，往往牽一髮而動全身</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    功能快上線時，我在一次不經意的討論中發現：原來在 App
                    裡，使用者可以填寫「產品評價」的入口不只一個，共有四個。每個都需要根據各自的情境討論 UI/UX 細節。
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    除了程式技術外，產品方面也要提前全盤規劃。尤其作為「平台」型的產品，同個功能有許多利害關係人，甚至影響用戶在不同情境的體驗。所以後來我會在改功能之前提醒自己盤點：
                  </p>
                  <ul className="space-y-1 text-muted-foreground ml-4 mb-4 list-disc list-outside">
                    <li>原本的產品為何如此規劃？是想滿足哪些情境、用戶痛點？目前有沒有使用者發展出其他用法？</li>
                    <li>現在做了這個改動，會影響到哪些功能、flow、畫面？</li>
                    <li>這個改動能適用於所有情境嗎？</li>
                    <li>會不會在未來需要擴充時帶來限制？</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">➋ 盡量收集完整的資訊</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    雖然平常的文件整理很重要，但產品經理也要自己主動挖資訊、問問題，很多時候資訊不會被整理好來找你，而是散落在組織的各個角落。不管是過去的決策脈絡、失敗的嘗試、還是可以用的元件或套件，都能讓產品經理做出更周全的判斷。
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    另外也要記得凡事都要預留一點彈性的空間和時間，才不會發生事情後要緊急修補。
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

  return (
    <>
      <main className="min-h-screen bg-[#FBF5EC]">
        {/* Hero Section */}
        <section className="bg-[linear-gradient(to_bottom,_#ffffff_0%,_#ffffff_55%,_#FBF5EC_100%)] pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Badge className="mb-4 bg-[#F6AD55] text-white px-4 py-1 text-sm">
              Product Management Case Study
            </Badge>
            <h1 className="text-2xl md:text-5xl font-bold mb-0 md:mb-6 leading-tight text-gray-800">
              B2B2C Learning Platform
              <br />
              <span className="text-[#F6AD55]">Review Workflow Optimization</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Achieved a <strong>+2.9% conversion uplift</strong> by redesigning the review workflow based on Clarity and GA4 observation.
            </p>
          </div>
        </section>

        {/* Key Metrics Section */}
        <div className="bg-[#FBF5EC] py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto items-stretch">
              <Card className="p-8 text-center border border-[#F6AD55]/20 bg-white rounded-3xl shadow-lg flex-shrink-0 w-full md:w-80 flex flex-col justify-center">
                <div>
                  <div className="text-xl font-Regular text-gray-800 mb-4">+2.9%</div>
                  <div className="text-base text-gray-800 font-Regular">Product conversion rate increase</div>
                </div>
              </Card>

              <Card className="p-8 border-0 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl shadow-lg flex-1">
                <div className="flex items-start mb-2">
                  <div className="text-3xl text-orange-400 mr-4 font-serif">"</div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  By redefining the review process, we improved review quality and reduced reviews about software complaints, which effectively increased product conversion rate. The project directly contributed to one of our top quarterly OKRs focused on improving purchase intent.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Context & Motivation */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-700 mb-12 text-center md:text-left">Context & Motivation</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">🏫</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">Background</h3>
                  <div className="text-gray-600 leading-relaxed text-sm space-y-2">
                    <p>To improve sales performance of a specific product, various methods were previously used to increase the number and rating of product reviews.</p>
                    <p>At that time, we were considering adding a “user review prompt mechanism” to increase organic review volume and boost product conversion rate.</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">🌟</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">Initial Goal</h3>
                  <div className="text-gray-600 leading-relaxed text-sm space-y-2">
                    <ul className="list-disc list-outside space-y-2 text-gray-600 pl-5">
                      <li>Improve conversion rate for a specific product to meet OKR targets.</li>
                      <li>Address brand partners’ concerns that emotional or irrelevant reviews on product pages were affecting user trust in the brand, and support interventions like replying, hiding, or requiring text content.</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">Key Challenge</h3>
                  <div className="text-gray-600 leading-relaxed text-sm space-y-2">
                    <p>As a B2B2C online learning platform Product Manager, I needed to balance student learning experience, teacher needs, brand partner opinions, and course sales performance.</p>
                    <p>While balancing three stakeholder groups, I also needed to anticipate other costs and potential impacts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="py-16 bg-[#FBF5EC]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-700 mb-8">🔍 Key Insights</h2>
              <div className="text-gray-600 text-base leading-relaxed mb-10">
                <p>
                  <strong>To raise the specific product’s conversion, our initial plan focused on increasing review count and ratings.</strong> During planning, I found that past attempts to boost review scores and volume brought diminishing returns in product sales growth. The PM team started thinking: are there other approaches beyond “getting users to leave more reviews”? After reviewing actual product feedback, we discovered:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-10">
                <div className="text-gray-600 space-y-3 text-base leading-relaxed">
                  <ol className="space-y-3 list-decimal list-outside ml-5">
                    <li>Beyond review “scores” and “quantity,” <strong>review content quality</strong> was a long-overlooked dimension.</li>
                    <li>
                      High scores ≠ high satisfaction. Despite many high-star reviews, user complaints and confusion were still present, including:
                      <ul className="mt-2 ml-4 space-y-1 list-disc list-outside">
                        <li>Login issues or operational confusion</li>
                        <li>Software bugs</li>
                        <li>Other emotional feedback</li>
                      </ul>
                    </li>
                  </ol>
                  <p>➡️ These were <strong>not problems with the course itself</strong>, but they were displayed as part of the product evaluation. These reviews should be handled by software customer service or teachers, not shown directly on product pages.</p>
                </div>
                <div className="flex flex-col items-center gap-8">
                  <img src="/images/Frame 182 (4).png" alt="User feedback cards" className="w-full h-auto object-cover rounded-lg" />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-x-32 gap-y-8 text-center mb-10">
                <div className="flex flex-col items-center" style={{ width: "280px" }}>
                  <div className="text-3xl font-bold text-[#F6AD55]">#1</div>
                  <p className="text-sm text-gray-600 mt-2">Review scores were the most-clicked element on this product page</p>
                </div>
                <div className="flex flex-col items-center" style={{ width: "280px" }}>
                  <div className="text-3xl font-bold text-[#F6AD55]">32%</div>
                  <p className="text-sm text-gray-600 mt-2">Proportion of high-star reviews containing software complaints</p>
                </div>
              </div>
              <div className="mt-16 p-10 rounded-2xl bg-white shadow border-0">
                <h3 className="text-xl font-bold mb-3">📍 Problem Statement</h3>
                <p className="leading-relaxed text-gray-700">Currently we lack a process for appropriate roles to discover and respond to different types of negative reviews in a timely manner, which leads to:</p>
                <ul className="mt-4 list-disc list-outside space-y-3 text-gray-600 ml-5 text-base leading-relaxed">
                  <li>General product reviews mixed with software complaints, reducing user favorability and affecting product sales</li>
                  <li>Emotional, unreasonable reviews appearing directly on product pages, preventing brands and teachers from responding promptly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Strategy */}
        <div className="relative bg-gradient-to-b from-[#FBF5EC] to-white pt-20 pb-32">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-700 mb-3">Solution Strategy</h2>
              <p className="text-lg text-gray-600 mb-8">Three process solutions designed to identify negative reviews in real-time and guide appropriate role intervention.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white p-6 rounded-2xl shadow-sm flex flex-col border-0">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-foreground mb-2">👩‍💻 Manual Customer Service Response</h3>
                  </div>
                  <ol className="space-y-3 text-sm text-muted-foreground mb-6 list-decimal list-inside">
                    <li>All new comments trigger Slack notifications.</li>
                    <li>
                      Customer service confirms if a response is needed and tags the type:
                      <ol className="mt-2 ml-4 space-y-1 text-xs list-[lower-alpha] list-inside">
                        <li>Software issues → Direct response</li>
                        <li>Course quality complaints → Forward to teacher</li>
                      </ol>
                    </li>
                  </ol>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Internal staff handling ensures accurate triage.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">May not scale as products increase.</span>
                    </div>
                  </div>
                </Card>
                <Card className="bg-white p-6 rounded-2xl shadow-sm flex flex-col border-0">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-foreground mb-2">💬 Two-Stage Review Process</h3>
                  </div>
                  <ol className="space-y-3 text-sm text-muted-foreground mb-6 list-decimal list-inside">
                    <li>Users help categorize intent first, reducing manual judgment cost.</li>
                    <li>If a user selects “unsatisfied”, ask for the type of reason.</li>
                    <li>
                      Handle based on classification:
                      <ol className="mt-2 ml-4 space-y-1 text-xs list-[lower-alpha] list-inside">
                        <li>Software issues → Direct to customer service system; not displayed in marketplace reviews.</li>
                        <li>Course quality complaints → Display in marketplace and notify teacher to respond.</li>
                      </ol>
                    </li>
                  </ol>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">User categorization reduces CS workload.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Software complaints are no longer shown in the marketplace.</span>
                    </div>
                  </div>
                </Card>
                <Card className="bg-white p-6 rounded-2xl shadow-sm flex flex-col border-0">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <Bot className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-medium text-foreground mb-2">🤖 AI Review Analysis</h3>
                  </div>
                  <ol className="space-y-3 text-sm text-muted-foreground mb-6 list-decimal list-inside">
                    <li>After receiving a review, the backend calls an API and asks ChatGPT to categorize review intent.</li>
                    <li>
                      Handle based on AI classification:
                      <ol className="mt-2 ml-4 space-y-1 text-xs list-[lower-alpha] list-inside">
                        <li>Software issues → Notify customer service (AI accuracy ~85%).</li>
                        <li>Course quality complaints → Notify teacher and keep the review visible.</li>
                      </ol>
                    </li>
                  </ol>
                  <div className="space-y-2 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Automated and scalable; estimated ongoing cost around 700 TWD/month.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Classification accuracy is limited by AI performance.</span>
                    </div>
                  </div>
                </Card>
              </div>
              <p className="mt-8 text-base text-gray-600 leading-relaxed">
                We compared the three solutions based on operational cost, scalability, user effort, and technical complexity. The manual approach required high CS involvement, while the AI-based option introduced additional cost and accuracy limitations. We ultimately chose the two-stage review process.
              </p>
            </div>
          </div>
        </div>

        {/* Impact & Next Steps */}
        <div className="relative bg-white pt-20 pb-16 -mt-24 z-0">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-700 mb-8">Impact & Next Steps</h2>
              <div className="grid md:grid-cols-2 gap-16 mb-12 py-12">
                <div className="text-center">
                  <div className="text-[#F6AD55] mb-4 text-2xl font-semibold">-57%</div>
                  <div className="text-[#F6AD55] mb-2 font-semibold">Leading Metric</div>
                  <div className="text-gray-600 mb-1">Software-related negative reviews reduction</div>
                  <div className="text-sm text-gray-500 font-light">(3 months before vs. 3 months after launch)</div>
                </div>
                <div className="text-center">
                  <div className="text-[#F6AD55] mb-4 text-2xl font-semibold">+2.9%</div>
                  <div className="text-[#F6AD55] mb-2 font-semibold">Goal Metric</div>
                  <div className="text-gray-600 mb-1">Product conversion rate increase</div>
                  <div className="text-gray-500 font-light text-xs">(1 month before vs. 4 months after launch)</div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">💡 Feature Iteration: More Accurate Review Triage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I discovered some “functionality complaints” were still not successfully triaged. The main reason was that during implementation, engineering set a default value for the “reason for dissatisfaction” option, causing many users to submit without noticing due to habit. Next steps: remove the default option and A/B test different prompt copy effectiveness. We can also evaluate whether to backfill old review data based on subsequent results.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">💭 Beyond Reviews</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    After optimizing review “quantity”, “scores”, and “quality”, if conversion rate still doesn't show significant growth, perhaps we should consider other approaches. For example, we found the review tab was the most-clicked element on this product page, but for other products, users typically care most about “content and syllabus”. We could consider adding this tab to the product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learnings */}
        <div className="py-16 bg-[#FBF5EC]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-gray-700 mb-8">Learnings</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This was one of my early tasks on the team—not complex in itself, but the unexpected discoveries taught me how to think about mature, complex products.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">➊ In mature products, everything is connected</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Just before launch, I discovered in a casual discussion that there were actually <strong>four different entry points</strong> in the app where users could leave product reviews, not just one. Each required discussion of UI/UX details based on its specific context.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Beyond technical considerations, product planning must be comprehensive. Especially for “platform” products, the same feature affects many stakeholders and even impacts user experience across different contexts. So now before changing features, I remind myself to inventory:
                  </p>
                  <ul className="space-y-1 text-muted-foreground ml-4 mb-4 list-disc list-outside">
                    <li>Why was the product designed this way originally? What scenarios and user pain points was it trying to address? Have users developed other use cases?</li>
                    <li>What features, flows, and screens will this change affect?</li>
                    <li>Can this change apply to all scenarios?</li>
                    <li>Will it create limitations for future expansion needs?</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-4">➋ Collect complete information as much as possible</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    While regular documentation is important, Product Managers must also proactively dig for information and ask questions. Often information won't come to you neatly organized—it's scattered across different corners of the organization. Whether it's past decision-making context, failed attempts, or available components and packages, all can help Product Managers make more thorough judgments.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Also remember to always leave room for flexibility and time buffers, so you're not scrambling to fix things after they happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
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
