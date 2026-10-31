---
name: Matilda Magical Butterflies
description: Pastel tea stationery card opened into a soft-girl baby shower afternoon.
colors:
  cream: "#FFF8F5"
  paper: "#FFFDFB"
  blush: "#FFB7C5"
  blush-deep: "#E98AA0"
  lilac: "#C9B6E4"
  mint: "#A8E0D0"
  gold: "#F5E6A8"
  gold-deep: "#D9C26A"
  ink: "#5C4A5A"
  plum: "#8C5878"
  field: "#FFFFFF"
  error: "#A3334D"
typography:
  display:
    fontFamily: "Birthstone, Segoe Script, cursive"
    fontSize: "clamp(5rem, 26vw, 7.4rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "normal"
  headline:
    fontFamily: "Birthstone, Segoe Script, cursive"
    fontSize: "3.4rem"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "normal"
  title:
    fontFamily: "Birthstone, Segoe Script, cursive"
    fontSize: "2.1rem"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "normal"
  body:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Onest, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  sm: "14px"
  md: "18px"
  lg: "20px"
  card: "24px"
  pill: "999px"
spacing:
  pad: "1.35rem"
  pad-wide: "1.6rem"
  section: "2.4rem"
  card-gap: "1rem"
  stage: "440px"
components:
  button-primary:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#FFC4CF"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
  button-ghost:
    backgroundColor: "#FFFDFBB3"
    textColor: "{colors.plum}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "#F5EDF8"
    textColor: "{colors.plum}"
    rounded: "{rounded.pill}"
  input-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.9rem"
    height: "48px"
  stationery-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "1.5rem 1.1rem 1.25rem"
  pastel-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "1.15rem 1.1rem 1.25rem"
---

# Design System: Matilda Magical Butterflies

Event-skin system for `/matildabb-m7w2` (`src/events/matildabb-m7w2`). Does not replace the HolaInvitado brand `DESIGN.md` at `/`.

## Overview

**Creative North Star: "The Magical Butterflies Tea Card"**

A pastel stationery invitation that opens like a tea-afternoon card: cream stock, blush–lilac–mint washes, soft gold hairlines, and watercolor butterflies living in the margins. Script carries the honoree name and section titles; Onest keeps every practical line readable on a phone. Depth comes from paper shadow and pastel ribbon accents, never from dark scrims or stadium chrome.

The world refuses stadium-club skins, cream+serif terracotta defaults, gender-reveal tropes, and floating promo badges on hero media. Butterflies are margin material and entrance craft, not stickers over type.

**Key Characteristics:**
- Cream field with fixed blush / lilac / mint radial washes
- Birthstone script for Matilda and section titles; Onest for body and UI
- Pill CTAs in blush ink; plum for secondary emphasis and links
- Soft stationery cards with a four-color pastel ribbon at the top edge
- Entrance overlay: paper card, dashed lace border, butterflies lifting away

## Colors

A soft-girl tea palette: warm cream paper, candy blush as the primary fill, lilac and mint as sister pastels, soft gold for dividers, plum ink accents for readable emphasis on cream.

### Primary
- **Blush** (`#FFB7C5`): Primary CTA fill, mute border kin, selection highlight, timeline icon cycle start. Theme color of the package.
- **Blush Deep** (`#E98AA0`): CTA border, progress active state, gallery active dot.

### Secondary
- **Lilac** (`#C9B6E4`): Sister pastel for washes, hairlines, focus rings, dashed timeline rail, second timeline icon.
- **Mint** (`#A8E0D0`): Third pastel wash, gift icon disc, RSVP done state, third timeline icon.

### Tertiary
- **Soft Gold** (`#F5E6A8`): Gold-line dividers, butterfly wing dots, fourth pastel card wash.
- **Gold Deep** (`#D9C26A`): Stationery card border and gold-line core.

### Neutral
- **Cream** (`#FFF8F5`): Page and stage field; hero cream veil (never a dark scrim).
- **Paper** (`#FFFDFB`): Overlay card, stationery surfaces, mute chip.
- **Ink** (`#5C4A5A`): Body text and script on cream.
- **Plum** (`#8C5878`): Accent links, secondary labels, hashtag, dress note.
- **Field** (`#FFFFFF`): Form control fill.
- **Error** (`#A3334D`): RSVP form error status only.

### Named Rules
**The Cream Veil Rule.** Hero photography softens with cream gradients only. Never darken the first viewport to force contrast.
**The Pastel Quartet Rule.** Blush, lilac, mint, and soft gold share atmospheric duty; blush alone owns primary actions.
**The Plum Voice Rule.** Plum is the readable accent on cream (links, secondary lines, notes)—not a second CTA fill.

## Typography

**Display Font:** Birthstone (with Segoe Script, cursive)
**Body Font:** Onest (with system-ui, sans-serif)

**Character:** Hand-lettered party script for names and titles; a clear geometric sans for tea-time logistics so the pastel field never costs legibility.

