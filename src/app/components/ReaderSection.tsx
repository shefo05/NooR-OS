"use client";

import { motion, useInView } from "framer-motion";
import LightboxImage from "@/components/ui/lightbox-image";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const tabs = [
  { label: "Ask", src: "/screenshots/reader/ss14-ask.png", desc: "Ask anything about your document" },
  { label: "Summary", src: "/screenshots/reader/ss15-summary.png", desc: "Get instant AI-generated summaries" },
  { label: "Highlight", src: "/screenshots/reader/ss16-highlight.png", desc: "Smart AI-powered highlights" },
  { label: "Quiz", src: "/screenshots/reader/ss17-quiz.png", desc: "Test your understanding with AI quizzes" },
];

export default function ReaderSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reader" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(0,50,120,0.1),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="tag mb-5 inline-flex">Noor Reader</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Read smarter.
              <br />
              <span className="text-[#00c8ff]">Understand deeper.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-lg mx-auto text-[#6b8fb5] text-lg leading-relaxed">
              Open any PDF and have a conversation with it. Ask questions,
              get summaries, create quizzes  all powered by AI.
            </p>
          </FadeIn>
        </div>

        {/* Tab grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tabs.map(({ label, src, desc }, i) => (
            <FadeIn key={label} delay={0.1 + i * 0.1}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-4 group cursor-default"
              >
                <div className="screen-frame overflow-hidden group-hover:border-[rgba(0,200,255,0.3)] transition-colors duration-300">
                  <LightboxImage
                    src={src}
                    alt={`Noor Reader - ${label}`}
                    width={600}
                    height={380}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-[#6b8fb5] text-xs mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Big reader screenshot
        <FadeIn delay={0.2} className="mt-16">
          <div className="screen-frame">
            <LightboxImage
              src="/screenshots/media/ss22-summary.png"
              alt="Noor Reader - document summary"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </FadeIn> */}
      </div>
    </section>
  );
}
