import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import PortfolioDetailSection from "@/components/organisms/PortfolioDetailSection";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ScrollTop from "@/components/organisms/ScrollTop";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioData.items.map((item) => ({
    id: item.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const item = portfolioData.items.find((i) => i.id === Number(id));

  if (!item) {
    return { title: "Portfolio Not Found" };
  }

  return {
    title: `${item.title} | Portfolio Details`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [{ url: item.imageUrl }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = portfolioData.items.find((i) => i.id === Number(id));

  if (!item) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="main">
        <div className="page-title" data-aos="fade">
          <div className="container">
            <nav className="breadcrumbs">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#portfolio">Portfolio</Link></li>
                <li className="current">{item.title}</li>
              </ol>
            </nav>
            <h1>Portfolio Details</h1>
          </div>
        </div>
        <PortfolioDetailSection item={item} />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
