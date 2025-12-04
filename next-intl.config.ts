// next-intl.config.ts
import type { RoutingConfig } from "next-intl/routing"

import { defaultLocale, locales } from "./lib/i18n/config"

const config = {
  locales,
  defaultLocale,
  localePrefix: "as-needed", // / uses en, /zh uses zh
  localeDetection: false, // no Accept-Language or NEXT_LOCALE cookie
} satisfies RoutingConfig<typeof locales, "as-needed", never, undefined>

export default config
