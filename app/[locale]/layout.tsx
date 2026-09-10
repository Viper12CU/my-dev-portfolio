import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages, setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = (await getMessages({ locale })).Metadata;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: "Fabian Lemus" }],
    creator: "Fabian Lemus",
    alternates: { canonical: `/${locale}` },
    openGraph: {
      type: "profile",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: `/${locale}`,
      title: t.title,
      description: t.ogDescription,
      siteName: "Fabian Lemus",
      images: [
        {
          url: "/assets/img/profile-img.jpg",
          width: 600,
          height: 600,
          alt: t.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.twitterDescription,
      images: ["/assets/img/profile-img.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <a href="#main-content" className="skip-link">
        {messages.Common?.skip}
      </a>
      {children}
    </NextIntlClientProvider>
  );
}
