"use client";

import { CheckCircle, Mail } from "lucide-react";

interface SupportSuccessProps {
  userEmail?: string;
  onReset: () => void;
}

export default function SupportSuccess({ userEmail, onReset }: SupportSuccessProps) {
  return (
    <div className="flex flex-col items-center text-center py-16 px-8">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        style={{ background: "rgba(0,200,255,0.1)", border: "1px solid rgba(0,200,255,0.25)" }}
      >
        <CheckCircle className="w-10 h-10 text-[#00c8ff]" strokeWidth={1.5} />
      </div>

      <span className="tag mb-4">Ticket Submitted</span>

      <h2 className="text-3xl font-bold text-white mb-4">
        Support Request Sent Successfully
      </h2>

      <p className="text-[#6b8fb5] text-lg leading-relaxed max-w-lg mb-4">
        Thank you for contacting Noor OS.
      </p>

      {userEmail && (
        <div
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl mb-6"
          style={{ background: "rgba(0,200,255,0.06)", border: "1px solid rgba(0,200,255,0.15)" }}
        >
          <Mail className="w-4 h-4 text-[#00c8ff] shrink-0" />
          <p className="text-sm text-[#6b8fb5]">
            A confirmation email has been sent to{" "}
            <span className="text-white font-medium">{userEmail}</span>
          </p>
        </div>
      )}

      <p className="text-[#6b8fb5] text-base leading-relaxed max-w-md mb-8">
        A confirmation email containing a copy of your support request has been
        sent to your inbox. Our team will review your request and get back to
        you as soon as possible.
      </p>

      <div
        className="w-full max-w-sm p-5 rounded-xl mb-8"
        style={{ background: "#0d1f38", border: "1px solid rgba(0,200,255,0.1)" }}
      >
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-[#00c8ff] mt-2 shrink-0" />
          <div className="text-left">
            <p className="text-sm font-semibold text-white mb-1">What happens next?</p>
            <p className="text-xs text-[#6b8fb5] leading-relaxed">
              Our team will review your ticket and reply directly to your email address.
              Typical response time is within 24–48 hours.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="px-6 py-2.5 rounded-full text-sm font-medium text-[#050d1a] bg-[#00c8ff] hover:bg-white transition-colors duration-200"
      >
        Submit Another Request
      </button>
    </div>
  );
}
