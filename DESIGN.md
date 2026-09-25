---
name: HolaInvitado
description: Warm-night entrada ticket on a quiet dotted field.
colors:
  night: "#1A1512"
  ticket: "#2A221C"
  ink: "#F6F3EE"
  ink-soft: "#E4D9CC"
  wine: "#A63D4D"
  wine-pressed: "#7A2E3A"
  champagne: "#E0C07A"
  champagne-pressed: "#EBD19A"
  amber: "#D48A48"
  olive: "#4A4034"
  green: "#86C28A"
  stamp-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Saira Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.6rem, 9vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Saira Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2rem, 7vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Saira Condensed, Arial Narrow, sans-serif"
    fontSize: "2.1rem"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Karla, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Saira Condensed, Arial Narrow, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.06em"
rounded:
  stamp: "3px"
  sm: "8px"
  ticket: "14px"
  phone: "1.4rem"
  phone-screen: "1.08rem"
  pill: "999px"
spacing:
  tight: "0.42rem"
  sm: "0.7rem"
  md: "1.25rem"
  lg: "1.8rem"
  quarry: "2.4rem"
  perf: "22px"
  aurora-gutter: "28px"
components:
  button-blue:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.stamp-white}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "0.7rem 1.15rem"
    height: "3.1rem"
  button-blue-hover:
    backgroundColor: "{colors.wine-pressed}"
    textColor: "{colors.stamp-white}"
    rounded: "{rounded.stamp}"
  button-gold:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.night}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "0.7rem 1.15rem"
    height: "3.1rem"
  button-gold-hover:
    backgroundColor: "{colors.champagne-pressed}"
    textColor: "{colors.night}"
    rounded: "{rounded.stamp}"
  button-pink:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.stamp-white}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "0.7rem 1.15rem"
    height: "3.1rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "0.7rem 1.15rem"
    height: "3.1rem"
  chip-whatsapp:
    backgroundColor: "{colors.green}"
    textColor: "{colors.night}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.95rem"
    height: "2.6rem"
  chip-whatsapp-hover:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.night}"
    rounded: "{rounded.pill}"
  ticket-stock:
    backgroundColor: "{colors.ticket}"
    textColor: "{colors.ink}"
    rounded: "{rounded.ticket}"
    padding: "1.8rem 1.25rem 1.9rem"
  tear-stub:
    backgroundColor: "{colors.ticket}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0.72rem 0.9rem 0.72rem 1.15rem"
---

# Design System: HolaInvitado

## Overview

**Creative North Star: "The Warm Night Entrada Ticket"**

HolaInvitado’s brand world is a night door: a thermal ticket held up against a quiet hexagonal dot field. The floor is warm night. Soft wine, chocolate, and champagne washes drift slowly behind the mesh — never a neon bloom — and every piece of UI is ticket stock punched, perforated, or torn so that field shows through. Density is mobile-first and quarry-like: centered slabs of carbon ticket, then air, then another slab. It is not a print shop, not a wedding suite, and not a jungle vitrine.

Personality is loud at the stamp and quiet in the copy. Headlines are condensed, uppercase, and short enough to fit a stub. Body copy is Karla, concrete, and never tries to compete with the field. Motion is physical and slow: the dots drift, torn names slide in, a clock hand ticks. Prefer-reduced-motion kills all three.

`/giuliano1-k8n2` is a one-off event skin (jungle vitrine, Fraunces/Nunito, sand and leaf). `/sofiamateo-m4q7` is a one-off wedding skin (garden suite, Fraunces/Great Vibes/Outfit, sage and ivory). `/valentina15-n4w8` is a one-off quince skin (garden party, Cormorant Garamond/Nunito, sage and dusty rose). `/giuliano`, `/casamiento` and `/quince` redirect there. They are not this system. The remaining demo invitation (`/uno`) keeps the night floor, dotted field, and ticket chassis, then steals one accent hue and a party-specific display face. Brand surfaces never inherit those party faces.

