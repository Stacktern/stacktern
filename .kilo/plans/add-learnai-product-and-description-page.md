# Plan: Add LearnAI Tutor to Stacktern Main Page + Dedicated Description Page

## Goal
Add **LearnAI Tutor** as a new product card on the Stacktern homepage, with two CTAs (Live URL → external Vercel app, Description → internal detail page). Build a polished dedicated description page featuring all content from `LearnAI_APP_DESCRIPTION.md`, with a modern, consistent design language.

## Live URL
https://learn-ai-neon-six.vercel.app/

## Design Constraints / Conventions Discovered
- Next.js **16.2.6** App Router (`app/` directory). Per `AGENTS.md`, the bundled `node_modules/next/dist/docs/` is the source of truth — read before writing. Key takeaway: route segments are folders + `page.tsx` files; nested layouts via folder `layout.tsx`.
- Stack: React 19, TypeScript, Tailwind v4 (with `@theme inline` design tokens), `next/font` (Geist, Syne, IBM Plex Mono).
- Existing visual system:
  - Background: deep navy radial gradients with cyan/indigo glow orbs and dot-grid overlay (`globals.css`).
  - Accent: `#00D4C8` (cyan/teal).
  - Cards: `rgba(13,21,38,0.45)` with `backdrop-blur`, `border-white/[0.08]`, `.product-card` hover glow.
  - Typography: Syne for headings, Geist for body, IBM Plex Mono for code.
  - Status pill conventions: emerald (Live), amber (Soon).
- The `Products` grid already supports per-card custom icons, statuses, and a single CTA link. We must extend the data model to support **two CTAs** without breaking the existing 3-card layout.

## File Changes

### 1. `app/components/Products.tsx` (modify)
- Extend the `products` array element type to allow a second CTA: `descriptionLink?: { href: string; label: string }` (internal `Link`) or `descriptionHref: string` (Next.js route). All existing entries get `descriptionHref: "/products/learn-ai"` style? — no, only LearnAI needs it. Keep the shape backward-compatible by adding optional fields.
- Add new entry at the **end** of the `products` array (preserves card order: LLM, Statly, Trackline, LearnAI):
  - `id: "learn-ai"`
  - Icon: new `BookOpenIcon` (SVG inline, matching existing icon style) — represents learning/AI tutor.
  - `iconStyle`: emerald-based `bg-emerald-500/10 border border-emerald-500/20 text-emerald-400`.
  - `cardHover`: matching emerald hover glow.
  - `category`: "EdTech · AI Tutor" with emerald pill.
  - `name`: "LearnAI Tutor"
  - `model`: `null` (no model id like the LLM card).
  - `description`: short teaser copy derived from the description doc — e.g. "An interactive, modern educational web app that teaches Data Science & Machine Learning fundamentals through 10 hands-on lessons, interactive simulators, and an AI tutor (Gemini 2.5 Flash) on every page."
  - `status`: "Live", emerald pill.
  - `link`: `https://learn-ai-neon-six.vercel.app/` (Live URL button) — opens in new tab.
  - `linkLabel`: "Open Live App"
  - **New field** `descriptionLink`: `{ href: "/products/learn-ai", label: "View Full Description" }` rendered as an internal `<Link>` (so client-side nav, prefetched).
- Footer of each card now renders up to two CTAs stacked with a small gap, styled as:
  - Primary (Live): solid teal `#00D4C8` text-on-dark, or keep current underline style for consistency.
  - Secondary (Description): outline-style with chevron, `text-[#8FA8CC] hover:text-white border border-white/10 hover:border-white/25`.
- The grid remains `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`. With 4 products the layout becomes 3+1 on `lg`. Acceptable; matches existing visual rhythm. (Alternative considered: bump to `lg:grid-cols-4` — would shrink cards and break the hero proportions. Stick with 3-col, 4th card sits alone on row 2.)