### Hierarchy
- **Display** (400, `clamp(5rem, 26vw, 7.4rem)` / desktop up to `9rem`, lh 0.9): Hero and overlay honoree script only.
- **Headline** (400, `3.4rem`, lh 0.95): Section titles in Birthstone.
- **Title** (400, `2.1rem`, lh 0.95): Card headings inside story / place / game blocks.
- **Body** (400, `1rem`, lh 1.6): Running copy; ledes capped near `34ch`.
- **Label** (600, ~`0.8–0.95rem`, tracking `0.16em`, uppercase): Date line, timeline labels, RSVP step labels, overlay welcome cue.

### Named Rules
**The Script-For-Names Rule.** Birthstone is for Matilda, section titles, hashtag, and gift lede flourish—not for buttons, form labels, or addresses.
**The Readable Tea Rule.** Every practical line (place, time, RSVP, maps) stays in Onest at comfortable size on a 440px stage.

## Layout

Mobile-first phone stage (`440px`) centered on cream; desktop opens the stage to full width with a translucent cream `sheet` (`max ~68rem`) and a nested `invite-column` still capped at `440px`. Section padding `2.4rem` × `--pad` (`1.35rem` / `1.6rem` wide). Gallery becomes a 3-column masonry grid from `900px` up; elsewhere it is a horizontal snap track. One composition per section: title, short lede, then the interaction or content block.

### Named Rules
**The Phone Card Rule.** Invitation content reads as one tall stationery column; wide breakpoints frame that column rather than spreading copy into dashboard grids.

## Elevation & Depth

Paper lift plus pastel atmosphere. No hard offset shadows. Depth is soft ink-tinted umbra on the stage and stationery cards, cream veils over photography, and butterfly drop-shadows.

### Shadow Vocabulary
- **Stage / stationery** (`0 24px 60px` ink at 16%): Stage phone column and place / gift / RSVP cards.
- **Soft chip** (`0 10px 28px` ink at 10%): Mute control, countdown chips (if present), light cards at rest.
- **CTA blush** (`0 6px 16px` blush-deep at 32%; hover `0 8px 20px` at 40%): Primary button only.
- **Butterfly** (`drop-shadow(0 4px 8px)` / hero `0 8px 14px` ink): Margin butterflies.

### Named Rules
**The Soft Lift Rule.** Hover may raise a pastel card (`translateY(-3px)`) into the stronger shadow; rest state stays soft. No neobrutalist hard offsets.

## Shapes

Gentle stationery geometry: content cards at `20px`, overlay card at `24px`, form fields at `14px`, CTAs and mute as full pills / circles. Gallery slides wear a `5px` paper mat. Ribbon accent on stationery cards is a flat `6px` blush→lilac→mint→gold strip, not a badge.

### Named Rules
**The Pill Action Rule.** Primary and ghost actions are capsules (`999px`), never square ticket stamps from the brand landing.

## Components

### Buttons
- **Shape:** Full pill (`999px`), min-height `48px`, padding `0.75rem 1.5rem`, weight 600.
- **Primary:** Blush fill, ink text, blush-deep border, soft blush umbra.
- **Ghost:** Paper wash, plum text, lilac border; hover into lilac-soft.
- **Hover / Focus:** `translateY(-1px)`; focus-visible `3px` lilac ring (`outline-offset: 3px`).

### Cards / Containers
- **Pastel cards** (story, games, practical, dress): `20px` radius, lilac hairline, soft shadow; nth-child washes cycle blush / lilac / mint / gold soft mixes.
- **Stationery cards** (place, gifts, RSVP): Paper fill, gold-deep border, stronger shadow, pastel ribbon `::before`.
- **Internal padding:** ~`1.1–1.5rem`.

### Inputs / Fields
- **Style:** White field, ink text, `14px` radius, ink-28% border, min-height `48px`.
- **Focus:** Lilac outline + plum border.
- **Choice chips:** Same radius; checked state fills blush with blush-deep border.
- **Error:** Status text in error crimson; do not recolor the whole form.

### Navigation
No persistent nav chrome. In-page anchors (Confirmar, maps). Mute is a fixed circular paper chip with plum iconography.

### Signature: Overlay tea card
Centered paper card (`max 22rem`) with dashed lilac inner border, lace-edge whisper, margin butterflies, Birthstone name, gold gradient rule, and pill open CTA—opens upward and dissolves into the invitation.

### Signature: Butterfly
Reusable SVG / plate asset; wing fills from blush/lilac/mint/gold tokens; lives in overlay and hero margins only—never as a floating badge over the CTA.

## Do's and Don'ts

### Do:
- **Do** keep Matilda as the hero-level Birthstone signal; "Baby shower" stays a secondary Onest line under the name.
- **Do** use cream veils and pastel washes for atmosphere; butterflies stay in the margins.
- **Do** cycle blush / lilac / mint / gold on timeline icons and pastel card washes so the quartet stays visible without competing with the CTA.
- **Do** honor `prefers-reduced-motion`: freeze flutter, sash, and overlay transitions.

### Don't:
- **Don't** darken the hero photo with black or navy scrims.
- **Don't** put detached badges, chips, or promo stickers on hero or overlay media.
- **Don't** inherit HolaInvitado landing ticket stamps, wine/champagne CTAs, or Saira Condensed into this skin.
- **Don't** swap Birthstone onto buttons, form labels, or address blocks.
- **Don't** introduce gender-reveal tropes (blue/pink binary reveals, stadium confetti skins) into this world.
