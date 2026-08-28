"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/atoms/Icon";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center ${visible ? "active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <Icon name="ArrowUp" />
    </a>
  );
}
