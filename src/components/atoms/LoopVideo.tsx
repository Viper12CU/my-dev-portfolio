// components/LoopVideo.tsx
"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
  src: string;
  poster: string;
  className?: string;
  style?: CSSProperties;
};

export default function LoopVideo({ src, poster, className, style }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(false);

  // Detecta cuándo está cerca de la pantalla
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.disableRemotePlayback = true;

    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setLoad(true);
      },
      { rootMargin: "200px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Reproduce/pausa cuando el src ya existe en el DOM
  useEffect(() => {
    const el = ref.current;
    if (!el || !load) return;

    if (visible) {
      el.play().catch((err) => {
        if (err.name === "AbortError") return; // el elemento se desmontó o se recargó, es normal
        console.warn("Video play error:", err);
      });
    } else {
      el.pause();
    }
  }, [load, visible]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      src={load ? src : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
      aria-hidden="true"
      tabIndex={-1}
      onContextMenu={(e) => e.preventDefault()}
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
