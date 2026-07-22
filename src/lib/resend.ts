import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const FROM_EMAIL = process.env.FROM_EMAIL || 'Shuri Management <noreply@shurimanagement.com>';
export const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'theshuricollection@gmail.com';
