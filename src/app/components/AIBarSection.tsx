"use client";

import LightboxImage from "@/components/ui/lightbox-image";
import FadeIn from "./FadeIn";

export default function AIBarSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(0,80,160,0.12),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn>
            <span className="tag mb-5 inline-flex">AI Bar</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Ask Noor anything.
              <br />
              <span className="text-[#00c8ff]">Get it done instantly.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-lg mx-auto text-[#6b8fb5] text-lg leading-relaxed">
              A single keystroke summons your AI companion. Type in plain language
               Noor understands and executes.
            </p>
          </FadeIn>
        </div>

        {/* Main screenshot */}
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="screen-frame">
              <LightboxImage
                src="/screenshots/aibar/ss03-suggestions.png"
                alt="Noor AI Bar showing suggestions"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        </div>

        {/* Execution flow  3 screenshots */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: "/screenshots/aibar/ss06-welcome.png", label: "1. Wake Noor", caption: "One hotkey to summon" },
            { src: "/screenshots/aibar/ss07-executing.png", label: "2. Execute", caption: "Watch it work in real time" },
            { src: "/screenshots/aibar/ss08-result.png", label: "3. Result", caption: "Instant, accurate output" },
          ].map(({ src, label, caption }, i) => (
            <FadeIn key={src} delay={0.1 + i * 0.12}>
              <div className="flex flex-col gap-3">
                <div className="screen-frame">
                  <LightboxImage src={src} alt={label} width={600} height={380} className="w-full h-auto" />
                </div>
                <div className="text-center">
                  <p className="text-white text-sm font-medium">{label}</p>
                  <p className="text-[#6b8fb5] text-xs mt-0.5">{caption}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
