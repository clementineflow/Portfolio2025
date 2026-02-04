"use client"

import { useEffect, useRef, useCallback, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import {
    trackPageView,
    trackSectionView,
    trackExit,
} from "@/lib/analytics"

type Locale = "zh" | "en"

type AnalyticsProviderProps = {
    children: ReactNode
    locale: Locale
}

export function AnalyticsProvider({ children, locale }: AnalyticsProviderProps) {
    const pathname = usePathname()
    const pageLoadTime = useRef<number>(Date.now())
    const currentSection = useRef<string | null>(null)
    const trackedSections = useRef<Set<string>>(new Set())

    // Track page view on mount
    useEffect(() => {
        pageLoadTime.current = Date.now()
        trackedSections.current = new Set()
        trackPageView(pathname, locale)
    }, [pathname, locale])

    // Handle section visibility tracking with Intersection Observer
    useEffect(() => {
        const sections = document.querySelectorAll("[data-section]")

        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionName = entry.target.getAttribute("data-section")
                        if (sectionName) {
                            currentSection.current = sectionName

                            // Only track first time section becomes visible
                            if (!trackedSections.current.has(sectionName)) {
                                trackedSections.current.add(sectionName)
                                trackSectionView(sectionName, locale)
                            }
                        }
                    }
                })
            },
            {
                threshold: 0.3, // Section is considered visible when 30% is in view
                rootMargin: "-10% 0px -10% 0px",
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [pathname, locale])

    // Handle exit tracking
    const handleBeforeUnload = useCallback(() => {
        const timeOnPage = Date.now() - pageLoadTime.current
        trackExit(pathname, currentSection.current, locale, timeOnPage)
    }, [pathname, locale])

    useEffect(() => {
        window.addEventListener("beforeunload", handleBeforeUnload)

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload)
        }
    }, [handleBeforeUnload])

    return <>{children}</>
}
