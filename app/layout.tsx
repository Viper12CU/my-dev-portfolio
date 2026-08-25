import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Index - MyResume Bootstrap Template",
  description:
    "Portfolio resume template built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
      </head>
      <body className="index-page">
        {children}
      </body>
    </html>
  );
}
