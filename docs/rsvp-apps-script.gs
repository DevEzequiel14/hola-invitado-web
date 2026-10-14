/**
 * Google Apps Script — Web App que recibe POST de /api/rsvp vía RSVP_SHEET_WEBHOOK.
 *
 * Setup:
 * 1. Creá una Google Sheet con encabezados en la fila 1:
 *    fecha | slug | nombre | asiste | cantidad | comentario | menu | dieta | cancion
 * 2. Extensiones → Apps Script → pegá este archivo.
 * 3. En Propiedades del script (⚙️ → Propiedades del proyecto) agregá:
 *    RSVP_SHEET_SECRET = el mismo valor que en Vercel (RSVP_SHEET_SECRET)
 * 4. Implementá como aplicación web: ejecutar como yo, acceso: cualquiera.
 * 5. Copiá la URL de la web app a RSVP_SHEET_WEBHOOK en Vercel.
 *
 * Sin secret correcto → { ok: false } y no escribe nada.
 * (Las Web Apps de Apps Script suelen responder HTTP 200; el contrato es el JSON.)
 */

function getSecret_() {
  const props = PropertiesService.getScriptProperties();
  return String(props.getProperty("RSVP_SHEET_SECRET") || "").trim();
}

function json_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData && e.postData.contents ? e.postData.contents : "{}");
  } catch (err) {
    return json_({ ok: false, error: "json" });
  }

  const expected = getSecret_();
  if (!expected) {
    return json_({ ok: false, error: "secret_not_configured" });
  }

  const got = String(data.secret || "").trim();
  if (!got || got !== expected) {
    return json_({ ok: false, error: "unauthorized" });
  }

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sheet.appendRow([
    data.fecha || "",
    data.slug || "",
    data.nombre || "",
    data.asiste || "",
    data.cantidad || "",
    data.comentario || "",
    data.menu || "",
    data.dieta || "",
    data.cancion || "",
  ]);

  return json_({ ok: true });
}

/** Health check manual desde el navegador. */
function doGet() {
  return json_({ ok: true, service: "hola-invitado-rsvp" });
}
