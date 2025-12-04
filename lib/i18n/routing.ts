import { defaultLocale, type Locale } from "./config"

export function prefixPathWithLocale(locale: Locale, path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  if (locale === defaultLocale) {
    return normalizedPath || "/"
  }

  if (normalizedPath === "/") {
    return `/${locale}`
  }

  return `/${locale}${normalizedPath}`
}
