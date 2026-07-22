import { NextRequest } from 'next/server';
import { resend, FROM_ENQUIRY, RECIPIENT_EMAIL } from '@/lib/resend';
import { getSupabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  country: string;
  message: string;
  lodgeType?: string;
  serviceNeeded?: string;
  lodgeSize?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as ContactFormData;

    const requiredFields = ['fullName', 'email', 'country', 'message'] as const;
    const missingFields = requiredFields.filter(
      (field) => !data[field] || String(data[field]).trim() === ''
    );

    if (missingFields.length > 0) {
      return Response.json(
        { success: false, error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    if (supabase) {
      const { error: dbError } = await supabase.from('contact_submissions').insert({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone || null,
        country: data.country,
        message: data.message,
        lodge_type: data.lodgeType || null,
        service_needed: data.serviceNeeded || null,
        lodge_size: data.lodgeSize || null,
      });
      if (dbError) console.error('Supabase insert error:', dbError);
    }

    await resend.emails.send({
      from: FROM_ENQUIRY,
      to: RECIPIENT_EMAIL,
      replyTo: data.email,
      subject: 'New Shuri Management Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Country/Region:</strong> ${data.country}</p>
        <p><strong>Lodge Type:</strong> ${data.lodgeType || 'Not specified'}</p>
        <p><strong>Lodge Size:</strong> ${data.lodgeSize || 'Not specified'}</p>
        <p><strong>Service Needed:</strong> ${data.serviceNeeded || 'Not specified'}</p>
        <p><strong>Message:</strong><br>${(data.message).replace(/\n/g, '<br>')}</p>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
    });

    return Response.json({ success: true, message: 'Form submission received successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
