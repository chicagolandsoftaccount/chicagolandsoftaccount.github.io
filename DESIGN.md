# Ledger & Lede

**The design system for chicagolandsoftware.com**

> A portfolio that treats a body of work like a catalogued archive — read with
> the confidence of a broadsheet and the precision of a trading desk.

*Ledger* is the systematic layer: monospace labels, indexed entries, figures,
dates, tags — the data plane. *Lede* is the human layer: oversized serif
display, an opinionated voice, generous air — the editorial plane. The whole
design is the tension between those two registers held on one page.

---

## 1. Philosophy

The brief was explicit: **do not look vibe-coded.** No glowing glass cards
everywhere, no purple/blue gradient soup, no floating orbs, no particle fields,
no emoji, no "modern developer portfolio" template. Instead the site should read
as if a real person with taste made deliberate choices and enjoyed making it.

Three governing ideas:

1. **Substance first.** The work is the subject. Every project, role, and skill
   is presented like an artifact with context, evidence, and a reason to exist.
   Decoration never competes with the content.
2. **Type and space over boxes and effects.** Hierarchy comes from scale,
   weight, rule lines, and whitespace — not from shadows, blur, and chrome.
3. **Know the rules, then break a few on purpose.** It follows modern craft
   (responsive, accessible, performant, restrained) and then breaks template
   convention with editorial layout, an unusual type pairing, and a couple of
   signature flourishes.

### North star references (spirit, not pastiche)
Editorial & luxury web design · broadsheet financial journalism · art-museum
catalogues · modern financial terminals (dense, data-rich, fast — but not
harsh) · soft minimalism with a restrained Y2K/retro-futurist edge. None of
these are quoted literally; they inform proportion, color discipline, and tone.

---

## 2. Voice — the two planes

| Plane | Role | Typeface | Where it appears |
|-------|------|----------|------------------|
| **Lede** (editorial) | Personality, headlines, statements | **Fraunces** (serif, opsz) | Hero name, section `h2`, project & role titles, lead paragraph, contact line, figure numbers |
| **Body** (reading) | Prose, descriptions | **IBM Plex Sans** | Paragraphs, blurbs, buttons |
| **Ledger** (system) | Data, metadata, indexing | **Space Mono** | Eyebrows, dates, tags, locations, catalogue numbers, figure labels, status line, footer |

The contrast between an expressive serif and a clinical monospace *is* the
identity. Sans body sits quietly between them.

```css
--font-display: 'Fraunces', Georgia, 'Times New Roman', serif;
--font-sans:    'IBM Plex Sans', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
--font-mono:    'Space Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
```

---

## 3. Color

