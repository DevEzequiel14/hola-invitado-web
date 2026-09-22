# HolaInvitado (web de marca)

Sitio de **holainvitados.com**: invitaciones web a medida, con confirmación de invitados.

Marca, demos y eventos reales viven en este repo. Cada evento es un paquete en `src/events/<nombreedad-codigo>/`.

## Rutas públicas

- `/` landing
- `/uno` muestra infantil
- `/quince` muestra de 15
- `/casamiento` muestra de boda
- `/giuliano1-k8n2` añito de Giuliano (ejemplo real, con OK familiar)
- `/giuliano` redirige al añito

## Huecos a propósito

- Instagram (`instagram` en `src/data/site.ts`)

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

## Eventos

Ver [docs/PRIMER-CLIENTE.md](docs/PRIMER-CLIENTE.md). Mismo repo, ruta `/nombreedad-codigo`. Giuliano es el ejemplo público. Los clientes pagos siguientes van `noindex`, RSVP a Sheet.
