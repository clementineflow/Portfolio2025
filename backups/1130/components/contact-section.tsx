import { useTranslations } from "next-intl"

export default function ContactSection() {
  const t = useTranslations("Contact")

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-serif mb-8">{t("title")}</h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">{t("body")}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:tingan@example.com"
            className="bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/90 transition-colors rounded-full"
          >
            {t("primaryCta")}
          </a>
          <a
            href="/resume.pdf"
            className="bg-card text-card-foreground px-8 py-3 hover:bg-muted transition-colors rounded-full"
          >
            {t("secondaryCta")}
          </a>
        </div>
      </div>
    </section>
  )
}
