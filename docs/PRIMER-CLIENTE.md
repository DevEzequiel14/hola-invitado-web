# Cómo sumar un evento

Este repo es `holainvitados.com`: marca, demos y cada fiesta real.

El añito de Giuliano vive en `/giuliano1-k8n2`. El casamiento de Sofía y Mateo vive en `/sofiamateo-m4q7`. Los 15 de Valentina viven en `/valentina15-n4w8`. `/giuliano`, `/casamiento` y `/quince` redirigen ahí.

## Qué no hacer

- No crear un segundo proyecto en Vercel.
- No usar los slugs `uno`, `quince`, `casamiento` ni `giuliano`.
- No poner un cliente pago en el menú ni en el sitemap.

## Pasos

1. Elegí un slug `nombreedad-codigo`, por ejemplo `jorge30-k8n2`.
   El código son 4 letras o números. Validalo con `assertClientSlug()` en `src/lib/slugs.ts`.
2. Creá el paquete en `src/events/jorge30-k8n2/`:
   datos, estilos, fotos, componentes propios y `page.astro`.
3. Enchufá la URL con `src/pages/jorge30-k8n2.astro` (unas líneas que montan el paquete).
4. El formulario hace `POST` a `/api/rsvp` con un campo oculto `slug`.
5. Registrá el evento en `src/data/paid-events.ts`:

```ts
export const paidEvents: Record<string, PaidEvent> = {
  "jorge30-k8n2": {
    slug: "jorge30-k8n2",
    honoree: "Jorge",
    rsvpClosesIso: "2027-01-01T23:59:59-03:00",
    index: false,
  },
};
```

6. En el layout de esa página, `indexable={false}` (ya manda `noindex, nofollow`).
7. En Vercel, cargá `RSVP_SHEET_WEBHOOK` y `RSVP_SHEET_SECRET`. El endpoint está en `src/pages/api/rsvp.ts` y escribe a Sheet con `src/lib/sheets.ts`.
8. No agregues el slug a `PUBLIC_PATHS` ni al filtro del sitemap, salvo que sea un ejemplo público como Giuliano, Sofía y Mateo o Valentina.

Copiá el oficio de `src/events/giuliano1-k8n2/` (secciones, RSVP, countdown), no la piel.
