import { describe, it, expect } from "vitest";
import { sanitizeInput, enforceMaxLength } from "../sanitize";

describe("sanitizeInput", () => {
  it("elimina asteriscos", () => {
    expect(sanitizeInput("hello *world*")).toBe("hello world");
  });

  it("elimina guiones bajos", () => {
    expect(sanitizeInput("hello _world_")).toBe("hello world");
  });

  it("elimina tilde", () => {
    expect(sanitizeInput("hello ~world~")).toBe("hello world");
  });

  it("elimina backticks", () => {
    expect(sanitizeInput("hello `world`")).toBe("hello world");
  });

  it("no modifica texto sin caracteres especiales", () => {
    expect(sanitizeInput("texto limpio 123")).toBe("texto limpio 123");
  });

  it("maneja string vacío", () => {
    expect(sanitizeInput("")).toBe("");
  });

  it("elimina múltiples caracteres especiales en un string", () => {
    expect(sanitizeInput("*bold* _italic_ ~strike~ `code`")).toBe(
      "bold italic strike code"
    );
  });
});

describe("enforceMaxLength", () => {
  it("trunca strings que exceden el límite", () => {
    expect(enforceMaxLength("abcdefghij", 5)).toBe("abcde");
  });

  it("no modifica strings dentro del límite", () => {
    expect(enforceMaxLength("abc", 5)).toBe("abc");
  });

  it("no modifica strings exactamente del límite", () => {
    expect(enforceMaxLength("abcde", 5)).toBe("abcde");
  });

  it("maneja string vacío", () => {
    expect(enforceMaxLength("", 5)).toBe("");
  });

  it("maneja límite de 0", () => {
    expect(enforceMaxLength("abc", 0)).toBe("");
  });
});
