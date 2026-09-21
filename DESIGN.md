---
name: HolaInvitado
description: Nightclub entrada ticket on a quiet dotted night field.
colors:
  night: "#0A0A0A"
  ticket: "#101114"
  ink: "#F6F3EE"
  ink-soft: "#D7CFC4"
  blue: "#2979FF"
  blue-pressed: "#1565C0"
  pink: "#FF80AB"
  orange: "#FF6D00"
  gold: "#FFD600"
  gold-pressed: "#FFE566"
  green: "#00E676"
  indigo: "#3D5AFE"
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
    backgroundColor: "{colors.blue}"
    textColor: "{colors.stamp-white}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "0.7rem 1.15rem"
    height: "3.1rem"
  button-blue-hover:
    backgroundColor: "{colors.blue-pressed}"
    textColor: "{colors.stamp-white}"
    rounded: "{rounded.stamp}"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.night}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "0.7rem 1.15rem"
    height: "3.1rem"
  button-gold-hover:
    backgroundColor: "{colors.gold-pressed}"
    textColor: "{colors.night}"
    rounded: "{rounded.stamp}"
  button-pink:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.night}"
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
    backgroundColor: "{colors.gold}"
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

**Creative North Star: "The Nightclub Entrada Ticket"**

HolaInvitado’s brand world is a nightclub door: a thermal ticket held up against a quiet hexagonal dot field. The floor is club night. Soft blue, indigo, and pink washes drift slowly behind the mesh — never a rainbow bloom — and every piece of UI is ticket stock punched, perforated, or torn so that field shows through. Density is mobile-first and quarry-like: centered slabs of carbon ticket, then air, then another slab. It is not a print shop, not a wedding suite, and not a jungle vitrine.

Personality is loud at the stamp and quiet in the copy. Headlines are condensed, uppercase, and short enough to fit a stub. Body copy is Karla, concrete, and never tries to compete with the field. Motion is physical and slow: the dots drift, torn names slide in, a clock hand ticks. Prefer-reduced-motion kills all three.

`/giuliano` is a one-off event skin (jungle vitrine, Fraunces/Nunito, sand and leaf). It is not this system. Demo invitations (`/uno`, `/quince`, `/casamiento`) keep the night floor, dotted field, and ticket chassis, then steal one accent hue and a party-specific display face. Brand surfaces never inherit those party faces.

**Key Characteristics:**
- Hexagonal night dots over muted blue / indigo / pink washes; CSS drift ~56s, no hue-rotate; `html` is solid club night
- Carbon ticket stock with 14px corners, 22px perforated gutters, and one-name-per-tear stubs
- Saira Condensed uppercase stamps against Karla body
- Each accent hue is stolen once (chip, stub, demo, clock) — never used as a page fill
- Thermal action stamps at 3px radius; the WhatsApp chip is the only pill
- Centered bands with quarry gaps; `band-open` sections let the aurora read as the page

## Colors

The palette is a nightclub door light: one black floor, one carbon ticket, warm ivory type, and accent hues sampled from the dotted field.

### Primary
- **Club Blue**: Entrance stamp and chrome. Primary actions, text selection, and the scrollbar thumb. Hover deepens to blue-pressed. It is the first aurora stop after night, not a corporate blue.

### Secondary
- **Neon Pink**: The stolen hue for the wordmark’s second half, the clock hand, the closing stamp, and the quince demo stub. Use it as a puncture, not a wash.

### Tertiary
- **Ticket Gold**: Focus rings, footer links, dashed price/Instagram gaps, the clock-face rim, gold stamps, and the casamiento stub. The caret is gold.
- **Thermal Orange**: Second problem-line and the uno demo stub.
- **Confirm Green**: WhatsApp chip only (and the aurora stop it came from). Hover on that chip flips to gold, not a darker green.
- **Aurora Indigo**: Last stop of the radial field. Not a button, not a fill, not a border.

