"use client";

import { motion } from "framer-motion";
import LightboxImage from "@/components/ui/lightbox-image";
import FadeIn from "./FadeIn";

export default function ArabicSection() {
  return (
    <section id="arabic" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_40%_at_70%_50%,rgba(0,60,130,0.1),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <FadeIn>
              <span className="tag mb-5 inline-flex">Arabic Support</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                Native Arabic.
                <br />
                <span className="text-[#00c8ff]">Not an afterthought.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="text-3xl font-bold text-[rgba(0,200,255,0.5)] mb-6 font-mono" dir="rtl">
                نور
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#6b8fb5] text-lg leading-relaxed mb-8">
                Noor is built for Arabic speakers from the ground up. Full
                right-to-left layout, Arabic NLP, and culturally aware
                AI responses across every feature.
              </p>
            </FadeIn>

            <div className="flex flex-col gap-4">
              {[
                { title: "RTL Layout", desc: "Full right-to-left interface throughout the OS" },
                { title: "Arabic AI Bar", desc: "Type commands in Arabic  Noor executes natively" },
                { title: "Arabic Browser", desc: "Noor Browser with Arabic-first homepage" },
                { title: "Arabic Chat", desc: "Conversational AI in fluent Arabic" },
              ].map(({ title, desc }, i) => (
                <FadeIn key={title} delay={0.3 + i * 0.08}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-4 p-4 rounded-xl border border-[rgba(0,200,255,0.08)] bg-[rgba(0,200,255,0.02)] hover:border-[rgba(0,200,255,0.18)] transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00c8ff] mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium text-sm mb-0.5">{title}</p>
                      <p className="text-[#6b8fb5] text-xs leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          <div className="flex flex-col gap-4">
            <FadeIn delay={0.1} direction="right">
              <div className="screen-frame">
                <LightboxImage
                  src="/screenshots/arabic/ss05-aibar-arabic.png"
                  alt="Noor AI Bar in Arabic"
                  width={900}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4">
              <FadeIn delay={0.2} direction="right">
                <div className="screen-frame">
                  <LightboxImage
                    src="/screenshots/arabic/ss28-browser-arabic.png"
                    alt="Noor Browser in Arabic"
                    width={450}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.3} direction="right">
                <div className="screen-frame">
                  <LightboxImage
                    src="/screenshots/arabic/ss32-chat-arabic.png"
                    alt="Noor Chat in Arabic"
                    width={450}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.35} direction="right">
              <div className="screen-frame">
                <LightboxImage
                  src="/screenshots/arabic/ss25-browser-home.png"
                  alt="Noor Browser home in Arabic"
                  width={900}
                  height={560}
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
