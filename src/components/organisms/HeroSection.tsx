"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SocialLink from "@/components/atoms/SocialLink";
import { FlipWords } from "../ui/flip-words";
import { heroData } from "@/data/hero";

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const t = useTranslations("Hero");
  const heroTypedItems = t.raw("typed") as string[];
  const heroName = "Fabian Lemus";

  useEffect(() => {
    let typedInstance: { destroy: () => void } | null = null;

    const loadTyped = async () => {
      const Typed = (await import("typed.js")).default;
      if (typedRef.current) {
        const instance = new Typed(typedRef.current, {
          strings: heroTypedItems,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typedInstance = { destroy: () => (instance as any).destroy() };
      }
    };

    loadTyped();

    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, [heroTypedItems]);

  return (
    <section id="hero" className="hero section light-background">
      <Image
        src="/assets/img/hero-bg-3.jpeg"
        alt=""
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
        aria-hidden="true"
      />

      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>{heroName}</h2>
            <div className="hero-typed">
              {t("intro")} {" "}
              <FlipWords
                duration={1100}
                words={heroTypedItems}
                className="hero-flip-words"
              />
              <span
                className="typed-cursor typed-cursor--blink"
                aria-hidden="true"
              />
            </div>
            <div className="social-links">
              {heroData.socialLinks.map((link, i) => (
                <SocialLink
                  justifyContent="start"
                  key={i}
                  icon={link.icon}
                  href={link.href}
                  label={`Visitar ${link.icon}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