### 2. `app/products/learn-ai/page.tsx` (new)
- Server Component (no `"use client"` needed — pure presentation).
- Page title metadata via `export const metadata: Metadata = { title: "LearnAI Tutor — Stacktern", description: "..." }`.
- Layout structure (all on the same background the root layout already provides):
  1. **Hero band** (slim, ~50vh)
     - Top edge glow line + dot grid (reused from `Products` section).
     - Badge: "EdTech · AI Tutor" emerald pill.
     - H1: "LearnAI Tutor" (Syne, large).
     - Lede paragraph from description doc (Core Purpose).
     - Two primary CTAs: **Open Live App** (external, opens new tab) and **← Back to Products** (internal `<Link href="/#products">`).
  2. **Overview / Quick Facts** — 3-4 small stat-style cards: Lessons (10), Simulators (10), AI Model (Gemini 2.5 Flash), Theme (Light + Dark).
  3. **Key Features** — organized as a sectioned list matching the source doc:
     - **10 Comprehensive Lessons** — numbered list 1–10 in a clean grid.
     - **Interactive Simulators** — 10 simulators, each in a small card with a tiny icon (recharts/bar/clock/etc. — inline SVGs).
     - **AI Tutor Chat (Gemini 2.5 Flash)** — bullet list.
     - **Structured Learning Content** — bullet list (Learning Objectives, Concept Cards, Key Formulas/KaTeX, Glossary, Real-World Examples, Key Takeaways).
     - **Assessment & Practice** — bullet list.
     - **Theme & Accessibility** — bullet list.
     - **Responsive UI Components** — bullet list.
  4. **Tech Stack table** — two-column `<table>` matching the source doc, styled with the dark glass card look.
  5. **Data Persistence** — bullet list.
  6. **Developer Features** — bullet list.
  7. **Design System** — bullet list.
  8. **Perfect For** — tag-style chips for the five audience types.
  9. **Bottom CTA band** — repeated "Open Live App" + "View on GitHub/Stacktern" + back link, mirroring the home `CTASection` pattern.
- Reuse patterns from existing components: section paddings (`py-28`), radial-gradient background accents, the same glass-card `product-card`-like containers, `max-w-6xl mx-auto px-4 sm:px-6` wrapper, status pill styles.
- All content sourced directly from `LearnAI_APP_DESCRIPTION.md` — no fabricated details.

### 3. `app/products/learn-ai/layout.tsx` (new — optional, but recommended)
- Minimal nested layout that renders the existing `Navbar` and `Footer` are already in the root layout, so we don't need to repeat them. **Skip this file** — the root `app/layout.tsx` already wraps every route. Just `app/products/learn-ai/page.tsx` is enough.

### 4. `app/components/Products.tsx` icon import (internal)
- Add inline `BookOpenIcon` SVG component (consistent with other inline icons in this file).
- The internal CTA uses `next/link`'s `<Link>` — must add `import Link from "next/link"` at the top.

### 5. `app/components/Products.tsx` — Hero stats (optional tweak)
- The `Hero.tsx` shows `01 AI Model Live` and `02+ Products in Pipeline`. With LearnAI live, this becomes **2 live, 2+ in pipeline**. Update to `{ value: "02", label: "AI Products Live" }, { value: "02+", label: "Products in Pipeline" }` for accuracy.

### 6. `app/components/Footer.tsx` (modify)
- Add LearnAI to the "Products" list:
  - `<li><a href="https://learn-ai-neon-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="...hover:text-white...">LearnAI Tutor</a></li>`
  - Optionally also link to `/products/learn-ai` as a secondary link, but keep it simple — just the live URL.

## Modern Design Touches Applied to LearnAI Page
- Subtle background glow orbs in emerald/teal to differentiate from the home page's cyan/indigo.
- Animated/marquee-less approach: rely on the existing static dot-grid + radial gradients for consistency.
- Glass cards with `backdrop-blur` and soft `border-white/[0.08]` matching the rest of the site.
- Iconography: outline-style SVGs for simulators and feature bullets, keeping the minimalist aesthetic.
- Responsive grids (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` etc.).
- Scroll-progress-friendly anchor headings with a top edge glow line.
- Code/table styling uses `font-mono` (IBM Plex Mono) and the `--bg-elevated` surface.

## Verification Plan
1. Run `npm run lint` (project script: `eslint`) — ensure no type/lint errors.
2. Manual sanity:
   - `/` shows 4 product cards; LearnAI card has both "Open Live App" (external) and "View Full Description" (internal link).
   - Clicking "View Full Description" navigates to `/products/learn-ai` (client-side, no full reload).
   - Live URL button opens `https://learn-ai-neon-six.vercel.app/` in a new tab.
   - Description page renders all sections from the markdown without truncation; no 404s on assets.
   - Footer "Products" list includes LearnAI Tutor.
   - Hero stats updated to reflect 2 live products.

## Out of Scope
- i18n / dark mode toggle (global theme is fixed dark across the site already).
- Actual learning content from LearnAI (we're describing it, not rebuilding it).
- SEO/OG metadata beyond a basic `title` and `description` (could add OG image later).
