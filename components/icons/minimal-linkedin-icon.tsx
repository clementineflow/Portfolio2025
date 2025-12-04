import type { SVGProps } from "react"

export function MinimalLinkedinIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...props}>
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line x1="8.5" y1="10.5" x2="8.5" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" />
      <path
        d="M13 10.75c0-.97.78-1.75 1.75-1.75H16c1.24 0 2.25 1.01 2.25 2.25V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line x1="13" y1="16" x2="13" y2="10.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
