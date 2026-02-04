"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import {
    trackCaseStudySectionView,
    trackProjectTime,
} from "@/lib/analytics"

type Locale = "zh" | "en"

type CaseStudyTrackerProps = {
    children: ReactNode
    projectName: string
    locale: Locale
}

export function CaseStudyTracker({ children, projectName, locale }: CaseStudyTrackerProps) {
    const pathname = usePathname()
    const pageLoadTime = useRef<number>(Date.now())
    const trackedSections = useRef<Set<string>>(new Set())

    // Reset on mount
    useEffect(() => {
        pageLoadTime.current = Date.now()
        trackedSections.current = new Set()
    }, [pathname])

    // Track case study sections
    useEffect(() => {
        const sections = document.querySelectorAll("[data-case-section]")

        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionName = entry.target.getAttribute("data-case-section")
                        if (sectionName && !trackedSections.current.has(sectionName)) {
                            trackedSections.current.add(sectionName)
                            trackCaseStudySectionView(projectName, sectionName, locale)
                        }
                    }
                })
            },
            {
                threshold: 0.3,
                rootMargin: "-10% 0px -10% 0px",
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [projectName, locale])

    // Track time on page when leaving
    useEffect(() => {
        const handleBeforeUnload = () => {
            const timeOnPage = Date.now() - pageLoadTime.current
            trackProjectTime(projectName, timeOnPage, locale)
        }

        window.addEventListener("beforeunload", handleBeforeUnload)

        // Also track when navigating away via client-side navigation
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload)
            const timeOnPage = Date.now() - pageLoadTime.current
            if (timeOnPage > 1000) { // Only track if spent more than 1 second
                trackProjectTime(projectName, timeOnPage, locale)
            }
        }
    }, [projectName, locale])

    return <>{children}</>
}
