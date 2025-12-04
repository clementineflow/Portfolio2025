import type { ReactNode } from "react"

import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"

import Navigation from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { isLocale, locales, type Locale } from "@/lib/i18n/config"

type LocaleLayoutProps = {
  children: ReactNode
  params: { locale: string } | Promise<{ locale: string }>
}

async function getMessages(locale: Locale) {
  try {
    return (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const { children } = props
  const resolvedParams = await props.params
  const locale = resolvedParams.locale

  if (!isLocale(locale)) {
    notFound()
  }

  const messages = await getMessages(locale)

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex min-h-screen flex-col font-sans overflow-y-auto overflow-x-hidden md:overflow-x-visible">
          <Navigation />
          <div className="flex-1">{children}</div>
          <Toaster />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
