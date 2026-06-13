import type { ReactNode } from "react";

interface SupportCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function SupportCard({ icon, title, description }: SupportCardProps) {
  return (
    <div
      className="p-5 rounded-xl flex items-start gap-4"
      style={{ background: "#0a1628", border: "1px solid rgba(0,200,255,0.1)" }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-[#00c8ff]"
        style={{ background: "rgba(0,200,255,0.08)" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-white text-sm font-semibold mb-1">{title}</p>
        <p className="text-[#6b8fb5] text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
