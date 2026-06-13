import { getTransporter } from "@/lib/mailer";
import type { SupportTicket } from "@/types/support";

export interface SendSupportTicketRequest extends SupportTicket {
  userAgent?: string;
  ipAddress?: string;
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const priorityColor: Record<string, string> = {
  Low: "#22c55e",
  Medium: "#f59e0b",
  High: "#ef4444",
};

// ---------------------------------------------------------------------------
// Admin notification email
// ---------------------------------------------------------------------------

function buildAdminEmailHtml(data: SendSupportTicketRequest): string {
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "UTC",
  });
  const color = priorityColor[data.priority] ?? "#6b8fb5";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Noor OS Support Ticket</title>
</head>
<body style="margin:0;padding:0;background:#050d1a;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050d1a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <tr>
          <td style="background:linear-gradient(135deg,#0a1628 0%,#0d1f38 100%);border:1px solid rgba(0,200,255,0.2);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
            <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#00c8ff;">NOOR OS</p>
            <h1 style="margin:0;font-size:24px;font-weight:700;color:#e8f4ff;">New Support Ticket</h1>
            <p style="margin:8px 0 0;font-size:13px;color:#6b8fb5;">A new support request has been submitted</p>
          </td>
        </tr>

        <tr>
          <td style="background:#0a1628;border-left:1px solid rgba(0,200,255,0.12);border-right:1px solid rgba(0,200,255,0.12);padding:32px 40px;">

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="width:50%;padding-right:8px;">
                  <div style="background:#0d1f38;border:1px solid rgba(0,200,255,0.1);border-radius:10px;padding:16px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Category</p>
                    <p style="margin:0;font-size:14px;font-weight:600;color:#00c8ff;">${escapeHtml(data.category)}</p>
                  </div>
                </td>
                <td style="width:50%;padding-left:8px;">
                  <div style="background:#0d1f38;border:1px solid rgba(0,200,255,0.1);border-radius:10px;padding:16px;">
                    <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Priority</p>
                    <p style="margin:0;font-size:14px;font-weight:600;color:${color};">${escapeHtml(data.priority)}</p>
                  </div>
                </td>
              </tr>
            </table>

            <div style="margin-bottom:20px;">
              <p style="margin:0 0 6px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Subject</p>
              <p style="margin:0;font-size:17px;font-weight:700;color:#e8f4ff;">${escapeHtml(data.subject)}</p>
            </div>

            <div style="height:1px;background:rgba(0,200,255,0.08);margin-bottom:20px;"></div>

            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
              <tr>
                <td style="width:50%;padding-right:8px;">
                  <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Name</p>
                  <p style="margin:0;font-size:14px;color:#e8f4ff;">${escapeHtml(data.name)}</p>
                </td>
                <td style="width:50%;padding-left:8px;">
                  <p style="margin:0 0 4px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Email</p>
                  <a href="mailto:${escapeHtml(data.email)}" style="margin:0;font-size:14px;color:#00c8ff;text-decoration:none;">${escapeHtml(data.email)}</a>
                </td>
              </tr>
            </table>

            <div style="height:1px;background:rgba(0,200,255,0.08);margin-bottom:20px;"></div>

            <div style="margin-bottom:24px;">
              <p style="margin:0 0 10px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Message</p>
              <div style="background:#0d1f38;border:1px solid rgba(0,200,255,0.08);border-radius:10px;padding:18px;">
                <p style="margin:0;font-size:14px;line-height:1.7;color:#b8d4ef;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
              </div>
            </div>

            <div style="background:#050d1a;border:1px solid rgba(0,200,255,0.06);border-radius:10px;padding:16px;">
              <p style="margin:0 0 8px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Submission Details</p>
              <p style="margin:0 0 4px;font-size:12px;color:#6b8fb5;"><span style="color:#e8f4ff;font-weight:500;">Time:</span> ${submittedAt}</p>
              ${data.ipAddress ? `<p style="margin:0 0 4px;font-size:12px;color:#6b8fb5;"><span style="color:#e8f4ff;font-weight:500;">IP:</span> ${escapeHtml(data.ipAddress)}</p>` : ""}
              ${data.userAgent ? `<p style="margin:0;font-size:12px;color:#6b8fb5;word-break:break-all;"><span style="color:#e8f4ff;font-weight:500;">User Agent:</span> ${escapeHtml(data.userAgent)}</p>` : ""}
            </div>

          </td>
        </tr>

        <tr>
          <td style="background:#0d1f38;border:1px solid rgba(0,200,255,0.12);border-top:none;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:11px;color:#6b8fb5;">Reply to this email to respond directly to <strong style="color:#e8f4ff;">${escapeHtml(data.name)}</strong></p>
            <p style="margin:4px 0 0;font-size:11px;color:#4a6b8a;">Noor OS &mdash; The First AI-Native Operating System</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// User confirmation email
