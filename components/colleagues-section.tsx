const FEEDBACKS = [
  {
    id: "teammate-b",
    name: "同事 B",
    initials: "B",
    quote: "執行能力很強，思緒清晰，很懂的分配資源，也很善用工具。",
  },
  {
    id: "teammate-a",
    name: "同事 A",
    initials: "A",
    quote: "學習能力很好，與你共事時可以感受到事情持續被推進~",
  },
  {
    id: "teammate-c",
    name: "同事 C",
    initials: "C",
    quote: "如果有不確定的事會主動搜集大家的想法，提出一個對於案子來說最好的解，有你的這段期間很多抱怨都減少了",
  },
  {
    id: "teammate-e",
    name: "同事 E",
    initials: "E",
    quote: "很多想法！可以從不同角度思考事情",
  },
  {
    id: "teammate-d",
    name: "同事 D",
    initials: "D",
    quote: "感謝你總是快速對應各種來自需求或是開發上提出的疑問，跟你合作很愉快～",
  },
  {
    id: "teammate-f",
    name: "同事 F",
    initials: "F",
    quote: "總是用清楚且精確的方式溝通，身為需求方每次都很感謝你的細心解釋！",
  },
  {
    id: "teammate-g",
    name: "同事 G",
    initials: "G",
    quote: "非常感謝主動幫忙優化開發和規劃的流程，因為這其實算是對於開發來說都很容易遺忘或是很難要特別去兼顧的事情",
  },
]

const AVATAR_COLORS = ["bg-[#FCE8D9]", "bg-[#E2F1EB]", "bg-[#FDE9D6]", "bg-[#E3E8FF]"]

export function ColleaguesSection() {
  const marqueeRows = [
    FEEDBACKS.filter((_, index) => index % 2 === 0),
    FEEDBACKS.filter((_, index) => index % 2 === 1),
  ]

  return (
    <section id="colleagues" className="bg-[#FBF5EC] py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Words from Colleagues</h2>
          <p className="text-base text-gray-500">Anonymous feedback from people I've had the pleasure of working with :)</p>
        </header>

        <div className="mt-12 space-y-8">
          {marqueeRows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="relative overflow-hidden">
              <div
                className={`colleagues-marquee-track flex gap-6 ${
                  rowIndex === 0 ? "colleagues-marquee-left" : "colleagues-marquee-right"
                }`}
              >
                {[...row, ...row].map((feedback, itemIndex) => (
                  <figure
                    key={`${feedback.id}-${itemIndex}`}
                    className={`shrink-0 rounded-xl bg-white/90 p-6 backdrop-blur-sm flex h-full flex-col justify-between ${
                      rowIndex === 0 ? "min-h-[220px]" : ""
                    } ${
                      feedback.id === "teammate-d" ? "w-[280px]" : feedback.id === "teammate-e" ? "w-[260px]" : "w-[320px]"
                    }`}
                  >
                    <p className="text-base text-gray-800 leading-7">{feedback.quote}</p>
                    <figcaption className="mt-6 flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-medium text-[#1F2937] ${
                          AVATAR_COLORS[(itemIndex + rowIndex) % AVATAR_COLORS.length]
                        }`}
                      >
                        {feedback.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{feedback.name}</p>
                        <p className="text-xs text-gray-500">協作夥伴</p>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#FBF5EC] via-[#FBF5EC]/70 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#FBF5EC] via-[#FBF5EC]/70 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
