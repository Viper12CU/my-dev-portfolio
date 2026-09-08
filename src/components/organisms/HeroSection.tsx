"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { heroData } from "@/data/hero";
import SocialLink from "@/components/atoms/SocialLink";
import { FlipWords } from "../ui/flip-words";

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
      <Image
        src="/assets/img/hero-bg-3.jpeg"
        alt="background hero"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>{heroData.name}</h2>
            <div className="hero-typed">
              I&apos;m{" "}
              <FlipWords
              duration={1100}
                words={heroData.typedItems}
                className="hero-flip-words"
              />
              <span
                className="typed-cursor typed-cursor--blink"
                aria-hidden="true"
              />
            </div>
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
