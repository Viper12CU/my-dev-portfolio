import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale, getTranslations } from "next-intl/server";
import ResumeLandingTemplate from "@/components/templates/ResumeLandingTemplate";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const t = await getTranslations("Metadata");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fabian Lemus",
    url: siteUrl,
    image: `${siteUrl}/assets/img/profile-img.jpg`,
    jobTitle: t("jobTitle"),
    description: t("description"),
    email: "mailto:fabianalejandrolemus@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: t("addressLocality"),
      addressCountry: "CU",
    },
    sameAs: ["https://github.com/Viper12CU/my-dev-portfolio"],
    knowsAbout: t.raw("knowsAbout") as string[],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ResumeLandingTemplate />
    </>
  );
}
