import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Noor Media — AI Audio & Video Intelligence",
  description:
    "Noor Media transcribes, summarizes, and semantically searches audio and video files using Whisper and local AI. Offline speech recognition for any language including Arabic.",
  keywords: [
    "AI audio transcription desktop",
    "AI video summarization",
    "Whisper transcription OS",
    "offline speech recognition Linux",
    "AI media analysis",
    "local audio AI",
    "Arabic audio transcription",
    "Noor Media",
  ],
  alternates: { canonical: "https://noor-os.com/features/media" },
  openGraph: {
    title: "Noor Media — AI Audio & Video Intelligence",
    description: "Transcribe, summarize, and search any audio or video file with local AI.",
    url: "https://noor-os.com/features/media",
  },
};

export default function MediaPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://noor-os.com" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://noor-os.com/features" },
      { "@type": "ListItem", position: 3, name: "Noor Media", item: "https://noor-os.com/features/media" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article className="min-h-screen bg-[#050d1a] pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="text-xs text-[#6b8fb5] mb-10 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <span>/</span>
            <span className="text-white">Noor Media</span>
          </nav>

          <header className="mb-16">
            <span className="tag mb-5 inline-flex">Noor Media</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Understand audio and video<br />
              <span className="text-[#00c8ff]">instantly.</span>
            </h1>
            <p className="text-[#6b8fb5] text-xl leading-relaxed max-w-2xl">
              Noor Media applies AI to audio and video files at the OS level.
              Transcribe recordings, generate summaries, and semantically search
              spoken content — all using Whisper and local AI models, entirely offline.
            </p>
          </header>

          <div className="screen-frame mb-16">
            <Image src="/screenshots/media/ss21-transcript.png" alt="Noor Media — AI audio transcription" width={1200} height={700} className="w-full h-auto" priority />
          </div>

          <section className="mb-16 p-8 rounded-2xl border border-[rgba(0,200,255,0.12)] bg-[rgba(0,200,255,0.03)]">
            <h2 className="text-2xl font-bold text-white mb-4">What is Noor Media?</h2>
            <p className="text-[#6b8fb5] leading-relaxed mb-4">
              <strong className="text-white">Noor Media</strong> is the audio and video intelligence module of Noor OS.
              It uses OpenAI Whisper — running entirely locally — to transcribe any audio or video file
              with high accuracy across multiple languages including Arabic.
            </p>
            <p className="text-[#6b8fb5] leading-relaxed">
              Beyond transcription, Noor Media uses local language models to generate summaries,
              extract key points, and enable semantic search across spoken content.
              A one-hour meeting recording becomes a searchable, summarized knowledge asset in seconds.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Media intelligence screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { src: "/screenshots/media/ss18-light-wave.png", label: "Audio waveform analysis" },
                { src: "/screenshots/media/ss22-summary.png", label: "AI-generated summary" },
                { src: "/screenshots/media/ss23-chat.png", label: "Chat with media content" },
                { src: "/screenshots/media/ss19-dark-wave.png", label: "Dark mode waveform" },
              ].map(({ src, label }) => (
                <div key={label} className="flex flex-col gap-2">
                  <div className="screen-frame">
                    <Image src={src} alt={`Noor Media — ${label}`} width={800} height={500} className="w-full h-auto" />
                  </div>
                  <p className="text-[#6b8fb5] text-xs">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Whisper Transcription", desc: "High-accuracy offline speech-to-text powered by Whisper, supporting 100+ languages." },
                { title: "AI Summary", desc: "Convert any recording into a structured summary with key points and action items." },
                { title: "Semantic Search", desc: "Search spoken content by meaning — find any moment in any recording with a sentence." },
                { title: "Chat With Media", desc: "Ask questions about the content of any audio or video file in natural language." },
                { title: "Arabic Transcription", desc: "Native Arabic speech recognition and analysis with high accuracy for Arabic speakers." },
                { title: "Fully Offline", desc: "All transcription and AI analysis runs on-device. No audio is ever uploaded to cloud services." },
              ].map(({ title, desc }) => (
                <div key={title} className="p-5 rounded-xl border border-[rgba(0,200,255,0.1)] bg-[rgba(10,22,40,0.5)]">
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-[#6b8fb5] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Explore more Noor OS features</h2>
            <div className="flex flex-wrap gap-3">
              {[{ slug: "vision", name: "Noor Vision" }, { slug: "reader", name: "Noor Reader" }, { slug: "arabic", name: "Arabic First" }].map(({ slug, name }) => (
                <Link key={slug} href={`/features/${slug}`} className="px-5 py-2.5 rounded-full border border-[rgba(0,200,255,0.2)] text-[#00c8ff] text-sm hover:bg-[rgba(0,200,255,0.08)] transition-colors">
                  {name} →
                </Link>
              ))}
              <Link href="/" className="px-5 py-2.5 rounded-full bg-[#00c8ff] text-[#050d1a] text-sm font-semibold hover:bg-white transition-colors">
                Join Waitlist
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
