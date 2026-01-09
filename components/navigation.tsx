"use client"

import Image from "next/image"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState } from "react"

import { LanguageSwitcher } from "@/components/language-switcher"
import type { Locale } from "@/lib/i18n/config"
import { prefixPathWithLocale } from "@/lib/i18n/routing"

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const locale = useLocale()
  const t = useTranslations("Navigation")

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  const typedLocale = locale as Locale
  const homeHref = prefixPathWithLocale(typedLocale)
  const workHref = `${homeHref}#work`
  const contactHref = `${homeHref}#contact`

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-white/80 backdrop-blur-md`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:py-8">
        <Link
          href={homeHref}
          className="transition-colors hover:opacity-80"
        >
          <Image src="/apple-touch-icon.png" alt="Logo" width={32} height={32} className="h-8 w-8" />
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium tracking-wide text-[#666666]">
          <Link href={workHref} className="hidden md:block transition-colors hover:text-foreground">
            {t("work")}
          </Link>
          <Link href={contactHref} className="hidden md:block transition-colors hover:text-foreground">
            {t("contact")}
          </Link>
          <LanguageSwitcher className="flex items-center gap-2 text-sm font-medium uppercase text-[#666666] transition-colors hover:text-foreground" />
        </div>
      </div>
    </nav>
  )
}
