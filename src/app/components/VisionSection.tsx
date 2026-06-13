"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "./FadeIn";

const capabilities = [
  { icon: "🔤", title: "Visual OCR", desc: "Extract text from any image, screenshot, or scan — even handwritten notes." },
  { icon: "🎯", title: "Object Recognition", desc: "Identify objects, people, and scenes in any image using local AI." },
  { icon: "🧠", title: "Scene Understanding", desc: "Ask questions about what's in an image in plain language." },
  { icon: "💬", title: "Visual Q&A", desc: "Point at anything on screen. Noor Vision explains it instantly." },
];

export default function VisionSection() {
  return (
    <section id="vision" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(0,50,120,0.1),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Screenshot */}
          <FadeIn direction="left">
            <div className="screen-frame gradient-fade-bottom">
              <Image
                src="/screenshots/vision/ss13-architecture.png"
                alt="Noor Vision — AI image understanding"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <div>
            <FadeIn>
              <span className="tag mb-5 inline-flex">Noor Vision</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Images become
                <br />
                <span className="text-[#00c8ff]">interactive.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#6b8fb5] text-lg leading-relaxed mb-10">
                See a screenshot, a diagram, a photo, a PDF scan.
                Point at it. Ask Noor Vision what it means.
                Get an answer — without uploading anything to the cloud.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map(({ icon, title, desc }, i) => (
                <FadeIn key={title} delay={0.3 + i * 0.08}>
                  <motion.div
                    whileHover={{ y: -3, borderColor: "rgba(0,200,255,0.25)" }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-xl border border-[rgba(0,200,255,0.1)] bg-[rgba(0,200,255,0.02)]"
                  >
                    <span className="text-2xl mb-2 block">{icon}</span>
                    <p className="text-white font-medium text-sm mb-1">{title}</p>
                    <p className="text-[#6b8fb5] text-xs leading-relaxed">{desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
