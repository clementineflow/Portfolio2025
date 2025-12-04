"use client"
import Link from "next/link"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

import { isLocale, locales, type Locale } from "@/lib/i18n/config"
import { prefixPathWithLocale } from "@/lib/i18n/routing"
import { cn } from "@/lib/utils"

type LanguageSwitcherProps = {
  className?: string
}

function buildHref(pathname: string | null, targetLocale: Locale) {
  const normalizedPath = pathname && pathname !== "" ? pathname : "/"
  const segments = normalizedPath.split("/").filter(Boolean)
  const pathHasLocale = segments.length > 0 && isLocale(segments[0])
  const pathWithoutLocale = pathHasLocale ? `/${segments.slice(1).join("/")}` : normalizedPath
  const relativePath = pathWithoutLocale === "" ? "/" : pathWithoutLocale

  return prefixPathWithLocale(targetLocale, relativePath)
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps = {}) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className={cn("flex items-center gap-2 text-xs font-semibold uppercase text-muted-foreground", className)}>
      {locales.map((targetLocale, index) => {
        const href = buildHref(pathname, targetLocale)
        const isActive = locale === targetLocale

        return (
          <div key={targetLocale} className="flex items-center gap-2">
            <Link
              href={href}
              onClick={(event) => {
                event.preventDefault()
                if (isActive) {
                  return
                }
                const hash = typeof window !== "undefined" ? window.location.hash : ""
                router.push(`${href}${hash}`)
              }}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "text-foreground cursor-default"
                  : "text-muted-foreground hover:text-foreground focus-visible:underline focus-visible:outline-none"
              }
            >
              {targetLocale === "en" ? "EN" : "中文"}
            </Link>
            {index === 0 && <span aria-hidden="true">|</span>}
          </div>
        )
      })}
    </div>
  )
}
