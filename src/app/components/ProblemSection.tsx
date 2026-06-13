"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";

const eras = [
  {
    label: "1970s",
    name: "Command Line",
    icon: ">_",
    desc: "Humans learned cryptic commands. Every task required memorizing syntax.",
    pain: "Only experts could operate computers",
  },
  {
    label: "1984",
    name: "Graphical UI",
    icon: "⊞",
    desc: "Windows, menus, icons. Easier — but still hierarchical and manual.",
    pain: "Humans still navigate menus to find actions",
  },
  {
    label: "2007",
    name: "Mobile Apps",
    icon: "⬜",
    desc: "Touch-based. Millions of isolated apps, each with their own logic.",
    pain: "Humans switch between apps to accomplish one goal",
  },
];

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_60%,rgba(80,0,60,0.08),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <FadeIn>
            <span className="tag mb-5 inline-flex">The Problem</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
              Computers still expect humans to{" "}
              <span className="text-[#ff6b6b]">think like machines.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-xl mx-auto text-[#6b8fb5] text-lg leading-relaxed">
              For fifty years, humans adapted to computers. We learned commands,
              navigated menus, and memorized file systems. The machine never met us halfway.
            </p>
          </FadeIn>
        </div>

        {/* Era cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {eras.map(({ label, name, icon, desc, pain }, i) => (
            <FadeIn key={name} delay={0.1 + i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl border border-[rgba(255,107,107,0.12)] bg-[rgba(255,107,107,0.03)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(255,107,107,0.06),transparent)] pointer-events-none" />
                <span className="text-xs font-mono text-[rgba(255,107,107,0.6)] mb-3 block">{label}</span>
                <div className="text-2xl mb-3 font-mono text-[rgba(255,107,107,0.7)]">{icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{name}</h3>
                <p className="text-[#6b8fb5] text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-[rgba(255,107,107,0.06)] border border-[rgba(255,107,107,0.1)]">
                  <span className="text-[rgba(255,107,107,0.7)] text-xs mt-0.5">✕</span>
                  <p className="text-[rgba(255,107,107,0.8)] text-xs leading-relaxed">{pain}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Central tension statement */}
        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto text-center py-12 px-8 rounded-3xl border border-[rgba(0,200,255,0.08)] bg-[rgba(0,200,255,0.02)] relative overflow-hidden">
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={inView ? { opacity: [0, 0.5, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,200,255,0.04), transparent)",
              }}
            />
            <p className="text-2xl sm:text-3xl font-bold text-white leading-snug relative z-10">
              &ldquo;The burden of computing<br />
              <span className="text-[#6b8fb5]">has always been on the</span>{" "}
              <span className="text-[#ff6b6b]">human.</span>&rdquo;
            </p>
            <p className="text-[#6b8fb5] text-base mt-4 relative z-10">
              Until now.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
