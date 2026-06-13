import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Features — AI-Native OS Capabilities",
  description:
    "Explore Noor OS features: AIBar intent interface, PDF Reader AI, Vision image intelligence, Media transcription, privacy-first local AI, and native Arabic support.",
  alternates: { canonical: "https://noor-os.com/features" },
  openGraph: {
    title: "Noor OS Features — AI-Native Operating System Capabilities",
    description:
      "Every Noor OS feature is built around one principle: humans express intent, the OS executes.",
    url: "https://noor-os.com/features",
  },
};

const features = [
  {
    slug: "aibar",
    name: "AI Bar",
    tagline: "Intent-Driven OS Interface",
    desc: "A system-wide AI interface accessible with one keystroke. Type anything in natural language — Noor OS understands and executes.",
    img: "/screenshots/aibar/ss03-suggestions.png",
    keyword: "AI command interface",
  },
  {
    slug: "reader",
    name: "Noor Reader",
    tagline: "AI PDF & Document Intelligence",
    desc: "Open any PDF and have a conversation with it. Ask questions, get summaries, extract knowledge — powered by local AI.",
    img: "/screenshots/reader/ss14-ask.png",
    keyword: "AI document analysis",
  },
  {
    slug: "vision",
    name: "Noor Vision",
    tagline: "AI Image Understanding",
    desc: "Point at any image, screenshot, or scan. Ask what it contains. Get an answer — entirely on-device, no cloud required.",
    img: "/screenshots/vision/ss13-architecture.png",
    keyword: "AI image analysis",
  },
  {
    slug: "media",
    name: "Noor Media",
    tagline: "AI Audio & Video Intelligence",
    desc: "Transcribe, summarize, and semantically search any audio or video file using Whisper and local AI.",
    img: "/screenshots/media/ss21-transcript.png",
    keyword: "AI audio transcription",
  },
  {
    slug: "privacy",
    name: "Privacy Architecture",
    tagline: "Local AI — Zero Cloud",
    desc: "Every AI operation runs on your device. No data leaves your machine. Privacy is not a setting — it is the architecture.",
    img: "/screenshots/privacy/ss26-privacy-shield.png",
    keyword: "local AI privacy",
  },
  {
    slug: "arabic",
    name: "Arabic First",
    tagline: "Arabic-Native AI Computing",
    desc: "Arabic is not a language pack. It is a first-class language in every module — AI conversations, OCR, RTL interfaces, and document analysis.",
    img: "/screenshots/arabic/ss32-chat-arabic.png",
    keyword: "Arabic AI operating system",
  },
];

export default function FeaturesPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://noor-os.com" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://noor-os.com/features" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <div className="min-h-screen bg-[#050d1a] pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-xs text-[#6b8fb5] mb-10 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Features</span>
          </nav>

          <div className="text-center mb-20">
            <span className="tag mb-5 inline-flex">All Features</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Every capability.<br />
              <span className="text-[#00c8ff]">One intention.</span>
            </h1>
            <p className="max-w-xl mx-auto text-[#6b8fb5] text-lg leading-relaxed">
              Noor OS features are not isolated tools — they are a unified AI-native
              computing platform built around a single principle: express intent, get results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ slug, name, tagline, desc, img, keyword }) => (
              <Link key={slug} href={`/features/${slug}`} className="group block">
                <article className="h-full rounded-2xl border border-[rgba(0,200,255,0.1)] bg-[rgba(10,22,40,0.5)] overflow-hidden hover:border-[rgba(0,200,255,0.3)] transition-all duration-300 hover:-translate-y-1">
                  <div className="screen-frame rounded-none border-0 border-b border-[rgba(0,200,255,0.08)]">
                    <Image src={img} alt={`${name} — ${keyword}`} width={800} height={500} className="w-full h-48 object-cover object-top" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-[#00c8ff] font-medium uppercase tracking-widest">{tagline}</span>
                    <h2 className="text-white font-bold text-xl mt-1 mb-3 group-hover:text-[#00c8ff] transition-colors">{name}</h2>
                    <p className="text-[#6b8fb5] text-sm leading-relaxed">{desc}</p>
                    <div className="mt-5 flex items-center gap-1 text-[#00c8ff] text-sm font-medium">
                      Learn more <span className="text-base transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
