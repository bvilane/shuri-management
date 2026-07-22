import { NextRequest } from 'next/server';
import { resend, FROM_EMAIL, RECIPIENT_EMAIL } from '@/lib/resend';
import { getSupabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface LeadFormData {
  fullName: string;
  email: string;
  whatsapp?: string;
  preferredContact?: string;
  lodgeName?: string;
  location?: string;
  biggestChallenge?: string;
  existingServices?: string;
  timeline?: string;
  areas?: { [key: string]: boolean };
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as LeadFormData;

    const requiredFields = ['fullName', 'email'] as const;
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return Response.json(
        { success: false, error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const areas = data.areas || {};
    const selectedAreas = Object.keys(areas).filter((key) => areas[key]).join(', ');

    const supabase = getSupabase();
    if (supabase) {
      const { error: dbError } = await supabase.from('lead_submissions').insert({
        full_name: data.fullName,
        email: data.email,
        whatsapp: data.whatsapp || null,
        preferred_contact: data.preferredContact || 'email',
        lodge_name: data.lodgeName || null,
        location: data.location || null,
        biggest_challenge: data.biggestChallenge || null,
        existing_services: data.existingServices || null,
        timeline: data.timeline || null,
        areas_of_interest: selectedAreas || null,
      });
      if (dbError) console.error('Supabase insert error:', dbError);
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: data.email,
      subject: 'New Shuri Management Lead Form Submission',
      html: `
        <h2>New Lead Form Submission</h2>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>WhatsApp:</strong> ${data.whatsapp || 'Not provided'}</p>
        <p><strong>Preferred Contact:</strong> ${data.preferredContact || 'email'}</p>
        <p><strong>Lodge Name:</strong> ${data.lodgeName || 'Not provided'}</p>
        <p><strong>Location:</strong> ${data.location || 'Not provided'}</p>
        <p><strong>Areas of Interest:</strong> ${selectedAreas || 'None selected'}</p>
        <p><strong>Biggest Challenge:</strong><br>${(data.biggestChallenge || 'Not provided').replace(/\n/g, '<br>')}</p>
        <p><strong>Existing Services:</strong><br>${(data.existingServices || 'Not provided').replace(/\n/g, '<br>')}</p>
        <p><strong>Timeline:</strong> ${data.timeline || 'Not provided'}</p>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
    });

    return Response.json({ success: true, message: 'Lead submission received successfully' });
  } catch (error) {
    console.error('Error processing lead form:', error);
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
