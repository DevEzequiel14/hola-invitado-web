export type Rsvp = {
  timestamp: string;
  slug: string;
  nombre: string;
  asiste: "si" | "no";
  cantidad: number;
  comentario: string;
  menu?: string;
  dieta?: string;
  cancion?: string;
};

export function formatSheetRow(row: Rsvp) {
  const fecha = new Intl.DateTimeFormat("es-AR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(new Date(row.timestamp));

  return {
    fecha,
    slug: row.slug,
    nombre: row.nombre,
    asiste: row.asiste === "si" ? "Sí" : "No",
    cantidad: row.cantidad,
    comentario: row.comentario,
    menu: row.menu ?? "",
    dieta: row.dieta ?? "",
    cancion: row.cancion ?? "",
  };
}
