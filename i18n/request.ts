import { getRequestConfig } from 'next-intl/server'

import { defaultLocale, isLocale } from '@/lib/i18n/config'

export default getRequestConfig(async ({ locale }) => {
  const normalizedLocale = isLocale(locale) ? locale : defaultLocale

  return {
    locale: normalizedLocale,
    messages: (await import(`../messages/${normalizedLocale}.json`)).default,
  }
})
