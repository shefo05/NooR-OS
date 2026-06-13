import type { Metadata } from "next";
import { MessageSquare, Clock, Shield, Zap } from "lucide-react";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import SupportForm from "@/components/support/support-form";
import SupportCard from "@/components/support/support-card";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Contact the Noor OS support team. Submit a ticket for technical support, bug reports, feature requests, or general inquiries.",
  alternates: { canonical: "https://noor-os.com/support" },
  openGraph: {
    title: "Noor OS Support",
    description: "Get help from the Noor OS team. Submit your support request directly.",
    url: "https://noor-os.com/support",
  },
};

const infoCards = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Response Time",
    description: "We typically respond within 24–48 hours on business days.",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Direct Reply",
    description: "Our team replies directly to your email — no account needed.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Privacy First",
    description: "Your contact details are only used to respond to your request.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "All Topics Covered",
    description: "Technical issues, feature ideas, partnerships — we handle it all.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#050d1a] pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Hero */}
          <header className="text-center mb-16">
            <span className="tag mb-5 inline-flex">Support</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              How can we<br />
              <span className="text-[#00c8ff]">help you?</span>
            </h1>
            <p className="text-[#6b8fb5] text-xl leading-relaxed max-w-2xl mx-auto">
              Submit a support request and the Noor OS team will reply directly
              to your email. No redirects, no external portals.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Left column — info */}
            <aside className="lg:col-span-1 space-y-4">
              <div
                className="p-6 rounded-2xl mb-2"
                style={{ background: "#0a1628", border: "1px solid rgba(0,200,255,0.12)" }}
              >
                <h2 className="text-white font-semibold text-base mb-1">Contact Support</h2>
                <p className="text-[#6b8fb5] text-sm leading-relaxed">
                  Fill in the form and your ticket lands directly in our inbox.
                  We&apos;ll reply to your email address.
                </p>
              </div>

              {infoCards.map((card) => (
                <SupportCard key={card.title} {...card} />
              ))}
            </aside>

            {/* Right column — form */}
            <section className="lg:col-span-2">
              <div
                className="rounded-2xl p-8"
                style={{
                  background: "#0a1628",
                  border: "1px solid rgba(0,200,255,0.12)",
                  boxShadow:
                    "0 0 0 1px rgba(0,200,255,0.04), 0 24px 80px rgba(0,0,0,0.4), 0 0 60px rgba(0,200,255,0.04)",
                }}
              >
                <SupportForm />
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
