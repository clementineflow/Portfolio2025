# UI Design System (Home + Review Optimization)

This guide documents the patterns that already ship on the homepage (`app/page.tsx`) and the “評論流程優化” case study (`app/case-studies/review-optimization/page.tsx`). Refer to it whenever you extend those pages or build nearby experiences.

## Layout & Spacing

Token | Usage | Tailwind expression
----- | ----- | -------------------
`layout-shell` | Global nav + homepage sections | `max-w-6xl mx-auto px-6`
`article-shell` | Case-study narrative blocks | `container mx-auto px-6 max-w-4xl` (hero) / `max-w-5xl` (Solution)
`section-xl` | Homepage hero / case-study hero | `pt-16 pb-12 md:pt-24 md:pb-20`
`section-lg` | Most supporting sections | `py-16`
`section-md` | Footer + contact blocks | `py-12` – `py-16`
`card-gap` | Grids inside sections | `gap-6` (3-up cards) / `gap-8` (2-up layouts)

Additional rhythm cues:
- Vertical stacks frequently use `space-y-6` or `space-y-8`.
- Case-study layout leans on `grid md:grid-cols-3` (background/problem cards) and `grid md:grid-cols-2` (metrics, learnings) with matched gaps.
- Overlapping effects (e.g., Results section) offset blocks with `-mt-24` to blend white shells into cream backgrounds.

## Color Palette

Name | Hex | Live usage
---- | --- | ----------
`surface-cream` | `#FBF5EC` | Homepage hero container, case-study backgrounds, section shells.
`surface-base` | `#FFFFFF` | Cards, article bodies, CTA footer.
`surface-gradient` | `linear-gradient(white → #FBF5EC)` | Case-study hero and solution transitions.
`accent-sunset` | `#F6AD55` | Hero highlight text, case-study badge, key metrics.
`accent-leaf` | `#14744A` | Portfolio tag chips, positive indicators.
`neutral-ink` | `#1F2937` / Tailwind `text-gray-800` | Primary headings.
`neutral-body` | `#4B5563`–`#6B7280` (`text-gray-600`) | Paragraph copy.
`neutral-caption` | `#9CA3AF` (`text-gray-500`) | Metadata, stat labels.
`neutral-border` | `#E5E7EB` (`border-gray-200`) | Card outlines.
`shadow-soft` | `rgba(16, 24, 40, 0.12)` variants | `shadow`, `shadow-lg`, portfolio card custom shadow.

All CTA buttons still rely on the global `foreground/background` tokens defined in `app/globals.css`. Keep accent hues for highlights, not for long-form body text.

## Typography Scale

Token | Font/Weight | Tailwind classes in use | Context
----- | ----------- | ----------------------- | -------
`display` | Montserrat Bold | `text-4xl md:text-5xl` | Homepage hero headline, case-study hero title.
`heading-lg` | Montserrat Bold/Semibold | `text-3xl` | Section titles (“Solution Strategy”, “Learnings”).
`heading-md` | Montserrat Semibold | `text-2xl` | Card titles, CTA subheads.
`heading-sm` | Montserrat Semibold | `text-xl` | Card/item headings within grids.
`body` | Inter Regular | `text-base text-gray-600` | Primary narrative paragraphs.
`body-sm` | Inter Regular | `text-sm text-gray-600` | Supporting bullets, captions beneath metrics.
`caption` | Inter Medium | `text-xs text-gray-500` | Metadata rows (“5 min read”, “(上線前三個月…)”).

Implementation notes:
- Continue loading fonts through `app/layout.tsx` (`--font-inter`, `--font-montserrat`).
- When possible, apply `font-sans` for body copy and `font-montserrat`/`font-semibold` for headings to avoid inline `font-serif` overrides.

## Component Patterns

### Navigation
- Fixed bar with `bg-background/95` + blur, `max-w-6xl px-6 py-6`.
- Links use `text-sm font-medium` and hover to `text-muted-foreground`. Ensure target sections expose matching IDs (`#work`, `#about`, `#contact`).

