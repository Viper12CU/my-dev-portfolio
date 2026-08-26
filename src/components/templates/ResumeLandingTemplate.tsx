"use client";

import { useEffect } from "react";
import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import AboutSection from "@/components/organisms/AboutSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import ResumeSection from "@/components/organisms/ResumeSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";
import ScrollTop from "@/components/organisms/ScrollTop";

export default function ResumeLandingTemplate() {
  useEffect(() => {
    const loadLibs = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });

      const PureCounter = (await import("@srexi/purecounterjs")).default;
      new PureCounter();
    };

    loadLibs();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <HeroSection />
        <AboutSection />
        {/* <StatsSection /> */}
        <SkillsSection />
        <ResumeSection />
        <PortfolioSection />
        <ServicesSection />
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
