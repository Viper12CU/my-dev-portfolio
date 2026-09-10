import { NextResponse } from "next/server";
import { sendCallMeBotMessage } from "@/lib/callmebot";
import { checkRateLimit } from "@/lib/rate-limit";
import { sanitizeInput, enforceMaxLength } from "@/lib/sanitize";

const LIMITS = { name: 100, email: 254, phone: 20, message: 2000 } as const;
const MIN_LOAD_TIME_MS = 3_000;

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isOriginValid(request: Request): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const host = request.headers.get("host");

  const source = origin || referer;
  if (!source || !host) return true;

  try {
    const url = new URL(source);
    return url.host === host;
  } catch {
    return false;
  }
}

function getSafeResponseHeaders() {
  return {
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "no-store, no-cache, must-revalidate",
  } as const;
}

export async function POST(request: Request) {
  const headers = getSafeResponseHeaders();

  if (!isOriginValid(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403, headers });
  }

  const ip = getClientIp(request);
  const { allowed, retryAfter } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429, headers: { ...headers, "Retry-After": String(retryAfter) } },
    );
  }

  try {
    const body = await request.json();

    if (typeof body.website === "string" && body.website.length > 0) {
      return NextResponse.json({ ok: true }, { headers });
    }

    if (typeof body.formLoadedAt === "number") {
      if (Date.now() - body.formLoadedAt < MIN_LOAD_TIME_MS) {
        return NextResponse.json({ ok: true }, { headers });
      }
    }

    const rawName = String(body.name ?? "").trim();
    const rawEmail = String(body.email ?? "").trim();
    const rawPhone = String(body.phone ?? "").trim();
    const rawMessage = String(body.message ?? "").trim();

    const name = sanitizeInput(enforceMaxLength(rawName, LIMITS.name));
    const email = sanitizeInput(enforceMaxLength(rawEmail, LIMITS.email));
    const phone = sanitizeInput(enforceMaxLength(rawPhone, LIMITS.phone));
    const message = sanitizeInput(enforceMaxLength(rawMessage, LIMITS.message));

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Nombre inválido" }, { status: 400, headers });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400, headers });
    }
    if (!message || message.length < 10) {
      return NextResponse.json({ error: "Mensaje muy corto" }, { status: 400, headers });
    }

    await sendCallMeBotMessage({ name, email, phone, message });

    return NextResponse.json({ ok: true }, { headers });
  } catch (error) {
    console.error("[api/contact] error:", error);
    const isMissingEnv =
      error instanceof Error && error.message.includes("Faltan variables de entorno");
    return NextResponse.json(
      { error: isMissingEnv ? error.message : "Error al enviar mensaje" },
      { status: 500, headers },
    );
  }
}
