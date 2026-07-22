import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

const SEND_DOMAIN = process.env.SEND_DOMAIN || 'send.shurimanagement.com';

export const FROM_ENQUIRY = `SMG Website Enquiry <enquiry@${SEND_DOMAIN}>`;
export const FROM_LEAD = `SMG Website Lead <leads@${SEND_DOMAIN}>`;
export const FROM_NEWSLETTER = `SMG Newsletter <newsletter@${SEND_DOMAIN}>`;
export const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'shurimanagementgroup@gmail.com';
