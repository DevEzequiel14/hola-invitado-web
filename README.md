# HolaInvitado (web de marca)

Sitio de **holainvitados.com**: invitaciones web a medida, con confirmación de invitados.

El evento real de Giuliano **no está acá**. Sigue en [holainvitados.vercel.app/giuliano](https://holainvitados.vercel.app/giuliano).

Producción de esta marca: [hola-invitado-web.vercel.app](https://hola-invitado-web.vercel.app). Cuando exista `holainvitados.com`, apunta a **este** proyecto, no al de Giuliano.

## Rutas públicas

- `/` landing
- `/uno` muestra infantil
- `/quince` muestra de 15
- `/casamiento` muestra de boda
- `/giuliano` vitrina, sin RSVP real y sin fotos del nene hasta el OK de la familia

## Huecos a propósito

- Instagram (`instagram` en el mismo archivo)
- Permiso familiar para fotos de Giuliano (`giulianoFamilyPermission`)

## Desarrollo

Node 22. En Windows, si `node -v` no es 22:

```bash
export PATH="$HOME/AppData/Roaming/nvm/v22.23.2:$PATH"
```

```bash
npm install
npm run dev
```

El servidor de fondo del workspace: `astro dev --background`.

## Primer cliente pago

Ver [docs/PRIMER-CLIENTE.md](docs/PRIMER-CLIENTE.md). Mismo repo, ruta `/nombreedad-codigo`, `noindex`, RSVP a Sheet.
