import { NextResponse } from "next/server";
import { sendCallMeBotMessage } from "@/lib/callmebot";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Nombre inválido" }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }
    if (!message || message.length < 10) {
      return NextResponse.json({ error: "Mensaje muy corto" }, { status: 400 });
    }

    // Usa variables privadas CALLMEBOT_PHONE y CALLMEBOT_API_KEY (solo servidor)
    await sendCallMeBotMessage({ name, email, phone, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/contact] error:", error);
    const isMissingEnv =
      error instanceof Error && error.message.includes("Faltan variables de entorno");
    return NextResponse.json(
      { error: isMissingEnv ? error.message : "Error al enviar mensaje" },
      { status: isMissingEnv ? 500 : 500 }
    );
  }
}
