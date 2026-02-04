"use client"

import { track } from "@vercel/analytics"

type Locale = "zh" | "en"

// Track page view with locale
export function trackPageView(page: string, locale: Locale) {
  track("page_view", {
    page,
    locale,
    timestamp: new Date().toISOString(),
  })
}

// Track project click from portfolio section
export function trackProjectClick(projectName: string, locale: Locale) {
  track("project_click", {
    project: projectName,
    locale,
    timestamp: new Date().toISOString(),
  })
}

// Track section visibility (when user scrolls into a section)
export function trackSectionView(sectionName: string, locale: Locale) {
  track("section_view", {
    section: sectionName,
    locale,
    timestamp: new Date().toISOString(),
  })
}

// Track when user exits the page
export function trackExit(
  currentPage: string,
  currentSection: string | null,
  locale: Locale,
  timeOnPageMs: number
) {
  track("page_exit", {
    page: currentPage,
    exitSection: currentSection || "unknown",
    locale,
    timeOnPageSeconds: Math.round(timeOnPageMs / 1000),
    timestamp: new Date().toISOString(),
  })
}

// Track time spent on a specific project page
export function trackProjectTime(
  projectName: string,
  timeOnPageMs: number,
  locale: Locale
) {
  track("project_time", {
    project: projectName,
    timeOnPageSeconds: Math.round(timeOnPageMs / 1000),
    locale,
    timestamp: new Date().toISOString(),
  })
}

// Track case study section visibility with timing
export function trackCaseStudySectionView(
  projectName: string,
  sectionName: string,
  locale: Locale
) {
  track("case_study_section_view", {
    project: projectName,
    section: sectionName,
    locale,
    timestamp: new Date().toISOString(),
  })
}