### Neutral
- **Club Night**: The floor. `html`/`body` sit on it; theme-color is this black.
- **Ticket Stock**: Every band, ticket, tear, and plan stub. Slightly lifted off night so perforations read.
- **Ticket Ivory**: Primary type on ticket and night.
- **Stub Kraft**: Soft body, waiting tears, footer meta.
- **Stamp White**: Type on club-blue stamps only.

### Named Rules
**The Stolen Hue Rule.** The aurora always carries all seven stops. A surface may steal one hue (orange or pink or gold, a green chip, a blue stamp). Never fill a page with a single aurora color.

**The Night Floor Rule.** Brand pages sit on club night with ticket stock. Do not bring back print-shop paper, process cyan, process magenta, cream wedding, or Giuliano jungle fills onto `/` or other brand chrome.

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
**The Condensed Stamp Rule.** If it is a headline, a button, a stub, or the mark, it is Saira Condensed, uppercase, tight leading. Karla never shouts. Party faces (Grandstander, Gloock, Source Serif 4) stay inside their demo skins; Fraunces and Nunito stay inside `/giuliano`.

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
- **Blue:** Club blue on stamp white. Hover/focus-visible: blue-pressed
- **Gold:** Ticket gold on club night. Hover/focus-visible: gold-pressed
- **Pink:** Neon pink on club night (closing ticket)
- **Ghost:** Transparent with the 1.5px ivory inset ring
- **Hover / Focus:** Color shift only (no lift). Keyboard focus-visible on the page is a 3px gold outline, offset 3px

### Chips
- **Style:** WhatsApp chip — confirm green on club night, 999px, min-height 2.6rem, Karla 700 at 0.92rem, optional 16px WhatsApp mark
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
Top bar: space-between, 1rem / 1.25rem (2.5rem sides from 880px). Wordmark is Saira Condensed 1.35rem uppercase; the second word is neon pink. No hamburger, no secondary nav. Footer is open on the aurora; links are gold 700. Sticky sample banner on demos: near-opaque night bar, gold link.

### Ticket hero
Signature. Headline + supporting line + stamps on ticket body; 22px perforated gutter; the stub column is a peek of a real invitation (Uno), not a guest list. That peek may steal Uno’s orange and Grandstander inside `.hero-card` only. Brand chrome around it stays Saira and Karla.

### Clock
Signature for the four steps. CSS grid 1fr / 6.4rem / 1fr. Gold 2px circular face, neon-pink hand, 12s linear rotation. Copy at 12, 3, 6, 9 — not a numbered list.

### Demo stubs
Overlapping torn passes, each stealing one hue (orange / pink / gold) with night type. Rotations about -8deg / 2deg / 7deg. Hover/focus-visible: flatten to 0deg and lift 6px.

### Plan ticket
Two punched stubs with a 28px aurora gutter at 880px+ (22px hole row on small screens). Price line is “Presupuesto por WhatsApp” to keep pricing consultative.

## Do's and Don'ts

### Do:
- **Do** keep the night dotted field (hex mesh, muted blue/indigo/pink, slow drift, no hue-rotate) unless `prefers-reduced-motion`.
- **Do** build brand UI as ticket stock: 14px clip, perforations, left-edge bites, one 22/40 drop.
- **Do** set actions in Saira Condensed uppercase at 3px radius; keep the WhatsApp chip as the small green pill.
- **Do** leave empty price and Instagram as dashed gold gaps.
- **Do** give each demo one stolen accent hue and its own display face, still sitting on night + ticket + dotted field.
- **Do** honor `prefers-reduced-motion` by freezing aurora, tears, and the clock hand.

### Don't:
- **Don't** revive the old print-shop world (paper, process cyan/magenta, Petrona, Red Hat Text).
- **Don't** fold Giuliano jungle tokens (sand, cream, leaf, bark, Fraunces, Nunito) into brand pages.
- **Don't** fill a section with a rainbow bloom, hue-rotate cycle, or a single neon wash.
- **Don't** pill marketing buttons or use 3px stamps on the WhatsApp chip.
- **Don't** add a second shadow system, hard offset shadows, or a kicker/eyebrow layer above headlines.
- **Don't** invent prices, Instagram handles, or testimonials to fill gaps.
