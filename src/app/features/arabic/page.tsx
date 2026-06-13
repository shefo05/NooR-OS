import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Arabic First — Native Arabic AI Operating System",
  description:
    "Noor OS is the first AI operating system with native Arabic language support. Arabic AI conversations, Arabic OCR, RTL interfaces, and full Arabic command support built from the ground up.",
  keywords: [
    "Arabic AI operating system",
    "Arabic language AI desktop",
    "RTL AI interface",
    "Arabic OCR AI",
    "Arabic AI assistant",
    "نور للذكاء الاصطناعي",
    "نظام تشغيل عربي",
    "Arabic local AI",
    "Noor OS Arabic",
  ],
  alternates: { canonical: "https://noor-os.com/features/arabic" },
  openGraph: {
    title: "Noor OS Arabic First — Native Arabic AI Computing",
    description: "The first AI operating system built for Arabic speakers from the ground up.",
    url: "https://noor-os.com/features/arabic",
  },
};

export default function ArabicPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://noor-os.com" },
      { "@type": "ListItem", position: 2, name: "Features", item: "https://noor-os.com/features" },
      { "@type": "ListItem", position: 3, name: "Arabic First", item: "https://noor-os.com/features/arabic" },
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
            <span className="text-white">Arabic First</span>
          </nav>

          <header className="mb-16">
            <span className="tag mb-5 inline-flex">Arabic First</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
              Built for Arabic<br />
              <span className="text-[#00c8ff]">from day one.</span>
            </h1>
            <p className="text-3xl font-bold text-[rgba(0,200,255,0.4)] mb-6" dir="rtl">
              نور — الذكاء الاصطناعي بالعربية
            </p>
            <p className="text-[#6b8fb5] text-xl leading-relaxed max-w-2xl">
              Arabic is not a localization in Noor OS. It is a first-class language.
              Every module — AI Bar, Reader, Vision, Media — supports Arabic natively.
              The only AI operating system designed with Arabic heritage.
            </p>
          </header>

          <div className="screen-frame mb-16">
            <Image src="/screenshots/arabic/ss32-chat-arabic.png" alt="Noor OS Arabic — native Arabic AI conversation interface" width={1200} height={700} className="w-full h-auto" priority />
          </div>

          <section className="mb-16 p-8 rounded-2xl border border-[rgba(0,200,255,0.12)] bg-[rgba(0,200,255,0.03)]">
            <h2 className="text-2xl font-bold text-white mb-4">Arabic as a first-class language</h2>
            <p className="text-[#6b8fb5] leading-relaxed mb-4">
              Most operating systems and AI tools treat Arabic as an afterthought — a language pack
              added after the core product is built. This results in poor RTL support, broken layouts,
              inaccurate OCR, and AI models that struggle with Arabic nuance.
            </p>
            <p className="text-[#6b8fb5] leading-relaxed">
              <strong className="text-white">Noor OS was designed with Arabic from the start.</strong> The AI models
              are selected and tuned for Arabic performance. Interfaces adapt natively to RTL. OCR handles
              Arabic script with high fidelity. Voice recognition understands Arabic accents.
              This is not a translation — it is a native Arabic computing experience.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Arabic features in every module</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { src: "/screenshots/arabic/ss05-aibar-arabic.png", label: "Arabic AI Bar commands" },
                { src: "/screenshots/arabic/ss28-browser-arabic.png", label: "Arabic browser integration" },
                { src: "/screenshots/arabic/ss25-browser-home.png", label: "RTL interface" },
                { src: "/screenshots/arabic/ss32-chat-arabic.png", label: "Arabic AI conversations" },
              ].map(({ src, label }) => (
                <div key={label} className="flex flex-col gap-2">
                  <div className="screen-frame">
                    <Image src={src} alt={`Noor OS Arabic — ${label}`} width={800} height={500} className="w-full h-auto" />
                  </div>
                  <p className="text-[#6b8fb5] text-xs">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Arabic capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Arabic AI Bar", desc: "Issue commands to the entire operating system in Arabic. Full intent understanding in Arabic." },
                { title: "Arabic OCR", desc: "High-accuracy text extraction from Arabic documents, images, and scanned pages." },
                { title: "RTL Interface", desc: "All Noor OS interfaces adapt natively to right-to-left reading direction for Arabic users." },
                { title: "Arabic Document Analysis", desc: "Noor Reader fully supports Arabic-language PDFs including summaries, Q&A, and highlights." },
                { title: "Arabic Voice", desc: "Arabic speech recognition and voice commands for hands-free computing in Arabic." },
                { title: "Bilingual AI", desc: "Seamlessly switch between Arabic and English within the same conversation or document session." },
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
              {[{ slug: "aibar", name: "AI Bar" }, { slug: "reader", name: "Noor Reader" }, { slug: "privacy", name: "Privacy" }].map(({ slug, name }) => (
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
