# Bilingual Case Study Implementation Notes

This doc captures everything we learned while wiring the case-study pages for both Chinese and English so we can repeat the process quickly and consistently.

## Prerequisites

1. **English copy** that maps 1:1 to the existing Chinese layout (hero, background, problem, solution cards, learnings, footer CTA, etc.). When a section has no English source text yet, plan to leave the Chinese text in both locales and add `// TODO: map English copy here manually`.
2. **Existing page under `app/[locale]/case-studies/.../page.tsx`** that already renders the Chinese layout.
3. The shared i18n utilities (`Locale` type + `prefixPathWithLocale`) already imported.

## Implementation Steps

1. **Update the props definition**
   ```ts
   type CaseStudyPageProps =
     | { params: { locale: Locale } }
     | { params: Promise<{ locale: Locale }> };
   ```
2. **Resolve `params` and derive locale**
   ```ts
   const resolvedParams = await props.params;
   const { locale } = resolvedParams;
   const isZh = locale === "zh";
   const homeHref = prefixPathWithLocale(locale);
   ```
3. **Wrap the original JSX in the `isZh` branch** so Chinese users see exactly the same UI as before.
4. **Add the English branch as the fallback `return`**. Keep the JSX structure and Tailwind classes 100% identical. Replace only the textual nodes with the supplied English copy.
   - If the layout uses cards, badges, bullet lists, etc., keep the same nesting to avoid layout drift.
   - If a red/green bullet or other microcopy existed in Chinese but has no English equivalent yet, either:
     - leave the Chinese text in place, or
     - duplicate the best available English sentence, and add a `// TODO` comment referencing the missing copy.
5. **Review headings** to ensure we only use strings provided in the copy deck. If we temporarily add helper labels (e.g., “Problem”), note them so they can be replaced once the official copy arrives.
6. **Spot-check navigation links** (`homeHref`, `#portfolio`, etc.) to make sure they still use `prefixPathWithLocale`.
7. **Manual verification**
   - Visit `/zh/...` and `/en/...` to confirm both branches render and that the English layout hasn’t introduced spacing regressions.
   - Confirm that no lint/config scripts were modified during the process.

## Notes from the AI Ad Management Page

- Hero title kept the original two-line styling; only the text changed.
- Background paragraphs were switched from `text-justify` to default left alignment to avoid awkward gaps in English.
- Solution cards reuse the same icons and red bullet patterns. English copy needs to explicitly mention the pros/cons sentences (e.g., the “If using tab design...” warning). Keep those sentences verbatim from the copy deck.
- If you need new section labels (e.g., “Solution Exploration”), confirm with the source copy before committing. Otherwise, document temporary labels here so we can reconcile them later.

Keeping this checklist in the repo ensures we follow the same bilingual approach whenever we add or update case-study pages. Feel free to append more gotchas as we convert additional pages.
