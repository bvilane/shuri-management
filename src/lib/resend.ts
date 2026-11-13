import { Resend } from 'resend';

// Created on first use, not at import: the Resend constructor throws without a
// key, which broke builds in environments that have none (Vercel previews).
let _resend: Resend | null = null;
export const resend = {
  get emails() {
    _resend ??= new Resend(process.env.RESEND_API_KEY);
    return _resend.emails;
  },
};

const SEND_DOMAIN = process.env.SEND_DOMAIN || 'send.shurimanagement.com';

export const FROM_ENQUIRY = `SMG Website Enquiry <enquiry@${SEND_DOMAIN}>`;
export const FROM_LEAD = `SMG Website Lead <leads@${SEND_DOMAIN}>`;
export const FROM_NEWSLETTER = `SMG Newsletter <newsletter@${SEND_DOMAIN}>`;
export const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'shurimanagementgroup@gmail.com';
