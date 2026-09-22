export const brand = "HolaInvitado";

export const siteUrl = "https://holainvitados.com";

/** WhatsApp de venta. No hay formulario web. */
export const whatsappNumber = "5493884849767";

/**
 * Handle o URL. Vacío a propósito: no se inventa.
 * Cuando exista, puede ser "holainvitado" o una URL completa.
 */
export const instagram = "";

export const realGiulianoUrl = "/giuliano1-k8n2";

export const waMessages = {
  general: "Hola, quiero una invitación web para un evento.",
  esencial: "Hola, quiero consultar por una invitación Esencial de HolaInvitado.",
  premium: "Hola, quiero consultar por una invitación Premium de HolaInvitado.",
  uno: "Hola, vi la muestra de cumple infantil (/uno) y quiero una invitación así.",
  quince: "Hola, vi la muestra de quince (/quince) y quiero una invitación así.",
  casamiento:
    "Hola, vi el casamiento de Sofía y Mateo (/sofiamateo-m4q7) y quiero una invitación así.",
  giuliano:
    "Hola, vi el añito de Giuliano (/giuliano1-k8n2) y quiero una invitación así, para un cumple infantil.",
} as const;

export const plans = {
  esencial: {
    name: "Esencial",
    includes: [
      "Diseño a medida para celular",
      "Fotos, fecha y lugar",
      "Confirmación",
    ],
  },
  premium: {
    name: "Premium",
    includes: [
      "Todo lo del Esencial",
      "Clave en el link",
      "Más secciones",
      "Animación",
      "Recaditos de los invitados",
    ],
  },
} as const;

export type FeatureItem = {
  name: string;
  detail?: string;
  core?: boolean;
};

export const cardFeatures = {
  lead: "La confirmación va de base. Lo demás se suma si la fiesta lo pide.",
  columns: [
    [
      { name: "Agendar fecha" },
      { name: "Dress code", detail: "Cómo vestirse" },
      { name: "Cómo llegar" },
      { name: "Info útil", detail: "Hospedaje, traslado, horarios" },
      { name: "Multi idioma", detail: "Para invitados de otro idioma" },
    ],
    [
      { name: "Confirmación", detail: "Si van y con cuántos", core: true },
      { name: "Música" },
      { name: "Playlist", detail: "Los invitados proponen canciones" },
    ],
    [
      { name: "Regalos" },
      { name: "Lista ficticia", detail: "Sugerir regalos sin decirlo tan directo" },
      { name: "Instagram" },
      { name: "Álbum de fotos" },
    ],
  ] as const satisfies FeatureItem[][],
};

export const faqs = [
  {
    q: "¿Con cuánta anticipación hay que hablar?",
    a: "Con dos semanas alcanza para una Esencial. Si hay muchas fotos, clave o animación, mejor con un mes. Si la fiesta es ya, escribime igual.",
  },
  {
    q: "¿Hace falta saber de computadoras?",
    a: "No. Hablamos por WhatsApp, armo el link y te lo mando. Los invitados entran desde el celular.",
  },
  {
    q: "¿Se puede cambiar un texto después?",
    a: "Sí. Horario, salón o frase se corrigen en el mismo link.",
  },
  {
    q: "¿Otras personas ven mi fiesta?",
    a: "No. Cada invitación es un lugar solo. El link de un quince no muestra otras fiestas.",
  },
  {
    q: "¿Qué pasa con el link cuando termina la fiesta?",
    a: "Sigue un tiempo por si alguien quiere volver a mirar. Las confirmaciones no se publican acá ni en otras fiestas.",
  },
] as const;
