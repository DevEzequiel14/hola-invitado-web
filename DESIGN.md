# Design

<!-- impeccable:design-schema 1 -->

## Surfaces

- `/` — marca, modo Persuade. Imprenta / planilla de confirmados.
- `/uno` `/quince` `/casamiento` — invitaciones de muestra, cada una con piel propia.
- `/giuliano` — réplica de vitrina con la paleta de selva del evento, sin RSVP y sin fotos del menor.

## Brand world (`/`)

- Paper `#E4EAF0`, sheet `#F4F7FA`, ink `#14181F`, press `#0E1218`
- Process cyan `#0073C2`, magenta `#C4126A`, confirm `#0F6B4C`
- Display: Petrona. Body: Red Hat Text.
- Radius 14px. Shadow offset + blur. No cream/gold wedding template on the marketing page.

## Type

- Landing headings: Petrona, tracking about -0.03em, display max ~4.4rem
- Body: Red Hat Text, measure ~68ch
- Invitations may load their own faces (Grandstander, Gloock, Source Serif 4, Fraunces/Nunito on Giuliano)

## Components

- WhatsApp chip and full-width buttons, pill 999px
- Guest list rows with square check
- Price and Instagram render a dashed gap when empty
- Sample banner, sticky, on every demo

## Motion

- List rows tick in once on the landing hero
- Respect `prefers-reduced-motion`
