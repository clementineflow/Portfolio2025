import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import type { Locale } from "@/lib/i18n/config"
import { prefixPathWithLocale } from "@/lib/i18n/routing"

type CaseStudyPageProps =
  | { params: { locale: Locale } }
  | { params: Promise<{ locale: Locale }> }

export default async function AIAdManagementCaseStudy(props: CaseStudyPageProps) {
  const resolvedParams = await props.params
  const { locale } = resolvedParams
  const isZh = locale === "zh"
  const homeHref = prefixPathWithLocale(locale)

  if (isZh) {
    return (
      <>
        <main className="min-h-screen bg-[#ECF0FF]">
          {/* Hero Section */}
          <section className="bg-[linear-gradient(to_bottom,_#ffffff_0%,_#ffffff_70%,_#ECF0FF_100%)] pt-16 pb-12 md:pt-24 md:pb-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700 px-4 py-1 text-sm">產品經理實習專案</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-800">
                AI 廣告管理產品
                <br />
                <span className="text-blue-600">提升內部系統的使用效率</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                改善 UI/UX，讓內部行銷人員更快、更準確地完成廣告投放設定
              </p>
            </div>
          </section>

        {/* Problem Background Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="grid md:grid-cols-3 gap-12 items-center">
                {/* 背景區塊 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">背景</h3>
                  <div className="text-gray-600 leading-relaxed text-sm space-y-4">
                    <p className="text-justify">
                      在一間 AI SaaS 公司擔任產品經理實習生期間，我主要參與的產品是透過 AI 讓行銷 Account Manager 能快速幫忙客戶進行行銷動作。
                    </p>
                    <p className="text-justify">
                      我參與使用者的需求會議，評估使用者的反饋，根據對產品的重要性提出 UI/UX 的優化方案。
                    </p>
                  </div>
                </div>
                {/* 目標區塊 */}
                <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">目標與成果</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    業務需要導入新資料（客戶的 GA4 Account），但產品原本的彈窗在新增資料後會顯得過長。我參考設計規範，設計出新版介面，優化使用流程與效率，並和工程師討論、撰寫產品規格書。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* Research & Key Insights */}
          <div className="py-16 bg-[#ECF0FF]">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-x-12 items-start">
                  <div className="md:col-span-3">
                    <h3 className="mb-2 text-lg font-normal text-muted-foreground">Problem</h3>
                    <h2 className="text-3xl text-foreground mb-8 font-extrabold">既有彈窗設計難以因應新的資料需求</h2>
                    <div className="text-gray-600 space-y-4 text-base leading-relaxed">
                      <p>
                        當業務團隊需要新增客戶資料時，會使用一個彈出式視窗（Pop-up）進行操作。然而，隨著資料欄位不斷增加，這個彈窗變得越來越長，使用者反應難以查找想要的資訊並操作。
                      </p>
                      <p>
                        <strong>目標：</strong>
                        <br />
                        新增新欄位資料，同時讓資訊排列不顯得冗長，維持產品系統的易用性
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-2 mt-8 md:mt-16">
                    <div className="w-full h-64 bg-gray-200/50 rounded-lg flex items-center justify-center">
                      <p className="text-gray-400">Image Placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Strategy */}
          <div className="relative bg-gradient-to-b from-[#ECF0FF] to-white pt-20 pb-32">
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Solution Strategy</h2>
                <div className="space-y-6">
                  <Card className="bg-white p-8 rounded-2xl shadow-sm border-0">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">⚡</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3">優化現有彈窗</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          沿用產品原本的彈窗形式，改善彈窗內顯示的資訊架構，例如加上新欄位分組、Anchors 或者分頁設計。這個方法能立刻縮短彈窗的視覺長度，讓使用者可以快速切換不同資訊區塊。
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-500">
                            如果使用分頁設計，需重新確認前端編輯、儲存、錯誤處理時的流程與邏輯判斷
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white p-8 rounded-2xl shadow-sm border-0">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl">✨</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3">建立獨立管理頁面</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          根據設計規範，新頁面比起彈窗較適合使用流程，因爲此處會牽涉更多動作，例如編輯、下載，獨立的新頁面較能容量更多資訊和流程。
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-500">
                            改動較大，但能一次處理優化該頁面同時存在的其他問題。
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Learnings Section */}
          <div className="py-16 bg-[#ECF0FF]">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-medium text-foreground mb-8">Takeaways & Learnings</h2>
                <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-12">
                  <div className="h-64 md:h-72 flex items-center justify-center md:justify-end md:w-56 md:flex-none">
                    <img
                      src="/images/Frame 184.png"
                      alt="AI 廣告管理系統最終介面示意"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="space-y-6 mt-10 md:mt-0 md:max-w-[600px] md:flex-1">
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>忽略了「配對組合」</strong>
                      <br />
                      我們在收集回饋時順著 Persona 的思考結果，只以忙碌的人為測試對象，但忽略了情侶 App 應該會有兩個使用者，雙方的生活型態不一定相同。此類雙邊使用者產品的設計，要考慮「使用者組合」而非單一使用者。之後思考時要處理更細緻。
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>研究方法的靈活運用比完整流程更重要</strong>
                      <br />
                      這次經驗讓我體會到，UI/UX 的設計流程只是參考的依據。比起完整的研究流程，更重要的是定義好「需要研究的問題」之後，根據各種研究方法的適用背景與使用限制，靈活使用研究工具。不一定需要追求完整全面的研究方法。
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

  return (
    <>
      <main className="min-h-screen bg-[#ECF0FF]">
        {/* Hero Section */}
        <section className="bg-[linear-gradient(to_bottom,_#ffffff_0%,_#ffffff_70%,_#ECF0FF_100%)] pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700 px-4 py-1 text-sm">PM Internship Project</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-800">
              Improving Usability and Efficiency of
              <br />
              <span className="text-blue-600">Internal AI Ad Management System</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Improved UI/UX to help internal marketing staff complete ad placement setup faster and more accurately
            </p>
          </div>
        </section>

        {/* Problem Background Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="grid md:grid-cols-3 gap-12 items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">Background</h3>
                  <div className="text-gray-600 leading-relaxed text-sm space-y-4">
                    <p>
                      During my Product Manager internship at an MarTech AI SaaS company, I primarily worked on a product that uses AI to help marketing Account Managers quickly execute marketing actions for clients.
                    </p>
                    <p>
                      I participated in user requirement meetings, evaluated user feedback, and proposed UI/UX optimization solutions based on product importance.
                    </p>
                  </div>
                </div>
                <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">Goal & Outcome</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    The sales team needed to import new data (client's GA4 Account), but the product's original popup would become too long after adding new data. I referenced design specifications to design a new interface, optimizing workflow and efficiency, and discussed with engineers to write product specifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research & Key Insights */}
        <div className="py-16 bg-[#ECF0FF]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-x-12 items-start">
                <div className="md:col-span-3">
                  <h3 className="mb-2 text-lg font-normal text-muted-foreground">Problem</h3>
                  <h2 className="text-3xl text-foreground mb-8 font-extrabold">Existing popup design couldn't accommodate new data requirements</h2>
                  <div className="text-gray-600 space-y-4 text-base leading-relaxed">
                    <p>
                      When the sales team needs to add client data, they use a pop-up window. However, as data fields kept increasing, this popup became longer and longer. Users reported difficulty finding desired information and operating.
                    </p>
                    <p>
                      <strong>Goal:</strong>
                      <br />
                      Add new field data while keeping information arrangement from appearing lengthy, maintaining product system usability
                    </p>
                  </div>
                </div>
                <div className="md:col-span-2 mt-8 md:mt-16">
                  <div className="w-full h-64 bg-gray-200/50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-400">Image Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Strategy */}
        <div className="relative bg-gradient-to-b from-[#ECF0FF] to-white pt-20 pb-32">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Solution Exploration</h2>
              <div className="space-y-6">
                <Card className="bg-white p-8 rounded-2xl shadow-sm border-0">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">Optimize Existing Popup</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Continue using product's original popup format, improve information architecture displayed within popup, such as adding new field grouping, anchors, or tab design. This method can immediately shorten popup's visual length, allowing users to quickly switch between different information sections.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-500">
                          If using tab design, need to reconfirm frontend editing, saving, and error handling flows and logic judgments.
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white p-8 rounded-2xl shadow-sm border-0">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">✨</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">Create Independent Management Page</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        According to design specifications, a new page is more suitable than a popup for workflows because this involves more actions like editing and downloading. An independent page can accommodate more information and processes.
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-500">
                          Bigger change, but can handle and optimize other issues existing on the page simultaneously.
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Learnings Section */}
        <div className="py-16 bg-[#ECF0FF]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-medium text-foreground mb-8">Takeaways</h2>
              <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-12">
                <div className="h-64 md:h-72 flex items-center justify-center md:justify-end md:w-56 md:flex-none">
                  <img
                    src="/images/Frame 184.png"
                    alt="AI 廣告管理系統最終介面示意"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="space-y-6 mt-10 md:mt-0 md:max-w-[600px] md:flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Overlooked "Pairing Combinations"</strong>
                    <br />
                    When collecting feedback, we followed persona thinking and only tested with busy people, but overlooked that couple apps should have two users whose lifestyles may not be the same. Design of such two-sided user products must consider "user combinations," not individual users. Need to think more carefully in the future.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Flexible Use of Research Methods More Important Than Complete Process</strong>
                    <br />
                    This experience made me realize UI/UX design processes are just reference frameworks. More important than complete research processes is defining "the problem that needs research," then flexibly using research tools based on each method's applicable background and limitations. Don't necessarily need to pursue comprehensive research methods.
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
