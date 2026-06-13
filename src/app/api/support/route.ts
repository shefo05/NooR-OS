import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendSupportTicket } from "@/services/email.service";

const schema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.email("Valid email is required"),
  subject: z.string().min(1, "Subject is required").max(200),
  category: z.enum([
    "General Inquiry",
    "Technical Support",
    "Bug Report",
    "Feature Request",
    "Partnership",
    "Business Inquiry",
  ]),
  priority: z.enum(["Low", "Medium", "High"]),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

type FieldErrors = Partial<Record<string, string[]>>;

function toFieldErrors(issues: z.core.$ZodIssue[]): FieldErrors {
  const errors: FieldErrors = {};
  for (const issue of issues) {
    const key = String(issue.path[0] ?? "_");
    (errors[key] ??= []).push(issue.message);
  }
  return errors;
}

// In-memory rate limiting: IP → { count, resetAt }
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please wait before submitting again." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Validation failed.", errors: toFieldErrors(parsed.error.issues) },
      { status: 422 }
    );
  }

  try {
    await sendSupportTicket({
      ...parsed.data,
      userAgent: req.headers.get("user-agent") ?? undefined,
      ipAddress: ip !== "unknown" ? ip : undefined,
    });

    return NextResponse.json(
      { success: true, message: "Support request sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Support API] Failed to send ticket:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send your request. Please try again later." },
      { status: 500 }
    );
  }
}
