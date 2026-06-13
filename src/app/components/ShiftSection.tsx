"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const timeline = [
  {
    year: "1970s",
    label: "CLI",
    desc: "Command-line interfaces. Humans speak the machine's language.",
    status: "past",
  },
  {
    year: "1984",
    label: "GUI",
    desc: "Graphical interfaces. Point, click, navigate menus.",
    status: "past",
  },
  {
    year: "2007",
    label: "Mobile",
    desc: "Touch computing. Apps for everything — siloed and fragmented.",
    status: "past",
  },
  {
    year: "Now",
    label: "AI-Native OS",
    desc: "The machine learns the human's language. Intent becomes the interface.",
    status: "now",
  },
];

export default function ShiftSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(0,60,140,0.1),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="tag mb-5 inline-flex">The Shift</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              A new computing
              <br />
              <span className="text-[#00c8ff]">paradigm.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-xl mx-auto text-[#6b8fb5] text-lg leading-relaxed">
              Every decade, computing reinvented itself. The next reinvention
              is not an app. It&apos;s not an interface. It&apos;s a new relationship
              between humans and machines.
            </p>
          </FadeIn>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Animated progress line */}
          <div className="absolute top-[52px] left-0 right-0 h-px bg-[rgba(0,200,255,0.08)]">
            <motion.div
              className="h-full bg-gradient-to-r from-[rgba(255,107,107,0.4)] via-[rgba(0,200,255,0.6)] to-[#00c8ff]"
              style={{ width: lineWidth }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8 relative">
            {timeline.map(({ year, label, desc, status }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Node */}
                <div
                  className={`w-6 h-6 rounded-full border-2 mb-8 relative z-10 flex items-center justify-center ${
                    status === "now"
                      ? "border-[#00c8ff] bg-[#00c8ff] shadow-[0_0_20px_rgba(0,200,255,0.5)]"
                      : "border-[rgba(255,107,107,0.4)] bg-[rgba(255,107,107,0.1)]"
                  }`}
                >
                  {status === "now" && (
                    <motion.div
                      className="absolute inset-0 rounded-full border border-[rgba(0,200,255,0.4)]"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                <span className="text-xs font-mono text-[#6b8fb5] mb-1">{year}</span>
                <h3
                  className={`text-lg font-bold mb-3 ${
                    status === "now" ? "text-[#00c8ff]" : "text-white"
                  }`}
                >
                  {label}
                </h3>
                <p className="text-[#6b8fb5] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden flex flex-col gap-8">
          {timeline.map(({ year, label, desc, status }, i) => (
            <FadeIn key={label} delay={0.1 + i * 0.1}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-1 ${
                      status === "now"
                        ? "border-[#00c8ff] bg-[#00c8ff] shadow-[0_0_12px_rgba(0,200,255,0.5)]"
                        : "border-[rgba(255,107,107,0.4)] bg-[rgba(255,107,107,0.1)]"
                    }`}
                  />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-[rgba(0,200,255,0.1)]" />
                  )}
                </div>
                <div className="pb-4">
                  <span className="text-xs font-mono text-[#6b8fb5]">{year}</span>
                  <h3
                    className={`text-base font-bold mt-0.5 mb-1 ${
                      status === "now" ? "text-[#00c8ff]" : "text-white"
                    }`}
                  >
                    {label}
                  </h3>
                  <p className="text-[#6b8fb5] text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom statement */}
        <FadeIn delay={0.5} className="mt-20">
          <div className="text-center">
            <p className="text-xl sm:text-2xl text-white font-semibold max-w-2xl mx-auto leading-snug">
              The next interface is not a button.
              <br />
              <span className="text-[#00c8ff]">It&apos;s a conversation.</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
