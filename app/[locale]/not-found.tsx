import type { Metadata } from "next";
import { getLocale, getMessages } from "next-intl/server";
import NotFoundSection, {
  type NotFoundCopy,
} from "@/components/organisms/NotFoundSection";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const fallbackEs: NotFoundCopy = {
  badge: "Error 404",
  title: "Página no encontrada",
  description:
    "La página que buscas no existe, fue movida o el enlace es incorrecto. Vuelve al inicio o escríbeme desde contacto.",
  backHome: "Volver al inicio",
  contact: "Ir a contacto",
  brand: "Fabian Lemus",
};

export default async function LocaleNotFound() {
  const locale = await getLocale();
  const messages = await getMessages();
  const copy = (messages.NotFound ?? fallbackEs) as NotFoundCopy;
  const safeLocale = locale === "en" ? "en" : "es";

  return (
    <NotFoundSection
      copy={{ ...fallbackEs, ...copy }}
      homeHref={`/${safeLocale}`}
      contactHref={`/${safeLocale}#contact`}
    />
  );
}
