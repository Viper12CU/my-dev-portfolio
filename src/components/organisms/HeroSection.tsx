"use client";

import { useEffect, useRef } from "react";
import { heroData } from "@/data/hero";
import SocialLink from "@/components/atoms/SocialLink";

export default function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const loadTyped = async () => {
      const Typed = (await import("typed.js")).default;
      if (typedRef.current) {
        new Typed(typedRef.current, {
          strings: heroData.typedItems,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });
      }
    };

    loadTyped();
  }, []);

  return (
    <section id="hero" className="hero section light-background">
      <img src="/assets/img/hero-bg.jpg" alt="" />

      <div className="container mx-auto px-4 relative z-10" data-aos="zoom-out">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <h2>{heroData.name}</h2>
            <p>
              I&apos;m{" "}
              <span ref={typedRef} className="typed">
                {heroData.typedItems[0]}
              </span>
              <span
                className="typed-cursor typed-cursor--blink"
                aria-hidden="true"
              />
            </p>
            <div className="social-links">
              {heroData.socialLinks.map((link, i) => (
                <SocialLink key={i} icon={link.icon} href={link.href} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