**Key Characteristics:**
- Hexagonal night dots over muted wine / chocolate / champagne washes; CSS drift ~56s, no hue-rotate; `html` is solid warm night (#1A1512)
- Carbon ticket stock with 14px corners, 22px perforated gutters, and one-name-per-tear stubs
- Saira Condensed uppercase stamps against Karla body
- Each accent hue is stolen once (chip, stub, demo, clock) — never used as a page fill
- Thermal action stamps at 3px radius; the WhatsApp chip is the only pill
- Centered bands with quarry gaps; `band-open` sections let the aurora read as the page

## Colors

The palette is a warm night door: one near-black floor, one carbon ticket, warm ivory type, and accent hues sampled from wine, champagne, and amber.

### Primary
- **Wine**: Entrance stamp and chrome. Primary actions, closing stamp, text selection, and the scrollbar thumb. Hover deepens to wine-pressed. It is the first aurora stop after night, not a neon red.

### Secondary
- **Champagne**: The stolen metal for the wordmark’s second half, focus rings, footer links, dashed price/Instagram gaps, the clock-face rim, gold stamps, and the casamiento stub. The caret is champagne.

### Tertiary
- **Amber**: Second problem-line, the uno demo stub, and Uno’s stolen hue. Warmer than thermal orange; never electric.
- **Confirm Green**: WhatsApp chip only. Mate leaf, not laser green. Hover on that chip flips to champagne, not a darker green.
- **Olive**: Giuliano’s brand-stub fill on `/` only. Not a button, not a page fill.

### Neutral
- **Warm Night**: The floor. `html`/`body` sit on it; theme-color is this black.
- **Ticket Stock**: Every band, ticket, tear, and plan stub. Slightly lifted off night so perforations read.
- **Ticket Ivory**: Primary type on ticket and night.
- **Stub Kraft**: Soft body, waiting tears, footer meta.
- **Stamp White**: Type on wine stamps only.

### Named Rules
**The Stolen Hue Rule.** The aurora carries wine, chocolate, and champagne washes. A surface may steal one hue (amber, wine, champagne, or olive; a green chip; a wine stamp). Never fill a page with a single aurora color.

**The Night Floor Rule.** Brand pages sit on warm night with ticket stock. Do not bring back print-shop paper, process cyan, process magenta, club neon, cream wedding, or Giuliano jungle fills onto `/` or other brand chrome.

## Typography

**Display Font:** Saira Condensed (with Arial Narrow, sans-serif)
**Body Font:** Karla (with Segoe UI, system-ui, sans-serif)

**Character:** Condensed athletic stamps for anything that would be printed on a stub; human, slightly round Karla for the sentence that explains the stamp. Loaded weights: Saira 600/700, Karla 400/700 and italic 400.

### Hierarchy
- **Display** (700, clamp 2.6rem–4.6rem, line-height 0.9, tracking -0.02em, uppercase, max ~14ch): Hero ticket headline only.
- **Headline** (700, clamp 2rem–3.2rem, line-height 0.95, tracking -0.02em, uppercase, max ~16ch): Band titles.
- **Title** (700, ~2rem–2.1rem, uppercase): Plan names, proof card title. Demo stubs land slightly smaller (~1.55rem) in the same voice.
- **Body** (400, 1rem, line-height 1.5, measure 68ch on bands; hero and close tighten to ~36–38ch): Karla. Soft ink for supporting lines.
- **Label** (700, ~1.15rem, tracking 0.04em–0.08em, uppercase): Buttons, wordmark, stub headers, clock hour labels, tears. Tabular numerals on tears.

### Named Rules
**The Condensed Stamp Rule.** If it is a headline, a button, a stub, or the mark, it is Saira Condensed, uppercase, tight leading. Karla never shouts. Party faces (Grandstander, Gloock, Source Serif 4) stay inside their demo skins; Fraunces and Nunito stay inside `/giuliano1-k8n2`.

## Layout

Mobile-first, one column. The hero is a full-viewport ticket (`min-height: calc(100svh - 5.2rem)`) centered in the aurora. On viewports from 880px up, the hero ticket splits into body | 22px perforation | stub column; plan tickets split the same way with a 28px aurora gutter between Esencial and Premium.

Bands are centered ticket stock at `min(40rem, calc(100% - 2.3rem))`, stacked with ~2.1rem between them and a larger quarry gap (~2.4rem) after the hero cluster. `band-open` widens to `min(52rem, …)`, drops the fill and shadow, and lets headlines sit directly on the aurora with a dark text-shadow. Horizontal padding is 1.25rem, 2.5rem from 880px.

The four steps are a clock, not a vertical list: 12 / 3 / 6 / 9 around a 6.4rem gold-rimmed face. Demo stubs overlap in a row (`margin-left: -0.85rem`), rotated, bottom-aligned. Empty price and Instagram values render as a dashed gold gap, never as invented content.

## Elevation & Depth

Depth is a nightclub doorway: one heavy ticket shadow, then overlapping stubs, then the aurora behind the holes. There is no layered card stack and no hard offset shadow.

### Shadow Vocabulary
- **Ticket drop** (`box-shadow: 0 22px 40px rgba(0, 0, 0, 0.45)`): Ticket bodies, bands, tears, plans, demo stubs, proof card.
- **Stamp halo** (`text-shadow: 0 2px 14px rgba(0, 0, 0, 0.7)` / `0 2px 10px rgba(0, 0, 0, 0.85)`): Wordmark and open-band type sitting on the aurora.
- **Ghost inset** (`box-shadow: inset 0 0 0 1.5px rgba(246, 243, 238, 0.35)`): Ghost stamp only.

### Named Rules
**The One Shadow Rule.** Ticket stock uses the single 22/40 drop. Do not add a second elevation scale. Overlap and perforation make the depth; extra shadows do not.

## Shapes

Ticket stock uses gently clipped corners (14px). A full ticket is 14px all around; a hero that still has its stub attached rounds only the outer corners (top on small screens, left/right at 880px+). Perforations are 7–8px punched holes on a 22px or 24px pitch (28px pitch in the plan aurora gutter). Tears and plan stubs bite a 6px half-circle out of the left edge.

Action stamps are almost square (3px) — thermal printer, not app chrome. The WhatsApp chip is the only pill (999px). Skip-link uses 8px. The clock face is a circle. Demo RSVP fields (invite skins only) use 12px inputs and full-width pills; that language does not migrate onto `/`.

### Named Rules
**The Thermal Stamp Rule.** Brand actions are 3px condensed stamps. The green WhatsApp chip stays a small pill in the top bar. Do not pill the marketing buttons.

## Components

### Buttons
Thermal stamps: condensed uppercase, 3px corners, min-height 3.1rem, padding 0.7rem 1.15rem, tracking 0.06em, no border.
- **Shape:** Almost-square thermal clip (3px)
- **Blue:** Wine on stamp white. Hover/focus-visible: wine-pressed. Class name kept.
- **Gold:** Champagne on warm night. Hover/focus-visible: champagne-pressed
- **Pink:** Wine on stamp white (closing ticket). Class name kept.
- **Ghost:** Transparent with the 1.5px ivory inset ring
- **Hover / Focus:** Color shift only (no lift). Keyboard focus-visible on the page is a 3px champagne outline, offset 3px

### Chips
- **Style:** WhatsApp chip — confirm green on warm night, 999px, min-height 2.6rem, Karla 700 at 0.92rem, optional 16px WhatsApp mark
- **State:** Hover/focus-visible flips the fill to ticket gold. It is a compact top-bar control, never full-width

### Cards / Containers
- **Corner Style:** 14px ticket clip
- **Background:** Ticket stock, or transparent when `band-open`
- **Shadow Strategy:** Ticket drop; none on open bands and on the stub-band wrapper
- **Border:** None on tickets. FAQ rows use a 1px dashed ivory at 20% opacity. Casamiento demo header may hairline gold; that is skin, not brand
- **Internal Padding:** Band ~1.8rem / 1.25rem; hero body ~2rem / 1.25rem (2.4rem / 1.8rem from 880px)

### Inputs / Fields
Brand `/` has no lead form. On demo tickets only: transparent fields, 12px corners, 1.5px ivory ring at 28% opacity, gold caret, min-height 2.9rem. RSVP submit is a full-width pill in the stolen hue — event skin, not a brand stamp.

### Navigation
Top bar: space-between, 1rem / 1.25rem (2.5rem sides from 880px). Wordmark is Saira Condensed 1.35rem uppercase; the second word is champagne. No hamburger, no secondary nav. Footer is open on the aurora; links are champagne 700. Sticky sample banner on demos: near-opaque night bar, champagne link.

### Ticket hero
Signature. Headline + supporting line + stamps on ticket body; 22px perforated gutter; the stub column is a phone showing a real invitation (Sofía y Mateo) as it opens on a celular. Brand chrome around it stays Saira and Karla.

### Clock
Signature for the four steps. CSS grid 1fr / 6.4rem / 1fr. Champagne 2px circular face, wine hand, 12s linear rotation. Copy at 12, 3, 6, 9 — not a numbered list.

### Demo stubs
Three phones — cumple, quince, casamiento — each showing a real first screen of that invitation. Graphite bezel, champagne hairline, island, captured mobile viewport. Hover/focus-visible does not invent a second elevation; the link is the phone.

### Plan ticket
Two punched stubs with a 28px aurora gutter at 880px+ (22px hole row on small screens). Price line is “Presupuesto por WhatsApp” to keep pricing consultative.

## Do's and Don'ts

### Do:
- **Do** keep the night dotted field (hex mesh, muted wine/chocolate/champagne, slow drift, no hue-rotate) unless `prefers-reduced-motion`.
- **Do** build brand UI as ticket stock: 14px clip, perforations, left-edge bites, one 22/40 drop.
- **Do** set actions in Saira Condensed uppercase at 3px radius; keep the WhatsApp chip as the small green pill.
- **Do** leave empty price and Instagram as dashed gold gaps.
- **Do** give each demo one stolen accent hue and its own display face, still sitting on night + ticket + dotted field.
- **Do** honor `prefers-reduced-motion` by freezing aurora, tears, and the clock hand.

### Don't:
- **Don't** revive the old print-shop world (paper, process cyan/magenta, Petrona, Red Hat Text).
- **Don't** fold Giuliano jungle tokens (sand, cream, leaf, bark, Fraunces, Nunito) into brand pages.
- **Don't** fill a section with a rainbow bloom, hue-rotate cycle, club neon, or a single wash.
- **Don't** pill marketing buttons or use 3px stamps on the WhatsApp chip.
- **Don't** add a second shadow system, hard offset shadows, or a kicker/eyebrow layer above headlines.
- **Don't** invent prices, Instagram handles, or testimonials to fill gaps.
