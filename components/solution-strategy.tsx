"use client"

import { Card } from "@/components/ui/card"

const CONTENT = {
  zh: {
    title: "💡 解決方案策略",
    intro: "基於研究發現，我定義了三大設計策略，並轉化為核心功能：",
    strategies: [
      {
        id: "strategy-1",
        title: "被動存在感建立",
        desc: "使用者旅程地圖顯示「對方存在感太低」是安全感下降的主因。因此設計桌面 Widget，讓使用者無需刻意操作，也能在日常中感受到對方的存在。",
        featureTitle: "功能 1: 桌面 Widget",
        featureBullets: [
          { icon: "📸", text: "顯示兩人照片、對方所在地天氣、時間差" },
          { icon: "💡", text: "電燈互動：點一下讓對方的 Widget 亮燈（模擬日常同居時也會類似 \"thinking of you\"）" },
        ],
      },
      {
        id: "strategy-2",
        title: "冷靜緩衝",
        desc: "訪談與旅程地圖顯示，遠距情侶在「準備溝通前」情緒最不穩定，一旦回覆慢、語氣短，就容易引發不必要的猜測與爭吵。因此透過冷靜緩衝機制，降低誤會發生的機率。",
        featureTitle: "功能 2: 狀態分享牆",
        featureBullets: [
          { icon: "🧊", text: "自動建議訊息：當系統偵測到你可能情緒緊繃（回覆變短、長時間未讀），跳出可選擇的冷靜訊息。 e.g. 「我有點忙，晚點回你。」「我需要一點時間」" },
          { icon: "🔄", text: "雙方共識：訊息是你「主動選擇」的，因此不會有 AI 插手的突兀感" },
          { icon: "⏳", text: "減少誤會：讓對方知道你仍在意，只是需要時間緩衝，避免因回覆延遲而觸發更大的情緒波動" },
        ],
      },
      {
        id: "strategy-3",
        title: "儀式感建立",
        desc: "訪談發現「安全感要靠日常維繫」，但忙碌時很難記得。透過固定的小儀式建立連結點，降低維繫感情的認知負擔。",
        featureTitle: "功能 3: 每日小儀式",
        featureBullets: [
          { icon: "🌙", text: "睡前問候：「今天辛苦了，說聲晚安吧」" },
          { icon: "☀️", text: "早安訊息：推送提醒「記得跟他說早安」" },
          { icon: "🎁", text: "紀念日提醒：「下週是你們在一起 3 個月」" },
          { icon: "⚙️", text: "可自訂：選擇想要的儀式類型與時間" },
        ],
      },
    ],
  },
  en: {
    title: "💡 Solution Strategy",
    intro: "Based on research findings, I defined three design strategies and transformed them into core features:",
    strategies: [
      {
        id: "strategy-1",
        title: "Passive Presence Building",
        desc: "User journey mapping showed \"partner presence too low\" is the main cause of decreased security. Therefore, designed desktop widget so users can feel partner's presence in daily life without deliberate actions.",
        featureTitle: "Feature 1: Desktop Widget",
        featureBullets: [
          { icon: "📸", text: "Display couple photos, partner's location weather, time difference" },
          { icon: "💡", text: "Light interaction: Tap once to light up partner's widget (simulating daily cohabitation's \"thinking of you\" moments)" },
        ],
      },
      {
        id: "strategy-2",
        title: "'Cooling Buffer' to Reduce Misunderstanding Costs",
        desc: "Interviews and journey mapping showed long-distance couples have most unstable emotions \"before preparing to communicate\"—once replies are slow or tone is short, it easily triggers unnecessary speculation and arguments. Therefore, through cooling buffer mechanism, reduce probability of misunderstandings.",
        featureTitle: "Feature 2: Status Sharing Wall",
        featureBullets: [
          { icon: "🧊", text: "Auto-suggested messages: When system detects you might be emotionally tense (replies become shorter, long unread time), pop up selectable cooling messages. e.g., \"I'm a bit busy, will reply later.\" \"I need some time\"" },
          { icon: "🔄", text: "Mutual consensus: Message is your \"active choice,\" so there's no awkward feeling of AI intervention" },
          { icon: "⏳", text: "Reduce misunderstandings: Let partner know you still care, just need time to buffer, avoiding larger emotional fluctuations triggered by delayed replies" },
        ],
      },
      {
        id: "strategy-3",
        title: "Ritual Building",
        desc: "Interviews found \"security needs daily maintenance,\" but it's hard to remember when busy. Through fixed small rituals, establish connection points and reduce cognitive load of maintaining relationships.",
        featureTitle: "Feature 3: Daily Small Rituals",
        featureBullets: [
          { icon: "🌙", text: "Bedtime greeting: \"Today was tough, say goodnight\"" },
          { icon: "☀️", text: "Morning message: Push reminder \"remember to say good morning\"" },
          { icon: "🎁", text: "Anniversary reminder: \"Next week is your 3-month anniversary\"" },
          { icon: "⚙️", text: "Customizable: Choose desired ritual types and times" },
        ],
      },
    ],
  },
}

export function SolutionStrategySection({ locale = "zh" }: { locale?: string }) {
  const t = CONTENT[locale as "zh" | "en"] || CONTENT.zh

  return (
    <div className="bg-[#FFF6EE] py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">{t.title}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.intro}</p>
          </div>

          {/* Strategies */}
          <div className="space-y-28">
            {t.strategies.map((strategy, index) => (
              <div key={strategy.id} className="grid md:grid-cols-2 gap-x-12 gap-y-10 items-center">
                
                {/* Text side */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <p className="text-sm text-[#F68E41] font-semibold tracking-wide mb-3">
                    Strategy {index + 1}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {strategy.desc}
                  </p>
                </div>

                {/* Feature Card side */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <Card className="p-8 bg-white rounded-2xl shadow border-0">
                    <p className="text-base font-semibold text-gray-900 mb-4">{strategy.featureTitle}</p>
                    <ul className="space-y-4 text-sm text-gray-700">
                      {strategy.featureBullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-lg mr-4">{bullet.icon}</span>
                          <span className="leading-snug">{bullet.text}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
