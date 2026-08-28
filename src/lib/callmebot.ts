/**
 * Helper server-only para CallMeBot WhatsApp API
 * Usa variables privadas: CALLMEBOT_PHONE y CALLMEBOT_API_KEY
 * Nunca importes este archivo en Client Components
 */

function getEnv() {
  const phone = process.env.CALLMEBOT_PHONE;
  const apiKey = process.env.CALLMEBOT_API_KEY;

  if (!phone || !apiKey) {
    throw new Error(
      "Faltan variables de entorno: CALLMEBOT_PHONE y CALLMEBOT_API_KEY deben estar definidas en .env.local",
    );
  }

  return { phone, apiKey };
}

export type CallMeBotPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function sendCallMeBotMessage(payload: CallMeBotPayload) {
  const { phone, apiKey } = getEnv();

  const text = [
    `🆕 *Nuevo mensaje desde portfolio* 🆕:`,
    `🙋🏻 *Nombre:* ${payload.name}`,
    `📬 *Email:* ${payload.email}`,
    payload.phone ? `📱 *Telefono:* ${payload.phone}` : null,
    `💌 *Mensaje:* ${payload.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apiKey)}`;

  const res = await fetch(url, { method: "GET", cache: "no-store" });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`CallMeBot error ${res.status}: ${body}`);
  }

  return res.text();
}
