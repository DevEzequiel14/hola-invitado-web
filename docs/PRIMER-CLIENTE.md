# Primer cliente pago

El evento real de Giuliano sigue en `https://holainvitados.vercel.app/giuliano`.
Este repo es `holainvitados.com`: marca, demos y, cuando entre el primer pago, la invitación real.

## Qué no hacer

- No crear un segundo proyecto en Vercel.
- No usar los slugs `uno`, `quince`, `casamiento` ni `giuliano`.
- No poner la fiesta paga en el menú ni en el sitemap.

## Pasos

1. Elegí un slug `nombreedad-codigo`, por ejemplo `jorge30-ok89`.
   Validalo con `assertClientSlug()` en `src/lib/slugs.ts`.
2. Copiá una demo (`/uno`, `/quince` o `/casamiento`) a `src/pages/jorge30-ok89.astro`.
3. Cambiá los datos inventados por los reales.
4. Reemplazá `MockRsvp` por un formulario que haga `POST` a `/api/rsvp` con un campo oculto `slug`.
5. Registrá el evento en `src/data/paid-events.ts`:

```ts
export const paidEvents: Record<string, PaidEvent> = {
  "jorge30-ok89": {
    slug: "jorge30-ok89",
    honoree: "Jorge",
    rsvpClosesIso: "2027-01-01T23:59:59-03:00",
    index: false,
  },
};
```

6. En el layout de esa página, `indexable={false}` (ya manda `noindex, nofollow`).
7. En Vercel, cargá `RSVP_SHEET_WEBHOOK` y `RSVP_SHEET_SECRET`. El endpoint está en `src/pages/api/rsvp.ts` y escribe a Sheet con `src/lib/sheets.ts`.
8. No agregues el slug a `PUBLIC_PATHS` ni al filtro del sitemap.

La confirmación de Giuliano nunca se mueve a este sitio.