// ---------------------------------------------------------------------------

function buildUserConfirmationEmailHtml(data: SendSupportTicketRequest): string {
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "UTC",
  });
  const color = priorityColor[data.priority] ?? "#6b8fb5";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>We Received Your Noor OS Support Request</title>
</head>
<body style="margin:0;padding:0;background:#050d1a;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050d1a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0a1628 0%,#0d1f38 100%);border:1px solid rgba(0,200,255,0.2);border-radius:16px 16px 0 0;padding:36px 40px;text-align:center;">
            <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#00c8ff;">NOOR OS</p>
            <p style="margin:0 0 20px;font-size:11px;color:#4a6b8a;letter-spacing:0.06em;text-transform:uppercase;">The First AI-Native Operating System</p>
            <div style="display:inline-block;width:48px;height:48px;border-radius:50%;background:rgba(0,200,255,0.12);border:1px solid rgba(0,200,255,0.3);line-height:48px;text-align:center;margin-bottom:16px;font-size:22px;">✓</div>
            <h1 style="margin:0;font-size:26px;font-weight:700;color:#e8f4ff;">Request Received</h1>
            <p style="margin:10px 0 0;font-size:14px;color:#6b8fb5;">We&apos;ve got your message and will be in touch soon.</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#0a1628;border-left:1px solid rgba(0,200,255,0.12);border-right:1px solid rgba(0,200,255,0.12);padding:36px 40px;">

            <!-- Greeting -->
            <p style="margin:0 0 8px;font-size:16px;font-weight:600;color:#e8f4ff;">Hello ${escapeHtml(data.name)},</p>
            <p style="margin:0 0 24px;font-size:14px;line-height:1.7;color:#6b8fb5;">
              Thank you for contacting Noor OS Support. We have successfully received your request and our team will review it as soon as possible.
              A copy of your submitted ticket is included below for your records.
            </p>

            <div style="height:1px;background:rgba(0,200,255,0.08);margin-bottom:24px;"></div>

            <!-- Ticket summary header -->
            <p style="margin:0 0 16px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#00c8ff;">Your Support Request</p>

            <!-- Category + Priority -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
              <tr>
                <td style="width:50%;padding-right:6px;">
                  <div style="background:#0d1f38;border:1px solid rgba(0,200,255,0.08);border-radius:8px;padding:12px 14px;">
                    <p style="margin:0 0 3px;font-size:9px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Category</p>
                    <p style="margin:0;font-size:13px;font-weight:600;color:#00c8ff;">${escapeHtml(data.category)}</p>
                  </div>
                </td>
                <td style="width:50%;padding-left:6px;">
                  <div style="background:#0d1f38;border:1px solid rgba(0,200,255,0.08);border-radius:8px;padding:12px 14px;">
                    <p style="margin:0 0 3px;font-size:9px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Priority</p>
                    <p style="margin:0;font-size:13px;font-weight:600;color:${color};">${escapeHtml(data.priority)}</p>
                  </div>
                </td>
              </tr>
            </table>

            <!-- Subject -->
            <div style="margin-bottom:16px;">
              <p style="margin:0 0 4px;font-size:9px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Subject</p>
              <p style="margin:0;font-size:15px;font-weight:700;color:#e8f4ff;">${escapeHtml(data.subject)}</p>
            </div>

            <!-- Message -->
            <div style="margin-bottom:16px;">
              <p style="margin:0 0 8px;font-size:9px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Message</p>
              <div style="background:#0d1f38;border:1px solid rgba(0,200,255,0.06);border-radius:8px;padding:16px;">
                <p style="margin:0;font-size:13px;line-height:1.7;color:#b8d4ef;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
              </div>
            </div>

            <!-- Submitted -->
            <div style="margin-bottom:28px;">
              <p style="margin:0 0 4px;font-size:9px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Submitted</p>
              <p style="margin:0;font-size:12px;color:#6b8fb5;">${submittedAt}</p>
            </div>

            <div style="height:1px;background:rgba(0,200,255,0.08);margin-bottom:24px;"></div>

            <!-- What happens next -->
            <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#00c8ff;">What Happens Next</p>
            ${[
              "Our team will review your request.",
              "We may contact you for additional information.",
              "You will receive updates through email if necessary.",
            ].map((step) => `
            <div style="display:flex;align-items:flex-start;margin-bottom:10px;">
              <div style="width:6px;height:6px;border-radius:50%;background:#00c8ff;margin-top:5px;flex-shrink:0;"></div>
              <p style="margin:0 0 0 10px;font-size:13px;color:#6b8fb5;line-height:1.6;">${step}</p>
            </div>`).join("")}

            <div style="height:1px;background:rgba(0,200,255,0.08);margin-top:24px;margin-bottom:24px;"></div>

            <!-- Closing -->
            <p style="margin:0 0 6px;font-size:14px;line-height:1.7;color:#6b8fb5;">
              Thank you for helping us improve Noor OS.
            </p>
            <p style="margin:0 0 4px;font-size:14px;font-weight:600;color:#e8f4ff;">Best Regards,</p>
            <p style="margin:0 0 2px;font-size:14px;font-weight:700;color:#00c8ff;">Noor OS Team</p>
            <p style="margin:0;font-size:12px;color:#4a6b8a;">The First AI-Native Operating System</p>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#0d1f38;border:1px solid rgba(0,200,255,0.12);border-top:none;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:11px;color:#6b8fb5;">This is an automated confirmation. Please do not reply to this email.</p>
            <p style="margin:4px 0 0;font-size:11px;color:#4a6b8a;">Noor OS &mdash; noor-os.com</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function sendSupportNotificationToAdmin(data: SendSupportTicketRequest): Promise<void> {
  const supportEmail = process.env.SUPPORT_EMAIL;
  const senderUser = process.env.SMTP_USER;

  if (!supportEmail) throw new Error("SUPPORT_EMAIL env variable is not set.");
  if (!senderUser) throw new Error("SMTP_USER env variable is not set.");

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"Noor OS Support" <${senderUser}>`,
    to: supportEmail,
    replyTo: `"${data.name}" <${data.email}>`,
    subject: `[NOOR OS SUPPORT] [${data.category}] ${data.subject}`,
    html: buildAdminEmailHtml(data),
  });
}

export async function sendTicketConfirmationToUser(data: SendSupportTicketRequest): Promise<void> {
  const senderUser = process.env.SMTP_USER;

  if (!senderUser) throw new Error("SMTP_USER env variable is not set.");

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"Noor OS Support" <${senderUser}>`,
    to: `"${data.name}" <${data.email}>`,
    subject: "We Received Your Noor OS Support Request",
    html: buildUserConfirmationEmailHtml(data),
  });
}

export async function sendSupportTicket(data: SendSupportTicketRequest): Promise<void> {
  // Admin email must succeed  if it fails the ticket is not complete.
  await sendSupportNotificationToAdmin(data);

  // User confirmation is best-effort  log failures but do not surface them.
  try {
    await sendTicketConfirmationToUser(data);
  } catch (err) {
    console.error("[Support] Failed to send user confirmation email:", err);
  }
}
