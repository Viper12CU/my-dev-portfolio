export function sanitizeInput(str: string): string {
  return str.replace(/[*_~`]/g, "");
}

export function enforceMaxLength(str: string, max: number): string {
  return str.length > max ? str.slice(0, max) : str;
}
