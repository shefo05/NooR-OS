"use client";

import { motion } from "framer-motion";
import LightboxImage from "@/components/ui/lightbox-image";
import FadeIn from "./FadeIn";

export default function MediaSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(0,60,140,0.12),transparent)]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Screenshots */}
          <div className="relative order-2 lg:order-1">
            <FadeIn delay={0.1} direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="screen-frame col-span-2">
                  <LightboxImage
                    src="/screenshots/media/ss19-dark-wave.png"
                    alt="Noor dark audio waveform"
                    width={900}
                    height={550}
                    className="w-full h-auto"
                  />
                </div>
                <div className="screen-frame">
                  <LightboxImage
                    src="/screenshots/media/ss21-transcript.png"
                    alt="Noor transcript"
                    width={450}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="screen-frame">
                  <LightboxImage
                    src="/screenshots/media/ss23-chat.png"
                    alt="Noor media chat"
                    width={450}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </FadeIn>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-[rgba(0,200,255,0.03)] blur-3xl pointer-events-none" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <span className="tag mb-5 inline-flex">Media Intelligence</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Listen less,
                <br />
                <span className="text-[#00c8ff]">understand more.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#6b8fb5] text-lg leading-relaxed mb-8">
                Noor transcribes, summarizes, and lets you chat with any
                audio or video. Catch up on lectures, meetings, and podcasts
                in seconds.
              </p>
            </FadeIn>

            <div className="flex flex-col gap-4">
              {[
                { icon: "🎙️", title: "Live Transcription", desc: "Real-time speech-to-text with speaker detection" },
                { icon: "📋", title: "Smart Summaries", desc: "Key points extracted and organized automatically" },
                { icon: "💬", title: "Chat with Audio", desc: "Ask questions about any recording or video" },
              ].map(({ icon, title, desc }, i) => (
                <FadeIn key={title} delay={0.3 + i * 0.1}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-4 p-4 rounded-xl border border-[rgba(0,200,255,0.08)] bg-[rgba(0,200,255,0.02)] hover:border-[rgba(0,200,255,0.18)] transition-colors"
                  >
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <p className="text-white font-medium text-sm mb-1">{title}</p>
                      <p className="text-[#6b8fb5] text-xs leading-relaxed">{desc}</p>
                    </div>
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
