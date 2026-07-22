import { NextRequest } from 'next/server';
import { resend, FROM_EMAIL, RECIPIENT_EMAIL } from '@/lib/resend';
import { getSupabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface NewsletterData {
  firstName: string;
  email: string;
}

export async function POST(request: NextRequest) {
  try {
    const data = (await request.json()) as NewsletterData;

    const requiredFields = ['firstName', 'email'] as const;
    const missingFields = requiredFields.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      return Response.json(
        { success: false, error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    if (supabase) {
      const { error: dbError } = await supabase.from('newsletter_subscribers').insert({
        first_name: data.firstName,
        email: data.email,
      });
      if (dbError) console.error('Supabase insert error:', dbError);
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: 'New Shuri Management Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>First Name:</strong> ${data.firstName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
      `,
    });

    return Response.json({ success: true, message: 'Newsletter subscription received successfully' });
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    return Response.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
