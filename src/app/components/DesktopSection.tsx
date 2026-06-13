"use client";

import LightboxImage from "@/components/ui/lightbox-image";
import FadeIn from "./FadeIn";

export default function DesktopSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(0,50,120,0.1),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <FadeIn>
              <span className="tag mb-5 inline-flex">Desktop OS</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                An OS built
                <br />
                <span className="text-[#00c8ff]">around intelligence.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#6b8fb5] text-lg leading-relaxed mb-8">
                Noor is not a plugin or assistant  it&apos;s a complete AI-native
                operating environment. Every element of the desktop is
                AI-aware and context-sensitive.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Control Center", desc: "System-wide AI controls at your fingertips" },
                { title: "AI Providers", desc: "Plug in any model  local or cloud" },
                { title: "Unified Dock", desc: "All your AI tools in one launcher" },
                { title: "Real-time Context", desc: "Noor always knows what you're working on" },
              ].map(({ title, desc }, i) => (
                <FadeIn key={title} delay={0.3 + i * 0.08}>
                  <div className="p-4 rounded-xl border border-[rgba(0,200,255,0.1)] bg-[rgba(0,200,255,0.03)] hover:border-[rgba(0,200,255,0.2)] transition-colors duration-300">
                    <p className="text-white font-medium text-sm mb-1">{title}</p>
                    <p className="text-[#6b8fb5] text-xs leading-relaxed">{desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: stacked screenshots */}
          <div className="relative">
            <FadeIn delay={0.15} direction="right">
              <div className="screen-frame">
                <LightboxImage
                  src="/screenshots/desktop/ss02-control-center.png"
                  alt="Noor Control Center"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.35} direction="right">
              <div className="screen-frame mt-4 ml-8">
                <LightboxImage
                  src="/screenshots/desktop/ss04-ai-providers.png"
                  alt="Noor AI Providers"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
            {/* Decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-[rgba(0,200,255,0.04)] blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
