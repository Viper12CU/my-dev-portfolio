import { describe, it, expect, afterEach, vi } from "vitest";
import { checkRateLimit } from "../../lib/rate-limit";

describe("checkRateLimit", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("permite requests dentro del límite", () => {
    for (let i = 0; i < 5; i++) {
      const result = checkRateLimit("test-a-1");
      expect(result.allowed).toBe(true);
    }
  });

  it("bloquea después de 5 requests en 60s", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("test-b-1");
    }
    const result = checkRateLimit("test-b-1");
    expect(result.allowed).toBe(false);
    expect(result.retryAfter).toBeGreaterThan(0);
    expect(result.retryAfter).toBeLessThanOrEqual(60);
  });

  it("resetea después de la ventana de tiempo", () => {
    vi.useFakeTimers();
    for (let i = 0; i < 5; i++) {
      checkRateLimit("test-c-1");
    }
    const blocked = checkRateLimit("test-c-1");
    expect(blocked.allowed).toBe(false);

    vi.advanceTimersByTime(61_000);

    const allowed = checkRateLimit("test-c-1");
    expect(allowed.allowed).toBe(true);
  });

  it("IPs diferentes tienen contadores independientes", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("test-d-1");
    }
    const blocked = checkRateLimit("test-d-1");
    expect(blocked.allowed).toBe(false);

    const otherIp = checkRateLimit("test-d-2");
    expect(otherIp.allowed).toBe(true);
  });

  it("incluye retryAfter en la respuesta cuando está bloqueado", () => {
    for (let i = 0; i < 5; i++) {
      checkRateLimit("test-e-1");
    }
    const result = checkRateLimit("test-e-1");
    expect(result.allowed).toBe(false);
    expect(typeof result.retryAfter).toBe("number");
    expect(result.retryAfter).toBeGreaterThan(0);
  });

  it("no incluye retryAfter cuando está permitido", () => {
    const result = checkRateLimit("test-f-1");
    expect(result.allowed).toBe(true);
    expect(result.retryAfter).toBeUndefined();
  });
});
