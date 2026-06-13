export type SupportCategory =
  | "General Inquiry"
  | "Technical Support"
  | "Bug Report"
  | "Feature Request"
  | "Partnership"
  | "Business Inquiry";

export type SupportPriority = "Low" | "Medium" | "High";

export interface SupportTicket {
  name: string;
  email: string;
  subject: string;
  category: SupportCategory;
  priority: SupportPriority;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}
