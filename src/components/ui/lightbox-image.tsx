"use client";

import { useState, useEffect, useCallback } from "react";
import NextImage, { type ImageProps } from "next/image";
import { createPortal } from "react-dom";
import { X, Maximize2, Minimize2 } from "lucide-react";

type LightboxImageProps = Omit<ImageProps, "onClick">;

export default function LightboxImage({ className, ...props }: LightboxImageProps) {
  const [open, setOpen] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const close = useCallback(() => {
    setOpen(false);
    setMaximized(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [open, close]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const portal = mounted && open ? createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <button
          onClick={(e) => { e.stopPropagation(); setMaximized((m) => !m); }}
          aria-label={maximized ? "Minimize" : "Maximize"}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-[rgba(5,13,26,0.92)] border border-[rgba(0,200,255,0.25)] text-[#00c8ff] hover:bg-[rgba(0,200,255,0.15)] transition-colors duration-150"
        >
          {maximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); close(); }}
          aria-label="Close"
          className="w-9 h-9 rounded-full flex items-center justify-center bg-[rgba(5,13,26,0.92)] border border-[rgba(0,200,255,0.25)] text-white hover:bg-[rgba(239,68,68,0.12)] hover:border-[rgba(239,68,68,0.4)] hover:text-red-400 transition-colors duration-150"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative z-[1] flex items-center justify-center transition-all duration-300 ${
          maximized ? "w-screen h-screen p-4" : "max-w-[92vw] max-h-[88vh] p-2"
        }`}
      >
        <div
          className="rounded-xl overflow-hidden"
          style={{
            border: "1px solid rgba(0,200,255,0.15)",
            boxShadow: "0 0 100px rgba(0,0,0,0.85), 0 0 40px rgba(0,200,255,0.04)",
          }}
        >
          <NextImage
            {...props}
            priority
            style={{
              width: "auto",
              height: "auto",
              maxWidth: maximized ? "calc(100vw - 2rem)" : "88vw",
              maxHeight: maximized ? "calc(100vh - 2rem)" : "84vh",
              display: "block",
            }}
            className="object-contain"
          />
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      {/* Wrapper div owns the click — more reliable than onClick on next/image */}
      <div
        role="button"
        tabIndex={0}
        aria-label={`View full size: ${String(props.alt)}`}
        className="cursor-zoom-in block"
        style={{ lineHeight: 0, position: "relative", zIndex: 2 }}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setOpen(true); }}
      >
        <NextImage
          {...props}
          className={`${className ?? ""} pointer-events-none`}
        />
      </div>
      {portal}
    </>
  );
}
