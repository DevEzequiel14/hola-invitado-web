# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro 7 + adapter de Vercel, Node 22. El plan del repo hermano lo fijó; el evento real de Giuliano sigue en el otro proyecto y no se toca.

## Users

Quien organiza una celebración (cumple, bautismo, quince, casamiento, fiesta o juntada) y quiere una invitación web para ese evento. El trabajo es que vea la tarjeta, la recorra, y pida la suya.

La confirmación es una función de la tarjeta, no el producto. El lugar de la fiesta no filtra al cliente. WhatsApp es el canal de venta.

Audiencia secundaria: invitados que abren un link en el celular, recorren la invitación y confirman. No hay panel ni login para el anfitrión en este build.

## Product Purpose

HolaInvitado vende invitaciones web. El anfitrión habla por WhatsApp, recibe un link, los invitados recorren la tarjeta y pueden confirmar. Éxito: un mensaje de WhatsApp que pide presupuesto, y más adelante el primer evento pago en este mismo sitio.

## Positioning

No es un constructor self-service ni un marketplace de fiestas. Es un encargo a medida, para cualquier lugar, con un solo canal de venta (WhatsApp). La landing muestra la tarjeta (hero + cuatro muestras, Giuliano entre ellas) y lo que puede llevar: confirmación de base y extras.

## Operating Context

- Marca y demos viven en `holainvitados.com` (este repo). El evento real de Giuliano sigue en `holainvitados.vercel.app/giuliano` con RSVP verdadero.
- Contacto de venta: WhatsApp `5493884849767`, con texto prearmado. No hay formulario web de leads.
- Instagram en el pie: handle aún no pasado; no se muestra hasta tenerlo, no se inventa.
- Precio: no se publica un número fijo en la landing. Los planes Esencial y Premium se consultan por WhatsApp para ajustar alcance y presupuesto.
- Primer cliente pago: misma web, ruta `/nombreedad-codigo`, `noindex`, RSVP a Google Sheet copiando el molde de Giuliano. Este build no fabrica esa página vacía.

## Capabilities and Constraints

Confirmado:

- Rutas públicas: `/`, `/uno`, `/quince`, `/casamiento`, `/giuliano`.
- Slugs reservados: un cliente nunca se llama `uno`, `quince`, `casamiento` ni `giuliano`.
- Demos y réplica: sin Sheet, con aviso de que no se guarda ninguna confirmación.
- Landing celular primero, una sola página, sin CMS, sin blog, sin embed de Instagram (solo link).
- Sin recorte geográfico de venta: el cliente puede estar en cualquier lugar.

Abierto / no inventar:

- Handle o URL de Instagram.
- Permiso explícito de Selena/Martín para usar fotos de Giuliano (menor) en el sitio de venta. Sin ese OK, la réplica no publica las fotos del nene.
- Fotos reales de las demos; mientras tanto, material ilustrativo etiquetado como muestra.

## Brand Commitments

- Nombre: **HolaInvitado** (el dominio es holainvitados.com).
- Voz: cercana, concreta, español argentino (vos); no jerga de SaaS ni de servicio local.
- La `/` no hereda la selva del añito de Giuliano. Cada invitación puede tener piel propia.
- No se fabrican testimonios, precios, ni clientes.

## Evidence on Hand

- Evento real de Giuliano Donaire Escudero (primer añito, 13 de septiembre 2026, Los Alisos, Jujuy), publicado en `holainvitados.vercel.app/giuliano`. RSVP verdadero solo ahí.
- Tres ejemplos propios en repos vecinos (`example-15años`, `example-casamiento`) como referencia de oficio, no como contenido a republicar con esos nombres si el brief pide datos inventados.
- Ausencias: Instagram, permiso familiar para fotos del menor en el sitio de venta, fotos libres de las demos.

## Product Principles

1. Se vende la invitación. La confirmación y los extras son de la tarjeta, no el titular.
2. Lo que no pasó el dueño (Instagram, permiso de fotos) queda como hueco, no como invento.
3. Las fiestas no se listan entre sí: el link de un quince no muestra otras fiestas.
4. Vender es hablar por WhatsApp; la web demuestra, no captura leads.
5. El primer pago entra en este mismo repo, no en otro Vercel.

## Accessibility & Inclusion

Sitio público en español rioplatense (`es-AR`), usable en celular. Contraste legible, foco de teclado, y contenido visible sin depender de motion.
