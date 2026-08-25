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

      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
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
