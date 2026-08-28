import Link from "next/link";
import { ArrowRightCircle, Headphones, Mail } from "lucide-react";
import { servicesData, getServiceBySlug } from "@/data/services";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import ScrollTop from "@/components/organisms/ScrollTop";
import ScrollToTop from "@/components/atoms/ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export default async function ServiceLayout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="main">
        <div className="page-title" data-aos="fade">
          <div className="container">
            <nav className="breadcrumbs">
              <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#services">Services</Link></li>
                <li className="current">{service?.title ?? "Service Details"}</li>
              </ol>
            </nav>
            <h1>Service Details</h1>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container">
            <div className="row gy-5">

              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="service-box">
                  <h4>Services List</h4>
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
                  <h4>Have a Question?</h4>
                  <p className="d-flex align-items-center mt-2 mb-0">
                    <Mail size={16} className="me-2" />
                    <a href="mailto:fabianalejandrolemus@gmail.com">fabianalejandrolemus@gmail.com</a>
                  </p>
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
