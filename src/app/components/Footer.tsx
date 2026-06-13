"use client";

import Image from "next/image";

const links = {
  Product: [
    { label: "AIBar", href: "#features" },
    { label: "Reader", href: "#reader" },
    { label: "Vision", href: "#vision" },
    { label: "Media", href: "#media" },
    { label: "Privacy", href: "#privacy" },
  ],
  Platform: [
    { label: "Architecture", href: "#architecture" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Arabic Support", href: "#arabic" },
    { label: "Mobile Companion", href: "#mobile" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,200,255,0.08)] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Noor OS"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold tracking-widest text-sm">NOOR OS</span>
            </div>
            <p className="text-[#6b8fb5] text-sm leading-relaxed mb-4 max-w-[220px]">
              The first AI-native operating system. Built for intent-driven computing.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Local AI", "Linux", "Arabic"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border border-[rgba(0,200,255,0.15)] text-[#6b8fb5]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[#6b8fb5] text-sm hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgba(0,200,255,0.06)]">
          <p className="text-[#6b8fb5] text-xs">
            © 2026 Noor OS. The First AI-Native Operating System.
          </p>
          <p className="text-[#6b8fb5] text-xs opacity-60">
            Local AI · Privacy First · Arabic Native · Linux Powered
          </p>
        </div>
      </div>
    </footer>
  );
}
