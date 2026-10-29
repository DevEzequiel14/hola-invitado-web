# Cómo sumar un evento

Este repo es `holainvitados.com`: marca, demos y cada fiesta real.

El añito de Giuliano vive en `/giuliano1-k8n2`. El casamiento de Sofía y Mateo vive en `/sofiamateo-m4q7`. Los 15 de Valentina viven en `/valentina15-n4w8`. Los 18 de Federico viven en `/federico18-n3x8`. Los 50 de Eduardo viven en `/eduardo50-b0ca`. `/giuliano`, `/casamiento` y `/quince` redirigen ahí.

## Qué no hacer

- No crear un segundo proyecto en Vercel.
- No usar los slugs `uno`, `quince`, `casamiento` ni `giuliano`.
- No poner un cliente pago en el menú, en el home ni en el sitemap.

## Seguridad (cliente contratado)

1. Slug opaco `nombreedad-codigo` (4 chars al final). Validalo con `assertClientSlug()`.
2. En el `event.ts`: `indexable: false`.
3. En `paid-events.ts` usá `privatePaidEvent({ slug, honoree, rsvpClosesIso })` → `index: false`, `showcase: false`.
4. **No** agregues el slug a `PUBLIC_PATHS` en `src/lib/slugs.ts` (sitemap + marketing).
5. El link se comparte por WhatsApp; no desde la landing.

Si `showcase`/`index` quedan en false pero el path está en `PUBLIC_PATHS`, el build falla a propósito.

## Pasos

1. Elegí un slug `nombreedad-codigo`, por ejemplo `jorge30-k8n2`.
2. Creá el paquete en `src/events/jorge30-k8n2/`.
3. Enchufá la URL con `src/pages/jorge30-k8n2.astro`.
4. El formulario hace `POST` a `/api/rsvp` con `slug` (y honeypot). Incluí `<TurnstileField />` si vas a activar captcha.
5. Registrá el evento:

```ts
import { privatePaidEvent } from "./paid-events";

export const paidEvents: Record<string, PaidEvent> = {
  // …
  "jorge30-k8n2": privatePaidEvent({
    slug: "jorge30-k8n2",
    honoree: "Jorge",
    rsvpClosesIso: "2027-01-01T23:59:59-03:00",
  }),
};
```

6. Layout: `indexable={false}` (manda `noindex, nofollow`).
7. En Vercel:
   - `RSVP_SHEET_WEBHOOK` + `RSVP_SHEET_SECRET` (script en `docs/rsvp-apps-script.gs`; el Script **debe** rechazar sin secret).
   - `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` (rate limit IP + tope por slug).
   - Opcional ante spam: `PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY`.

Copiá el oficio de `src/events/giuliano1-k8n2/` (secciones, RSVP, countdown), no la piel.
