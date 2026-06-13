"use client";

import { useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import SupportSuccess from "./support-success";
import type { SupportCategory, SupportPriority } from "@/types/support";

const CATEGORIES: SupportCategory[] = [
  "General Inquiry",
  "Technical Support",
  "Bug Report",
  "Feature Request",
  "Partnership",
  "Business Inquiry",
];

const PRIORITIES: SupportPriority[] = ["Low", "Medium", "High"];

interface FieldErrors {
  name?: string[];
  email?: string[];
  subject?: string[];
  category?: string[];
  priority?: string[];
  message?: string[];
}

const inputBase =
  "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-[#4a6b8a] outline-none transition-colors duration-200 focus:border-[#00c8ff]";
const inputStyle = `${inputBase}`;

export default function SupportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState<SupportCategory | "">("");
  const [priority, setPriority] = useState<SupportPriority | "">("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setGlobalError(null);
    setFieldErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, category, priority, message }),
      });

      const data = await res.json();

      if (res.status === 422 && data.errors) {
        setFieldErrors(data.errors as FieldErrors);
        return;
      }

      if (!data.success) {
        setGlobalError(data.message ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setGlobalError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setSubmitted(false);
    setName("");
    setEmail("");
    setSubject("");
    setCategory("");
    setPriority("");
    setMessage("");
    setGlobalError(null);
    setFieldErrors({});
  }

  if (submitted) return <SupportSuccess onReset={handleReset} />;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-[#6b8fb5] mb-2">
            Name <span className="text-[#00c8ff]">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className={inputStyle}
            style={{
              background: "#0d1f38",
              border: `1px solid ${fieldErrors.name ? "#ef4444" : "rgba(0,200,255,0.12)"}`,
            }}
            autoComplete="name"
          />
          {fieldErrors.name && (
            <FieldError msg={fieldErrors.name[0]} />
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-[#6b8fb5] mb-2">
            Email <span className="text-[#00c8ff]">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputStyle}
            style={{
              background: "#0d1f38",
              border: `1px solid ${fieldErrors.email ? "#ef4444" : "rgba(0,200,255,0.12)"}`,
            }}
            autoComplete="email"
          />
          {fieldErrors.email && (
            <FieldError msg={fieldErrors.email[0]} />
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-[#6b8fb5] mb-2">
          Subject <span className="text-[#00c8ff]">*</span>
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Brief description of your request"
          className={inputStyle}
          style={{
            background: "#0d1f38",
            border: `1px solid ${fieldErrors.subject ? "#ef4444" : "rgba(0,200,255,0.12)"}`,
          }}
        />
        {fieldErrors.subject && (
          <FieldError msg={fieldErrors.subject[0]} />
        )}
      </div>

      {/* Category + Priority */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-[#6b8fb5] mb-2">
            Category
          </label>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as SupportCategory)}
              className={`${inputStyle} appearance-none cursor-pointer pr-10`}
              style={{
                background: "#0d1f38",
                border: `1px solid ${fieldErrors.category ? "#ef4444" : "rgba(0,200,255,0.12)"}`,
              }}
            >
              <option value="" disabled>Select category</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown />
          </div>
          {fieldErrors.category && (
            <FieldError msg={fieldErrors.category[0]} />
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest text-[#6b8fb5] mb-2">
            Priority
          </label>
          <div className="relative">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as SupportPriority)}
              className={`${inputStyle} appearance-none cursor-pointer pr-10`}
              style={{
                background: "#0d1f38",
                border: `1px solid ${fieldErrors.priority ? "#ef4444" : "rgba(0,200,255,0.12)"}`,
              }}
            >
              <option value="" disabled>Select priority</option>
              {PRIORITIES.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <ChevronDown />
          </div>
          {fieldErrors.priority && (
            <FieldError msg={fieldErrors.priority[0]} />
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-widest text-[#6b8fb5] mb-2">
          Message <span className="text-[#00c8ff]">*</span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          placeholder="Describe your issue or request in detail..."
          className={`${inputStyle} resize-none`}
          style={{
            background: "#0d1f38",
            border: `1px solid ${fieldErrors.message ? "#ef4444" : "rgba(0,200,255,0.12)"}`,
          }}
        />
        <div className="flex justify-between items-center mt-1">
          {fieldErrors.message
            ? <FieldError msg={fieldErrors.message[0]} />
            : <span />}
          <span className={`text-xs ${message.length > 4500 ? "text-amber-400" : "text-[#4a6b8a]"}`}>
            {message.length}/5000
          </span>
        </div>
      </div>

      {/* Global error */}
      {globalError && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl"
          style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}>
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <p className="text-sm text-red-400">{globalError}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-[#050d1a] bg-[#00c8ff] hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending Request…
          </>
        ) : (
          "Submit Support Request"
        )}
      </button>

      <p className="text-center text-xs text-[#4a6b8a]">
        Your request will be delivered directly to the Noor OS team.
      </p>
    </form>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
      <AlertCircle className="w-3 h-3 shrink-0" />
      {msg}
    </p>
  );
}

function ChevronDown() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4L6 8L10 4" stroke="#6b8fb5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
