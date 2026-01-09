"use client"

import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import Image from "next/image"

export function HeroSection() {
  const t = useTranslations("Hero")
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("work")
    portfolioSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section data-test="temp" className="min-h-screen flex items-center justify-center p-4 md:p-6">
      <div
        className="bg-[#FBF5EC] rounded-3xl w-full max-w-6xl
                   h-[85vh] md:h-auto
                   relative
                   md:grid md:grid-cols-[3fr_2fr] md:items-center
                   p-8 md:p-12 lg:p-16
                   flex flex-col justify-center
                   overflow-visible"
      >
        <div className="space-y-6 md:space-y-8 z-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200">
              <span className="text-orange-500">✨</span>
              <span className="font-sans font-medium text-sm text-foreground">{t("badge")}</span>
            </div>

            <h1 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              {t("title")}
            </h1>

<div className="space-y-2 pt-2">
  {/* --- LOCATION Row --- */}
  <div className="flex items-center gap-2">
    <div className="flex w-4 shrink-0 items-center justify-center">
      <svg
        className="h-3.5 w-3.5 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>
    <p className="text-sm text-neutral-600 leading-snug">{t("location")}</p>
  </div>

  {/* --- AVAILABLE Row --- */}
  <div className="flex items-center gap-2">
    <div className="flex w-4 shrink-0 items-center justify-center">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
    </div>
    <p className="text-sm text-neutral-600 leading-snug">{t("availability")}</p>
  </div>
</div>
          <div className="pt-2">
            <Button
              onClick={scrollToPortfolio}
              className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-sm font-medium transition-all duration-300 leading-7 rounded-full cursor-pointer"
            >
              {t("cta")}
            </Button>
          </div>
        </div>

        <div className="hidden md:block"></div>

        <div
          className="absolute -bottom-10 -right-20 w-3/4 max-w-[240px] z-0
                        md:-bottom-5 md:right-[20%] md:w-auto md:max-w-sm lg:max-w-md
                        md:translate-x-1/3 lg:translate-x-1/2"
        >
          <Image
            src="/images/professional-woman-walking.png"
            alt="Ting An's illustration"
            width={540}
            height={660}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
      </div>
    </section>
  )
}
