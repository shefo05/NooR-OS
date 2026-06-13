import { getTransporter } from "@/lib/mailer";
import type { SupportTicket } from "@/types/support";

export interface SendSupportTicketRequest extends SupportTicket {
  userAgent?: string;
  ipAddress?: string;
}

function buildEmailHtml(data: SendSupportTicketRequest): string {
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "UTC",
  });

  const priorityColor: Record<string, string> = {
    Low: "#22c55e",
    Medium: "#f59e0b",
    High: "#ef4444",
  };

  const color = priorityColor[data.priority] ?? "#6b8fb5";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Noor OS Support Ticket</title>
</head>
<body style="margin:0;padding:0;background:#050d1a;font-family:'Segoe UI',Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050d1a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0a1628 0%,#0d1f38 100%);border:1px solid rgba(0,200,255,0.2);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#00c8ff;">NOOR OS</p>
              <h1 style="margin:0;font-size:24px;font-weight:700;color:#e8f4ff;">Support Ticket Received</h1>
              <p style="margin:8px 0 0;font-size:13px;color:#6b8fb5;">A new support request has been submitted</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#0a1628;border-left:1px solid rgba(0,200,255,0.12);border-right:1px solid rgba(0,200,255,0.12);padding:32px 40px;">

              <!-- Meta row -->
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

              <!-- Subject -->
              <div style="margin-bottom:20px;">
                <p style="margin:0 0 6px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Subject</p>
                <p style="margin:0;font-size:17px;font-weight:700;color:#e8f4ff;">${escapeHtml(data.subject)}</p>
              </div>

              <!-- Divider -->
              <div style="height:1px;background:rgba(0,200,255,0.08);margin-bottom:20px;"></div>

              <!-- Contact -->
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

              <!-- Divider -->
              <div style="height:1px;background:rgba(0,200,255,0.08);margin-bottom:20px;"></div>

              <!-- Message -->
              <div style="margin-bottom:24px;">
                <p style="margin:0 0 10px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Message</p>
                <div style="background:#0d1f38;border:1px solid rgba(0,200,255,0.08);border-radius:10px;padding:18px;">
                  <p style="margin:0;font-size:14px;line-height:1.7;color:#b8d4ef;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
                </div>
              </div>

              <!-- Meta info -->
              <div style="background:#050d1a;border:1px solid rgba(0,200,255,0.06);border-radius:10px;padding:16px;">
                <p style="margin:0 0 8px;font-size:10px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#6b8fb5;">Submission Details</p>
                <p style="margin:0 0 4px;font-size:12px;color:#6b8fb5;"><span style="color:#e8f4ff;font-weight:500;">Time:</span> ${submittedAt}</p>
                ${data.ipAddress ? `<p style="margin:0 0 4px;font-size:12px;color:#6b8fb5;"><span style="color:#e8f4ff;font-weight:500;">IP:</span> ${escapeHtml(data.ipAddress)}</p>` : ""}
                ${data.userAgent ? `<p style="margin:0;font-size:12px;color:#6b8fb5;word-break:break-all;"><span style="color:#e8f4ff;font-weight:500;">User Agent:</span> ${escapeHtml(data.userAgent)}</p>` : ""}
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0d1f38;border:1px solid rgba(0,200,255,0.12);border-top:none;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#6b8fb5;">Reply to this email to respond directly to <strong style="color:#e8f4ff;">${escapeHtml(data.name)}</strong></p>
              <p style="margin:4px 0 0;font-size:11px;color:#4a6b8a;">Noor OS &mdash; The First AI-Native Operating System</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendSupportTicket(data: SendSupportTicketRequest): Promise<void> {
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
    html: buildEmailHtml(data),
  });
}
