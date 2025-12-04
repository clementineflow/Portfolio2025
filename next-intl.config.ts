// next-intl.config.ts
import type { NextIntlConfig } from 'next-intl'

const config: NextIntlConfig = {
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'as-needed', // / uses en, /zh uses zh
  localeDetection: false, // no Accept-Language or NEXT_LOCALE cookie
}

export default config
