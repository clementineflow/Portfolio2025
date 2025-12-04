export function TestimonialsSection() {
  const testimonials = [
    "執行能力很強，思緒清晰，很懂的分配資源，也很善用工具。",
    "學習能力很好，與你共事時可以感受到事情持續被推進~如果有不確定的會主動搜集大家的想法，提出一個對於案子來說最好的解決方案。",
    "感謝快速對應各種來自需求或是開發上提出的疑問，很多想法！可以從不同角度思考事情。",
    "非常感謝幫忙流程優化，因為這其實算是對於開發來說都很容易遺忘或是很難要特別去兼顧的事情。",
  ]

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-foreground mb-6">來自同事的推薦</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-muted-foreground leading-relaxed italic">"{testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
