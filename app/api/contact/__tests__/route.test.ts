import { describe, it, expect, vi, beforeEach } from "vitest";

let callCount = 0;

vi.mock("@/lib/callmebot", () => ({
  sendCallMeBotMessage: vi.fn().mockResolvedValue("ok"),
}));

vi.mock("@/lib/rate-limit", () => ({
  checkRateLimit: (_ip: string) => {
    callCount++;
    if (callCount > 5) {
      return { allowed: false, retryAfter: 45 };
    }
    return { allowed: true };
  },
}));

import { POST } from "../route";
import { sendCallMeBotMessage } from "@/lib/callmebot";

function createRequest(body: Record<string, unknown>, headers?: Record<string, string>) {
  return new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      host: "localhost:3000",
      ...headers,
    },
    body: JSON.stringify(body),
  });
}

const validBody = {
  name: "Fabian",
  email: "fabian@test.com",
  phone: "+5358816764",
  message: " Este es un mensaje de prueba para el formulario ",
  formLoadedAt: Date.now() - 5000,
};

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    callCount = 0;
  });

  it("retorna 200 con datos válidos", async () => {
    const res = await POST(createRequest(validBody));
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.ok).toBe(true);
    expect(sendCallMeBotMessage).toHaveBeenCalledWith({
      name: "Fabian",
      email: "fabian@test.com",
      phone: "+5358816764",
      message: "Este es un mensaje de prueba para el formulario",
    });
  });

  it("retorna 400 si nombre es muy corto", async () => {
    const res = await POST(createRequest({ ...validBody, name: "A" }));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe("Nombre inválido");
  });

  it("retorna 400 si email es inválido", async () => {
    const res = await POST(createRequest({ ...validBody, email: "noemail" }));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe("Email inválido");
  });

  it("retorna 400 si mensaje es muy corto", async () => {
    const res = await POST(createRequest({ ...validBody, message: "hi" }));
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.error).toBe("Mensaje muy corto");
  });

  it("retorna 429 cuando rate limit excedido", async () => {
    for (let i = 0; i < 5; i++) {
      await POST(createRequest(validBody));
    }
    const res = await POST(createRequest(validBody));
    expect(res.status).toBe(429);
    const data = await res.json();
    expect(data.error).toContain("Too many requests");
    expect(res.headers.get("Retry-After")).toBeTruthy();
  });

  it("honeypot: retorna 200 sin enviar si website tiene contenido", async () => {
    const res = await POST(
      createRequest({ ...validBody, website: "bot-fill" })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
    expect(sendCallMeBotMessage).not.toHaveBeenCalled();
  });

  it("time check: retorna 200 sin enviar si formLoadedAt < 3s", async () => {
    const res = await POST(
      createRequest({ ...validBody, formLoadedAt: Date.now() - 1000 })
    );
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);
    expect(sendCallMeBotMessage).not.toHaveBeenCalled();
  });

  it("origin check: retorna 403 si Origin no coincide con host", async () => {
    const res = await POST(
      createRequest(validBody, { origin: "https://evil.com" })
    );
    expect(res.status).toBe(403);
  });

  it("sanitiza caracteres especiales del input", async () => {
    const res = await POST(
      createRequest({
        ...validBody,
        name: "*Bold* _Name_",
        message: "~Strike~ message with enough length here",
      })
    );
    expect(res.status).toBe(200);
    expect(sendCallMeBotMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Bold Name",
        message: "Strike message with enough length here",
      })
    );
  });

  it("respeta límites de longitud", async () => {
    const longName = "A".repeat(150);
    const res = await POST(
      createRequest({ ...validBody, name: longName })
    );
    expect(res.status).toBe(200);
    expect(sendCallMeBotMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "A".repeat(100),
      })
    );
  });

  it("retorna headers de seguridad", async () => {
    const res = await POST(createRequest(validBody));
    expect(res.headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(res.headers.get("Cache-Control")).toContain("no-store");
  });

  it("retorna 200 si no hay Origin ni Referer (permite)", async () => {
    const req = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        host: "localhost:3000",
      },
      body: JSON.stringify(validBody),
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
  });
});
