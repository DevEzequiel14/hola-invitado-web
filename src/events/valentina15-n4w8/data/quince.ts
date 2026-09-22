export const quince = {
  slug: 'valentina15-n4w8',
  eventId: 'valentina',
  honoree: 'Valentina Ríos',
  firstName: 'Vale',
  headline: 'Mis 15',
  kicker: 'Te invito a celebrar',
  phrase: 'Entre flores silvestres y luces colgantes',
  hosts: 'Mamá Laura y papá Diego',
  hostFirstName: 'Laura',
  dateLabel: 'Sábado 14 de noviembre de 2026',
  timeLabel: '21 a 04 h',
  startIso: '2026-11-14T21:00:00-03:00',
  endIso: '2026-11-15T04:00:00-03:00',
  eventDayStartIso: '2026-11-14T00:00:00-03:00',
  venue: 'Salón Los Jazmines',
  address: 'Av. 25 de Mayo 1250, Palpalá, Jujuy',
  rsvpClosesLabel: '7 de noviembre de 2026',
  rsvpClosesIso: '2026-11-07T23:59:59-03:00',
  whatsapp: '5493884123456',
  email: 'laura.rios@example.com',
  closing: 'Con amor, Vale',
  dressCode:
    'Elegante garden party. Vestido midi o largo, paleta suave, nada de blanco (reservado para la quinceañera).',
  dressNote: 'El blanco es de Vale.',
  palette: [
    { name: 'Salvia', hex: '#9CAF88' },
    { name: 'Crema', hex: '#F4EFE6' },
    { name: 'Rosa polvo', hex: '#D4A5A5' },
    { name: 'Champagne', hex: '#E6D5B8' },
    { name: 'Bosque', hex: '#3D5C4A' },
  ],
  music: {
    title: 'Bloom',
    artist: 'The Paper Kites',
    src: '/events/valentina15-n4w8/bloom.mp3',
    filename: 'bloom.mp3',
    credit: 'Bloom — The Paper Kites',
    storageKey: 'valentina15-n4w8-audio',
  },
  rsvpStorageKey: 'valentina15-n4w8-rsvp',
  brand: 'HolaInvitado',
  seo: {
    title: 'Valentina Ríos — Mis 15',
    description:
      'Te invito a celebrar mis 15. Sábado 14 de noviembre de 2026 en el Salón Los Jazmines, Palpalá. Entre flores silvestres y luces colgantes.',
    locale: 'es_AR',
  },
  photos: {
    cover: {
      alt: 'Valentina de espaldas, con vestido de fiesta, en un jardín de noche con luces colgantes',
    },
    gallery: [
      {
        id: 'vestido',
        alt: 'Detalle del vestido y el moño sobre una mesa de ensayo, con flores silvestres',
      },
      {
        id: 'ramo',
        alt: 'Ramo de flores silvestres en tonos salvia, crema y rosa polvo',
      },
      {
        id: 'luces',
        alt: 'Guirnaldas de luces colgantes en un jardín de noche',
      },
      {
        id: 'jardin',
        alt: 'Mariposas entre flores silvestres al atardecer',
      },
      {
        id: 'mesa',
        alt: 'Detalle de mesa de garden party con copas, flores y luces cálidas',
      },
    ],
  },
  copy: {
    overlayLead: 'Abrí la invitación',
    overlayCta: 'Entrar al jardín',
    overlayHint: 'El jardín ya está prendido.',
    overlayNoAudio: 'Agregá bloom.mp3 para escuchar la canción.',
    heroCta: 'Confirmar asistencia',
    today: '¡Es hoy!',
    after: 'Las luces ya se apagaron. Gracias por haber estado.',
    granDiaEyebrow: 'El gran día',
    granDiaTitle: 'Una noche de jardín',
    granDiaBody:
      'Mamá Laura y papá Diego te esperan para celebrar los 15 de Vale. El salón se prende al anochecer: flores silvestres, luces colgantes y la gente que queremos.',
    dressEyebrow: 'Cómo vestirnos',
    dressTitle: 'Dress code e inspiración',
    galleryEyebrow: 'Recuerdos',
    galleryTitle: 'Un adelanto del jardín',
    mapsEyebrow: 'El lugar',
    mapsTitle: 'Cómo llegar',
    mapsBody: 'Salón Los Jazmines, en Palpalá. Elegí el mapa que más uses.',
    rsvpEyebrow: 'Tu lugar',
    rsvpTitle: '¿Nos vemos ese día?',
    rsvpBody:
      'Confirmá antes del 7 de noviembre. Nos ayuda un montón para armar las mesas y el jardín.',
    rsvpThanksYes: 'Qué alegría. Te esperamos en el jardín, con las luces ya prendidas.',
    rsvpThanksNo: 'Gracias por avisarnos. Te vamos a extrañar esa noche.',
    rsvpDeadline: 'Cierra el 7 de noviembre de 2026.',
    whatsappCta: 'Avisarle a Laura por WhatsApp',
    emailCta: 'Enviar un mail',
  },
} as const;

const mapsQuery = encodeURIComponent(quince.address);

export const maps = {
  google: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  waze: `https://waze.com/ul?q=${mapsQuery}&navigate=yes`,
} as const;

export type RsvpMemory = {
  nombre: string;
  asiste: boolean;
  cantidad: number;
  comentario: string;
};

export function whatsappUrl(rsvp: RsvpMemory): string {
  const siNo = rsvp.asiste ? 'sí' : 'no';
  let text = `Hola Laura, soy ${rsvp.nombre}. Confirmo asistencia a los 15 de Valentina: ${siNo}. Somos ${rsvp.cantidad}.`;
  const comment = rsvp.comentario.trim();
  if (comment) text += ` ${comment}`;
  return `https://wa.me/${quince.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoUrl(rsvp: RsvpMemory): string {
  const siNo = rsvp.asiste ? 'sí' : 'no';
  const subject = `Confirmación 15 de Valentina — ${rsvp.nombre}`;
  let body = `Hola Laura, soy ${rsvp.nombre}. Confirmo asistencia a los 15 de Valentina: ${siNo}. Somos ${rsvp.cantidad}.`;
  const comment = rsvp.comentario.trim();
  if (comment) body += `\n\n${comment}`;
  return `mailto:${quince.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
