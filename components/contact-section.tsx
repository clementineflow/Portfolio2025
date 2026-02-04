"use client"

import { useTranslations, useLocale } from "next-intl"

export default function ContactSection() {
  const t = useTranslations("Contact")
  const locale = useLocale()

  const resumeUrlEn =
    "https://drive.google.com/file/d/1sbtJ9r35sv6K6IBxgP9zvvTHJjgAtW8o/view?usp=sharing"
  const resumeUrlZh =
    "https://drive.google.com/file/d/1VxURWtb7mIKEtFq2gPbk09wpb-L8SG-D/view?usp=sharing"

  const resumeUrl = locale === "en" ? resumeUrlEn : resumeUrlZh

  return (
    <section id="contact" data-section="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-serif">{t("title")}</h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{t("body")}</p>

        <div className="mt-8 flex flex-col items-center gap-12">
          <div className="flex items-center gap-5 text-base text-muted-foreground">
            <a
              href="https://www.linkedin.com/in/cathie-c-925165205/"
              className="transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("linkedin")}
            </a>
            <a href="mailto:tingann4@gmail.com" className="transition-colors hover:text-foreground">
              {t("email")}
            </a>
          </div>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-foreground text-background px-8 py-3 hover:bg-foreground/90 transition-colors rounded-full"
          >
            {t("resumeCta")}
          </a>
        </div>
      </div>
    </section>
  )
}
