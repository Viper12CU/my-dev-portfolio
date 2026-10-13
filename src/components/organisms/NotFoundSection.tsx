import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Compass, Mail } from "lucide-react";

export interface NotFoundCopy {
  badge: string;
  title: string;
  description: string;
  backHome: string;
  contact: string;
  brand: string;
}

interface NotFoundSectionProps {
  copy: NotFoundCopy;
  homeHref: string;
  contactHref: string;
  extraLinks?: { label: string; href: string }[];
}

export default function NotFoundSection({
  copy,
  homeHref,
  contactHref,
  extraLinks,
}: NotFoundSectionProps) {
  return (
    <section
      aria-labelledby="not-found-title"
      className="hero section light-background not-found"
      style={{ minHeight: "100vh" }}
    >
      <Image
        src="/assets/img/hero-bg-3.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
        aria-hidden="true"
      />

      <div className="container not-found-enter">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <p className="not-found-brand" aria-hidden="true">
              <Compass size={18} strokeWidth={2.2} />
              <span>{copy.brand}</span>
            </p>

            <div className="not-found-codewrap" aria-hidden="true">
              <span className="not-found-code">4</span>
              <span className="not-found-code not-found-code-outline">0</span>
              <span className="not-found-code">4</span>
            </div>

            <p className="not-found-badge">{copy.badge}</p>
            <h1 id="not-found-title" className="not-found-title">
              {copy.title}
            </h1>
            <p className="not-found-description">{copy.description}</p>

            <div className="not-found-actions">
              <Link href={homeHref} className="btn-get-started">
                <ArrowLeft size={18} strokeWidth={2.2} aria-hidden="true" />
                {copy.backHome}
              </Link>
              <Link href={contactHref} className="not-found-ghost">
                <Mail size={18} strokeWidth={2.2} aria-hidden="true" />
                {copy.contact}
              </Link>
            </div>

            {extraLinks && extraLinks.length > 0 && (
              <nav
                aria-label={copy.badge}
                className="not-found-langnav"
              >
                {extraLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="not-found-langlink">
                    {l.label}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