Near-monochrome **ink on paper** with **one** confident accent — a deliberate
vermilion. Color is rationed: the accent marks structure (section numbers,
links, the live-status dot, the name's terminal period) and never fills large
areas or stacks into gradients.

### Light — "paper" (default voice)
```css
--accent: #d2391c;  --accent-strong: #b22f14;  --accent-soft: rgba(210,57,28,.10);  --on-accent: #fdfaf3;
--bg: #f4f1ea;  --bg-2: #ece8df;  --surface: #faf8f2;  --surface-2: #efece2;
--border: rgba(23,21,16,.14);  --border-2: rgba(23,21,16,.30);  --rule: rgba(23,21,16,.16);
--text: #2c2a22;  --heading: #16140f;  --muted: #6b675b;  --faint: #9a9588;
```

### Dark — "ink"
```css
--accent: #ff5a39;  --accent-strong: #ff7c60;  --accent-soft: rgba(255,90,57,.13);
--bg: #131210;  --bg-2: #191714;  --surface: #1b1a16;  --surface-2: #232017;
--border: rgba(242,239,230,.13);  --border-2: rgba(242,239,230,.28);  --rule: rgba(242,239,230,.15);
--text: #e7e3d8;  --heading: #f6f2e8;  --muted: #a39e92;  --faint: #726d62;
```

Both palettes are **warm** (paper and ink, never cold blue-grey). The theme is
chosen from `localStorage` then `prefers-color-scheme`; `:root` is light and
`[data-theme="dark"]` overrides.

**Token semantics**

- `--rule` — hairline dividers (the workhorse of the layout). Lighter than `--border`.
- `--border` / `--border-2` — outlines on interactive/inset elements.
- `--heading` doubles as the **ink button** fill; `--bg` is its text.
- `--accent-soft` — the only "wash"; used behind search icons and one quiet hero tint.
- The single atmospheric gradient is one static, low-opacity warm radial behind the page — no animation, no full-page decoration.

---

## 4. Typography scale

Fluid `clamp()` throughout so type breathes on large screens and stays legible
on small ones.

| Token | Size | Notes |
|-------|------|-------|
| Hero name | `clamp(3.6rem, 15vw, 8.5rem)` | Fraunces 600, `letter-spacing: -.045em`, `line-height: .9` |
| Contact head | `clamp(2.2rem, 7vw, 3.8rem)` | |
| Section `h2` | `clamp(2rem, 5.5vw, 3.2rem)` | |
| Hero tagline | `clamp(1.4rem, 3.4vw, 2.25rem)` | serif **400** — a statement, not a heading |
| Figure number | `clamp(1.9rem, 4.5vw, 2.7rem)` | Fraunces |
| Project (flagship) | `clamp(1.7rem, 3.6vw, 2.4rem)` | |
| Role / project row title | `1.35–1.4rem` | |
| Skill category | `1.2rem` | |
| Body | `1–1.05rem` | line-height ~1.6 |
| Eyebrow / labels | `.72–.85rem` | mono, `text-transform: uppercase`, `letter-spacing: .14–.2em` |

---

## 5. Layout

- **Container:** `max-width: 1180px`, fluid padding `clamp(1.15rem, 5vw, 3rem)`.
- **Rule lines, not cards.** Sections are organized by `1px solid var(--rule)`
  dividers and grid columns. Boxed surfaces are the exception (search panel,
  legal-page prose), not the default.
- **Vary every section.** The cardinal anti-pattern is "centered heading +
  paragraph + identical card grid, five times." Each section is built
  differently on purpose:

| Section | Layout |
|---------|--------|
| **Hero** | Mono kicker → oversized serif name → serif statement → text-link CTAs → figure strip → status line |
| **About** | Asymmetric 1.7fr / 1fr: lead paragraph + prose beside a typographic education list under a bold top-rule label |
| **Experience** | Résumé rows: a fixed mono date/kind column beside role · org, dash bullets, a mono tag line; `minmax(0,1fr)` so long text never overflows |
| **Projects** | Flagship **editorial spreads** (title, then a prominent screenshot beside the write-up) followed by an **indexed catalogue list** — numbered rows with title, blurb, tags, link, and a screenshot. Cards use CSS grid areas so both flagships and rows reflow to `title → image → body` on narrow viewports. Projects with no screenshot get a flat, monochrome placeholder tile keyed to their icon (never a coloured/gradient tile) |
| **Skills** | Two-column typographic rows: serif category, comma-separated items as flowing text — no chips, no icons |
| **Contact** | Left-aligned serif statement with the email as an oversized underlined link |

Grids that hold free text use `minmax(0, 1fr)` (not `1fr`) so words wrap instead
of forcing horizontal overflow.

---

## 6. Components

- **Header / nav** — fixed, frosted (`backdrop-filter` — the *one* sanctioned
  glass surface), `z-index: 1000`. Brand mark is a solid ink square. Active nav
  link gets a short accent underline.
- **Buttons** — `.btn-x.primary` is an **ink block** (`--heading` fill, `--bg`
  text) that flips to the accent on hover. `.btn-x.ghost` is outlined. Radius
  `6px`. No gradient fills.
- **Text links** — `.text-link`: mono, hairline underline, arrow glyph that
  nudges on hover.
- **Figures** — the hero's stat strip: big serif numbers + mono labels, divided
  by a top rule. Replaces the usual four glassy stat cards.
- **Tags** — rendered as a **mono text line** joined by `·`, not pill chips.
  Better for scanning and for applicant-tracking systems.
- **Catalogue numbering** — `Flagship — 01`, `Artifact 02 / 16`, section
  `01`–`05`. The archive/index motif.
- **Image carousel** — project cards with 2+ screenshots become a *manual*
  (no autoplay) carousel inside the same `.proj-banner` / `.proj-row-media`
  frame. Slides cross-fade; restrained circular prev/next arrows surface on
  hover/focus, with small dots below. Wired by `js/carousel.js`; the active
  `<img>` stays clickable for the lightbox. Single-image cards are unchanged.

---

## 7. Motion

Minimal and purposeful. Movement should feel like a system settling, not a
showreel.

- **Reveal on scroll** — `opacity` + `translateY(14px)`, ~`.55s`, small `d1/d2/d3`
  stagger. Replayed per view by the router.
- **Count-up** — hero figures animate from 0 to target once on view.
- **Mobile menu cascade** — the signature interaction:
  - The drawer is **anchored below the header** and revealed in place with an
    animated `clip-path` "blind," so it can **never travel across the bar**;
    `z-index: -1` tucks it behind the bar's contents.
  - Links fall in with **both staggered delay and varied speed** via per-item
    `--d` (delay) and `--spd` (duration) custom properties, so they arrive at
    different rates — a layered, parallax-like reveal. Overrides apply only
    while `.open`, so closing collapses cleanly.

```css
.nav a { --d: 0s; --spd: .5s;
  transition: opacity .4s var(--ease) var(--d),
              transform var(--spd) var(--ease) var(--d),
              color .18s var(--ease); }
.nav.open a:nth-child(1){ --d:.05s; --spd:.40s }
.nav.open a:nth-child(4){ --d:.21s; --spd:.62s }   /* etc. */
```

Everything is gated behind `@media (prefers-reduced-motion: reduce)`, which
disables all transitions and animations globally.

---

## 8. Signature details

The small, authored touches that make it specific rather than templated:

- **The accent period.** `.hero-title::after { content: "." }` in the accent —
  the name reads as a confident, closed statement.
- **The chrome chip.** A single `11px` iridescent square in the hero kicker — a
  contained, retro-futurist wink, the only "shiny" thing on the page.
- **Live-status dot** + `Now —` prefix on the standing/status line.
- **Em-dash organ.** `·` separators, `—` list bullets, and `— Org` prefixes give
  the page a consistent typographic punctuation system.

---

## 9. Responsive

Mobile-first intent, hardened against overflow (verified: `scrollWidth ===
clientWidth` at 390px).

| Breakpoint | Change |
|------------|--------|
| `≤ 880px` | Nav collapses to the clip-reveal drawer |
| `≤ 820px` | About stacks to one column |
| `≤ 760px` | Every project card stacks to `title → image → body` (full-width screenshot); catalogue rows reflow |
| `≤ 680px` | Experience & skills rows stack; date column becomes a row |
| `≤ 640px` | Footer stacks |
| `≤ 540px` | Hero CTAs full-width; figures two-up |
| `≤ 380px` | Brand sub-label hidden; figures single column |

Guardrails: `body { overflow-wrap: break-word }`, `minmax(0,1fr)` grid tracks,
and fluid `clamp()` sizing prevent long monospace strings from breaking layout.

---

## 10. Accessibility & ATS

- Semantic structure: one `h1` (name), `h2` per section, `h3` per role/project/skill.
- Skills and tags are **real text**, not icon clouds — keyword-parseable by
  applicant-tracking systems and screen readers alike.
- All imagery carries `alt`; the lightbox and search are keyboard-operable.
- Focus is always visible (`:focus-visible` accent outline).
- Color contrast holds in both themes; the accent is darkened in light mode for
  legible links.
- Honors `prefers-reduced-motion` and `prefers-color-scheme`.

---

## 11. Architecture

The site is a static, JS-rendered single-page app (GitHub Pages).

```
index.html         section shells + ids (the SPA frame)
css/site.css       the entire design system (this document made real)
data/*.js          content as globals: PROFILE, EXPERIENCE, PROJECTS, SKILLS
js/render.js       builds all section markup from the data globals
js/router.js       hash routing (#route or #route/anchor), reveal/count-up replay, deep-link flash
js/search.js       client-side index over the data
js/carousel.js     manual prev/next/dots for multi-image project cards
js/lightbox.js     project image viewer
js/main.js         theme toggle, mobile nav, sticky header, back-to-top
pages/*.html       privacy + security (reuse the same tokens)
```

**Invariants when editing** (the JS depends on these): element ids
`xp-<i>` / `proj-<i>` / `skill-<i>`; classes `.view`, `.reveal`,
`.num[data-count]`; the `.proj-thumb` / `.proj-banner` wrappers each containing
an `<img>` (lightbox); and the hero/section container ids. Keep the subpage font
link in sync with `index.html`.

---

## 12. Do / Don't

**Do**
- Lead with type and rule lines; let whitespace do the work.
- Keep color to ink, paper, and the single accent.
- Give each new section its own layout logic.
- Render tags/skills as text.
- Make any new motion subtle, fast, and reduced-motion-safe.

**Don't**
- Add glass/blur to cards, or blur anything beyond the header.
- Introduce a second accent or any multi-color gradient.
- Replace the catalogue/rows with a uniform grid of boxed cards.
- Add icons or pills "for decoration."
- Ship an animation that exists only to be seen.

---

*This document describes the system as built. When the CSS and this file
disagree, update this file — it is meant to stay alive.*
