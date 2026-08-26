import ResumeLandingTemplate from "@/components/templates/ResumeLandingTemplate";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fabian Lemus",
    url: siteUrl,
    image: `${siteUrl}/assets/img/profile-img.jpg`,
    jobTitle: "Full-Stack Developer",
    description:
      "Desarrollador full-stack especializado en aplicaciones web rápidas, escalables y mantenibles.",
    email: "mailto:fabianalejandrolemus@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Habana",
      addressCountry: "CU",
    },
    sameAs: ["https://github.com/Viper12CU/my-dev-portfolio"],
    knowsAbout: [
      "Full-stack development",
      "Web applications",
      "React",
      "Next.js",
      "TypeScript",
    ],
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
