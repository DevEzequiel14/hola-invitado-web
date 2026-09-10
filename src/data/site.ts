export const brand = "HolaInvitado";

export const siteUrl = "https://holainvitados.com";

/** WhatsApp de venta. No hay formulario web. */
export const whatsappNumber = "5493884849767";

/**
 * Handle o URL. Vacío a propósito: no se inventa.
 * Cuando exista, puede ser "holainvitado" o una URL completa.
 */
export const instagram = "";

/**
 * Precio de ancla. Vacío a propósito: no se inventa.
 * Cuando exista, es el número sin símbolo, p. ej. "180000".
 */
export const priceFrom = "";

export const zone = "Jujuy y NOA";

/** Sin OK explícito de Selena/Martín no se publican fotos del nene. */
export const giulianoFamilyPermission = false;

export const realGiulianoUrl = "https://holainvitados.vercel.app/giuliano";

export const waMessages = {
  general:
    "Hola, quiero una invitación web con lista de confirmados para un evento en Jujuy/NOA.",
  esencial:
    "Hola, quiero el plan Esencial de HolaInvitado para un evento en Jujuy/NOA.",
  premium:
    "Hola, quiero el plan Premium de HolaInvitado para un evento en Jujuy/NOA.",
  uno: "Hola, vi la muestra de cumple infantil (/uno) y quiero una invitación así.",
  quince: "Hola, vi la muestra de quince (/quince) y quiero una invitación así.",
  casamiento:
    "Hola, vi la muestra de casamiento (/casamiento) y quiero una invitación así.",
  giuliano:
    "Hola, vi la muestra del añito (/giuliano) y quiero una invitación así, para un cumple infantil.",
} as const;

export const plans = {
  esencial: {
    name: "Esencial",
    includes: [
      "Diseño a medida para celular",
      "Fotos, fecha y lugar",
      "Confirmación que llega a una Sheet",
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

export const faqs = [
  {
    q: "¿Con cuánta anticipación hay que hablar?",
    a: "Con dos semanas alcanza para una invitación Esencial. Si hay muchas fotos, clave en el link o animación, mejor con un mes. Si la fiesta es ya, escribime igual y vemos.",
  },
  {
    q: "¿Hace falta saber de computadoras?",
    a: "No. Hablamos por WhatsApp, yo armo el link y te lo mando. Los invitados entran desde el celular, como a cualquier historia.",
  },
  {
    q: "¿Se puede cambiar un texto después?",
    a: "Sí. Un cambio de horario, de salón o de frase se hace en el mismo link. No hay que reimprimir nada.",
  },
  {
    q: "¿Qué pasa con el link cuando termina la fiesta?",
    a: "Sigue abierto un tiempo por si alguien quiere volver a mirar las fotos. La lista de confirmados no se publica en esta web ni en otras fiestas.",
  },
] as const;
