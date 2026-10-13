import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import NotFoundSection, {
  type NotFoundCopy,
} from "@/components/organisms/NotFoundSection";

const copyEs: NotFoundCopy = {
  badge: "Error 404",
  title: "Página no encontrada",
  description:
    "La página que buscas no existe, fue movida o el enlace es incorrecto. Elige tu idioma para volver al inicio.",
  backHome: "Volver al inicio",
  contact: "Ir a contacto",
  brand: "Fabian Lemus",
};

const copyEn: NotFoundCopy = {
  badge: "Error 404",
  title: "Page not found",
  description:
    "The page you are looking for does not exist, was moved, or the link is broken. Choose your language to go back home.",
  backHome: "Back to home",
  contact: "Go to contact",
  brand: "Fabian Lemus",
};

// El middleware next-intl (proxy.ts) resuelve el locale desde el prefijo
// (/es/*, /en/*) antes del render, así getLocale() devuelve el idioma
// correcto incluso en el not-found raíz. Sin prefijo → fallback a "es".
async function resolveLocale(): Promise<"es" | "en"> {
  try {
    const locale = await getLocale();
    return locale === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

async function resolveCopy(locale: "es" | "en"): Promise<NotFoundCopy> {
  const fallback = locale === "en" ? copyEn : copyEs;
  try {
    const messages = await getMessages();
    const dict = messages.NotFound as Partial<NotFoundCopy> | undefined;
    return dict ? { ...fallback, ...dict } : fallback;
  } catch {
    return fallback;
  }
}

export const metadata: Metadata = {
  title: "404 — Página no encontrada / Page not found | Fabian Lemus",
  description:
    "La página que buscas no existe / The page you are looking for does not exist. Vuelve al inicio / Go back home.",
  robots: { index: false, follow: false },
};

// 404 raíz: cubre rutas sin match (p. ej. /en/ohif, /ruta-sin-locale).
// No hay provider next-intl aquí, por eso el copy se resuelve en servidor.
export default async function GlobalNotFound() {
  const locale = await resolveLocale();
  const copy = await resolveCopy(locale);

  return (
    <NotFoundSection
      copy={copy}
      homeHref={`/${locale}`}
      contactHref={`/${locale}#contact`}
      extraLinks={[
        { label: "Inicio en español →", href: "/es" },
        { label: "Home in English →", href: "/en" },
      ]}
    />
  );
}
