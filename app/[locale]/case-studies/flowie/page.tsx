import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import type { Locale } from "@/lib/i18n/config"
import { prefixPathWithLocale } from "@/lib/i18n/routing"

type CaseStudyPageProps = {
    params: Promise<{ locale: Locale }>
}

export default async function FlowieCaseStudy({ params }: CaseStudyPageProps) {
    const { locale } = await params
    const isZh = locale === "zh"
    const homeHref = prefixPathWithLocale(locale)

    if (isZh) {
        return (
            <>
                <main className="min-h-screen bg-[#FFF8E7]">
                    {/* Hero Section */}
                    <section className="bg-[linear-gradient(to_bottom,_#ffffff_0%,_#ffffff_60%,_#FFF8E7_100%)] pt-16 pb-12 md:pt-24 md:pb-20">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <Badge className="mb-4 text-white px-4 py-1 text-sm" style={{ backgroundColor: "var(--color-orange-400)" }}>Playground</Badge>
                            <h1 className="text-2xl md:text-5xl font-bold mb-0 md:mb-6 leading-tight text-gray-800">
                                flowie
                                <br />
                                <span style={{ color: "var(--color-orange-400)" }}>數位插花創作與分享網站</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                                一人快速完成產品定義與上線迭代，打造低門檻的數位插花體驗，讓使用者數位花藝創作取代文字，傳遞情感。
                            </p>
                        </div>
                    </section>

                    {/* Project Overview Section */}
                    <div className="container mx-auto px-6 pt-8 pb-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                                {/* 工具 */}
                                <div className="md:col-span-2">
                                    <h3 className="text-sm font-semibold text-[var(--color-orange-400)] uppercase tracking-wider mb-4">工具</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs text-gray-400 whitespace-nowrap min-w-[140px]">Research & Planning</span>
                                            <span className="text-sm text-gray-700">ChatGPT, Claude</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs text-gray-400 whitespace-nowrap min-w-[140px]">Design & UX</span>
                                            <span className="text-sm text-gray-700">Figma, Make</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs text-gray-400 whitespace-nowrap min-w-[140px]">Development</span>
                                            <span className="text-sm text-gray-700">Cursor, Antigravity</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs text-gray-400 whitespace-nowrap min-w-[140px]">Backend & Database</span>
                                            <span className="text-sm text-gray-700">Supabase</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs text-gray-400 whitespace-nowrap min-w-[140px]">Content</span>
                                            <span className="text-sm text-gray-700">Nano Banana Pro, ChatGPT, LoveArt</span>
                                        </div>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs text-gray-400 whitespace-nowrap min-w-[140px]">工作流程</span>
                                            <span className="text-sm text-gray-700">Supabase MCP</span>
                                        </div>
                                    </div>
                                </div>
                                {/* 時程 & 角色 */}
                                <div className="flex flex-row md:flex-col gap-8 md:gap-6">
                                    <div>
                                        <h3 className="text-sm font-semibold text-[var(--color-orange-400)] uppercase tracking-wider mb-2">時程</h3>
                                        <p className="text-sm text-gray-700">2 週</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-[var(--color-orange-400)] uppercase tracking-wider mb-2">角色</h3>
                                        <p className="text-sm text-gray-700">PM + Builder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Section */}
                    <div className="container mx-auto px-6 py-16">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-16">
                                <div className="grid md:grid-cols-3 gap-12 items-center">
                                    {/* 背景區塊 */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">背景</h3>
                                        <div className="text-gray-600 leading-relaxed text-sm space-y-4">
                                            <p className="text-justify">
                                                插花是一種很直覺的創作：選花、擺放、調整，不一定需要太多技巧也能做出好看的成品。而線下插花受限於時間、地點，又有花材成本的門檻。我想把這件事搬到數位場景，讓任何人隨時都能體驗這種專注、有心流感的創作過程。
                                            </p>
                                        </div>
                                    </div>
                                    {/* 目標區塊 */}
                                    <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow">
                                        <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: "color-mix(in srgb, var(--color-orange-400) 15%, white)" }}>
                                            <span className="text-3xl">🌱</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">目標</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            快速把產品做出來丟到市場上，同時透過數據與市場反饋，找到最適合的延伸場景：送禮卡片、個人花藝療癒、或情緒覺察日記。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Section */}
                    <div className="py-16 bg-[linear-gradient(to_bottom,_#FFF8E7_0%,_#ffffff_100%)]">
                        <div className="container mx-auto px-6">
                            <div className="max-w-4xl mx-auto">
                                <h3 className="mb-2 text-lg font-normal text-muted-foreground">Background</h3>
                                <h2 className="text-3xl text-foreground mb-8 font-extrabold">Vibe Coding 的時代，PM 要怎麼做產品？</h2>
                                <div className="text-gray-600 space-y-4 text-base leading-relaxed">
                                    <p>
                                        當 Vibe coding 興起，開發門檻大幅降低後，社群上的各類產品不斷誕生。我觀察這些小型應用，有些解決真實且具體的痛點，有些則純粹建立在趣味與創意之上。
                                    </p>
                                    <p>
                                        當個人能實際用 AI 解決自己的痛點，不再需要 PM 協助轉譯，產品經理則需要重新思考自己的角色定位。對我而言，Vibe coding 反而是能夠展現 PM 自身的 Product sense + Product taste 的更大機會。
                                    </p>
                                    <p>
                                        因此，我開始收斂過去累積的一些產品想法，並結合我對當代社群趨勢的觀察，例如 well-being、whimsical experience，最終選擇將 Flowie 這個點子實作出來。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* UI Screenshots + CTA Section */}
                    <div className="py-28 bg-white">
                        <div className="container mx-auto px-6">
                            <div className="max-w-4xl mx-auto">
                                <div className="overflow-x-auto mb-24">
                                    <div className="flex gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-4">
                                        <img src="/images/flowie1.png" alt="Flowie UI Screenshot 1" className="rounded-[20px] w-56 md:w-full object-cover border border-gray-200" />
                                        <img src="/images/flowie2.png" alt="Flowie UI Screenshot 2" className="rounded-[20px] w-56 md:w-full object-cover border border-gray-200" />
                                        <img src="/images/flowie3.png" alt="Flowie UI Screenshot 3" className="rounded-[20px] w-56 md:w-full object-cover border border-gray-200" />
                                        <img src="/images/flowie4.png" alt="Flowie UI Screenshot 4" className="rounded-[20px] w-56 md:w-full object-cover border border-gray-200" />
                                    </div>
                                </div>
                                <div className="relative text-center pb-16">
                                    <a href="https://flowie-notes.vercel.app/create?t=t" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-2 py-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-orange-400)] rounded focus-visible:ring-offset-4">
                                        <span aria-hidden="true" className="text-[1.25rem] inline-block transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[72deg] group-hover:scale-125" style={{ color: "var(--color-orange-400)" }}>✿</span>
                                        <span className="text-[20px] font-medium relative" style={{ color: "var(--color-orange-400)" }}>
                                            Try flowie yourself
                                            <span className="absolute bottom-[-2px] left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ backgroundColor: "var(--color-orange-400)" }} />
                                        </span>
                                        <span aria-hidden="true" className="text-[1rem] inline-block opacity-60 group-hover:translate-x-1.5 group-hover:opacity-100 transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ color: "var(--color-orange-400)" }}>→</span>
                                    </a>
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[120px] rounded-[50%]"
                                        style={{
                                            backgroundColor: "#FFF8E7",
                                            filter: "blur(50px)",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reflection Section */}
                    <div className="py-16 bg-[#FFF8E7]">
                        <div className="container mx-auto px-6">
                            <div className="max-w-4xl mx-auto space-y-12">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">App 即將消失嗎</h3>
                                    <div className="text-gray-600 space-y-4 text-base leading-relaxed">
                                        <p>
                                            &ldquo;No more UI.&rdquo; &ldquo;AI is the new UI&rdquo;. &ldquo;Agents are the new apps.&rdquo;
                                        </p>
                                        <p>
                                            軟體圈在 2025 年開始這麼說。未來網站、App 都會消失，被 AI 的 tool calls 取代。試想一個 AI agent 能幫忙訂車，為什麼還需要打開訂車軟體的介面呢？
                                        </p>
                                        <p>
                                            許多軟體在原本給使用者操作的 UI 之外，開始支援各種 API，讓 agents 可以直接串接、理解，解決使用者的問題。Notion 把 AI 融進原本的操作流程裡，逐步弱化人工操作的部分，也串接更多服務融合進單一平台。除了原本的產品，使用者能透過跟 chatGPT 對話來記錄自己的消費、習慣、行為，直接幫忙摘要、分析消費紀錄，也能做個性化，那我為什麼要記帳軟體呢？
                                        </p>
                                        <p>但所有的 app 都會被取代嗎？</p>
                                        <p>
                                            同時在 vibe coding 流行的這段時間，我看到很多有趣、新穎、可愛的 indie 小產品冒出來。技術民主化之後的軟體市場如雨後春筍，先不談商業化、產品護城河等問題，看到這些 app 時我總是想對應前面的論調：<strong>這些東西，真的都能被 AI agents 取代嗎？</strong>
                                        </p>
                                        <p>
                                            讓我印象深刻的是一個代購 App，他做的不只是簡單成本計算或者庫存分析，在功能裡更包含創辦人對於代購行業的理解：成本如何拆解、利潤如何計算、如何溝通報價、處理風險…。這種融合對場景的觀察 insights、再設計成獨特的 workflow，實際是把專業知識、流程與判斷壓縮進產品裡，讓使用者不需要每次都從零開始思考。
                                        </p>
                                        <p>
                                            well-being、專注力這類產品也類似。它需要對人類認知和習慣養成的理解，還要創造出軟體層面的「體驗」，設計節奏、回饋、儀式感、情緒。
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">所謂 Product taste</h3>
                                    <img
                                        src="/images/slackemoji.png"
                                        alt="Slack emoji reaction"
                                        className="mb-6 h-7 md:h-8 w-auto"
                                    />
                                    <div className="text-gray-600 space-y-4 text-base leading-relaxed">
                                        <p>
                                            這種 opinionated design，反而是現在 AI 協作時最難達到的。因為 AI 只能給出客觀回答，儘管有時能客製化，但很少有對問題和場景「挖掘、理解、設計」的過程。將個人的理解、巧思設計進產品裡，是這個時代裡更更更重要的： product taste 🪄✨ 這個 taste 不只包含了判斷商業化、被使用者喜愛的判斷，更包含了個人的巧思和 insights，在 consumer app 領域，他也可能是一種 lifestyle/philosophy。
                                        </p>
                                        <p>
                                            順應這個說法，這次 indie building 的想法也讓我深有感悟的是：除了 vibe coding，或許 storytelling、vibe marketing 也是一樣重要的事。
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">對 AI 生產力的濾鏡</h3>
                                    <div className="text-gray-600 space-y-4 text-base leading-relaxed">
                                        <p>
                                            另一個可能老生常談但我深有感觸的是：大家太容易覺得 AI 是萬能的效率神器。
                                        </p>
                                        <p>
                                            Claude code、Antigravity 確實讓「生出東西」這件事變快了，但變快不等於變好，更不等於可以直接用。就算使用各種 .md、skills 技巧，實際操作時 AI 仍像個需要花時間去對齊的協作者：你要給它 context、給它邊界、給它你對這個產品的判斷，它才做得出你要的東西。
                                        </p>
                                        <p>
                                            如果要融合進既有的產品，讓他理解原本系統和技術債、如何配合開發與測試流程，仍然是一門 PM 的藝術，還是得回到人對產品、專案管理的判斷。
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
            <main className="min-h-screen bg-[#FFF8E7]">
                {/* Hero Section */}
                <section className="bg-[linear-gradient(to_bottom,_#ffffff_0%,_#ffffff_60%,_#FFF8E7_100%)] pt-16 pb-12 md:pt-24 md:pb-20">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <Badge className="mb-4 text-white px-4 py-1 text-sm" style={{ backgroundColor: "var(--color-orange-400)" }}>Playground</Badge>
                        <h1 className="text-2xl md:text-5xl font-bold mb-0 md:mb-6 leading-tight text-gray-800">
                            flowie
                            <br />
                            <span style={{ color: "var(--color-orange-400)" }}>A Digital Flower Arranging & Sharing Website</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                            A low-barrier digital floral experience that lets users express emotions through creation.
                        </p>
                    </div>
                </section>

                {/* Project Overview Section */}
                <div className="container mx-auto px-6 pt-8 pb-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {/* Tools */}
                            <div className="md:col-span-2">
                                <h3 className="text-sm font-semibold text-[var(--color-orange-400)] uppercase tracking-wider mb-4">Tools</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xs text-gray-400 whitespace-nowrap min-w-[140px]">Research & Planning</span>
                                        <span className="text-sm text-gray-700">ChatGPT, Claude</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xs text-gray-400 whitespace-nowrap min-w-[140px]">Design & UX</span>
                                        <span className="text-sm text-gray-700">Figma, Make</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xs text-gray-400 whitespace-nowrap min-w-[140px]">Development</span>
                                        <span className="text-sm text-gray-700">Cursor, Antigravity</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xs text-gray-400 whitespace-nowrap min-w-[140px]">Backend & Database</span>
                                        <span className="text-sm text-gray-700">Supabase</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xs text-gray-400 whitespace-nowrap min-w-[140px]">Content</span>
                                        <span className="text-sm text-gray-700">Nano Banana Pro, ChatGPT, LoveArt</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-xs text-gray-400 whitespace-nowrap min-w-[140px]">Workflow</span>
                                        <span className="text-sm text-gray-700">Supabase MCP</span>
                                    </div>
                                </div>
                            </div>
                            {/* Timeline & Role */}
                            <div className="flex flex-row md:flex-col gap-8 md:gap-6">
                                <div>
                                    <h3 className="text-sm font-semibold text-[var(--color-orange-400)] uppercase tracking-wider mb-2">Timeline</h3>
                                    <p className="text-sm text-gray-700">2 Weeks</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-[var(--color-orange-400)] uppercase tracking-wider mb-2">Role</h3>
                                    <p className="text-sm text-gray-700">PM + Builder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Section */}
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-16">
                            <div className="grid md:grid-cols-3 gap-12 items-center">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">Background</h3>
                                    <div className="text-gray-600 leading-relaxed text-sm space-y-4">
                                        <p>
                                            Flower arranging is an intuitive form of creation. Picking, placing, adjusting, where you can make something beautiful without much skill. I wanted to bring this to a digital space, so anyone can experience that focused, creative flow state anytime.
                                        </p>
                                    </div>
                                </div>
                                <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: "color-mix(in srgb, var(--color-orange-400) 15%, white)" }}>
                                        <span className="text-3xl">🌱</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">Objective</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        Ship the product fast, get it in front of real users, and let data and market feedback reveal the right direction (gifting cards, personal floral therapy, or emotional journaling).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Section */}
                <div className="py-16 bg-[linear-gradient(to_bottom,_#FFF8E7_0%,_#ffffff_100%)]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="mb-2 text-lg font-normal text-muted-foreground">Background</h3>
                            <h2 className="text-3xl text-foreground mb-8 font-extrabold">How do PMs build products in the age of vibe coding?</h2>
                            <div className="text-gray-600 space-y-4 text-base leading-relaxed">
                                <p>
                                    As vibe coding has taken off and the barrier to shipping has dropped, all kinds of products have been showing up on social. Looking at these small apps, some solve real, specific pain points, while others are built purely on playfulness and creativity.
                                </p>
                                <p>
                                    When people can actually use AI to solve their own problems, without needing a PM to translate for them, PMs have to rethink what their role is. For me, vibe coding is actually a bigger opportunity to show what a PM brings: product sense and product taste.
                                </p>
                                <p>
                                    So I started pulling together some product ideas I&rsquo;d been sitting on, combined them with what I&rsquo;ve been seeing in culture right now (well-being, whimsical experiences), and landed on building Flowie.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* UI Screenshots + CTA Section */}
                <div className="py-28 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="overflow-x-auto mb-24">
                                <div className="flex gap-4 min-w-max md:min-w-0 md:grid md:grid-cols-4">
                                    <img src="/images/flowie1.png" alt="Flowie UI Screenshot 1" className="rounded-[20px] w-56 md:w-full object-cover border border-gray-200" />
                                    <img src="/images/flowie2.png" alt="Flowie UI Screenshot 2" className="rounded-[20px] w-56 md:w-full object-cover border border-gray-200" />
                                    <img src="/images/flowie3.png" alt="Flowie UI Screenshot 3" className="rounded-[20px] w-56 md:w-full object-cover border border-gray-200" />
                                    <img src="/images/flowie4.png" alt="Flowie UI Screenshot 4" className="rounded-[20px] w-56 md:w-full object-cover border border-gray-200" />
                                </div>
                            </div>
                            <div className="relative text-center pb-16">
                                <a href="https://flowie-notes.vercel.app/create?t=t" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-2 py-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-orange-400)] rounded focus-visible:ring-offset-4">
                                    <span aria-hidden="true" className="text-[1.25rem] inline-block transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-[72deg] group-hover:scale-125" style={{ color: "var(--color-orange-400)" }}>✿</span>
                                    <span className="text-[20px] font-medium relative" style={{ color: "var(--color-orange-400)" }}>
                                        Try flowie yourself
                                        <span className="absolute bottom-[-2px] left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ backgroundColor: "var(--color-orange-400)" }} />
                                    </span>
                                    <span aria-hidden="true" className="text-[1rem] inline-block opacity-60 group-hover:translate-x-1.5 group-hover:opacity-100 transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ color: "var(--color-orange-400)" }}>→</span>
                                </a>
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[120px] rounded-[50%]"
                                    style={{
                                        backgroundColor: "#FFF8E7",
                                        filter: "blur(50px)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reflection Section */}
                <div className="py-16 bg-[#FFF8E7]">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">Will Apps Disappear?</h3>
                                <div className="text-gray-600 space-y-4 text-base leading-relaxed">
                                    <p>
                                        &ldquo;No more UI.&rdquo; &ldquo;AI is the new UI.&rdquo; &ldquo;Agents are the new apps.&rdquo;
                                    </p>
                                    <p>
                                        This is what the software world started saying in 2025. Websites and apps will disappear, replaced by AI tool calls. If an agent can book your ride, why would you open a rideshare app?
                                    </p>
                                    <p>
                                        The shift is already happening. Products are opening up APIs so agents can plug in directly. Notion is folding AI into its core workflows, quietly eating the parts that used to require clicking around, and pulling more services into one surface. And looking further out: if I can just talk to ChatGPT to log my spending, have it analyzed, get personalized suggestions, what&rsquo;s the budgeting app even for?
                                    </p>
                                    <p>But will every app get replaced? I&rsquo;m not so sure.</p>
                                    <p>
                                        While vibe coding has been taking off, I&rsquo;ve been watching a wave of strange, lovely, hyper-specific indie products show up. Set monetization and moats aside for a second. When I look at these apps, I keep landing on the same question: <strong>can all of this really be replaced by agents talking to agents?</strong>
                                    </p>
                                    <p>
                                        One that stuck with me was a personal shopping app. What it actually does isn&rsquo;t cost calculation or inventory tracking. It&rsquo;s the founder&rsquo;s understanding of the whole business written into software: how to break down costs, how to calculate margins, how to explain pricing to customers, how to handle risk. It&rsquo;s a specific, contextual insight turned into a workflow. Expertise, process, and judgment compressed into a product, so the user doesn&rsquo;t have to think it through from scratch every time.
                                    </p>
                                    <p>
                                        Well-being and focus apps work the same way. They need a point of view on human cognition and habit formation, and then they need to build an experience on top of that: pacing, feedback, ritual, feeling.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">On Product Taste</h3>
                                <img
                                    src="/images/slackemoji.png"
                                    alt="Slack emoji reaction"
                                    className="mb-6 h-7 md:h-8 w-auto"
                                />
                                <div className="text-gray-600 space-y-4 text-base leading-relaxed">
                                    <p>
                                        This kind of opinionated design is exactly what AI collaboration struggles with. AI gives you objective answers. It can personalize, sure, but it doesn&rsquo;t really dig in, understand, design. It doesn&rsquo;t have a stance on your problem.
                                    </p>
                                    <p>
                                        Building personal insight and craft into a product is, I think, the thing that matters more and more right now: product taste 🪄✨
                                    </p>
                                    <p>
                                        And the taste I mean isn&rsquo;t just the commercial kind, what will sell, what users will love. It&rsquo;s also the craft kind: your own angle, what you&rsquo;ve noticed that other people haven&rsquo;t. In consumer apps, it often ends up looking like a lifestyle, or a set of values.
                                    </p>
                                    <p>
                                        One thing this round of indie building has made obvious: alongside vibe coding, storytelling and vibe marketing probably matter just as much.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">The AI Productivity Filter</h3>
                                <div className="text-gray-600 space-y-4 text-base leading-relaxed">
                                    <p>
                                        One more thing, probably old news by now, but I keep running into it: people are too quick to treat AI as a general-purpose efficiency machine.
                                    </p>
                                    <p>
                                        Claude Code and Antigravity have genuinely made shipping things faster. But faster isn&rsquo;t better, and faster definitely isn&rsquo;t usable. Even once you&rsquo;ve got the .md files and Skills tricks down, in practice AI still behaves like a collaborator you have to align with. You have to give it context, give it boundaries, feed it your judgment about the product before it can make what you actually want.
                                    </p>
                                    <p>
                                        And when you&rsquo;re trying to plug it into an existing product, getting it to understand the current system, the tech debt, how to fit into your dev and testing flow, that&rsquo;s still a PM&rsquo;s job. It still comes back to human judgment about the product and how it&rsquo;s built.
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
