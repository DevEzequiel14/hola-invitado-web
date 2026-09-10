# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro 7 + adapter de Vercel, Node 22. El plan del repo hermano lo fijó; el evento real de Giuliano sigue en el otro proyecto y no se toca.

## Users

Quien organiza una fiesta en Jujuy o el NOA (padres de un añito, familia de un quince, pareja que se casa) y hoy confirma asistencia por un grupo de WhatsApp. El trabajo es conseguir un “sí” o un “no” sin perseguir a la tía.

Audiencia secundaria: invitados que abren un link en el celular y confirman. No hay panel ni login para el anfitrión en este build.

## Product Purpose

HolaInvitado vende invitaciones web con lista de confirmados. El anfitrión habla por WhatsApp, recibe un link, los invitados confirman, y la familia ve la lista. Éxito: un mensaje de WhatsApp que pide presupuesto, y más adelante el primer evento pago en este mismo sitio.

## Positioning

No es un constructor self-service ni un marketplace de fiestas. Es un encargo hecho a medida, zona Jujuy y NOA, con un solo canal de venta (WhatsApp). La prueba que un vecino no puede copiar con Canva es una fiesta real ya publicada (Giuliano) y tres muestras de otros tipos de evento.

## Operating Context

- Marca y demos viven en `holainvitados.com` (este repo). El evento real de Giuliano sigue en `holainvitados.vercel.app/giuliano` con RSVP verdadero.
- Contacto de venta: WhatsApp `5493884849767`, con texto prearmado. No hay formulario web de leads.
- Instagram en el pie: handle aún no pasado; el hueco queda visible, no se inventa.
- Precio: planes Esencial vs Premium, “desde $X”. El número lo escribe el dueño antes de publicar; hasta entonces el hueco queda visible.
- Primer cliente pago: misma web, ruta `/nombreedad-codigo`, `noindex`, RSVP a Google Sheet copiando el molde de Giuliano. Este build no fabrica esa página vacía.

## Capabilities and Constraints

Confirmado:

- Rutas públicas: `/`, `/uno`, `/quince`, `/casamiento`, `/giuliano`.
- Slugs reservados: un cliente nunca se llama `uno`, `quince`, `casamiento` ni `giuliano`.
- Demos y réplica: sin Sheet, con aviso de que no se guarda ninguna confirmación.
- Landing celular primero, una sola página, sin CMS, sin blog, sin embed de Instagram (solo link).
- Zona de venta: Jujuy y NOA.

Abierto / no inventar:

- Monto de “desde $X” (y si Esencial y Premium tienen dos números).
- Handle o URL de Instagram.
- Permiso explícito de Selena/Martín para usar fotos de Giuliano (menor) en el sitio de venta. Sin ese OK, la réplica no publica las fotos del nene.
- Fotos reales de las demos; mientras tanto, material ilustrativo etiquetado como muestra.

## Brand Commitments

- Nombre: **HolaInvitado** (el dominio es holainvitados.com).
- Voz: cercana, concreta, del norte argentino; no jerga de SaaS.
- La `/` no hereda la selva del añito de Giuliano. Cada invitación puede tener piel propia.
- No se fabrican testimonios, precios, ni clientes.

## Evidence on Hand

- Evento real de Giuliano Donaire Escudero (primer añito, 13 de septiembre 2026, Los Alisos, Jujuy), publicado en `holainvitados.vercel.app/giuliano`. RSVP verdadero solo ahí.
- Tres ejemplos propios en repos vecinos (`example-15años`, `example-casamiento`) como referencia de oficio, no como contenido a republicar con esos nombres si el brief pide datos inventados.
- Ausencias: precio, Instagram, permiso familiar para fotos del menor en el sitio de venta, fotos libres de las demos.

## Product Principles

1. Un solo lugar para confirmar; el grupo de WhatsApp no es la lista.
2. Lo que no pasó el dueño (precio, Instagram, permiso de fotos) queda como hueco, no como invento.
3. Las fiestas no se listan entre sí: el link de un quince no muestra otras fiestas.
4. Vender es hablar por WhatsApp; la web demuestra, no captura leads.
5. El primer pago entra en este mismo repo, no en otro Vercel.

## Accessibility & Inclusion

Sitio público en español rioplatense (`es-AR`), usable en celular. Contraste legible, foco de teclado, y contenido visible sin depender de motion.
