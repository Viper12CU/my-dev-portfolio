// components/LoopVideo.tsx
"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { RotateCcw, TriangleAlert } from "lucide-react";

type Props = {
  src: string;
  /** @deprecated Ya no se usa: en lugar del poster se muestra loading/error. Se mantiene opcional por compatibilidad. */
  poster?: string;
  className?: string;
  style?: CSSProperties;
  timeoutMs?: number;
  loadingText?: string;
  errorText?: string;
  retryText?: string;
};

type Status = "loading" | "ready" | "error";

export default function LoopVideo({
  src,
  className,
  style,
  timeoutMs = 10000,
  loadingText = "Cargando video…",
  errorText = "No se pudo cargar el video.",
  retryText = "Reintentar",
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<Status>("loading");
  const [retryKey, setRetryKey] = useState(0);

  // Detecta cuándo el contenedor está cerca de la pantalla
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

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

  // Timeout de 10s: si no hay señal de ready, pasar a error
  useEffect(() => {
    if (!load || status !== "loading") return;
    const timer = setTimeout(() => {
      setStatus((prev) => (prev === "loading" ? "error" : prev));
    }, timeoutMs);
    return () => clearTimeout(timer);
  }, [load, status, timeoutMs, retryKey]);

  // Reproduce/pausa cuando el src ya existe en el DOM y el video está listo
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !load || status !== "ready") return;

    if (visible) {
      el.play().catch((err) => {
        if (err.name === "AbortError") return; // el elemento se desmontó o se recargó, es normal
        console.warn("Video play error:", err);
      });
    } else {
      el.pause();
    }
  }, [load, visible, status, retryKey]);

  const markReady = useCallback(() => {
    setStatus((prev) => (prev === "ready" ? prev : "ready"));
  }, []);

  const markError = useCallback(() => {
    setStatus("error");
  }, []);

  const handleRetry = useCallback(() => {
    setStatus("loading");
    setLoad(false);
    // Re-monta el <video> y reinicia el timeout en el siguiente tick
    setRetryKey((k) => k + 1);
    requestAnimationFrame(() => setLoad(true));
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`loop-video-wrapper ${className ?? ""}`}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        ...style,
      }}
      data-testid="loop-video"
    >
      {status === "loading" && (
        <div className="loop-video-loading" role="status" aria-live="polite">
          <span className="loop-video-spinner" aria-hidden="true" />
          <span>{loadingText}</span>
        </div>
      )}

      {status === "error" && (
        <div className="loop-video-error" role="alert">
          <TriangleAlert size={22} aria-hidden="true" />
          <p>{errorText}</p>
          <button type="button" className="btn-get-started loop-video-retry" onClick={handleRetry}>
            <RotateCcw size={16} aria-hidden="true" />
            {retryText}
          </button>
        </div>
      )}

      <video
        key={retryKey}
        ref={videoRef}
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
        onCanPlay={markReady}
        onPlaying={markReady}
        onError={markError}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          opacity: status === "ready" ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}
