"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const suggestions = [
  "Open browser",
  "How much memory is available?",
  "Take a screenshot",
  "Show running processes",
  "What time is it?",
  "Run git status",
];

export default function AIBarSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(0,80,160,0.12),transparent)]" />

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
              — Noor understands and executes.
            </p>
          </FadeIn>
        </div>

        {/* Main screenshot with floating chips */}
        <div className="relative max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="screen-frame">
              <Image
                src="/screenshots/aibar/ss03-suggestions.png"
                alt="Noor AI Bar showing suggestions"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </FadeIn>

          {/* Floating suggestion pills */}
          <div className="absolute -right-4 top-1/4 hidden lg:flex flex-col gap-3">
            {suggestions.slice(0, 3).map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="px-4 py-2 rounded-full text-xs text-[#00c8ff] border border-[rgba(0,200,255,0.2)] bg-[rgba(0,200,255,0.06)] whitespace-nowrap"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Execution flow — 3 screenshots */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: "/screenshots/aibar/ss06-welcome.png", label: "1. Wake Noor", caption: "One hotkey to summon" },
            { src: "/screenshots/aibar/ss07-executing.png", label: "2. Execute", caption: "Watch it work in real time" },
            { src: "/screenshots/aibar/ss08-result.png", label: "3. Result", caption: "Instant, accurate output" },
          ].map(({ src, label, caption }, i) => (
            <FadeIn key={src} delay={0.1 + i * 0.12}>
              <div className="flex flex-col gap-3">
                <div className="screen-frame">
                  <Image src={src} alt={label} width={600} height={380} className="w-full h-auto" />
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
