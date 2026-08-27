import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fabian Lemus | Full-Stack Developer & Web Applications",
  description:
    "Portfolio de Fabian Lemus, desarrollador full-stack especializado en aplicaciones web rápidas, escalables y mantenibles desde La Habana, Cuba.",
  keywords: [
    "Fabian Lemus",
    "desarrollador full-stack",
    "desarrollador web en Cuba",
    "aplicaciones web",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Fabian Lemus" }],
  creator: "Fabian Lemus",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "es_ES",
    url: "/",
    title: "Fabian Lemus | Full-Stack Developer",
    description:
      "Conoce el trabajo y la experiencia de Fabian Lemus, desarrollador full-stack de aplicaciones web.",
    siteName: "Fabian Lemus",
    images: [
      {
        url: "/assets/img/profile-img.jpg",
        width: 600,
        height: 600,
        alt: "Fabian Lemus, desarrollador full-stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabian Lemus | Full-Stack Developer",
    description:
      "Portfolio profesional de Fabian Lemus, desarrollador full-stack.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="/assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link
          href="https://cdn.jsdelivr.net/npm/@blossom-carousel/react@1.5.2/style.css"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link href="/assets/css/main.css" rel="stylesheet" />
      </head>
      <body className="index-page">
        {children}
      </body>
    </html>
  );
}
