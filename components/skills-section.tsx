const rows = [
  ["工具", "網站架設", "課程製作", "Notion", "數位產品"],
  ["獨立", "銷售頁製作", "Heptabase", "Vibe Code"],
  ["自媒體經營", "Obsidian", "平面設計", "自媒體策略"],
]

function SkillsMarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden skills-mask">
      <div
        className={`flex gap-16 min-w-max skills-track ${
          reverse ? "skills-marquee-reverse" : "skills-marquee"
        }`}
      >
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="whitespace-nowrap text-4xl md:text-5xl font-semibold text-gray-300">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold tracking-[0.35em] uppercase text-gray-400">我的技能</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">專長與工具</h2>
        </div>
        <div className="space-y-8">
          {rows.map((row, index) => (
            <SkillsMarqueeRow key={`row-${index}`} items={row} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