### Hero Shell (Homepage & Case Study)
- Outer shell: `bg-[#FBF5EC] rounded-3xl w-full max-w-6xl p-8 md:p-12 lg:p-16`.
- Layout: `md:grid md:grid-cols-[3fr_2fr]` with absolute illustration anchored to the bottom-right (`max-w-sm`–`md`).
- Badges: inline flex capsule `px-4 py-2 border border-orange-200 bg-white/80`.
- Primary CTA: `Button` with `bg-foreground text-background px-8 py-3 rounded-full`.

### Section Containers
- Case study: `container mx-auto px-6` with inner `max-w-4xl` (hero/background/results) or `max-w-5xl` (Solution grid).
- Background treatments alternate between `bg-[#FBF5EC]`, pure white, or gradients, creating contrast without introducing new hues.

### Cards
Variant | Styles | Example
------- | ------ | -------
Metric/quote highlight | `Card p-8 text-center border border-[#F6AD55]/20 bg-white rounded-3xl shadow-lg` or gradient `from-orange-50 to-orange-100` | Key metric duo under case-study hero.
Standard article card | `bg-white rounded-2xl p-8 shadow` / `Card className="bg-white p-6 rounded-2xl shadow-sm border-0"` | Problem background trio, solution strategy grid.
Portfolio card | Custom `bg-white rounded-xl shadow-[0_4px_10px_rgba(16,24,40,0.06)] hover:-translate-y-1` with `aspect-[16/10]` thumbnail placeholder.

Maintain consistent padding (`p-6` or `p-8`) and use `shadow` tiers sparingly to keep hierarchy legible.

### Metrics & Stats
- Lead numbers use `text-2xl`–`text-3xl font-semibold text-black`.
- Supporting labels apply `text-gray-800` with `text-sm text-gray-500` for footnotes.
- For stacked stats, keep them centered with equal width blocks (`flex flex-col items-center` + inline styles when necessary).

### Chips & Badges
- Portfolio tags: `inline-flex items-center bg-[#E6F9EE] text-[#14744A] text-xs font-medium px-3 py-1 rounded-full`.
- Filter pills: `px-4 py-2 rounded-full text-sm font-medium`, toggling between `bg-foreground text-background` (active) and `bg-background text-foreground border`.
- Case-study badges reuse `Badge` with `bg-[#F6AD55] text-white px-4 py-1 text-sm`.

### Buttons & Links
- Primary CTA (Homepage & case-study footer): `Button` component with `rounded-full` silhouette, `px-8 py-3`, using theme foreground/background colors.
- Secondary link CTA: `Link` + icon pair with `text-muted-foreground hover:text-foreground`.
- When embedding `Button asChild`, keep text at `text-sm font-medium` to match surrounding body copy.

### Imagery & Illustration
- Homepage hero uses an absolute-positioned PNG with responsive width (`w-3/4`, `md:max-w-sm`, `lg:max-w-md`) to overlap the shell.
- Case-study imagery (e.g., `/images/Frame 182 (4).png`) sits inside flex containers with `rounded-lg` and `object-cover`. Maintain generous whitespace around images to match copy columns.

## Interaction & Motion
- Hover lifts rely on `hover:-translate-y-1` + stronger shadow (`shadow-[0_8px_20px_rgba(16,24,40,0.12)]`) for cards.
- Work-in-progress portfolio cards show a toast (`hooks/use-toast.ts`) and follow cursor tooltips via `fixed` positioning offset by 15px.
- Navigation hides on downward scroll by toggling `translate-y-full` through the `Navigation` component’s `isVisible` state.

## Implementation Checklist
1. **Stick to the shells**: use `layout-shell` and `article-shell` containers before introducing new widths.
2. **Reuse the two radii**: `rounded-2xl` (16px) for standard cards, `rounded-3xl` (24px) for hero shells and highlight metrics. Chips stay `rounded-full`.
3. **Limit accents**: `accent-sunset` for highlights/badges, `accent-leaf` for success tags. Keep long-form text on neutral shades.
4. **Match section rhythm**: alternate surface cream and white blocks every `section-lg` to mimic the existing scroll cadence.
5. **Typography discipline**: Montserrat for headings, Inter for everything else; align sizes to the table above instead of inventing new scales.

Following these guardrails will keep new homepage sections or case-study content visually consistent without introducing a heavier pattern library.
