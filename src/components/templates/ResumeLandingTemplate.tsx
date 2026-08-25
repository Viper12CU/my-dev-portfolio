"use client";

import Header from "@/components/organisms/Header";
import HeroSection from "@/components/organisms/HeroSection";
import AboutSection from "@/components/organisms/AboutSection";
import StatsSection from "@/components/organisms/StatsSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import ResumeSection from "@/components/organisms/ResumeSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";
import ScrollTop from "@/components/organisms/ScrollTop";

export default function ResumeLandingTemplate() {
  return (
    <>
      <Header />
      <main className="main">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SkillsSection />
        <ResumeSection />
        <PortfolioSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
