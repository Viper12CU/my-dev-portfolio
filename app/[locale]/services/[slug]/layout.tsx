import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ArrowRightCircle, Headphones, Mail } from "lucide-react";
import { servicesData, getServiceBySlug } from "@/data/services";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ScrollTop from "@/components/organisms/ScrollTop";
import ScrollToTop from "@/components/atoms/ScrollToTop";

export default async function ServiceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return null;

  setRequestLocale(locale);
  const service = getServiceBySlug(slug);
  const t = await getTranslations("Services");
  const navT = await getTranslations("Nav");

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="main">
        <div className="page-title" data-aos="fade">
          <div className="container">
            <nav className="breadcrumbs">
              <ol>
                <li><Link href="/">{navT("home")}</Link></li>
                <li><Link href="/#services">{navT("services")}</Link></li>
                <li className="current">{service?.title ?? t("title")}</li>
              </ol>
            </nav>
            <h1>{t("title")}</h1>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="lg:sticky lg:top-[10px]">
                  <div className="service-box">
                    <h4>{t("list")}</h4>
                    <div className="services-list">
                      {servicesData.items.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className={s.slug === slug ? "active" : ""}
                        >
                          <ArrowRightCircle size={18} />
                          <span>{s.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="help-box d-flex flex-column justify-content-center align-items-center">
                    <Headphones className="help-icon" size={32} />
                    <h4>{t("haveAQuestion")}</h4>
                    <p className="d-flex align-items-center mt-2 mb-0">
                      <Mail size={16} className="me-2" />
                      <a href="mailto:fabianalejandrolemus@gmail.com">fabianalejandrolemus@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
