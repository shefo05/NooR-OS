import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Noor Vision — AI Image Understanding & Visual Intelligence",
  description:
    "Noor Vision is an AI image analysis module in Noor OS. Extract text via OCR, identify objects, understand scenes, and ask questions about any image — all locally with no cloud.",
  keywords: [
    "AI image analysis desktop",
    "computer vision OS",
    "visual AI assistant",
    "AI image understanding",
    "local AI image recognition",
    "offline OCR AI",
    "Noor Vision",
  ],
  alternates: { canonical: "https://noor-os.com/features/vision" },
  openGraph: {
    title: "Noor Vision — AI Image Understanding",
    description: "Point at any image. Ask what it means. Get an answer — no cloud required.",
    url: "https://noor-os.com/features/vision",
  },
};

export default function VisionPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://noor-os.com" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://noor-os.com/features" },
      { "@type": "ListItem", position: 3, name: "Noor Vision", item: "https://noor-os.com/features/vision" },
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
            <span className="text-white">Noor Vision</span>
          </nav>

          <header className="mb-16">
            <span className="tag mb-5 inline-flex">Noor Vision</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Images become<br />
              <span className="text-[#00c8ff]">interactive.</span>
            </h1>
            <p className="text-[#6b8fb5] text-xl leading-relaxed max-w-2xl">
              Noor Vision turns any image into an interactive AI workspace.
              Screenshots, photographs, diagrams, scanned pages — point at them,
              ask questions, extract text. All processing happens on your device.
            </p>
          </header>

          <div className="screen-frame mb-16 gradient-fade-bottom">
            <Image src="/screenshots/vision/ss13-architecture.png" alt="Noor Vision — AI image intelligence interface" width={1200} height={800} className="w-full h-auto" priority />
          </div>

          <section className="mb-16 p-8 rounded-2xl border border-[rgba(0,200,255,0.12)] bg-[rgba(0,200,255,0.03)]">
            <h2 className="text-2xl font-bold text-white mb-4">What is Noor Vision?</h2>
            <p className="text-[#6b8fb5] leading-relaxed mb-4">
              <strong className="text-white">Noor Vision</strong> is the visual intelligence module of Noor OS.
              It applies computer vision and AI to images at the operating system level — making any visual content
              queryable, searchable, and understandable through natural language.
            </p>
            <p className="text-[#6b8fb5] leading-relaxed">
              Traditional operating systems treat images as opaque files. Noor Vision makes them transparent —
              you can ask what is in a screenshot, extract text from a scanned document,
              identify objects in a photo, or understand a diagram, all without uploading anything to the cloud.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Visual OCR", desc: "Extract text from any image — printed, handwritten, screenshots, or scanned pages — with high accuracy." },
                { title: "Object Recognition", desc: "Identify objects, people, places, and elements within any image using local AI models." },
                { title: "Scene Understanding", desc: "Describe and analyze complex scenes, diagrams, charts, and photographs in natural language." },
                { title: "Visual Q&A", desc: "Ask any question about image content and receive detailed, accurate answers on-device." },
                { title: "Arabic OCR", desc: "High-accuracy OCR for Arabic text in images, supporting RTL and mixed-language documents." },
                { title: "Screenshot Analysis", desc: "Instantly analyze and describe screenshots from any application or system state." },
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
              {[{ slug: "reader", name: "Noor Reader" }, { slug: "media", name: "Noor Media" }, { slug: "privacy", name: "Privacy" }].map(({ slug, name }) => (
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
