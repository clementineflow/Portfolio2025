const FEEDBACKS = [
  {
    id: "teammate-a",
    name: "同事 A",
    initials: "A",
    quote: "學習能力很好，與你共事時可以感受到事情持續被推進~",
    gradient: "from-[#FEE5D0] to-[#F8BFA1]",
  },
  {
    id: "teammate-b",
    name: "同事 B",
    initials: "B",
    quote: "執行能力很強，思緒清晰，很懂的分配資源，也很善用工具。",
    gradient: "from-[#E5DEFF] to-[#C3B5FF]",
  },
  {
    id: "teammate-c",
    name: "同事 C",
    initials: "C",
    quote: "如果有不確定的事會主動搜集大家的想法，提出一個對於案子來說最好的解，有你的這段期間很多抱怨都減少了",
    gradient: "from-[#D4F9F0] to-[#9EE7D2]",
  },
  {
    id: "teammate-d",
    name: "同事 D",
    initials: "D",
    quote: "感謝你總是快速對應各種來自需求或是開發上提出的疑問",
    gradient: "from-[#FFE5F7] to-[#FFBFDF]",
  },
  {
    id: "teammate-e",
    name: "同事 E",
    initials: "E",
    quote: "很多想法！可以從不同角度思考事情",
    gradient: "from-[#FFF4B5] to-[#FFD37E]",
  },
  {
    id: "teammate-f",
    name: "同事 F",
    initials: "F",
    quote: "總是用清楚且精確的方式溝通，感謝你！",
    gradient: "from-[#DDE7FF] to-[#8FA6FF]",
  },
  {
    id: "teammate-g",
    name: "同事 G",
    initials: "G",
    quote: "非常感謝主動幫忙優化開發和規劃的流程，因為這其實算是對於開發來說都很容易遺忘或是很難要特別去兼顧的事情",
    gradient: "from-[#FFD9D0] to-[#FFB199]",
  },
]

export function ColleaguesSection() {
  return (
    <section id="colleagues" className="py-20 px-6 bg-[#FFF7EF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-[#F68E41]">Words from Colleagues</p>
          <h2 className="text-4xl font-bold text-gray-900">合作夥伴這樣說</h2>
          <p className="text-base text-muted-foreground">
            這些話來自近年在產品、設計與跨部門協作中的夥伴，感謝他們把一起解題的默契留下。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEEDBACKS.map((feedback) => (
            <div
              key={feedback.id}
              className="rounded-3xl bg-white border border-[#F2E9DF] shadow-[0_20px_50px_-30px_rgba(246,142,65,0.6)] p-6 flex flex-col justify-between gap-8"
            >
              <div className="relative text-gray-700 text-base leading-7">
                <div className="absolute -top-5 right-0 text-5xl text-[#F8C69A]/60" aria-hidden="true">
                  &rdquo;
                </div>
                <p>{feedback.quote}</p>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className={`h-14 w-14 rounded-full bg-gradient-to-br ${feedback.gradient} flex items-center justify-center text-white font-semibold text-lg shadow-inner`}
                >
                  {feedback.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{feedback.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
