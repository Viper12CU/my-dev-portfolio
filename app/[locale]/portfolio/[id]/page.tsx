import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import PortfolioDetailSection from "@/components/organisms/PortfolioDetailSection";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ScrollTop from "@/components/organisms/ScrollTop";
import { portfolioData } from "@/data/portfolio";
import type { PortfolioItem } from "@/data/portfolio";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    portfolioData.items.map((item) => ({
      locale,
      id: item.id.toString(),
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const portfolioItems = (await getTranslations({ locale, namespace: "Portfolio" })).raw("items") as PortfolioItem[];
  const item = portfolioItems.find((portfolioItem) => portfolioItem.id === Number(id));
  if (!item) return { title: "Portfolio Not Found" };

  return {
    title: `${item.title} | Portfolio Details`,
    description: item.description,
    openGraph: { title: item.title, description: item.description, images: [{ url: item.imageUrl }] },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const navT = await getTranslations("Nav");
  const portfolioT = await getTranslations("Portfolio");
  const portfolioItems = portfolioT.raw("items") as PortfolioItem[];
  const item = portfolioItems.find((portfolioItem) => portfolioItem.id === Number(id));
  if (!item) notFound();

  return (
    <>
      <Header />
      <main className="main">
        <div className="page-title" data-aos="fade">
          <div className="container">
            <nav className="breadcrumbs">
              <ol>
                <li><Link href="/">{navT("home")}</Link></li>
                <li><Link href="/#portfolio">{navT("portfolio")}</Link></li>
                <li className="current">{item.title}</li>
              </ol>
            </nav>
            <h1>{portfolioT("title")}</h1>
          </div>
        </div>
        <PortfolioDetailSection item={item} />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
